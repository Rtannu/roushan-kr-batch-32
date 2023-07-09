import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SubmissionRestApiService } from '../service/submission-rest-api.service';


interface tableDataType {
  "s_no": string,
  "name": string,
  "rate": string,
  "vendor": string,
  "implementation": string,
  "tech": string,
  "lead": string,
  "vendor_email": string,
  "status": string
}

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.css']
})
export class SubmissionComponent {

  allSubmission: any = [];
  submissionEditData: any = {};
  submissionCreateData: any = {};

  readonly ALL = "ALL";

  editData = {
    "count": 0,
    "s_no": '',
    "name": '',
    "rate": '',
    "vendor": '',
    "implementation": '',
    "tech": '',
    "lead": '',
    "vendor_email": '',
    "status": ''
  }

  createData = {
    "s_no": '',
    "name": '',
    "rate": '',
    "vendor": '',
    "implementation": '',
    "tech": '',
    "lead": '',
    "vendor_email": '',
    "status": ''
  }

  @ViewChild('closeEditModel') closeEditModel: any;
  @ViewChild('closeCreateModel') closeCreateModel: any;



  editForm = this.formBuilder.group(this.editData);
  createForm = this.formBuilder.group(this.createData);


  tech = "Technology";
  readonly TECH = this.tech;
  teamLead = "Team Lead";
  readonly TEAM_LEAD = this.teamLead;

  teamLeadList: string[] = [];
  teachList: string[] = [];
  columnList: string[] = [];
  tableData: any = [];
  originalTableData: any = [];

  showModalBox: boolean = false;

  constructor(private router: Router, private formBuilder: FormBuilder, private submissionApiService: SubmissionRestApiService) {
    this.teamLeadList = this.teamLeadList.concat(["sagar", "Akshay", "Arjun", "Sai Naith", "SriHari", "Divya", "Niharka", "Tejaswi", "vinay"])
    this.teachList = this.teachList.concat(["Java", "Python", "Data Science", "Php", "GoLand", "C/C++", "Angular", "ReactJS"])
    this.columnList = this.columnList.concat(["S.NO", "Name", "Rate", "Vendor", "Implementation", "Tech", "Lead", "Vendor Email", "Status", "Action"]);
    this.closeEditModel = ElementRef;
    this.closeCreateModel = ElementRef;

    this.loadAllSubmissionData();
  }

  selectTech(tech: string) {
    if (this.tech != this.TECH && this.tech != this.ALL)
      this.teachList.push(this.tech);
    this.teachList = this.teachList.filter(item => (item != tech));
    this.tech = tech;
    this.filterTech(tech);
  }

  selectTeamLead(teamLead: string) {
    if (this.teamLead != this.TEAM_LEAD && this.teamLead != this.ALL)
      this.teamLeadList.push(this.teamLead);
    this.teamLeadList = this.teamLeadList.filter(item => (item != teamLead));
    this.teamLead = teamLead;
    this.filterLead(teamLead);
  }

  deleteTableData(sNo: string, count: number) {
    if (confirm("You are going to delete S.NO=" + count)) {
      this.submissionApiService.deleteSubmissionBySerialNumber(sNo).subscribe(response => {
        alert("successfully deleted S.NO=" + count)
        this.loadAllSubmissionData();
      })
    }
  }

  public openEditModel(count: number, s_no: string, name: string, rate: string, vendor: string, implementation: string, tech: string, lead: string, vendor_email: string, status: string) {
    // Open the modal
    this.editForm.setValue({
      count: count,
      s_no: s_no,
      name: name,
      rate: rate,
      vendor: vendor,
      implementation: implementation,
      tech: tech,
      lead: lead,
      vendor_email: vendor_email,
      status: status

    })
    this.showModalBox = true;
  }

  createSubmission(): void {
    this.submissionCreateData.name = (String)(this.createForm.get('name')?.value);
    this.submissionCreateData.rate = (Number)(this.createForm.get('rate')?.value);
    this.submissionCreateData.vendor = (String)(this.createForm.get('vendor')?.value);
    this.submissionCreateData.implementation = (String)(this.createForm.get('implementation')?.value);
    this.submissionCreateData.tech = (String)(this.createForm.get('tech')?.value);
    this.submissionCreateData.lead = (String)(this.createForm.get('lead')?.value);
    this.submissionCreateData.vendorEmail = (String)(this.createForm.get('vendor_email')?.value);
    this.submissionCreateData.status = (String)(this.createForm.get('status')?.value);

    this.submissionApiService.createSubmission(this.submissionCreateData).subscribe(response => {
      alert("Created successfully!!!!!!!!!");
      this.loadAllSubmissionData();
      this.selectTech(this.ALL);
      this.selectTeamLead(this.ALL);
      this.closeCreateModel.nativeElement.click();
      this.createForm.reset();
    })
  }
  saveChanges(): void {

    this.submissionEditData.name = (String)(this.editForm.get('name')?.value);
    this.submissionEditData.rate = (Number)(this.editForm.get('rate')?.value);
    this.submissionEditData.vendor = (String)(this.editForm.get('vendor')?.value);
    this.submissionEditData.implementation = (String)(this.editForm.get('implementation')?.value);
    this.submissionEditData.tech = (String)(this.editForm.get('tech')?.value);
    this.submissionEditData.lead = (String)(this.editForm.get('lead')?.value);
    this.submissionEditData.vendorEmail = (String)(this.editForm.get('vendor_email')?.value);
    this.submissionEditData.status = (String)(this.editForm.get('status')?.value);
    let serialNumber: any = this.editForm.get('s_no')?.value;
    this.submissionApiService.updateSubmissionBySerialNumber(serialNumber, this.submissionEditData).subscribe(response => {
      alert("Updated successfully S.NO=" + this.editForm.get('count')?.value)
      this.loadAllSubmissionData();
      this.selectTech(this.ALL);
      this.selectTeamLead(this.ALL);
      this.closeEditModel.nativeElement.click();

    })
  }

  filterTech(filteredData: string): void {
    if (filteredData == this.ALL && this.teamLead == this.ALL) {
      this.tableData = this.originalTableData;
    } else if (filteredData == this.ALL) {
      this.tableData = this.originalTableData.filter((item: { lead: any; }) => (item.lead).toLocaleLowerCase() == this.teamLead.toLocaleLowerCase());

    } else if (this.teamLead == this.ALL) {
      this.tableData = this.originalTableData.filter((item: { tech: any; }) => (item.tech).toLocaleLowerCase() == this.tech.toLocaleLowerCase());
    } else {
      this.tableData = this.originalTableData.
        filter((item: { tech: any; lead: any; }) => (
          ((item.tech).toLocaleLowerCase() == this.tech.toLocaleLowerCase())
          && ((item.lead).toLocaleLowerCase() == this.teamLead.toLocaleLowerCase())
        ));
    }
  }

  filterLead(filteredData: string): void {
    if (filteredData == this.ALL && this.tech == this.ALL) {
      this.tableData = this.originalTableData;
    } else if (filteredData == this.ALL) {
      this.tableData = this.originalTableData.filter((item: { tech: any; }) => (item.tech).toLocaleLowerCase() == this.tech.toLocaleLowerCase());
    } else if (this.tech == this.ALL) {
      this.tableData = this.originalTableData.filter((item: { lead: any; }) => (item.lead).toLocaleLowerCase() == this.teamLead.toLocaleLowerCase());
    } else {
      this.tableData = this.originalTableData.
        filter((item: { tech: any; lead: any; }) => (
          ((item.tech).toLocaleLowerCase() == this.tech.toLocaleLowerCase())
          && ((item.lead).toLocaleLowerCase() == this.teamLead.toLocaleLowerCase())
        ));
    }
  }

  loadAllSubmissionData() {
    // loading submission data by calling API
    this.submissionApiService.getAllSubmission().subscribe((response: {}) => {
      this.tableData = response;
      this.originalTableData = response;
    })

  }

}