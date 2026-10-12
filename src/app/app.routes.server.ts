import { RenderMode, ServerRoute } from '@angular/ssr';

// Todo se genera como HTML estático al compilar: GitHub Pages no ejecuta servidor
export const serverRoutes: ServerRoute[] = [{ path: '**', renderMode: RenderMode.Prerender }];
