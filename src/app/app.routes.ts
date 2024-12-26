import { Routes } from '@angular/router';

//Importar los componentes creados
import { HomeComponent } from './pages/home/home.component';
import { LabsComponent } from './pages/labs/labs.component';

//Definir las rutas y componentes a renderizar
export const routes: Routes = [
    {path: "",
        component: HomeComponent //Componente que renderiza

    },
    {path: "labs",
        component: LabsComponent //Componente que renderiza

    }
];
