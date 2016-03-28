System.register(['./app.module', './coche-detalle.component', '../services/coche.service', 'angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var app_module_1, coche_detalle_component_1, coche_service_1, core_1;
    var AppComponent;
    return {
        setters:[
            function (app_module_1_1) {
                app_module_1 = app_module_1_1;
            },
            function (coche_detalle_component_1_1) {
                coche_detalle_component_1 = coche_detalle_component_1_1;
            },
            function (coche_service_1_1) {
                coche_service_1 = coche_service_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_cocheService) {
                    this._cocheService = _cocheService;
                    this.title = app_module_1.Titulo.getTitulo();
                    this.nombre = 'Franeewww';
                }
                AppComponent.prototype.getCoches = function () {
                    var _this = this;
                    this._cocheService.getCoches().then(function (coches) { return _this.coches = coches; });
                };
                AppComponent.prototype.ngOnInit = function () {
                    this.getCoches();
                };
                AppComponent.prototype.onSelect = function (coche) {
                    this.cocheSeleccionado = coche;
                    console.log("seleccionado " + coche.modelo);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app-main',
                        templateUrl: '/angular2/app/templates/app.template.html',
                        directives: [coche_detalle_component_1.CocheDetalleComponent],
                        providers: [coche_service_1.CocheService]
                    }), 
                    __metadata('design:paramtypes', [coche_service_1.CocheService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map