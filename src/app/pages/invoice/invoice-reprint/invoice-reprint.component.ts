import { Component, OnInit } from '@angular/core';
import { CommonFuntion } from 'src/app/common/CommonFuntion';

@Component({
  selector: 'app-invoice-reprint',
  templateUrl: './invoice-reprint.component.html',
  styleUrls: ['./invoice-reprint.component.scss']
})
export class InvoiceReprintComponent implements OnInit{

  ngOnInit(): void {
    CommonFuntion.isDashboardVisible = true;
  }
}
