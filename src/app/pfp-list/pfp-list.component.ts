import { Component, OnInit } from '@angular/core';
import * as data from 'src/assets/pfpUrls.json';

@Component({
  selector: 'app-pfp-list',
  templateUrl: './pfp-list.component.html',
  styleUrls: ['./pfp-list.component.scss']
})
export class PfpListComponent implements OnInit {

  pfps: any = (data as any).default;

  constructor() { }

  ngOnInit(): void {
    console.log(data);
  }

}
