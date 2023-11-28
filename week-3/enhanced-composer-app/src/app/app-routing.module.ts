import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
<<<<<<< HEAD
=======
import { ComposerDetailsComponent } from './composer-details/composer-details.component';
>>>>>>> a7f82163e183e370c5382aae38d84fce2042839d

const routes: Routes = [
  {
    path: '',
    component: ComposerListComponent
  },
  {
    path: 'composer-list',
    component: ComposerListComponent
  },
  {
<<<<<<< HEAD
=======
    path: 'composer-details/:composerId',
    component: ComposerDetailsComponent
  },
  {
>>>>>>> a7f82163e183e370c5382aae38d84fce2042839d
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
<<<<<<< HEAD
  }
=======
  },
>>>>>>> a7f82163e183e370c5382aae38d84fce2042839d
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
