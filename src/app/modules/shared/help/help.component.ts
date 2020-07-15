import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../core/theme.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {
  load = false;
  constructor(private themeService: ThemeService) {}

  isDarkTheme: boolean;

  ngOnInit() {
    this.themeService.themeChanged.subscribe(res => {
      this.isDarkTheme = res;
    });
  }

  loader() {
    this.load = true;
  }
}
