import { Component, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { ToastPlugin } from "../../plugins/toast.plugin";
import * as $ from 'jquery';
import 'fullcalendar';

@Component({
    selector: 'page-operations',
    templateUrl: 'visitor.template.html',
    providers: [
        ToastPlugin
    ]
})
export class VisitorViewComponent implements AfterViewInit {
    public titulo: any;
    ngAfterViewInit() {
        $('#calendar').fullCalendar({
            defaultView: 'month',
            locale: 'es'
        });

    }
    constructor(private router: Router, private _toast: ToastPlugin) {
        this.titulo = "Calendario";

    }
}
