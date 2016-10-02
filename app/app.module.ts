//we use the module as a way to encapsulate all of the different
//components of our angularjs application this is the central location
//we can use multiple modules to represent multiple sections of our site
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
//here we bootstrap all the compnents we wanna use
@NgModule({
	imports: [BrowserModule],
	declarations: [AppComponent],
	bootstrap: [AppComponent]
})
export class AppModule { }



