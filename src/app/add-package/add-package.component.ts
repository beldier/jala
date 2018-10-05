import { Component, OnInit } from '@angular/core';
import { PackagesService} from '../packages.service';
@Component({
  selector: 'app-add-package',
  templateUrl: './add-package.component.html',
  styleUrls: ['./add-package.component.css']
})
export class AddPackageComponent implements OnInit {
  currentPackage;

  constructor(private packService: PackagesService) { 
    this.currentPackage={
      name: '',
      description: '',
      price: 0,
      departureDate: '',
      arriveDate: '',
      googleLocation: ''
 
    };

  }
  addPackages(newPackage) {
    console.log('add package');
    this.packService.addNewPackage(newPackage);
  }
 
  ngOnInit() {
  }
  

}
