import {Coche} from '../models/coche';
import {COCHES} from './mock-coches';
import 'rxjs/add/operator/map';
import {Http, Response} from 'angular2/http';
import {Injectable} from 'angular2/core';

@Injectable()
export class CocheService {

    constructor(private http: Http) { }

    getCoches() {
        return this.http.get('https://restcountries.eu/rest/v1/capital/madrid').map((res: Response) => res.json());
    }
    
    getCochesMock() {
        return Promise.resolve(COCHES);
    }

    //getCochesSlowly() {
    //    return new Promise<Coche[]>(resolve =>
    //        setTimeout(() => resolve(COCHES), 2000) // 2 seconds
    //    );
    //}

}