import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import swal from 'sweetalert2';
import { ToastPlugin } from "../../../../plugins/toast.plugin";

export interface UserData {
    id: string;
    nombre: string;
    cantidad: number;
    monto: number;
    actionsColumn: any;
}

/** Constants used to fill up our data base. */
const NOMBRE: string[] = ['Camión Mercedes Benz', 'Camión Volvo'];
const CANTIDAD: number[] = [1,1];
const MONTO: number[] = [50000, 70000,100000];


@Component({
    selector: 'tabla',
    templateUrl: 'tabla.template.html'
})
export class TablaComponent {

    displayedColumns: Array<any> = ['id', 'nombre', 'cantidad', 'monto', 'actionsColumn'];
    dataSource: MatTableDataSource<UserData>;


    constructor(private _toast: ToastPlugin) {


        // Assign the data to the data source for the table to render
    }

    ngOnInit() {
        this.list();
    }
    list() {

        setTimeout(() => {
            const users = Array.from({ length: 2 }, (_, k) => createNewUser(k + 1));
            this.dataSource = new MatTableDataSource(users);

        }, 1000);
    }
    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    eliminar() {
        swal({
            title: '¿Está seguro de eliminar el registro?',
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
    const nombre =
        NOMBRE[Math.round(Math.random() * (NOMBRE.length - 1))];
    const cantidad =
        CANTIDAD[Math.round(Math.random())];
    const monto =
        MONTO[Math.round(Math.random())];
    return {
        id: id.toString(),
        nombre: nombre,
        cantidad: cantidad,
        monto: monto,
        actionsColumn: ""
    };
}
