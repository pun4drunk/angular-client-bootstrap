import { Component, Input } from '@angular/core';

const LINKS = {
  portfolio: { title: 'Portfolio', href: '#portfolio' },
  about: { title: 'About', href: '#about' },
  contact: { title: 'Contact', href: '#contact' },
  people: { title: 'People', href: '#people' },
};

@Component({
  selector: 'my-navigation',
  templateUrl: './navigation.component.html',
})

export class NavigationComponent {
  items = LINKS;
  @Input('modules') modules: string[];
}
