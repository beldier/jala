import { Component, OnInit } from '@angular/core';
import { PackagesService } from '../packages.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
packages;
titles;
constructor(private PackService: PackagesService) {
    this.PackService.getPackage().subscribe(data =>{
      this.packages = data;
    });
    
    this.titles = this.getTitles(this.packages);
   }

  ngOnInit() {  
  }
getTitles(packages){
  return ['Name','Description','price','departureDate','arriveDate','googleLocation'];
}
}
