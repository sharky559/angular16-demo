import { BaseQueryParams } from './public.model';

export enum PayeeType {
  Public = 'Public',
  Private = 'Private',
}

export enum Currency {
  USD = 0,
  CNY,
  JPY,
  HKD,
}

export enum PayStatus {
  /** 已完成 */
  fulfilled = 'fulfilled',
  /** 待复核 */
  pending = 'pending',
}

export enum PayPlatform {
  WorldFirst = 0,
  ICBC,
  CMB,
}

export interface TransactionItem {
  transactionId: number;
  /** 付款人账号 */
  payerAccount: string;
  /** 付款人 */
  payerName: string;
  /** 付款人平台 */
  payerPlatForm: PayPlatform;
  /** 收款人账号 */
  payeeAccount: string;
  /** 收款人 */
  payeeName: string;
  /** 付款人平台 */
  payeePlatForm: PayPlatform;
  /** 收款人类型 */
  payeeType: PayeeType;
  /** 付款金额 */
  payAmount: number;
  /** 付款币种 */
  payCurrency: Currency;
  /** 收款金额 */
  receiveAmount: number;
  /** 收款币种 */
  receiveCurrency: Currency;
  /** 转账汇率 */
  rate: number;
  /** 手续费 */
  fee: number;
  /** 付款类型 */
  payType: string;
  /** 用途 */
  usage: string;
  /** 交易状态 */
  payStatus: PayStatus;
}

export interface FilterParams
  extends BaseQueryParams,
    Pick<TransactionItem, 'payeeAccount' | 'payerAccount' | 'payCurrency'> {
  minAccount: number;
  maxAccount: number;
}

export const TransactionListMockData = {
  pageable: {
    hasNext: false,
    hasPre: false,
    isFirst: false,
    isLast: false,
    pageNow: 1,
    pageSize: 10,
    totalCount: 1,
    totalPageCount: 1,
  },
  list: [
    {
      transactionId: 68846297323,
      payerAccount: '2120120096074781USD',
      payerName: '见知数据科技有限公司',
      payerPlatForm: PayPlatform.WorldFirst,
      payeeAccount: '446037882767',
      payeeName: 'Nanqing Jiang',
      payeePlatForm: PayPlatform.ICBC,
      payeeType: PayeeType.Public,
      payAmount: 50,
      payCurrency: Currency.USD,
      receiveAmount: 50,
      receiveCurrency: Currency.USD,
      rate: 1.0,
      fee: 0,
      payType: '',
      usage: '员工报销',
      payStatus: PayStatus.pending,
    },
    {
      transactionId: 80323283293,
      payerAccount: '2120120096074781USD',
      payerName: '见知数据科技有限公司',
      payerPlatForm: PayPlatform.WorldFirst,
      payeeAccount: '446037882767',
      payeeName: '小米科技有限公司',
      payeePlatForm: PayPlatform.CMB,
      payeeType: PayeeType.Private,
      payAmount: 200000,
      payCurrency: Currency.USD,
      receiveAmount: 101700,
      receiveCurrency: Currency.CNY,
      rate: 7.02,
      fee: 2.87,
      payType: '',
      usage: '转账',
      payStatus: PayStatus.pending,
    },
  ],
};
