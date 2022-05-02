import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../shared/services/common.service';
import { Store } from '@ngxs/store';
import { Shop, ShopSelectors } from '../../../store/shop';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  listOfData: Shop[] = [];

  constructor(
    private service: CommonService,
    private store: Store,
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch(new Shop.Get());
    this.listOfData = this.store.selectSnapshot(ShopSelectors.list);
  }

  test1() {
    this.service.setGlobalState({test1: {test: '123'}});
  }
}
