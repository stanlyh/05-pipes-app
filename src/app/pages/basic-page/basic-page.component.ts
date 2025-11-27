import { AvailableLocale, LocaleService } from './../../services/locale.service';
import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, inject, LOCALE_ID, signal } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.component.html',
})
export default class BasicPageComponent {

  LocaleService = inject(LocaleService);
  currentLocale = signal(inject(LOCALE_ID));

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
    });
  });

  changeLocale(locale: AvailableLocale) {
    this.LocaleService.changeLocale(locale);
  }

}
