import { Component, OnInit } from '@angular/core';
import { CommonFuntion } from 'src/app/common/CommonFuntion';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit{

  ngOnInit(): void {
    CommonFuntion.isDashboardVisible = true;
  }
}
