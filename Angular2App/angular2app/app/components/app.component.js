"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var app_module_1 = require('./app.module');
var coche_detalle_component_1 = require('./coche-detalle.component');
var coche_service_1 = require('../services/coche.service');
//import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
var router_1 = require('angular2/router');
var core_1 = require('angular2/core');
var AppComponent = (function () {
    function AppComponent(_cocheService) {
        this._cocheService = _cocheService;
        this.title = app_module_1.Titulo.getTitulo();
        this.nombre = 'Fran';
    }
    AppComponent.prototype.getHttpRes = function () {
        var _this = this;
        this._cocheService.getCoches().subscribe(function (data) {
            _this.pruebadata = data;
            console.log("GET OK");
            console.log(JSON.stringify(_this.pruebadata));
        }, function (err) { console.log("GET error"); }, function () { console.log("GET finished"); });
    };
    AppComponent.prototype.getCoches = function () {
        var _this = this;
        this._cocheService.getCochesMock().then(function (coches) { return _this.coches = coches; });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getCoches();
        this.getHttpRes();
    };
    AppComponent.prototype.onSelect = function (coche) {
        this.cocheSeleccionado = coche;
        console.log("seleccionado " + coche.modelo);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-main',
            //templateUrl: BASE_URL + 'app/templates/app.template.html',
            templateUrl: BASE_URL + '/templates/app.template.html',
            directives: [coche_detalle_component_1.CocheDetalleComponent, router_1.ROUTER_DIRECTIVES],
            providers: [coche_service_1.CocheService]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
