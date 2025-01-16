import { Component, ChangeDetectionStrategy } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-thor-detail',
  imports: [MatDialogModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './thor-detail.component.html',
  styleUrl: './thor-detail.component.css'
})
export class ThorDetailComponent {

}
