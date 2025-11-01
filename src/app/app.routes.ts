import { Routes } from '@angular/router';
import { Home } from '../home/home';
import { Donate } from '../donate/donate';

export const routes: Routes = [
  {path: "", component: Home},
  {path: "donate", component: Donate},
];
