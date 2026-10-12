import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  Check,
  Copy,
  Download,
  Github,
  Globe,
  Linkedin,
  LucideAngularModule,
  Mail,
  Phone,
} from 'lucide-angular';
import { copyToClipboard } from '../../core/clipboard';
import { PROFILE } from '../../data/portfolio.data';

type CopyTarget = 'email' | 'phone';

@Component({
  selector: 'app-contact',
  imports: [LucideAngularModule],
  templateUrl: './contact.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  protected readonly profile = PROFILE;
  protected readonly icons = { Check, Copy, Download, Github, Globe, Linkedin, Mail, Phone };

  protected readonly copied = signal<CopyTarget | null>(null);
  protected readonly status = signal('');
  private timer?: ReturnType<typeof setTimeout>;

  protected async copy(target: CopyTarget): Promise<void> {
    const text = target === 'email' ? this.profile.email : this.profile.phone;
    const ok = await copyToClipboard(text);
    const label = target === 'email' ? 'Correo' : 'Teléfono';

    this.copied.set(ok ? target : null);
    this.status.set(ok ? `${label} copiado al portapapeles` : 'No se pudo copiar');

    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.copied.set(null);
      this.status.set('');
    }, 2500);
  }
}
