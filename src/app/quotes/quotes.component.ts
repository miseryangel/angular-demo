import { Component, OnInit } from '@angular/core';

import { Quote } from '../shared/quote';
import { ZenQuoteService } from '../services/zen-quote.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  data!: Quote[];
  constructor(private quoteService: ZenQuoteService) { }

  ngOnInit(): void {
    this.quoteService.getQuotes().subscribe(quotes => {
      this.data = quotes;
      console.log(quotes);
    });
  }
  

  

}
