import { Pipe, PipeTransform } from '@angular/core';
import { PayStatus } from 'src/app/model/transaction.model';

export const PAY_STATUS_MAP: Record<PayStatus, string> = {
  [PayStatus.fulfilled]: '已完成',
  [PayStatus.pending]: '待复核',
};

@Pipe({
  name: 'payStatusTranslate',
  standalone: true,
})
export class PayStatusTranslatePipe implements PipeTransform {

  transform(value: PayStatus): string {
    return PAY_STATUS_MAP[value] || value;
  }
}
