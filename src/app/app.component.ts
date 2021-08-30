import { Component } from '@angular/core';
import { UtilityService } from './utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  constructor(private _utilityService: UtilityService){
    this._utilityService.sharedData.subscribe((data) => {
      alert(data);
    })
  }

}
