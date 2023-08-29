import { Component, OnInit } from '@angular/core';
import { CommonFuntion } from 'src/app/common/CommonFuntion';

@Component({
  selector: 'app-make-invoice',
  templateUrl: './make-invoice.component.html',
  styleUrls: ['./make-invoice.component.scss']
})
export class MakeInvoiceComponent implements OnInit{

  ngOnInit(): void {
    CommonFuntion.isDashboardVisible = true;
  }
}
