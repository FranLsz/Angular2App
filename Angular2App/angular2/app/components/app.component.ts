import {Titulo} from './app.module'
import {Coche} from '../models/coche';
import {CocheDetalleComponent} from './coche-detalle.component';
import {CocheService} from '../services/coche.service';
import {Component, OnInit} from 'angular2/core'

@Component({
    selector: 'app-main',
    templateUrl: '/angular2/app/templates/app.template.html',
    directives: [CocheDetalleComponent],
    providers: [CocheService]
})

export class AppComponent {
    public title = Titulo.getTitulo();
    public nombre = 'Fran';
    public coches: Coche[];
    public cocheSeleccionado: Coche;
    public pruebadata;
    constructor(private _cocheService: CocheService) {

    }

    getHttpRes() {
        this._cocheService.getCoches().subscribe(
            data => {
                this.pruebadata = data;
                console.log("GET OK");
                console.log(JSON.stringify(this.pruebadata));
            },
            err => { console.log("GET error"); },
            () => { console.log("GET finished"); }
        );
    }

    getCoches() {
        this._cocheService.getCochesMock().then(coches => this.coches = coches);
    }

    ngOnInit() {
        this.getCoches();
        this.getHttpRes();
    }

    onSelect(coche: Coche) {
        this.cocheSeleccionado = coche;
        console.log("seleccionado " + coche.modelo);
    }
}
