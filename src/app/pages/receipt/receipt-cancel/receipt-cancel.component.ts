import { Component, OnInit } from '@angular/core';
import { CommonFuntion } from 'src/app/common/CommonFuntion';

@Component({
  selector: 'app-receipt-cancel',
  templateUrl: './receipt-cancel.component.html',
  styleUrls: ['./receipt-cancel.component.scss']
})
export class ReceiptCancelComponent implements OnInit{

  ngOnInit(): void {
    CommonFuntion.isDashboardVisible = true;
  }
}
