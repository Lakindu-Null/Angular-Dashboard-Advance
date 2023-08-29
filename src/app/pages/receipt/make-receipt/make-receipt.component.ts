import { Component, OnInit } from '@angular/core';
import { CommonFuntion } from 'src/app/common/CommonFuntion';

@Component({
  selector: 'app-make-receipt',
  templateUrl: './make-receipt.component.html',
  styleUrls: ['./make-receipt.component.scss']
})
export class MakeReceiptComponent implements OnInit{

  ngOnInit(): void {
    CommonFuntion.isDashboardVisible = true;
  }
}
