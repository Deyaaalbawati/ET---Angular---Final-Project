import { Component, Input, OnInit } from '@angular/core';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()Categoryid!: number;
  AllCourse:any=[];
  constructor(public HomeApi :HomeService) {

    this.HomeApi.getCourse().subscribe(result=>{

      this.AllCourse=result;
      console.log(result)
      
    })
         
   }

  ngOnInit(): void {
  }

}
