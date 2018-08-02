import { Component } from '@angular/core';
import swal from 'sweetalert2';
import { ToastPlugin } from "../../../../plugins/toast.plugin";
declare var $: any;

@Component({
    selector: 'formulario-usuario-comercial',
    templateUrl: 'formulario.template.html'
})
export class FormularioUsuarioComercialComponent {
    public spinner: boolean;
    constructor(private _toast: ToastPlugin) {
        this.spinner = false;
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
                this.spinner = true;
                setTimeout(() => {
                    this._toast.get({ tipo: 'success', titulo: 'operación exitosa.', contenido: "El usuario ha sido registrado." });
                    $("#formulario-usuario-comercial").modal("hide");
                    this.spinner = false;
                }, 1000);
            }
        });
    }

}
