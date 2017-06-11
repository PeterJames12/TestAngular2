import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';
import { provider } from "./app/app.routes";
if (environment.production) {
    enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule, [provider]);
//# sourceMappingURL=/Users/igor/workspace/TestAngular2/frontend/src/main.js.map