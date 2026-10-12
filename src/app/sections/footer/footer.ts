import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ArrowUp, LucideAngularModule } from 'lucide-angular';
import { PROFILE } from '../../data/portfolio.data';

@Component({
  selector: 'app-footer',
  imports: [LucideAngularModule],
  templateUrl: './footer.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  protected readonly profile = PROFILE;
  protected readonly year = new Date().getFullYear();
  protected readonly icons = { ArrowUp };
}
