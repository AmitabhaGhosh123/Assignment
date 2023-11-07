import { Component, OnInit } from '@angular/core';
import { TopCardsService } from 'src/app/services/top-cards/top-cards.service';

@Component({
  selector: 'app-data-cards',
  templateUrl: './data-cards.component.html',
  styleUrls: ['./data-cards.component.scss']
})
export class DataCardsComponent implements OnInit {
  
  allCards:any = [];

  constructor(private topCardsService:TopCardsService) {}

  ngOnInit(): void {
    this.getTopCardsData();
  }

  getTopCardsData() {
    this.topCardsService.getCardsData().subscribe((cards)=>{
      this.allCards = cards;
    },
    (error)=>{
      this.allCards = [];
    })
  }

}
