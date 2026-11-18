import { Component, inject, Signal } from '@angular/core';
import { OnePieceService } from '../../../services/one-piece-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Season } from '../../../common/models/one-piece.model';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-seasons',
  styleUrl: './seasons.css',
  templateUrl: './seasons.html',
})
export class Seasons {
  private readonly onePieceService: OnePieceService = inject(OnePieceService);

  seasons: Signal<Season[]> = toSignal(this.onePieceService.getSeasons(), { initialValue: [] });
}
