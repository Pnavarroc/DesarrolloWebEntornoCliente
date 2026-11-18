import { Component, signal, WritableSignal } from '@angular/core';
import { UserProfile } from '../../../common/interfaces/interface';
import { NgClass } from '@angular/common';

@Component({
  imports: [NgClass],
  selector: 'app-user-profyle-component',
  styleUrl: './user-profyle-component.css',
  templateUrl: './user-profyle-component.html',
})
export class UserProfyleComponent {
  user: WritableSignal<UserProfile> = signal<UserProfile>({
    name: 'Laura Navarro',
    city: 'Valencia',
    isPremium: false,
  });

  cambiarCiudad(): void {
    this.user.update((us) => ({
      ...us,
      city: us.city === 'Valencia' ? 'Madrid' : 'Valencia',
    }));
  }

  togglePremium(): void {
    this.user.update((currentUser) => ({
      ...currentUser,
      isPremium: !currentUser.isPremium,
    }));
  }
}

