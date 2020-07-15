import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../core/theme.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  isDarkTheme: boolean;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.themeChanged.subscribe(res => {
      this.isDarkTheme = res;
    })
  }
}
