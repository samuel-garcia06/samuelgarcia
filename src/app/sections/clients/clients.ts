import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ArrowUpRight, LucideAngularModule } from 'lucide-angular';
import { CLIENTS, PROFILE } from '../../data/portfolio.data';

@Component({
  selector: 'app-clients',
  imports: [LucideAngularModule],
  templateUrl: './clients.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Clients {
  protected readonly clients = CLIENTS;
  protected readonly profile = PROFILE;
  protected readonly icons = { ArrowUpRight };
}
