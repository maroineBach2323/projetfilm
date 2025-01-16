import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {AvengersDetailComponent} from '../avengers-detail/avengers-detail.component'
import { IronManDetailComponent } from '../iron-man-detail/iron-man-detail.component';
import { ThorDetailComponent } from '../thor-detail/thor-detail.component';
import { HulkDetailComponent } from '../hulk-detail/hulk-detail.component';
import { SpiderManDetailComponent } from '../spider-man-detail/spider-man-detail.component';

@Component({
  selector: 'app-movie-list',
  imports: [MatCardModule, MatButtonModule, RouterOutlet, RouterLink, RouterLinkActive, MatDialogModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieListComponent {
  readonly dialog = inject(MatDialog);

  openDialogAvengers() {
    const dialogRef = this.dialog.open(AvengersDetailComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
  openDialogHulk() {
    const dialogRef = this.dialog.open(HulkDetailComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
  openDialogIronMan() {
    const dialogRef = this.dialog.open(IronManDetailComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
  openDialogSpiderMan() {
    const dialogRef = this.dialog.open(SpiderManDetailComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
  openDialogThor() {
    const dialogRef = this.dialog.open(ThorDetailComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
