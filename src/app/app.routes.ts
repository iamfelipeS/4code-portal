import { Routes } from '@angular/router';

export const routes: Routes = [
    // 🌐 Público
    {
        path: '',
        loadComponent: () =>
            import('./layouts/public/public-layout/public-layout.component').then(m => m.PublicLayoutComponent),
        children: [
            {
                path: '',
                loadComponent: () =>
                    import('./views/home/home.component').then(m => m.HomeComponent),
            },
            {
                path: 'login',
                loadComponent: () =>
                    import('./views/login/login.component').then(m => m.LoginComponent),
            },
            {
                path: 'register',
                loadComponent: () =>
                    import('./views/register/register.component').then(m => m.RegisterComponent),
            },
            {
                path: 'dashboard',
                loadComponent: () =>
                    import('./views/portal/dashboard/dashboard.component').then(m => m.DashboardComponent),
            },
            {
                path: 'produtos',
                loadComponent: () =>
                    import('./views/products/products.component').then(m => m.ProductsComponent),
            },
            {
                path: 'produtos/:slug',
                loadComponent: () =>
                    import('./views/product-details/product-details.component').then(m => m.ProductDetailsComponent),
            },

        ],
    },

    // 👤 Portal (cliente) 
    {
        path: 'portal',
        loadComponent: () =>
            import('./layouts/portal/portal-layout/portal-layout.component').then(m => m.PortalLayoutComponent),
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
            {
                path: 'dashboard',
                loadComponent: () =>
                    import('./views/portal/dashboard/dashboard.component').then(m => m.DashboardComponent),
            },
            {
                path: 'products',
                loadComponent: () =>
                    import('./views/portal/products/products.component').then(m => m.ProductsComponent),
            },
            {
                path: 'billing',
                loadComponent: () =>
                    import('./views/portal/billing/billing.component').then(m => m.BillingComponent),
            },
            {
                path: 'account',
                loadComponent: () =>
                    import('./views/portal/account/account.component').then(m => m.AccountComponent),
            },
        ],
    },

    // 🧑‍💼 Admin (protegido)
    //{
    // path: 'admin',
    // canMatch: [authGuard],
    // loadComponent: () =>
    //   import('./layouts/admin/admin-layout/admin-layout.component').then(m => m.AdminLayoutComponent),
    // children: [
    //   {
    //     path: '',
    //     pathMatch: 'full',
    //     redirectTo: 'product',
    //   },
    //   {
    //     path: 'product',
    //     loadComponent: () =>
    //       import('./views/admin/product/product.component').then(m => m.ProductComponent),
    //   },
    //   {
    //     path: 'category',
    //     loadComponent: () =>
    //       import('./views/admin/category/category.component').then(m => m.CategoryComponent),
    //   },
    //   {
    //     path: 'leads',
    //     loadComponent: () =>
    //       import('./views/admin/leads/leads.component').then(m => m.LeadsComponent),
    //   },
    //   {
    //     path: 'options',
    //     loadComponent: () =>
    //       import('./views/admin/options/options.component').then(m => m.OptionsComponent),
    //   }
    // ],
    //},

    // 👤 Usuário (lazy)
    //   {
    //     path: 'user',
    //     component: UserLayoutComponent,
    //     loadChildren: () =>
    //       import('./views/user/user.routes').then((m) => m.userRoutes),
    //   },

    // ❌ 404
    {
        path: '**',
        loadComponent: () =>
            import('./views/not-found/not-found.component').then(m => m.NotFoundComponent),
    },

];
