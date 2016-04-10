import {bootstrap} from 'angular2/platform/browser'
import {AppComponent} from './components/app.component'
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS, APP_BASE_HREF} from 'angular2/router';
import {provide} from 'angular2/core';

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    provide(APP_BASE_HREF, { useValue: BASE_URL.replace("angular2/", "") })
]);
