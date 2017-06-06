import { Component } from '@angular/core';
export class Hero {
  id: number;
  name: string;
}
@Component({
  selector: 'my-app',
  templateUrl: `form.html`,
})

export class AppComponent  { 
form = 'Login Form'; 
hero: Hero = {
  id: 1,
  name: 'Windstorm'
};
}
