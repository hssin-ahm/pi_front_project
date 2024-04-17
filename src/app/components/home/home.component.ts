import { AfterViewInit, Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  
    constructor() { }
  
    ngAfterViewInit() {
      setTimeout(() => {
        $('.owl-carousel').owlCarousel({
          loop: true,
          margin: 10,
          nav: true,
          responsive: {
            0: {
              items: 0
            },
            600: {
              items: 0
            },
            1000: {
              items: 1
            }
          },
          navText: ["<", ">"],
          autoplay: true,
          autoplayTimeout: 4000
        });
      });
    }
}
