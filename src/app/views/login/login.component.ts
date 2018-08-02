import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
    selector: 'login',
    templateUrl: 'login.template.html'

})
export class loginComponent {
    constructor(private router: Router) {}
    login() {
        this.router.navigate(['business'])

    }
}
