import { Component, OnInit } from '@angular/core';
import { PremiumService } from './premium.service';

export class Occupation{
  occupationId?:number;
  occupationName?:string;
  occupationRating?:number;
  
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'InsuranceTech';
  name:string='';
  dateOfBith:string='';
  occupations:Occupation[]=[];
  totalPremium:number=0;
  sumInsuredAmount:number=0;
  occupationRating:number=0;
  ratingFactor:number=0;
  age:number=0;
  ratingFactors:any[]=[];

  constructor(private readonly premiumService:PremiumService){

  }
  ngOnInit(): void {
    this.getOccupations();
    this.getRatingFactors();
  }

  getOccupations(){
    this.premiumService.getOccupations()
    .subscribe((data:Occupation[])=>{
      if(data){
        this.occupations=data;
      }
    });
  }

  getRatingFactors(){
    this.premiumService.getRatingFactors()
    .subscribe((data:any[])=>{
      if(data){
        this.ratingFactors=data;
      }
    })
  }
  
  onOccupationChange(){
   const rating=this.ratingFactors.find(_=>_.ratingId===+this.occupationRating);
   if(rating){
    this.ratingFactor=rating.ratingFactor;
   }
  }  
}
