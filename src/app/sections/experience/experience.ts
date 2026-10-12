import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ArrowUpRight, LucideAngularModule } from 'lucide-angular';
import { EXPERIENCE } from '../../data/portfolio.data';

@Component({
  selector: 'app-experience',
  imports: [LucideAngularModule],
  templateUrl: './experience.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Experience {
  protected readonly items = EXPERIENCE;
  protected readonly icons = { ArrowUpRight };
}
