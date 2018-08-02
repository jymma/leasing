import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatPaginatorIntl as xxx } from '@angular/material';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { ToastPlugin } from "../../../plugins/toast.plugin";

export interface UserData {
    id: string;
    ruc: number;
    rsocial: string;
    tfijo: number;
    ubicacion:any;
    actionsColumn: any;
}


@Component({
    selector: 'page-administar-dealers',
    templateUrl: 'dealers.template.html',
    providers: [
        ToastPlugin
    ]
})
export class DealersComponent implements OnInit {
    public titulo: any;
    public links: Array<any>;
    displayedColumns: Array<any> = ['id', 'ruc', 'rsocial', 'tfijo', 'ubicacion', 'actionsColumn'];
    dataSource: MatTableDataSource<UserData>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;


    constructor(private router: Router, private _toast: ToastPlugin) {
        this.titulo = "Dealers";
        this.links = [
            { titulo: 'Administrar', link: "/administrar/dealers" },
            { titulo: 'Dealers', link: "/administrar/dealers" }
        ];
        // Create 100 users
        const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));

        // Assign the data to the data source for the table to render


    }
    ngOnInit() {
        this.list();
    }
    list() {
        setTimeout(() => {
            const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));
            this.dataSource = new MatTableDataSource(users);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;

        }, 1000);
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    sucursales() {
        this.router.navigate(['/administrar/dealers/sucursales'])

    }


    eliminar() {
        swal({
            title: '¿Está seguro de eliminar al dealer?',
            text: "",
            showCancelButton: true,
            reverseButtons: true,
            cancelButtonClass: "mat-raised-button mat-primary",
            confirmButtonClass: "mat-raised-button mat-primary",
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar',
            allowOutsideClick: false,
            allowEscapeKey: false,
            focusConfirm: false,
            focusCancel: false
        }).then((result) => {
            if (result.value) {
                this._toast.get({ tipo: 'success', titulo: 'operación exitosa.', contenido: "El registro fue eliminado." });
            }
        });

    }

}

function createNewUser(id: number): UserData {

    return {
        id: id.toString(),
        ruc: 10447260838,
        rsocial: 'Grupo Pana',
        tfijo: Math.floor((Math.random() * 100000000) + 30000001),
        ubicacion: '',
        actionsColumn: ""
    };
}