import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pfp',
  templateUrl: './pfp.component.html',
  styleUrls: ['./pfp.component.scss']
})
export class PfpComponent implements OnInit {

  @Input('src-pfp') url!: string;
  @Input('title-pfp') title!: string;

  bigMode: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  handleContainerClick() {
    this.bigMode = !this.bigMode;
  }

}
