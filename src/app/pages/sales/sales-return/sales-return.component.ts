import { Component, OnInit } from '@angular/core';
import { CommonFuntion } from 'src/app/common/CommonFuntion';

@Component({
  selector: 'app-sales-return',
  templateUrl: './sales-return.component.html',
  styleUrls: ['./sales-return.component.scss']
})
export class SalesReturnComponent implements OnInit{

  ngOnInit(): void {
    CommonFuntion.isDashboardVisible = true;
  }
}
