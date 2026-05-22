import { Component } from '@angular/core';

@Component({
  selector: 'app-hoa-don-detail',
  imports: [],
  templateUrl: './hoa-don-detail.component.html',
  styleUrl: './hoa-don-detail.component.scss',
})
export class HoaDonDetailComponent {
printInvoice(): void {
  window.print();
}
}
