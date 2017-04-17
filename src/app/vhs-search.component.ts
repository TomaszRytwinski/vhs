import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
// Observable class extensions
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { VhsSearchService } from './vhs-search.service';
import { Vhs } from './vhs';
import { VhsService } from './vhs.service';

@Component({
  selector: 'vhs-search',
  templateUrl: './vhs-search.component.html',
  providers: [VhsSearchService]
})

export class VhsSearchComponent implements OnInit {
  vhses: Observable<Vhs[]>;
  private searchTerms = new Subject<string>();
  constructor(
    private vhsSearchService: VhsSearchService,
    private vhsService: VhsService,
    private router: Router) { }
  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }
  ngOnInit(): void {
    this.vhses = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.vhsSearchService.search(term)
        // or the observable of empty heroes if there was no search term
        : Observable.of<Vhs[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Vhs[]>([]);
      });
  }
  gotoDetail(vhs: Vhs): void {
    let link = ['/detail', vhs.id];
    this.router.navigate(link);
  }

}
