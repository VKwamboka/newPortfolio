import { Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  isNavbarVisible = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.isNavbarVisible = (window.scrollY > 50);
  }

  isMenuCollapsed = true;

  words: string[] = ['Web Designer', 'Web Developer', 'Front End Developer', 'Back End Developer'];
  wordIndex: number = 0;
  letterIndex: number = 0;
  isDeleting: boolean = false;
  text: string = '';

  constructor() { }

  ngOnInit(): void {
    this.typeText();
  }

  typeText(): void {
    const currentWord = this.words[this.wordIndex];

    if (this.isDeleting) {
      this.text = currentWord.substring(0, --this.letterIndex);
    } else {
      this.text = currentWord.substring(0, ++this.letterIndex);
    }

    if (!this.isDeleting && this.text === currentWord) {
      this.isDeleting = true;
      setTimeout(() => this.typeText(), 1000);
    } else if (this.isDeleting && this.text === '') {
      this.isDeleting = false;
      this.wordIndex = (this.wordIndex + 1) % this.words.length;
      setTimeout(() => this.typeText(), 500);
    } else {
      const speed = this.isDeleting ? 50 : 100;
      setTimeout(() => this.typeText(), speed);
    }
  }
}
