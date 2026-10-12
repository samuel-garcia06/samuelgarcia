import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ArrowRight, Briefcase, Download, Github, Linkedin, LucideAngularModule, Mail } from 'lucide-angular';
import { FACTS, PROFILE } from '../../data/portfolio.data';

@Component({
  selector: 'app-hero',
  imports: [LucideAngularModule],
  templateUrl: './hero.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  protected readonly profile = PROFILE;
  protected readonly facts = FACTS;
  protected readonly icons = { ArrowRight, Briefcase, Download, Github, Linkedin, Mail };
}
