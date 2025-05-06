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

export interface TransactionItemDetail extends TransactionItem {
  companyName: string;
  orgCode: number;
  paymentMethod: string;
  /** 附言 */
  addendum: string;
  /** 申请部门 */
  requestDepartment: string;
  /** 电子凭证号 */
  eCertificate: string;
  /** 指令序号*/
  instructionNo: number;
  /** 批次文件 */
  batchDocuments: string;
  /** 付款方式 */
  payMethod: string;
}

export interface FilterParams
  extends BaseQueryParams,
    Pick<TransactionItem, 'payeeAccount' | 'payerAccount' | 'payCurrency'> {
  minAccount: number;
  maxAccount: number;
}
