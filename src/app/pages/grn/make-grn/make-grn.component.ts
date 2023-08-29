import { Component, OnInit } from '@angular/core';
import { CommonFuntion } from 'src/app/common/CommonFuntion';

@Component({
  selector: 'app-make-grn',
  templateUrl: './make-grn.component.html',
  styleUrls: ['./make-grn.component.scss']
})
export class MakeGrnComponent implements OnInit{

  ngOnInit(): void {
    CommonFuntion.isDashboardVisible = true;
  }
}
