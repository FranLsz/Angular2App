System.register(['./mock-coches', 'angular2/core'], function(exports_1, context_1) {
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
    var mock_coches_1, core_1;
    var CocheService;
    return {
        setters:[
            function (mock_coches_1_1) {
                mock_coches_1 = mock_coches_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CocheService = (function () {
                function CocheService() {
                }
                CocheService.prototype.getCoches = function () {
                    return Promise.resolve(mock_coches_1.COCHES);
                };
                CocheService.prototype.getCochesSlowly = function () {
                    return new Promise(function (resolve) {
                        return setTimeout(function () { return resolve(mock_coches_1.COCHES); }, 2000);
                    } // 2 seconds
                     // 2 seconds
                    );
                };
                CocheService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], CocheService);
                return CocheService;
            }());
            exports_1("CocheService", CocheService);
        }
    }
});
//# sourceMappingURL=coche.service.js.map