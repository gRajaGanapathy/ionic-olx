import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  techs = [
    {
      title: 'Help & Support',
      icon: 'file-tray-full-outline',
      discription: 'Help center and legal terms'
    },
    {
      title: 'Help & Support',
      icon: 'file-tray-full-outline',
      discription: 'Help center and legal terms'
    },
    {
      title: 'Help & Support',
      icon: 'file-tray-full-outline',
      discription: 'Help center and legal terms'
    },
    {
      title: 'Help & Support',
      icon: 'file-tray-full-outline',
      discription: 'Help center and legal terms'
    },
  ]

  constructor() { }

  ngOnInit() {}

}
