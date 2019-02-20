import { Component, OnInit , Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input('parentData')
  public name;

  @Output()
  public childEvent = new EventEmitter();


  fireEvent(){
    this.childEvent.emit('data coming from child compoent');
  }

  constructor() { }

  ngOnInit() {
  }

}
