import {Titulo} from './app.module'
import {Coche} from '../models/coche';
import {CocheDetalleComponent} from './coche-detalle.component';
import {CocheService} from '../services/coche.service';
import {Component} from 'angular2/core'

@Component({
    selector: 'app-main',
    templateUrl: '/angular2/app/templates/app.template.html', 
    directives: [CocheDetalleComponent],
    providers: [CocheService]
})

export class AppComponent {
    public title = Titulo.getTitulo();
    public nombre = 'Franeewww';
    public coches: Coche[];
    public cocheSeleccionado: Coche;

    constructor(private _cocheService: CocheService) {
    }

    getCoches() {
        this._cocheService.getCoches().then(coches => this.coches = coches);
    }

    ngOnInit() {
        this.getCoches();
    }

    onSelect(coche: Coche) {
        this.cocheSeleccionado = coche;
        console.log("seleccionado " + coche.modelo);
    }
}
