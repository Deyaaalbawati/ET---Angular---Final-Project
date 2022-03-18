import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/service/home.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
   active = 1;

   AllCategory:any=[];

  constructor(public HomeApi :HomeService) {

    this.HomeApi.getCategory().subscribe(result=>{
this.AllCategory=result;
console.log(result)
console.log(result)
console.log(result)
    })
   }

  ngOnInit(): void {
  }

}

