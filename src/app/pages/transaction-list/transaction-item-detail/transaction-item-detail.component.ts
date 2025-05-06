import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Currency, TransactionItemDetail } from 'src/app/model/transaction.model';
import { TransactionService } from 'src/app/shared/services/transaction.service';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { PayPlatformPipe } from 'src/app/shared/pipe/pay-platform/pay-platform.pipe';
import { PayStatusTranslatePipe } from 'src/app/shared/pipe/pay-status-translate/pay-status-translate.pipe';
import { NumberFormatPipe } from 'src/app/shared/pipe/number-format/number-format.pipe';
import { CardComponent } from 'src/app/shared/component/card/card.component';
import { NZ_MODAL_DATA } from 'ng-zorro-antd/modal';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-transaction-item-detail',
  templateUrl: './transaction-item-detail.component.html',
  standalone: true,
  imports: [
    CommonModule,
    NzGridModule,
    NzCardModule,
    NzDescriptionsModule,
    NumberFormatPipe,
    PayPlatformPipe,
    PayStatusTranslatePipe,
    CardComponent,
    NzIconModule,
  ],
})
export class TransactionListDetailComponent implements OnInit {
  Currency = Currency;
  transaction!: TransactionItemDetail;
  readonly nzModalData: { transactionId: number} = inject(NZ_MODAL_DATA);

  private _transactionService = inject(TransactionService);

  ngOnInit() {
    console.log(this.nzModalData.transactionId);
    this.loadData();
  }

  loadData(): void {
    this._transactionService
      .getTransactionDetail(this.nzModalData.transactionId)
      .subscribe({
        next: (res) => {
          this.transaction = res;
        },
      });
  }
}
