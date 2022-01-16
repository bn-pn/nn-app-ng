import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      return [
        { title: 'タイトル１', body: "内容１", cols: matches ? 1 : 2, rows: 1 },
        { title: 'タイトル２', body: "内容２", cols: 1, rows: 1 },
        { title: 'タイトル３', body: "内容３", cols: 1, rows: matches ? 1 : 2 },
        { title: 'タイトル４', body: "内容４", cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
