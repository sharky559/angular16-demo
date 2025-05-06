import { Pipe, PipeTransform } from '@angular/core';
import { PayeeType } from 'src/app/model/transaction.model';

export const PayeeTypeMap = {
  [PayeeType.Public]: '对公收款人',
  [PayeeType.Private]: '对私收款人',
};

@Pipe({
  name: 'payeeTypeTranslate',
  standalone: true
})
export class PayeeTypeTranslatePipe implements PipeTransform {
  transform(value: PayeeType): string {
    return PayeeTypeMap[value] || '--';
  }
}
