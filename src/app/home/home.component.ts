import { Component, OnInit } from '@angular/core';
import { ColorService } from '../color.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private colorService: ColorService) { }

  ngOnInit() {
  }

  get getColor() {
    return this.colorService.color;
  }
  
  set setColor(colorValue) {
    this.colorService.color = colorValue;
  }

}