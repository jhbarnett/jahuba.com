import { Component, OnInit } from '@angular/core';

class Note {
  name = ''
  email = '';
  message = '';
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  
  constructor( ) {}

  ngOnInit() {}

  model = new Note();

  mailForm(e) {
   const subject = `${this.model.name} reaching out!`;
   const body = `Message:\n\n${this.model.message}
                 \n\nREPLY TO ${this.model.name} @ ${this.model.email}`;    
   window.location.href = `mailto:jason@thebarnetts.ws?
                           subject=${subject}
                           &body=${body}`;
   e.path[1].reset();        
  }
}
