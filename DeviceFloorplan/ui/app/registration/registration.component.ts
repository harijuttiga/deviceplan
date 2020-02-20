import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CommonSerivce } from "../../service/common.service";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"]
})
export class RegistrationComponent implements OnInit {
  constructor(private router: Router, private commonSerivce: CommonSerivce) {}

  userInputDetails: any = {
    username: "",
    password: "",
    email: "",
    mobile: ""
  };

  ngOnInit() {}

  register() {
    this.commonSerivce.doRegister(this.userInputDetails).subscribe(res => {
      this.router.navigate(["/contentpage"]);
    });
  }
}
