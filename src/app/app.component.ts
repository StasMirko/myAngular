import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Dynamic title';
  number = 42;
  arr =[1,2,3];

  // img = 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg';

  inputValue = ''

  constructor() {
    // setTimeout(() => {
    //   console.log('Timeout is over');
    //   this.img = 'https://upload.wikimedia.org/wikipedia/commons/1/17/Angular_one_color_inverse_logo.svg';
    // }, 5000)
  }

  onInput(event: KeyboardEvent) {
    this.inputValue = (<HTMLInputElement>event.target).value
  }

  onBlur(str: string){
    this.inputValue = str
  }

  onClick(){
    console.log('Click')
  }

}
