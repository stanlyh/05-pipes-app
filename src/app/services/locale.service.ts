import { Injectable, signal } from '@angular/core';

type AvailableLocale = es'|'fr'|'en';

@Injectable({providedIn: 'root'})
export class LocaleService {

  private currentLocale = signal<AvailableLocale>('es');

  constructor() {}

  get getLocale() {
    return this.currentLocale();
  }

  changeLocale(locale: AvailableLocale) {
    this.currentLocale.set(locale);
  }

}
