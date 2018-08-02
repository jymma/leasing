import { Component } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

@Component({
    selector: 'ubicacion-dealers',
    templateUrl: 'ubicacion.template.html'
})
export class UbicacionDealersComponent {
    public makers: Array<any> = [
        {
            lat: -9.1899672,
            lng: -75.015152
        },
        {
            lat: -10.3209672,
            lng: -75.135152
        },
        {
            lat: -8.6319672,
            lng: -75.055152
        }
    ];
    lat: number = -9.1899672;
    lng: number = -75.015152;
    zoom: number = 6;
    constructor() {
    }
}
