
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

  externalURL: SafeResourceUrl = '';
  url: string = 'https://www.google.com/search?igu=1';
  constructor(
    public sanitizer: DomSanitizer,
  ) {

  }

  ngOnInit(): void {
      
    this.externalURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
}