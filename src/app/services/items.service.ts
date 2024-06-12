import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { ColumnType } from '../app.component';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  selectedItemSubject = new BehaviorSubject<IItem | null>(null);
  selectedItem$ = this.selectedItemSubject.asObservable();

  itemsSubject = new BehaviorSubject<IItem[]>([]);
  items$ = this.itemsSubject.asObservable();

  selectedColumnSubject = new BehaviorSubject<ColumnType | null>(null);
  selectedColumn$ = this.selectedColumnSubject.asObservable();

  getItems() {
    this.itemsSubject.next([...mockItems]);
  }
}

const mockItems: IItem[] = [
  {
    id: '1',
    firstName: 'Dimitrije',
    lastName: 'Randjelovic',
    accountNumber: uuidv4(),
  },
  {
    id: '2',
    firstName: 'Djordje',
    lastName: 'Jovic',
    accountNumber: uuidv4(),
  },
  {
    id: '3',
    firstName: 'Lazar',
    lastName: 'Krmpot',
    accountNumber: uuidv4(),
  },
  {
    id: '4',
    firstName: 'Jovan',
    lastName: 'Jelic',
    accountNumber: uuidv4(),
  },
  {
    id: '5',
    firstName: 'Petar',
    lastName: 'Kovacevic',
    accountNumber: uuidv4(),
  },
];

export interface IItem {
  id: string;
  firstName: string;
  lastName: string;
  accountNumber: string;
}
