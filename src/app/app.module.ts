import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { weatherUrl, locationUrl } from './shared/accu';
import { searchKey } from './shared/googleSearch';
import { ClockComponent } from './clock/clock.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { AngMusicPlayerModule } from  'ang-music-player';
import { CalendarComponent } from './calendar/calendar.component';

// calendar 
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NotepadComponent } from './notepad/notepad.component';
import { NoteEntryComponent } from './note-entry/note-entry.component';
import { GoogleComponent } from './google/google.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { TodolistComponent } from './todolist/todolist.component';
import { AudioplayerComponent } from './audioplayer/audioplayer.component';
import { CalendarEntryComponent } from './calendar-entry/calendar-entry.component';
import { QuotesComponent } from './quotes/quotes.component';
import { AppFolderComponent } from './app-folder/app-folder.component';
import { CommonAppsComponent } from './common-apps/common-apps.component';
import { SongFormComponent } from './song-form/song-form.component'; 

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    ClockComponent,
    WeatherForecastComponent,
    NotepadComponent,
    NoteEntryComponent,
    GoogleComponent,
    PlaylistComponent,
    TodolistComponent,
    AudioplayerComponent,
    CalendarComponent,
    CalendarEntryComponent,
    QuotesComponent,
    AppFolderComponent,
    CommonAppsComponent,
    SongFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatFormFieldModule,
    ReactiveFormsModule,                  // not sure if it will be used
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    FlexLayoutModule,
    MatGridListModule,
    MatButtonModule,
    AngMusicPlayerModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatIconModule,
    MatSlideToggleModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    
  ],
  providers: [
    {provide: 'WeatherUrl', useValue: 'weatherUrl'},
    {provide: 'LocationUrl', useValue: 'locationUrl'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
