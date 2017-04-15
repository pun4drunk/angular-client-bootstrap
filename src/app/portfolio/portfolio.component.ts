import 'rxjs/add/operator/map';
import { Component, OnInit } from '@angular/core';

import { Portfolio } from './portfolio';

const PORTFOLIOS: Portfolio[] = [
  {
    id: 1,
    title: 'Cabin',
    img: 'img/portfolio/cabin.png',
  },
  {
    id: 2,
    title: 'Slice of cake',
    img: 'img/portfolio/cake.png',
  },
  {
    id: 3,
    title: 'Circus tent',
    img: 'img/portfolio/circus.png',
  },
  {
    id: 4,
    title: 'Game controller',
    img: 'img/portfolio/game.png',
  },
  {
    id: 5,
    title: 'Safe',
    img: 'img/portfolio/safe.png',
  },
  {
    id: 6,
    title: 'Submarine',
    img: 'img/portfolio/submarine.png',
  },
];

@Component({
  selector: 'my-portfolio',
  templateUrl: './portfolio.component.html',
})

export class PortfolioComponent {
  items: Portfolio[] = PORTFOLIOS;
}
