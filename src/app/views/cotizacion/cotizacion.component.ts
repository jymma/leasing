import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import swal from 'sweetalert2';
import { ToastPlugin } from "../../plugins/toast.plugin";
declare var $: any;


export interface UserData {
	id: string;
	name: string;
	cliente: any;
	documento: any;
	correlativo: any;
	emision:any;
	vencimiento:any;
	monto:any;
	estado:string;
	actionsColumn: any;
}
/** Constants used to fill up our data base. */
const NAMES: string[] = ['Fancisco Morales', 'Alfonso Huertas', 'Emma Mendoza', 'Alexis Samanez', 'Angel Roque', 'Angie Robledo',
	'Bruno Mariche', 'Gabriel Espino', 'Jose Atachagua', 'Alejandra García', 'Nestor vásquez', 'Ricardo Ramos', 'Said Ramirez',
	'Jymma Mogollón'];

@Component({
	selector: 'page-cotizacion',
	templateUrl: 'cotizacion.template.html',
	providers: [
		ToastPlugin
	]

})
export class CotizacionComponent implements OnInit {

	public titulo: any;

	displayedColumns: Array<any> = ['id', 'name', 'cliente', 'documento', 'correlativo', 'emision', 'vencimiento','monto','estado', 'actionsColumn'];
	dataSource: MatTableDataSource<UserData>;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;



	constructor(private router: Router, private _toast: ToastPlugin) {
		this.titulo = "Cotización";
		
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
	cotizador() {
		this.router.navigate(['/cotizacion/cotizador'])

	}

	eliminar() {
		swal({
			title: '¿Está seguro de eliminar la cotización?',
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
		name: name,
		cliente: 'Redbus',
		documento: 1053533,
		correlativo: 'lim00001',
		emision: '01/09/2018',
		vencimiento: '15/05/2020',
		monto:'$30565.00',
		estado: 'Por facturar',
		actionsColumn: ""
	};
}


