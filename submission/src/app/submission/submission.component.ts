import { Component ,ElementRef,ViewChild} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

interface tableDataType {
  "s_no": string,
  "name": string,
  "rate": string,
  "vendor": string,
  "implementation": string,
  "vendor_email": string,
  "status": string
}

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.css']
})
export class SubmissionComponent {



  editData = {
    "s_no": '',
    "name": '',
    "rate": '',
    "vendor": '',
    "implementation": '',
    "vendor_email": '',
    "status": ''
  }

  @ViewChild('closeEditModel') closeEditModel: any;

  editForm = this.formBuilder.group(this.editData);

  tech = "Technology";
  teamLead = "Team Lead";
  teamLeadList: string[] = [];
  teachList: string[] = [];
  columnList: string[] = [];
  tableData: tableDataType[] = [];

  showModalBox: boolean = false;

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.teamLeadList = this.teamLeadList.concat(["sagar", "Akshay", "Arjun", "Sai Naith", "SriHari", "Divya", "Niharka", "Tejaswi"])
    this.teachList = this.teachList.concat(["Java", "Python", "Data Science", "Php", "GoLand", "C/C++", "Angular", "ReactJS"])
    this.columnList = this.columnList.concat(["S.NO", "Name", "Rate", "Vendor", "Implementation", "Vendor Email", "Status", "Action"]);
    this.tableData = [{
      "s_no": "1",
      "name": "Divya",
      "rate": "96",
      "vendor": "Divya Tech",
      "implementation": "TCS",
      "vendor_email": "divya@gmail.com",
      "status": "CONFIRMED"
    },
    {
      "s_no": "2",
      "name": "Niharika",
      "rate": "86",
      "vendor": "Niharika Tech",
      "implementation": "Wipro",
      "vendor_email": "niharika@gmail.com",
      "status": "REJECTED"
    },
    {
      "s_no": "3",
      "name": "Tejaswi",
      "rate": "90",
      "vendor": "Tejaswi Tech",
      "implementation": "Infosys",
      "vendor_email": "Tejaswi@gmail.com",
      "status": "PENDING"
    }
    ]
    this.closeEditModel=ElementRef;
  }

  selectTech(tech: string) {
    this.tech = tech;
  }

  selectTeamLead(teamLead: string) {
    this.teamLead = teamLead;
  }

  deleteTableData(sNo: string) {
    if (confirm("You are going to delete S.NO=" + sNo)) {
      this.tableData = this.tableData.filter(item => item.s_no != sNo);
    }
  }

  public openEditModel(s_no: string, name: string, rate: string, vendor: string, implementation: string, vendor_email: string, status: string) {
    // Open the modal
    this.editForm.setValue({
      s_no: s_no,
      name: name,
      rate: rate,
      vendor: vendor,
      implementation: implementation,
      vendor_email: vendor_email,
      status: status

    })
    this.showModalBox = true;
  }

  saveChanges(): void {
    for (let item of this.tableData) {
      if (item.s_no == this.editForm.get('s_no')?.value) {
        item.name = (String)(this.editForm.get('name')?.value);
        item.rate = (String)(this.editForm.get('rate')?.value);
        item.vendor = (String)(this.editForm.get('vendor')?.value);
        item.implementation = (String)(this.editForm.get('implementation')?.value);
        item.vendor_email = (String)(this.editForm.get('vendor_email')?.value);
        item.status = (String)(this.editForm.get('status')?.value);
      }
    }

    this.closeEditModel.nativeElement.click();
  }

}
