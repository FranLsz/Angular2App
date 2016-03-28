import {Component} from 'angular2/core';
import {Coche} from '../models/coche';

@Component({
    selector: 'coche-detalle',
    templateUrl: '/angular2/app/templates/coche-detalle.template.html',
    inputs: ['coche']
})

export class CocheDetalleComponent {
    public coche: Coche;
}