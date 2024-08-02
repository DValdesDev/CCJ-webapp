import { Component, inject } from '@angular/core';
import { GetGoogleSheetsService } from '../../services/get-google-sheets/get-google-sheets.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-mensajes-cuota',
  standalone: true,
  imports: [
    NgFor,
    CommonModule
  ],
  templateUrl: './mensajes-cuota.component.html',
  styleUrl: './mensajes-cuota.component.css'
})

export class MensajesCuotaComponent {
  constructor(
    private hojasService: GetGoogleSheetsService
  ) { }

  ngOnInit() {
    this.getHoja();
  }

  usuarios: any[] = [];

  public getHoja = async () => {
    try {
      const response = await this.hojasService.getHoja();
      this.usuarios = response.data;
      
    } catch (error) {
      console.log(error)
    }
  }

}

