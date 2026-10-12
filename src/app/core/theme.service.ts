import { DOCUMENT, Injectable, PLATFORM_ID, effect, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);

  // El script de index.html ya aplicó la clase antes de arrancar Angular
  readonly theme = signal<Theme>(
    this.document.documentElement.classList.contains('dark') ? 'dark' : 'light',
  );

  constructor() {
    effect(() => {
      this.document.documentElement.classList.toggle('dark', this.theme() === 'dark');
    });

    // Al prerenderizar no hay ventana ni preferencias del sistema
    if (!isPlatformBrowser(inject(PLATFORM_ID))) return;

    // Sigue al sistema mientras el usuario no haya elegido un tema a mano
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    media.addEventListener('change', (event) => {
      if (!this.readSaved()) this.theme.set(event.matches ? 'dark' : 'light');
    });
  }

  toggle(): void {
    const next: Theme = this.theme() === 'dark' ? 'light' : 'dark';
    this.theme.set(next);
    try {
      // Si coincide con el sistema se olvida la elección y se vuelve a seguir al sistema
      if (next === this.systemTheme()) localStorage.removeItem(STORAGE_KEY);
      else localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Almacenamiento no disponible (modo privado): el tema solo dura esta visita
    }
  }

  private systemTheme(): Theme {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  private readSaved(): string | null {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch {
      return null;
    }
  }
}
