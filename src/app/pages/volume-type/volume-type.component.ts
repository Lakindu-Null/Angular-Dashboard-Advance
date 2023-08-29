import { Component, OnInit } from '@angular/core';
import { CommonFuntion } from 'src/app/common/CommonFuntion';

@Component({
  selector: 'app-volume-type',
  templateUrl: './volume-type.component.html',
  styleUrls: ['./volume-type.component.scss']
})
export class VolumeTypeComponent implements OnInit{

  ngOnInit(): void {
    CommonFuntion.isDashboardVisible = true;
  }
}
