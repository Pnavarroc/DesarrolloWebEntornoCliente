import { Component, computed, inject, input } from '@angular/core';
import { OnePieceService } from '../../../services/one-piece-service';
import { rxResource } from '@angular/core/rxjs-interop';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';

@Component({
  imports: [NgbPagination],
  selector: 'app-episode-detail',
  styleUrl: './episode-detail.css',
  templateUrl: './episode-detail.html',
})
export class EpisodeDetail {
  private readonly onePieceService: OnePieceService = inject(OnePieceService);
  episodeNumber = input<number>(1);

  resourceEpisode = rxResource({
    params: () => ({ number: this.episodeNumber() }),
    stream: ({ params }) => this.onePieceService.getEpisodeByNumber(params.number),
  });

  episode = computed(() => this.resourceEpisode.value()?.data[0]);
}
