import {Titulo} from './app.module'
import {Coche} from '../models/coche';
import {CocheDetalleComponent} from './coche-detalle.component';
import {CocheService} from '../services/coche.service';
//import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {ROUTER_DIRECTIVES, RouteConfig, Router, Location, Route, AsyncRoute} from 'angular2/router';
import {Component, OnInit} from 'angular2/core'

@Component({
    selector: 'app-main',
    //templateUrl: BASE_URL + 'app/templates/app.template.html',
    templateUrl: BASE_URL + 'app/templates/app.template.html',
    directives: [CocheDetalleComponent, ROUTER_DIRECTIVES],
    providers: [CocheService]
})
//@RouteConfig([
//    new Route({ path: '/', component: AppComponent, name: 'Home' }),
//    new Route({ path: '/demo/...', component: CocheDetalleComponent, name: 'Demo' }),
//    new Route({ path: '/about/:id', component: CocheDetalleComponent, name: 'About' }),
//    new AsyncRoute({
//        path: '/lazy',
//        loader: () => ComponentHelper.LoadComponentAsync('LazyLoaded', './components/lazy-loaded/lazy-loaded'),
//        name: 'Lazy'
//    })
//])
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
