import * as xlsx from 'xlsx';

export interface worksheetRange {
  rows: number;
  cols: number;
}

export const getWorksheetRange = (
  worksheet: xlsx.WorkSheet
): worksheetRange => {
  if (worksheet['!ref']) {
    const parts = xlsx.utils.decode_range(worksheet['!ref']);
    const numCols = parts.e.c - parts.s.c + 1;
    const numRows = parts.e.r - parts.s.r + 1;
    return { rows: numRows, cols: numCols };
  }
  return { rows: 0, cols: 0 };
};
export const columnToLetter = (column: number): string => {
  let temp,
    letter = '';
  while (column > 0) {
    temp = (column - 1) % 26;
    letter = String.fromCharCode(temp + 65) + letter;
    column = (column - temp - 1) / 26;
  }
  return letter;
};
export const getSafeValueFromCell = (
  row: number,
  column: string,
  worksheet: xlsx.WorkSheet
): string => {
  return worksheet[`${column}${row}`] ? worksheet[`${column}${row}`].v : '';
};
