import { Component, ElementRef, inject, OnInit, ViewChild, viewChild } from '@angular/core';
import { AuthService } from '../../auth.service';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../core/components/header/header.component';
import { CategoryService } from '../../category.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import Swiper from 'Swiper';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterModule, RouterOutlet,HeaderComponent,
        HttpClientModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})


export class ProfileComponent implements OnInit {
  email: any = JSON.parse(sessionStorage.getItem("loggedinUSer")!)?.email;
  username: any = JSON.parse(sessionStorage.getItem("loggedinUSer")!)?.name;
  userImg = JSON.parse(sessionStorage.getItem("loggedinUSer")!)?.picture;
  private signout = inject(AuthService);
  // swiperContainer!: ElementRef;
  @ViewChild('swiperContainer')
  swiperContainer!: ElementRef;
  constructor(public category: CategoryService) {

  }

  ngOnInit(): any {
    const user = (sessionStorage.getItem("loggedinUSer"));
    console.log("user", user)
    this.initSwipper();
  }

  signOut(): void {
    sessionStorage.removeItem("loggedinUSer")
    this.signout.signOut();
  }

  private initSwipper() {
    return new Swiper(this.swiperContainer.nativeElement, {

    })
  } 

 
}

