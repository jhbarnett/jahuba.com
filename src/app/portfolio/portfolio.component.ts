import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import PROJECTS from './portfolio.data';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})

export class PortfolioComponent implements OnInit {
  @ViewChild('wrap') wrap:ElementRef; 
  @ViewChild('items') items:ElementRef; 
  @ViewChild('slider') slider:ElementRef; 
  
  pos = 0;
  
  setTransform() {
    this.items.nativeElement.style.transform = 'translate3d(' + (-this.pos * this.items.nativeElement.offsetWidth) + 'px,0,0)';
  };

  prev() {
    this.pos = Math.max(this.pos - 1, 0);
    this.setTransform();
    console.log("prev works", "position:", this.pos);
  };

  next() {
    this.pos = Math.min(this.pos + 1, this.items.nativeElement.children.length - 1);
    this.setTransform();
    console.log("next works", "position:", this.pos);
  };


  onResize(event) {
    this.setTransform;
  }
  
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    console.log(this.projects)
  }

  projects = PROJECTS;

  sanitize = ((imageURL) => {return `url(${this.sanitizer.bypassSecurityTrustUrl(imageURL)})`}).bind(this)
  

}


