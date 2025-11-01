import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-donate',
  imports: [ MatButtonModule, MatIconModule ],
  templateUrl: './donate.html',
  styleUrl: './donate.scss',
})
export class Donate {

}
