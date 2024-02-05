import { Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  // isScrolled = false;
  // @HostListener('window:scroll',[])
  // onScroll():void {
  //   if(window.scrollY > 50){
  //     this.isScrolled = true;
  //   }else{
  //     this.isScrolled = false;
  //   }
  // }

  isMenuCollapsed = true;
}
