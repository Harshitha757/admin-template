
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'reverse'
})
export class ReversePipe implements PipeTransform {
    transform(values) {
        console.log(values);
        if (values) { return values.slice().reverse(); }
    }
}
