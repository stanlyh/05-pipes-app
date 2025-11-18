import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.component.html',
})
export default class BasicPageComponent {

  nameLower = signal('celeste');
  nameUpper = signal('CELESTE');
  FullName = signal('EvaNGeliN CeleSTE');

  customDate = signal( new Date() );

  tickingDataEffect = effect((onCleanup) => {
    const interval = setInterval(() => {
      this.customDate.set(new Date());
      console.log('tick');
    }, 1000)

    //limpiar intevalo
    onCleanup(() => {
      clearInterval(interval)
    })
  });

}
