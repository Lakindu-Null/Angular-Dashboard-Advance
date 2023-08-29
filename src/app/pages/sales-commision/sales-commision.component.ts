import { Component, OnInit } from '@angular/core';
import { CommonFuntion } from 'src/app/common/CommonFuntion';

@Component({
  selector: 'app-sales-commision',
  templateUrl: './sales-commision.component.html',
  styleUrls: ['./sales-commision.component.scss']
})
export class SalesCommisionComponent implements OnInit{

  ngOnInit(): void {
    CommonFuntion.isDashboardVisible = true;
  }
}
