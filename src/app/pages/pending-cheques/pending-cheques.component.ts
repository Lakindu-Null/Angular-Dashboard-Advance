import { Component, OnInit } from '@angular/core';
import { CommonFuntion } from 'src/app/common/CommonFuntion';

@Component({
  selector: 'app-pending-cheques',
  templateUrl: './pending-cheques.component.html',
  styleUrls: ['./pending-cheques.component.scss']
})
export class PendingChequesComponent implements OnInit{

  ngOnInit(): void {
    CommonFuntion.isDashboardVisible = true;
  }
}
