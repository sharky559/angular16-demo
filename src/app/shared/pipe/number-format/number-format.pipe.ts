import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFormat',
  standalone: true,
})
export class NumberFormatPipe implements PipeTransform {
  transform(value: number, min: number = 2, max: number = 2): string {
    if (value == null) return '';
    return value.toLocaleString('en-US', {
      minimumFractionDigits: min,
      maximumFractionDigits: max
    });
  }
}
