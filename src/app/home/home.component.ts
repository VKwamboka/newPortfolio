import { Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  isNavbarVisible = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.isNavbarVisible = (window.scrollY > 50);
  }

  isMenuCollapsed = true;
}
