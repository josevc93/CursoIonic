import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";

export interface Exampleitems{
  title: string,
  note: string,
  icon: string,
  price: number
}

@Injectable()

export class ExampleItemsService {

  constructor(){

  }

  getExampleItems(): Subject<Exampleitems[]> {
    // Let's populate this page with some filler content for funzies
    const icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
      'american-football', 'boat', 'bluetooth', 'build'];

    let items = [];
    for (let i = 1; i < 11; i++) {
      items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: icons[Math.floor(Math.random() * icons.length)],
        price: Math.random() * 5
      });
    }

    //Retrasamos el tiempo en el que devuelve los datos (items)
    const itemsAvailables = new Subject<Exampleitems[]>();
    setTimeout(() => {
       itemsAvailables.next(items);
       itemsAvailables.complete();
    }, 1500);

    return itemsAvailables;
  }
}
