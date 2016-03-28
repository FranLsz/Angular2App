import {Titulo} from './app.module'
import {Coche} from '../models/coche';
import {CocheDetalleComponent} from './coche-detalle.component';
import {CocheService} from '../services/coche.service';
import {Http, Headers} from 'angular2/http';
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
    constructor(private _cocheService: CocheService, public http: Http) {

    }

    getHttpRes() {
        this.http.get('https://restcountries.eu/rest/v1/capital/madrid')
            .subscribe(
            data => this.pruebadata = data.text(),
            err => console.log("errorcete"),
            () => console.log('Random Quote Complete' + this.pruebadata)
            );
    }

    getCoches() {
        this._cocheService.getCoches().then(coches => this.coches = coches);
    }

    ngOnInit() {
        console.log("oninit");
        this.getCoches();
        this.getHttpRes();
    }

    onSelect(coche: Coche) {
        this.cocheSeleccionado = coche;
        console.log("seleccionado " + coche.modelo);
    }
}
