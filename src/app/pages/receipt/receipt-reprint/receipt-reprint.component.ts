import { Component, OnInit } from '@angular/core';
import { CommonFuntion } from 'src/app/common/CommonFuntion';

@Component({
  selector: 'app-receipt-reprint',
  templateUrl: './receipt-reprint.component.html',
  styleUrls: ['./receipt-reprint.component.scss']
})
export class ReceiptReprintComponent implements OnInit{

  ngOnInit(): void {
    CommonFuntion.isDashboardVisible = true;
  }
}
