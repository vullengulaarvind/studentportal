import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  constructor(private http: HttpClient) { }
  confirmationString:string = "New student has been added";
  isAdded: boolean = false;
  addstudentObj:object = {};

  addNewStudent = function(addstudent) {
    this.addstudentObj = {
      "firstname": addstudent.firstname,
      "lastname": addstudent.lastname,
      "class": addstudent.class,
      "code": addstudent.code,
      "address": addstudent.address,
    }
    this.http.post("http://localhost:3000/students/", this.addstudentObj).subscribe((res:Response) => {
      this.isAdded = true;
    })
  }

  ngOnInit() {
  }

}

