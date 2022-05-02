import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { RouterSelectors } from '../../../store/router/router';
import { Shop } from '../../../store/shop';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  details: Shop = {};

  constructor(
    private store: Store,
  ) {
  }

  ngOnInit(): void {
    const params = this.store.selectSnapshot(RouterSelectors.params);
    this.store.dispatch(new Shop.Get()).subscribe(() => {
      this.store.dispatch(new Shop.Details(params.id)).subscribe(r => {
        this.details = r.shop.details;
      });
    });
  }

}
