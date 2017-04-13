import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';//loads and compiles 
import { AppModule } from './Main/app.module';// compiles and launches the application
platformBrowserDynamic().bootstrapModule(AppModule);