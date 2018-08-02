import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { ToastPlugin } from "../../../plugins/toast.plugin";
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
declare var $: any;



// Exportaciones de Autocomplete de Material
export interface User {
    name: string;
}
export interface User2 {
    name2: string;
}

export interface User3 {
    name3: string;
}




@Component({
    selector: 'page-cotizador',
    templateUrl: 'cotizador.template.html',
    providers: [
        ToastPlugin
    ]
})
export class CotizadorComponent implements OnInit {
    // Cabecera de cada Vista
    public titulo: any;
    public links: Array<any>;
    public miForm;

    // Autocomplete 1
    myControl = new FormControl();
    options: User[] = [
        { name: 'redBus' },
        { name: 'Cruz del Sur' },
        { name: 'Flores' },
        { name: 'Linea' },
        { name: 'Tepsa' },
        { name: 'Oltursa' },
        { name: 'Civa' }
    ];
    filteredOptions: Observable<User[]>;

    // Autocomplete 2
    myControl2 = new FormControl();
    options2: User2[] = [
        { name2: 'Leasing' }

    ];
    filteredOptions2: Observable<User2[]>;

    // Autocomplete 3

    myControl3 = new FormControl();
    options3: User3[] = [
        { name3: 'Dólares' }, 
        { name3: 'Soles' }

    ];
    filteredOptions3: Observable<User3[]>;




    constructor(private _toast: ToastPlugin, private _formBuilder: FormBuilder) {
        this.titulo = "Cotizador";
        this.links = [
            { titulo: 'Cotización', link: "/cotizacion" },
            { titulo: 'Cotizador', link: "/cotizacion" },
        ];
        this.miForm = this._formBuilder.group({
            myControl: new FormControl(""),
            myControl2: new FormControl(""),
            myControl3: new FormControl("")
        });
       
    }

    //  Accion Boton Guardar 
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
                this._toast.get({ tipo: 'success', titulo: 'operación exitosa.', contenido: "La cotización ha sido registrada." });
                $("#formulario-dealers").modal("hide");
            }
        });
    }



    // Autocomplete


    ngOnInit() {
        this.filteredOptions2 = this.myControl2.valueChanges
            .pipe(
                startWith<string | User2>(''),
                map(value => typeof value === 'string' ? value : value.name2),
                map(name2 => name2 ? this._filter2(name2) : this.options2.slice())
            );
        this.filteredOptions = this.myControl.valueChanges
            .pipe(
                startWith<string | User>(''),
                map(value => typeof value === 'string' ? value : value.name),
                map(name => name ? this._filter(name) : this.options.slice())
            );
        this.filteredOptions3 = this.myControl3.valueChanges
            .pipe(
                startWith<string | User3>(''),
                map(value => typeof value === 'string' ? value : value.name3),
                map(name3 => name3 ? this._filter3(name3) : this.options3.slice())
            );

    }
    // Autocomplete 1
    displayFn(user?: User): string | undefined {
        return user ? user.name : undefined;
    }

    private _filter(name: string): User[] {
        const filterValue = name.toLowerCase();

        return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
    }

    // Autocomplete 2


    displayFn52(user2?: User2): string | undefined {
        return user2 ? user2.name2 : undefined;
    }

    private _filter2(name2: string): User2[] {
        const filterValue = name2.toLowerCase();

        return this.options2.filter(option => option.name2.toLowerCase().indexOf(filterValue) === 0);
    }
    // Autocomplete 3


    displayFn53(user3?: User3): string | undefined {
        return user3 ? user3.name3 : undefined;
    }

    private _filter3(name3: string): User3[] {
        const filterValue = name3.toLowerCase();

        return this.options3.filter(option => option.name3.toLowerCase().indexOf(filterValue) === 0);
    }


}



