import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'business',
    templateUrl: 'business.template.html'
})
export class businessComponent {
    constructor(private router: Router) { }
    main() {
        this.router.navigate(['cotizacion'])

    }
}