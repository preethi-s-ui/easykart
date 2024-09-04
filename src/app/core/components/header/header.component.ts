import { CommonModule } from '@angular/common';
import { Component, Input, input, OnInit } from '@angular/core';
import { CategoryService } from '../../../category.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  @Input() name: string =  '';
  @Input() profileImg: any = '';
  navList = [];
  // ["smart watch", "kitchen items", "toys"]

  constructor(public category: CategoryService ) {


  }


  ngOnInit(): void {
    this.listCategory()
  }

  listCategory(): void {
    this.category.fetchCategory().subscribe((res: any) => {
      // console.log(res)
      this.navList  = res;
    })
  }

}
