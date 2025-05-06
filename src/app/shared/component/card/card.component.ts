import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  standalone: true,
})
export class CardComponent implements OnInit {

  @Input() cardTitle!: string;

  constructor() { }

  ngOnInit() {
  }

}
