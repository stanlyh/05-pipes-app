import { Component, signal } from '@angular/core';
import { CardComponent } from "../../componentes/card/card.component";
import { I18nPluralPipe, I18nSelectPipe, SlicePipe } from '@angular/common';

const client1 = {
  name: 'Azul',
  gender: 'male',
  age: 39,
  address: 'Ottawa, Canadá'
}

const client2 = {
  name: 'Celeste',
  gender: 'female',
  age: 23,
  address: 'Toronto, Canadá'
}

@Component({
  selector: 'app-uncommon-page',
  imports: [CardComponent, I18nSelectPipe, I18nPluralPipe, SlicePipe],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {

  // i18n Select
  client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient() {
    if (this.client() == client1) {
      this.client.set(client2);
      return;
    }
    this.client.set(client1);
  }

  // i18n Plural
  mininosMap = signal({
    '=0': 'no tenemos ningun minino esperando',
    '=1': 'tenemos un minino esperando',
    '=2': 'tenemos 2 mininos esperando',
    other: 'tenemos # mininos esperando',
  });

  mininos = signal([
    'Celeste',
    'Evangeline',
    'Azul',
    'Alely',
    'Cristal',
    'Amanda',
    'Asraela',
    'Caramelo',
  ]);

  deleteMinino() {
    this.mininos.update((prev) => prev.slice(1));
  }

 }
