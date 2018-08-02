import { Component } from '@angular/core';
import swal from 'sweetalert2';
import { ToastPlugin } from "../../../../plugins/toast.plugin";
declare var $: any;

@Component({
    selector: 'formulario-dealers',
    templateUrl: 'formulario.template.html'
})
export class FormularioDealersComponent {
    constructor(private _toast: ToastPlugin) {

    }
    guardar() {
        swal({
            title: '¿Está seguro de guardar los datos?',
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
                this._toast.get({ tipo: 'success', titulo: 'operación exitosa.', contenido: "El dealer ha sido registrado." });
                $("#formulario-dealers").modal("hide");
            }
        });
    }
}
