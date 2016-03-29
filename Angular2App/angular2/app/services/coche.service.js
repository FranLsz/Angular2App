System.register(['./mock-coches', 'rxjs/add/operator/map', 'angular2/http', 'angular2/core'], function(exports_1, context_1) {
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
    var mock_coches_1, http_1, core_1;
    var CocheService;
    return {
        setters:[
            function (mock_coches_1_1) {
                mock_coches_1 = mock_coches_1_1;
            },
            function (_1) {},
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CocheService = (function () {
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
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
                ], CocheService);
                return CocheService;
                var _a;
            }());
            exports_1("CocheService", CocheService);
        }
    }
});
//# sourceMappingURL=coche.service.js.map