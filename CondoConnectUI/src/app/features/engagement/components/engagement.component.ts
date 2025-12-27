import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as EngagementActions from '../store/engagement.actions';
import * as EngagementSelectors from '../store/engagement.selectors';
import { Observable } from 'rxjs';
import { Post } from '../models/engagement.model';

@Component({
  selector: 'app-engagement',
  templateUrl: './engagement.component.html',
  styleUrl: './engagement.component.scss',
  standalone: false
})
export class EngagementComponent implements OnInit {
  public posts$: Observable<Post[]>;
  public loading$: Observable<boolean>;
  public error$: Observable<any>;

  constructor(private store: Store) {
    this.posts$ = this.store.select(EngagementSelectors.selectAllPosts);
    this.loading$ = this.store.select(EngagementSelectors.selectEngagementLoading);
    this.error$ = this.store.select(EngagementSelectors.selectEngagementError);
  }

  public ngOnInit(): void {
    this.store.dispatch(EngagementActions.loadPosts());
  }
}