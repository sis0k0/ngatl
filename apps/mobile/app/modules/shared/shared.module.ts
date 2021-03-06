// nativescript
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// angular
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

// libs
import { TranslateModule } from '@ngx-translate/core';
import { NativeScriptUISideDrawerModule } from 'nativescript-pro-ui/sidedrawer/angular';
// import { NativeScriptUICalendarModule } from 'nativescript-pro-ui/calendar/angular';
import { NativeScriptUIListViewModule } from 'nativescript-pro-ui/listview/angular';
import { TNSFontIconModule } from 'nativescript-ngx-fonticon';
import { TNSCheckBoxModule } from 'nativescript-checkbox/angular';
import { NgShadowModule } from 'nativescript-ng-shadow';

// app
import { SHARED_COMPONENTS, SHARED_ENTRY_COMPONENTS } from './components';
import { SHARED_DIRECTIVES } from './directives';
// import { SHARED_PIPES } from './pipes';

const SHARED_MODULES: any[] = [
  NativeScriptModule,
  NativeScriptRouterModule,
  NativeScriptFormsModule,
  NativeScriptUISideDrawerModule,
  // NativeScriptUICalendarModule,
  NativeScriptUIListViewModule,
  TranslateModule,
  TNSFontIconModule,
  TNSCheckBoxModule,
  NgShadowModule,
];

@NgModule({
  imports: [...SHARED_MODULES],
  declarations: [
    ...SHARED_COMPONENTS,
    ...SHARED_DIRECTIVES,
    ...SHARED_ENTRY_COMPONENTS
    // ...SHARED_PIPES
  ],
  entryComponents: [...SHARED_ENTRY_COMPONENTS],
  exports: [
    ...SHARED_MODULES,
    ...SHARED_COMPONENTS,
    ...SHARED_DIRECTIVES,
    // ...SHARED_PIPES
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModule {}
