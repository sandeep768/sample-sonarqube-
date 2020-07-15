import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../core/theme.service';
import { ActivatedRoute } from '@angular/router';
import { AllCommunityModules } from '@ag-grid-community/all-modules';

@Component({
  selector: 'app-alert-settings',
  templateUrl: './alert-settings.component.html',
  styleUrls: ['./alert-settings.component.scss']
})
export class AlertSettingsComponent implements OnInit {
  load = false;
  columnDefs = [];
  rowData = [];
  defaultColDef = {
    sortable: true,
    resizable: false,
    filter: true
  };
  modules = AllCommunityModules;
  private gridApi;

  constructor(
    private themeService: ThemeService,
    private route: ActivatedRoute
  ) { }

  isDarkTheme: boolean;


  ngOnInit() {
    this.themeService.themeChanged.subscribe(res => {
      this.isDarkTheme = res;
    });
    this.columnDefs = [
      {
        headerName: 'Name',
        field: 'name',
        filter: 'agTextColumnFilter',
        filterParams: {
          defaultOption: 'contains'
        },
        width: 300,
      },
      {
        headerName: 'Email ID',
        field: 'emailId',
        filter: 'agTextColumnFilter',
        filterParams: {
          defaultOption: 'contains'
        },
        width: 300,
      },
      {
        headerName: 'Mobile number',
        field: 'phoneNumber',
        filter: 'agTextColumnFilter',
        filterParams: {
          defaultOption: 'contains'
        },
        width: 300,
      },
      {
        headerName: 'Actions', field: 'Action', cellClass: 'grid-cell-centered', cellRenderer(params) {
          return '<span><i class="material-icons" style="color: #007bff">delete</i></span>'
        }, pinned: 'right', width: 300
      }
    ];
    this.rowData = [
      {
        name: 'Matt M',
        emailId: 'mattm@iron-iq.com',
        phoneNumber: '+91 8787878787'
      },
      {
        name: 'Amar',
        emailId: 'amar@iron-iq.com',
        phoneNumber: '+91 4564564568'
      },
      {
        name: 'Matt s',
        emailId: 'matts@iron-iq.com',
        phoneNumber: '+91 4323214576'
      },
      {
        name: 'Balaji Ram',
        emailId: 'balaji@iron-iq.com',
        phoneNumber: '+91 9876543219'
      }
    ];
  }

  onGridReady(params) {
    this.gridApi = params.api;
  }

  loader() {
    this.load = true;
  }


}
