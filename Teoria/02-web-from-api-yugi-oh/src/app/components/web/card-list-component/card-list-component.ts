import { Component, computed, inject, signal } from '@angular/core';
import { YugiOhService } from '../../../services/yugi-oh-service';
import { YugiOhCard } from '../../../common/models/card.model';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-card-list-component',
  styleUrl: './card-list-component.css',
  templateUrl: './card-list-component.html',
})
export class CardListComponent {
  private readonly yugiOhService: YugiOhService = inject(YugiOhService);

  apiResponse = toSignal(this.yugiOhService.getCards());
  cards = computed(() => {
    const resp = this.apiResponse();
    if (resp) return resp.data;
    else return [];
  });

  isLoading = computed(() => this.apiResponse() === undefined);
  isError = computed(() => this.apiResponse === null);
}
