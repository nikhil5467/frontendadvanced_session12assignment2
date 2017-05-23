// app.ts
import {Component} from 'angular2/core';
import {TruncatePipe} from './truncate';

@Component({
  selector: 'app',
  pipes: [TruncatePipe]
  template: `
    <p>{{ 'this is a not so long string' | truncate }}</p>
    <p>{{ 'this is a not so long string' | truncate : 20 }}</p>
    <p>{{ 'this is a not so long string' | truncate : 20 : '.' }}</p>
  `
})
export class App {
  constructor() {}
}
