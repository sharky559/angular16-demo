import { Pipe, PipeTransform } from '@angular/core';
import { PayPlatform } from 'src/app/model/transaction.model';

export interface PayPlatformInfo {
  icon: string;
  name: string;
}

export const PayPlatformIconMap: Record<
  PayPlatform,
  PayPlatformInfo
> = {
  [PayPlatform.WorldFirst]: {
    icon: 'https://th.bing.com/th/id/ODLS.6d4c764c-96e7-47cd-93c2-5982636caef8',
    name: '万里汇',
  },
  [PayPlatform.CMB]: {
    icon: 'https://th.bing.com/th/id/ODLS.09e1227b-cca9-4505-ae98-b00227886f24',
    name: '中国招商银行',
  },
  [PayPlatform.ICBC]: {
    icon: 'https://th.bing.com/th/id/ODLS.2bea471a-e96b-4e50-be74-d95b46850148',
    name: '中国工商银行',
  },
};

@Pipe({
  name: 'payPlatform',
  standalone: true,
})
export class PayPlatformPipe implements PipeTransform {
  transform(value: PayPlatform): PayPlatformInfo {
    return PayPlatformIconMap[value];
  }
}
