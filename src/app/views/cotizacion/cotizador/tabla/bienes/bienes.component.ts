import { Component } from '@angular/core';
import swal from 'sweetalert2';
import { ToastPlugin } from "../../../../../plugins/toast.plugin";
import { FormControl,FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
declare var $: any;

export interface User {
    name: string;
}



@Component({
    selector: 'bienes',
    templateUrl: 'bienes.template.html'

})
export class BienesComponent {
    public miForm;
    constructor(private _toast: ToastPlugin, private _formBuilder: FormBuilder) {
        this.miForm = this._formBuilder.group({
            myControl: new FormControl("")
        })
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
                this._toast.get({ tipo: 'success', titulo: 'operación exitosa.', contenido: "El bien ha sido registrado." });
                $("#formulario-bienes").modal("hide");
            }
        });
    }
       // Autocomplete
    myControl = new FormControl();
    options: User[] = [
        { name: 'INMUEBLE' },
        { name: 'TREC' },
        { name: 'UTT' }
    ];
    filteredOptions: Observable<User[]>;

    ngOnInit() {
        this.filteredOptions = this.myControl.valueChanges
            .pipe(
                startWith<string | User>(''),
                map(value => typeof value === 'string' ? value : value.name),
                map(name => name ? this._filter(name) : this.options.slice())
            );
    }

    displayFn(user?: User): string | undefined {
        return user ? user.name : undefined;
    }

    private _filter(name: string): User[] {
        const filterValue = name.toLowerCase();

        return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
    }
}
