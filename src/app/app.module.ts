
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//
// import { AppComponent } from './app.component';
// import { HelloComponent } from './hello.component';
// import { MatButtonModule, MatMenuModule, MatSidenavModule, MatInputModule, MatSelectModule } from '@angular/material';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import { Validators, ReactiveFormsModule } from '@angular/forms';
// import { N1Component } from './n1/n1.component';
// import { N2Component } from './n2/n2.component';
// import {MatAutocompleteModule} from '@angular/material/autocomplete';
// @NgModule({
//   imports:      [
//     BrowserModule,
//     FormsModule,
//     BrowserAnimationsModule,
//     MatFormFieldModule,
//      ReactiveFormsModule,
//     // MatButtonModule,
//     // MatMenuModule,
//     // MatInputModule,
//     // MatSelectModule,
//
//     // HttpClientModule,
//     MatAutocompleteModule
//   ],
//   declarations: [ AppComponent, HelloComponent, N1Component, N2Component ],
//   bootstrap:    [ AppComponent ]
// })
// export class AppModule { }














import {CdkTableModule} from '@angular/cdk/table';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { N1Component } from './n1/n1.component';
import { N2Component } from './n2/n2.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import {AppComponent} from './app.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';
import { SelectComponent } from './select/select.component';
import { SliderComponent } from './slider/slider.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { MenuComponent } from './menu/menu.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CardComponent } from './card/card.component';
import { DividerComponent } from './divider/divider.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { ListComponent } from './list/list.component';
import { StepperComponent } from './stepper/stepper.component';
import { TabsComponent } from './tabs/tabs.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { ChipListComponent } from './chip-list/chip-list.component';
import { IconComponent } from './icon/icon.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { DialogComponent } from './dialog/dialog.component';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { SortHeaderComponent } from './sort-header/sort-header.component';
import { TableComponent } from './table/table.component';


@NgModule({
  exports: [
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
     MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ],

})
export class DemoMaterialModule {}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCheckboxModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ],

  declarations: [
    AppComponent,
    SortHeaderComponent,
    TableComponent,
    ChipListComponent,
    IconComponent,
    ProgressSpinnerComponent,
    ProgressBarComponent,
    DialogComponent,
    SnackBarComponent,
    TooltipComponent,
    PaginatorComponent,
    CardComponent,
    DividerComponent,
    ExpansionPanelComponent,
    GridListComponent,
    ListComponent,
    StepperComponent,
    TabsComponent,
    ButtonsComponent,
    ButtonToggleComponent,
    FormFieldComponent,
    InputComponent,
    RadioComponent,
    SelectComponent,
    SliderComponent,
    SlideToggleComponent,
    MenuComponent,
    SidenavComponent,
    ToolbarComponent,
    N1Component,
    N2Component,
    DatepickerComponent,
    CheckboxComponent ],
   bootstrap:    [ AppComponent ]
})
export class AppModule {}




/**  Copyright 2018 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license */
