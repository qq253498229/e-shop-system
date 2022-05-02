import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Shop, ShopSelectors } from '../../../store/shop';
import { Navigate } from '@ngxs/router-plugin';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  listOfData: Shop[] = [];

  constructor(
    private store: Store,
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch(new Shop.Get()).subscribe(() => {
      this.listOfData = this.store.selectSnapshot(ShopSelectors.list);
    });
  }

  gotoDetails(item: any) {
    this.store.dispatch(new Navigate(['/goods/details', item.id]));
  }
}
