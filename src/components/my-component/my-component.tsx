import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  render() {
    return (
      <div>
        <div class="mobile-only" onClick={() => console.log("mobile clicked")}>Hello, World! Mobile only!</div>
        <div class="desktop" onClick={() => console.log("desktop clicked")}>Hello, World! Desktop only!</div>
      </div>
    );
  }
}
