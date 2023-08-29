import { Component, OnInit } from '@angular/core';
import { CommonFuntion } from 'src/app/common/CommonFuntion';

@Component({
  selector: 'app-grn-reprint',
  templateUrl: './grn-reprint.component.html',
  styleUrls: ['./grn-reprint.component.scss']
})
export class GrnReprintComponent implements OnInit{

  ngOnInit(): void {
    CommonFuntion.isDashboardVisible = true;
  }
}
