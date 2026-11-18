import { Component } from '@angular/core';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [NgbAlert, FormsModule],
  selector: 'app-promo-banner-component',
  styleUrl: './promo-banner-component.css',
  templateUrl: './promo-banner-component.html',
})
export class PromoBannerComponent {
  isUsserLoggedIn: boolean = true;
  userTier: 'regular' | 'premium' | 'VIP' = 'premium';
  hasActiveDiscount: boolean = true;
}
