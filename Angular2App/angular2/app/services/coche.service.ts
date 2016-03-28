import {Coche} from '../models/coche';
import {COCHES} from './mock-coches';
import {Injectable} from 'angular2/core';

@Injectable()
export class CocheService {

    getCoches() {
        return Promise.resolve(COCHES);
    }

    getCochesSlowly() {
        return new Promise<Coche[]>(resolve =>
            setTimeout(() => resolve(COCHES), 2000) // 2 seconds
        );
    }

}