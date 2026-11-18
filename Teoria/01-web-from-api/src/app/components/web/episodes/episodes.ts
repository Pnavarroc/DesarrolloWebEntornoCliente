import { Component, computed, effect, inject, input, linkedSignal, signal } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { OnePieceService } from '../../../services/one-piece-service';
import { RouterLink } from '@angular/router';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';

@Component({
  imports: [RouterLink, NgbPagination],
  selector: 'app-episodes',
  styleUrl: './episodes.css',
  templateUrl: './episodes.html',
})
export class Episodes {
  private readonly onePieseService: OnePieceService = inject(OnePieceService);
  seasonId = input<string>('');
  currentPage = signal(1);

  resourceSeason = rxResource({
    params: () => ({ id: this.seasonId(), page: this.currentPage() }),
    stream: ({ params }) => this.onePieseService.getSeasonById(params.id, params.page),
  });

  readonly episodes = computed(() => this.resourceSeason.value()?.data ?? []);

  /*total = computed(()=>
    this.resourceSeason.value()?.total ?? 0);*/

  total = linkedSignal<number | undefined, number>({
    source: ()=> this.resourceSeason.value()?.total,
    computation: (newTotal, previous)=> newTotal ?? previous?.value ?? 0
  });

  constructor() {
    effect(() => {
      console.log(this.resourceSeason);
      console.log(this.seasonId());
    });
  }

  protected changePage(event: number) {
    this.currentPage.set(event);
  }
}
