import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CommonSerivce } from "../../service/common.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  userInputDetails: any = { email: "", password: "" };

  constructor(private router: Router, private commonSerivce: CommonSerivce) {}

  ngOnInit() {}

  doLogin() {
    // let udetails = JSON.stringify(this.userInputDetails);
    // localStorage.setItem("userDetails", udetails);
    console.log("udetails ==>", this.userInputDetails);
    //this.router.navigate(["../contentpage"]);
    console.log("dologin");
    this.commonSerivce.doLogin(this.userInputDetails).subscribe(res => {
      this.router.navigate(["../contentpage"]);
    });
  }
}
