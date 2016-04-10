"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var mock_coches_1 = require('./mock-coches');
require('rxjs/add/operator/map');
var core_1 = require('angular2/core');
var CocheService = (function () {
    function CocheService(http) {
        this.http = http;
    }
    CocheService.prototype.getCoches = function () {
        return this.http.get('https://restcountries.eu/rest/v1/capital/madrid').map(function (res) { return res.json(); });
    };
    CocheService.prototype.getCochesMock = function () {
        return Promise.resolve(mock_coches_1.COCHES);
    };
    CocheService = __decorate([
        core_1.Injectable()
    ], CocheService);
    return CocheService;
}());
exports.CocheService = CocheService;
