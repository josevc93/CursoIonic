import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'lenghtFormat'
})

export class lenghtFormat implements PipeTransform {
    transform(text: string, lenght: number): string {
        if (text.length > lenght){
            return text.substring(0, lenght-3) + '...';
        }
    }

}
