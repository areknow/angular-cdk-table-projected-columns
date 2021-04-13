import { CurrencyPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TableModule } from './components/table/table.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TableModule],
  bootstrap: [AppComponent],
  providers: [CurrencyPipe],
})
export class AppModule {}
