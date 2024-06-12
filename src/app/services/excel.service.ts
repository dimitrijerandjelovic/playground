import * as xlsx from 'xlsx';
import { Injectable } from '@angular/core';
import {
  columnToLetter,
  getSafeValueFromCell,
  getWorksheetRange,
} from './helper';
import { IItem } from './items.service';

@Injectable({
  providedIn: 'root',
})
export class ExcelService {
  constructor() {}

  async parseExcel(file: File) {
    const toReturn: IItem[] = [];
    const arrBuffer = await file.arrayBuffer();
    const workbook = xlsx.read(arrBuffer);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const range = getWorksheetRange(worksheet);
    for (let i = 2; i <= range.rows; i++) {
      const id = getSafeValueFromCell(i, columnToLetter(1), worksheet);
      const firstName = getSafeValueFromCell(i, columnToLetter(2), worksheet);
      const lastName = getSafeValueFromCell(i, columnToLetter(3), worksheet);
      const accountNumber = getSafeValueFromCell(
        i,
        columnToLetter(4),
        worksheet
      );

      toReturn.push({ id: +id, firstName, lastName, accountNumber });
    }

    return toReturn;
  }
}
