import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-lisitng',
  templateUrl: './lisitng.component.html',
  styleUrls: ['./lisitng.component.scss'],
  providers : [DataService]
})
export class LisitngComponent implements OnInit {

  // listing$ : Observable<any>;
  listing: any;
  constructor(public   _dataSer : DataService){}

  ngOnInit() {
    this.listing = this._dataSer.getAllListing().subscribe();

  }

}
