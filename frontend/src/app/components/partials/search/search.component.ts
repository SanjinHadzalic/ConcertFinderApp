import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'] // Correct the typo: styleUrls instead of styleUrl
})
export class SearchComponent {
  searchTerm = '';

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) {
        this.searchTerm = params.searchTerm;
      }
    });
  }

  search(term: string): void {
    if (term) {
      console.log(term)
      this.router.navigateByUrl('/search/' + term);
    }
    if(!term) {
      this.router.navigateByUrl('');
    }
  }
}
