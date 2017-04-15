import { Component } from '@angular/core';

@Component({
  selector: 'my-copyright',
  template: `
  <div class="col-lg-12">
    Copyright &copy; Your Website {{year}}
  </div>
  `,
})

export class CopyrightComponent {
  year: number = new Date().getFullYear();
}
