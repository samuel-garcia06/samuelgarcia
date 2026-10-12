import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Github, LucideAngularModule } from 'lucide-angular';
import { PROJECTS } from '../../data/portfolio.data';

@Component({
  selector: 'app-projects',
  imports: [LucideAngularModule],
  templateUrl: './projects.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {
  protected readonly projects = PROJECTS;
  protected readonly icons = { Github };
}
