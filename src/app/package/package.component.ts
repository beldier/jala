import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {
  @Input() package;
  constructor() { }

  ngOnInit() {

  }

}
