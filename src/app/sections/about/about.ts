import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ABOUT, PROFILE } from '../../data/portfolio.data';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  protected readonly about = ABOUT;
  protected readonly profile = PROFILE;
}
