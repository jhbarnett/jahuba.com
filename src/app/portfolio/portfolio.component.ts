import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import PROJECTS from './portfolio.data';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})

export class PortfolioComponent implements OnInit {
  @ViewChild('items') items:ElementRef; 
  projects = PROJECTS;
  pos = 0;
  selection = this.projects[this.pos];
  
  setTransform() {
    this.items.nativeElement.style.transform = 'translate3d(' + (-this.pos * this.items.nativeElement.offsetWidth) + 'px,0,0)';
  };

  prev() {
    this.pos = Math.max(this.pos - 1, 0);
    this.setTransform();
    this.selection = this.projects[this.pos]
  };

  next() {
    this.pos = Math.min(this.pos + 1, this.items.nativeElement.children.length - 1);
    this.setTransform();
    this.selection = this.projects[this.pos]
  };


  onResize(event) {
    this.setTransform;
  }
  
  constructor() {
  }

  ngOnInit() {}
}


