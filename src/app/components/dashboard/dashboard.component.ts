import { Component } from '@angular/core';
import { IItem, ItemsService } from '../../services/items.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ColumnType } from '../../app.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  items: IItem[] = [];

  constructor(private itemsService: ItemsService) {
    itemsService.items$
      .pipe(takeUntilDestroyed())
      .subscribe((d) => (this.items = d));
  }

  getMockApiData() {
    this.itemsService.getItems();
  }

  onFocus(item: IItem, column: ColumnType) {
    this.itemsService.selectedItemSubject.next(item);
    this.itemsService.selectedColumnSubject.next(column);
  }

  onBlur() {
    this.itemsService.selectedItemSubject.next(null);
    this.itemsService.selectedColumnSubject.next(null);
  }
}
