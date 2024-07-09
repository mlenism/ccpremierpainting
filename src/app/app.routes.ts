import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/feature/home.component';
import { InteriorPaintingComponent } from './pages/interior-painting/feature/interior-painting.component';
import { ExteriorPaintingComponent } from './pages/exterior-painting/feauture/exterior-painting.component';
import { CommercialPaintingComponent } from './pages/commercial-painting/feature/commercial-painting.component';
import { PressureWashingComponent } from './pages/pressure-washing/feature/pressure-washing.component';
import { DrywallServicesComponent } from './pages/drywall-services/feature/drywall-services.component';
import { GalleryComponent } from './pages/gallery/feature/gallery.component';
import { ServiceAreaComponent } from './pages/service-area/feature/service-area.component';
import { AboutUsComponent } from './pages/about-us/feature/about-us.component';
import { ReferralsComponent } from './pages/referrals/feature/referrals.component';
import { ReviewsComponent } from './pages/reviews/feature/reviews.component';
import { ContactComponent } from './pages/contact/feature/contact.component';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/feature/home.component')
            .then(m => m.HomeComponent)
    },
    {
        path: 'interior-painting',
        loadComponent: () => import('./pages/interior-painting/feature/interior-painting.component')
            .then(m => m.InteriorPaintingComponent)
    },
    {
        path: 'exterior-painting',
        loadComponent: () => import('./pages/exterior-painting/feauture/exterior-painting.component')
            .then(m => m.ExteriorPaintingComponent)
    },
    {
        path: 'commercial-painting',
        loadComponent: () => import('./pages/commercial-painting/feature/commercial-painting.component')
            .then(m => m.CommercialPaintingComponent)
    },
    {
        path: 'pressure-washing',
        loadComponent: () => import('./pages/pressure-washing/feature/pressure-washing.component')
            .then(m => m.PressureWashingComponent)
    },
    {
        path: 'drywall-services',
        loadComponent: () => import('./pages/drywall-services/feature/drywall-services.component')
            .then(m => m.DrywallServicesComponent)
    },
    {
        path: 'gallery',
        loadComponent: () => import('./pages/gallery/feature/gallery.component')
            .then(m => m.GalleryComponent)
    },
    {
        path: 'service-area',
        loadComponent: () => import('./pages/service-area/feature/service-area.component')
            .then(m => m.ServiceAreaComponent)
    },
    {
        path: 'about-us',
        loadComponent: () => import('./pages/about-us/feature/about-us.component')
            .then(m => m.AboutUsComponent)
    },
    {
        path: 'referrals',
        loadComponent: () => import('./pages/referrals/feature/referrals.component')
            .then(m => m.ReferralsComponent)
    },
    {
        path: 'reviews',
        loadComponent: () => import('./pages/reviews/feature/reviews.component')
            .then(m => m.ReviewsComponent)
    },
    {
        path: 'contact',
        loadComponent: () => import('./pages/contact/feature/contact.component')
            .then(m => m.ContactComponent)
    }
];
