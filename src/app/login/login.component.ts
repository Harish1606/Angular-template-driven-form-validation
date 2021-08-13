import { User } from './../model/register';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitted=false;
  user=new User();
  constructor() { }

  ngOnInit(): void {
  }

  onsubmit(){
    this.submitted=true;
  }

}
