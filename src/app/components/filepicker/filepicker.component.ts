import { Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ColumnType } from '../../app.component';
import { ExcelService } from '../../services/excel.service';
import { IItem, ItemsService } from '../../services/items.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filepicker',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './filepicker.component.html',
})
export class FilepickerComponent {
  tableItems: IItem[] = [];
  selectedItem: IItem | null = null;
  selectedColumn: ColumnType | null = null;

  constructor(
    private itemsService: ItemsService,
    private excelService: ExcelService
  ) {
    itemsService.selectedItem$
      .pipe(takeUntilDestroyed())
      .subscribe((d) => (this.selectedItem = d));

    itemsService.selectedColumn$
      .pipe(takeUntilDestroyed())
      .subscribe((d) => (this.selectedColumn = d));
  }

  async onFileChange(e: any) {
    const file = e.target.files[0];
    if (!file) {
      return;
    }

    this.tableItems = await this.excelService.parseExcel(file);
  }

  isSelected(item: IItem, column: ColumnType) {
    return item.id == this.selectedItem?.id && column == this.selectedColumn;
  }
}
