import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-frame',
  styles: [
    `
      :host {
        display: flex;
        width: 100%;
        height: 100%;
        min-height: 400px;
        box-sizing: border-box;
      }

      div {
        margin: auto;
      }
    `
  ],
  template: `
    <div
      class="spinner-border"
      style="width: 3rem; height: 3rem;"
      role="status"
    >
      <span class="sr-only">Loading...</span>
    </div>
  `
})
export class LoadingFrameComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
