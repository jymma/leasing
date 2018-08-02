import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import swal from 'sweetalert2';
import { ToastPlugin } from "../../../../plugins/toast.plugin";

export interface UserData {
    id: string;
    nombre: any;

    progress: any;
    fijo: number;
    name: string;
    actionsColumn: any;
}

/** Constants used to fill up our data base. */
const NAMES: string[] = ['Fancisco Morán Roque', 'Alfonso Morán Roque', 'Emma Morán Roque', 'Alexis Morán Roque', 'Angel Morán Roque', 'Angie Morán Roque',
    'Bruno Morán Roque', 'Gabriel Morán Roque', 'Jose Morán Roque', 'Nestor Morán Roque', 'Ricardo Morán Roque', 'Said Morán Roque',
    'Yimma Morán Roque'];

@Component({
    selector: 'page-sucursales',
    templateUrl: 'sucursales.template.html',
    providers: [
        ToastPlugin
    ]
})
export class SucursalesComponent implements OnInit {
    public titulo: any;
    public links: Array<any>;
    displayedColumns: Array<any> = ['id', 'nombre', 'fijo', 'progress', 'name', 'actionsColumn'];
    dataSource: MatTableDataSource<UserData>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;


    constructor(private _toast: ToastPlugin) {
        this.titulo = "Sucursales";
        this.links = [
            { titulo: 'Administrar', link: "/administrar/dealers" },
            { titulo: 'Dealers', link: "/administrar/dealers" },
            { titulo: 'Sucursales', link: "/administrar/dealers/sucursales" }
        ];
        // Create 100 users
        const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));

        // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource(users);
    }

    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    eliminar() {
        swal({
            title: '¿Está seguro de eliminar la sucursal?',
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
    const name =
        NAMES[Math.round(Math.random() * (NAMES.length - 1))];

    return {
        id: id.toString(),
        nombre: 'Grupo Pana Ate',

        fijo: Math.floor((Math.random() * 100000000) + 300000001),
        progress: 'Urb San Luis Mz.A Lt.2',
        name: name,
        actionsColumn: ""
    };
}
