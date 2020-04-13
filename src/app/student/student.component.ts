import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private http: HttpClient) { }
  id:number;
  private headers = new Headers({ 'Content-Type': 'application/json'});
  students = [];
  fetchData = function() {
    this.http.get("http://localhost:3000/students").subscribe(
      (res: Response) => {
        this.students = res.json();
      }
    )
  }



  ngOnInit() {
    this.fetchData();
  }
}

