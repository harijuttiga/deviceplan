import { Observable, Subject, from } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class MessageSerivce {
  private subject = new Subject<any>();

  constructor(private http: HttpClient) {
    this.loadMessages();
  }

  loadMessages() {}
}
