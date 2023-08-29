import { Component, OnInit } from '@angular/core';
import { CommonFuntion } from 'src/app/common/CommonFuntion';

@Component({
  selector: 'app-sales-return-reprint',
  templateUrl: './sales-return-reprint.component.html',
  styleUrls: ['./sales-return-reprint.component.scss']
})
export class SalesReturnReprintComponent implements OnInit{

  ngOnInit(): void {
    CommonFuntion.isDashboardVisible = true;
  }
}
