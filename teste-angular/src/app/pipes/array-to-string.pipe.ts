import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'arrayToString'
})

export class arrayToStringPipe implements PipeTransform{
    transform(value: any[], ...args: any[]) {
       return value.reduce((previousValue, currentValue)=>{
           return previousValue += (', '+currentValue.toString());
        }, '')
    }

}