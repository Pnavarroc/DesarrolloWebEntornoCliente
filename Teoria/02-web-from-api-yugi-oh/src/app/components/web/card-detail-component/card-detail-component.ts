import { Component, inject, input } from '@angular/core';
import { YugiOhService } from '../../../services/yugi-oh-service';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  imports: [],
  selector: 'app-card-detail-component',
  styleUrl: './card-detail-component.css',
  templateUrl: './card-detail-component.html',
})
export class CardDetailComponent {
  id = input.required<number>();
  private readonly yugiOhService: YugiOhService = inject(YugiOhService);

  resourceCard = rxResource({
    params: () => ({ idCard: this.id() }),
    stream: ({ params }) =>
      this.yugiOhService.getCardById(params.idCard),
  });


}
