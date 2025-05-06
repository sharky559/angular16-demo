import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import {
  Currency,
  FilterParams,
  TransactionItem,
} from '../../model/transaction.model';
import { TransactionService } from '../../shared/services/transaction.service';
import { NumberFormatPipe } from '../../shared/pipe/number-format/number-format.pipe';
import { PayeeTypeTranslatePipe } from '../../shared/pipe/payee-type-translate/payee-type-translate.pipe';
import { PayPlatformPipe } from '../../shared/pipe/pay-platform/pay-platform.pipe';
import { PayStatusTranslatePipe } from '../../shared/pipe/pay-status-translate/pay-status-translate.pipe';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  standalone: true,
  imports: [
    CommonModule,
    NzTableModule,
    NzButtonModule,
    NzSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NzInputModule,
    NzFormModule,
    NumberFormatPipe,
    PayeeTypeTranslatePipe,
    PayPlatformPipe,
    PayStatusTranslatePipe,
    NzIconModule,
  ],
})
export class TransactionListComponent implements OnInit {
  totalCount = signal<number>(0);
  pageNow = signal<number>(1);
  pageSize = signal<number>(10);
  loading = signal<boolean>(false);
  transactionData = signal<TransactionItem[]>([]);
  transactionConditionsForm: FormGroup;
  Currency = Currency;
  currencies = Object.keys(Currency)
    .filter((key) => isNaN(Number(key)))
    .map((key) => ({
      label: key,
      value: Currency[key as keyof typeof Currency],
    }));

  private _fb = inject(FormBuilder);
  private _transactionService = inject(TransactionService);

  constructor() {
    this.transactionConditionsForm = this._fb.group({
      payerAccount: [''],
      payerName: [''],
      minAmount: [''],
      maxAmount: [''],
      currency: [''],
    });
  }

  ngOnInit(): void {
    this.loadData();
  }

  sortPayAmount(a: TransactionItem, b: TransactionItem) {
    return a.payAmount - b.payAmount;
  }

  sortPayStatus(a: TransactionItem, b: TransactionItem) {
    return a.payStatus.localeCompare(b.payStatus);
  }

  search() {
    this.pageNow.set(1);
    this.loadData();
  }

  reset() {
    this.transactionConditionsForm.reset();
    this.loadData();
  }

  onPageChange(index: number): void {
    this.pageNow.set(index);
    this.loadData();
  }

  viewDetail(item: TransactionItem): void {
    console.log(item);
  }

  loadData(): void {
    this.loading.set(true);
    const params: FilterParams = {
      ...this.transactionConditionsForm.value,
      pageNow: this.pageNow(),
      pageSize: this.pageSize(),
    };
    this._transactionService.getTransactionList(params).subscribe({
      next: (res) => {
        const { totalCount, pageNow, pageSize } = res.pageable;
        this.transactionData.set(res.list);
        this.loading.set(false);
        this.pageNow.set(pageNow);
        this.totalCount.set(totalCount);
        this.pageSize.set(pageSize);
      },
    });
  }
}
