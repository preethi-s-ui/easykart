declare var google: any;
import { Component, inject, OnInit, AfterViewInit, NgZone } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { CategoryService } from '../../category.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent implements OnInit{
  private router = inject(Router);
  
  constructor(private _ngZone: NgZone) {

  }

  ngOnInit(): void {

    // google.accounts.id.initialize({
    //   client_id: '943299045807-m74r35tgklkdbf55js2cah9vao0qbjqc.apps.googleusercontent.com',
    //   callback: (resp: any) => {
    //     this.handleLogin(resp);
    //     // console.log(resp)
    //   }
    // })

    // google.accounts.id.renderButton(document.getElementById('google-btn'), {
    //   theme: 'outline',
    //   size: 'large',
    //   shape: 'rectangle',
    //   width: 350
    // })

    
  }

  private decodeToken(token:any) {
    return JSON.parse(atob(token.split('.')[1]));
  }

  handleLogin(res: any) {
    if(res) {
      const decodeResponse = this.decodeToken(res.credential)
      sessionStorage.setItem("loggedinUSer", JSON.stringify(decodeResponse))
      console.log(decodeResponse)
      // this._ngZone.run(() => {
        this.router.navigate(['/profile']);
      // });
    }

  }

 
}
