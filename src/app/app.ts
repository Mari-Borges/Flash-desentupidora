import { Component, computed, HostListener, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface FlashConfig {
  phone: string;
  whatsapp: string;
  neighborhoods: string[];
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {

  phoneNumber = signal('5598991592407'); 
  message = signal('Olá desentupidora Flash, preciso de você.');

  whatsAppLink = computed(() => {
    const baseUrl = 'https://wa.me/';
    const encodedText = encodeURIComponent(this.message());
    return `${baseUrl}${this.phoneNumber()}?text=${encodedText}`;
  });

  public flash = signal<FlashConfig>({
    phone: '+5598991592407',
    whatsapp: 'https://wa.me/5598991592407',
    neighborhoods: [
      'Cidade Operária', 'Maiobão (Maioba)', 'Forquilha', 'Anjo da Guarda',
      'Anil', 'Calhau', 'Ponta d’Areia', 'Renascença 1 e 2', 'Olho d’Água',
      'Quintas do Calhau', 'Alto do Calhau', 'São Marcos', 'Ponta do Farol',
      'Cohama', 'Cohafuma', 'Turu', 'Jardim São Cristóvão', 'Bequimão',
      'Vinhais', 'Angelim',
    ],
  });

  isMenuOpen = signal<boolean>(false);

  toggleMenu(): void {
    this.isMenuOpen.update(state => !state);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
