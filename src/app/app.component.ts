import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <title>{{ title }}</title>
    <navbar></navbar>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {

  title = 'hughjd.xyz';
}
