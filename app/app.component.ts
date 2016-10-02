import { Component } from '@angular/core';
//now that we have imported this component which is a decorator
//we can use it!

//we can use backticks to do multiline html which is a new es6
//feature
@Component({
	selector: 'my-app',
	template: `
		<div class="jumbotron">
			<h1>Welcome to Our App!</h1>
		</div>
	`,
	styles: [`
		.jumbotron { box-shadow: 0 2px 0 rgba(0, 0, 0, 0, 2); }
	`]

})
export class AppComponent { }