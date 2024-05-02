import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    // { path: '', redirectTo: 'pins', pathMatch: 'full' },
    // { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
    // { path: 'pins', loadChildren: () => import('./pins/pins.module').then(m => m.PinsModule) },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
