import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import swal from 'sweetalert2';
import { ToastPlugin } from "../../../plugins/toast.plugin";
export interface UserData {
    id: string;
    name: string;
    progress: string;
    cargo:string;
    color: number;
    oficina:string;
    actionsColumn: any;
}

/** Constants used to fill up our data base. */
const NAMES: string[] = ['Fancisco', 'Alfonso', 'Emma', 'Alexis', 'Angel', 'Angie',
    'Bruno', 'Gabriel', 'Jose', 'Alejandra', 'Nestor', 'Ricardo', 'Said',
    'Jymma'];
const APELLIDOS: string[] = ['Morales', 'Huertas', 'Mendoza', 'Samanez', 'Roque', 'Robledo',
    'Mariche', 'Baldoceda', 'Espino', 'Atachagua'];

const CARGO: string[] = ['Ejecutivo Junior', 'Ejecutivo Senior'];

@Component({
    selector: 'page-administar-usuario',
    templateUrl: 'usuarios.template.html',
    providers: [
        ToastPlugin
    ]
})
export class UsuariosComponent implements OnInit {
    public titulo: any;
    public links: Array<any>;
    public spinner: boolean;
    displayedColumns: Array<any> = ['id', 'name', 'progress', 'cargo','color', 'oficina','actionsColumn'];
    dataSource: MatTableDataSource<UserData>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(private _toast: ToastPlugin) {
        this.spinner = false;
        this.titulo = "Usuario Comercial";
        this.links = [
            { titulo: 'Administrar', link: "/administrar/usuarios" },
            { titulo: 'Usuario comercial', link: "/administrar/usuarios" }
        ];
        // Create 100 users

        // Assign the data to the data source for the table to render
    }

    ngOnInit() {
        this.list();
    }
    list() {
        this.spinner = true;
        setTimeout(() => {
            const users = Array.from({ length: 20 }, (_, k) => createNewUser(k + 1));
            this.dataSource = new MatTableDataSource(users);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
            this.spinner = false;
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
            title: '¿Está seguro de eliminar al usuario?',
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
    const apellidos =
        APELLIDOS[Math.round(Math.random() * (APELLIDOS.length - 1))] + ' ' +
        APELLIDOS[Math.round(Math.random() * (APELLIDOS.length - 1))];
    const cargo =
        CARGO[Math.round(Math.random())];
    return {
        id: id.toString(),
        name: name,
        progress: apellidos,
        cargo:cargo,
        color: Math.floor((Math.random() * 100000000) + 900000000),
        oficina:'Lima',
        actionsColumn: ""
    };
}
