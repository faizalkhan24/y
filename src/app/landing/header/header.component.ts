import { Component, HostListener } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from 'src/app/login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  navFixed: boolean = false;
  private scrollOffset: number = 70;
  constructor(private modalService :NgbModal){}
  
  @HostListener('window:scroll')
  onWindowScroll() {
    this.navFixed = (window.pageYOffset 
      || document.documentElement.scrollTop 
      || document.body.scrollTop || 0
    ) > this.scrollOffset;
  }

  open() {
		const modalRef = this.modalService.open(LoginComponent);
		modalRef.componentInstance.name = 'World';
	}


}
