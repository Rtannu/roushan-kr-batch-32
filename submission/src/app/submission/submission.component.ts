import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.css']
})
export class SubmissionComponent {

  

  teamLeadList:string[]=[];
  teachList:string[]=[];
  columnList:string[]=[];


  constructor(private router:Router){
    // this.router.navigateByUrl('');
    this.teamLeadList=this.teamLeadList.concat(["sagar","Akshay","Arjun","Sai Naith","SriHari","Divya","Niharka","Tejaswi"])
    this.teachList=this.teachList.concat(["Java","Python","Data Science","Php","GoLand","C/C++","Angular","ReactJS"])
    this.columnList=this.columnList.concat(["S.NO","Name","Rate","Vendor","Implementation","Vendor Email","Status","Action"]);
  }

}
