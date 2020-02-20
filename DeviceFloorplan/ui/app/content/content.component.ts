import { Component, OnInit } from "@angular/core";
import { CommonSerivce } from "../../service/common.service";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.css"]
})
export class ContentComponent implements OnInit {
  constructor(private commonSerivce: CommonSerivce) {}

  deviceList: any = [];
  ngOnInit() {
    this.commonSerivce.getDeviceList().subscribe(res => {
      this.deviceList = res;
    });
  }
}
