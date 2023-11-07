import { Component, OnInit } from '@angular/core';
import { RecentOrdersService } from 'src/app/services/recent-orders/recent-orders.service';

@Component({
  selector: 'app-recent-orders',
  templateUrl: './recent-orders.component.html',
  styleUrls: ['./recent-orders.component.scss']
})
export class RecentOrdersComponent implements OnInit {

  allOrders: any = [];

  constructor(private ordersService: RecentOrdersService) { }

  ngOnInit(): void {
    this.getRecentOrders();
  }

  /*function to get recent orders*/
  getRecentOrders() {
    this.ordersService.getRecentOrders().subscribe(orders => {
      this.allOrders = orders;
    },
      (error) => {
        this.allOrders = [];
      })
  }

}
