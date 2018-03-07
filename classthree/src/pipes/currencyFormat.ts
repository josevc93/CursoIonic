import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'currencyFormat'
})

export class currencyFormat implements PipeTransform {
  transform(price: number, symbol: string): string {
    return price.toFixed(2) + symbol;
  }

}
