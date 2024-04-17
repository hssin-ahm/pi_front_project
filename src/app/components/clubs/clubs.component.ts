import { AfterViewInit, Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.scss']
})
export class ClubsComponent implements AfterViewInit {
    
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
      
      onSlideTo(index: number) {
        $('.owl-carousel').trigger('to.owl.carousel', [index, 300]);
      }


}
