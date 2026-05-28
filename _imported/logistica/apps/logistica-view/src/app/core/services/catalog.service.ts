import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, of } from 'rxjs';

export interface CatalogEntry {
  id: string;
  categoria: string;
  valor: string;
  etiqueta: string;
  activo: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/config/catalogs`;

  // Mock data for development if backend is not ready
  private mockCatalogs: CatalogEntry[] = [
    // Puestos
    { id: '1', categoria: 'Puestos', valor: 'Chofer', etiqueta: 'Chofer', activo: true },
    { id: '2', categoria: 'Puestos', valor: 'Operador', etiqueta: 'Operador', activo: true },
    { id: '3', categoria: 'Puestos', valor: 'Ayudante', etiqueta: 'Ayudante', activo: true },
    // Marcas
    { id: '4', categoria: 'Marcas', valor: 'Hino', etiqueta: 'Hino', activo: true },
    { id: '5', categoria: 'Marcas', valor: 'Kenworth', etiqueta: 'Kenworth', activo: true },
    { id: '6', categoria: 'Marcas', valor: 'International', etiqueta: 'International', activo: true },
    // Tipos de Vehículo
    { id: '7', categoria: 'Vehiculos', valor: 'camion', etiqueta: 'Camión', activo: true },
    { id: '8', categoria: 'Vehiculos', valor: 'camioneta', etiqueta: 'Camioneta', activo: true }
  ];

  getCatalogs(categoria?: string): Observable<CatalogEntry[]> {
    // return this.http.get<CatalogEntry[]>(this.apiUrl, { params: categoria ? { categoria } : {} });
    let filtered = this.mockCatalogs;
    if (categoria) {
      filtered = this.mockCatalogs.filter(c => c.categoria === categoria);
    }
    return of(filtered);
  }

  saveEntry(entry: Partial<CatalogEntry>): Observable<CatalogEntry> {
    const newEntry = {
      ...entry,
      id: entry.id || crypto.randomUUID(),
      activo: entry.activo ?? true
    } as CatalogEntry;
    
    this.mockCatalogs.push(newEntry);
    return of(newEntry);
  }

  deleteEntry(id: string): Observable<boolean> {
    this.mockCatalogs = this.mockCatalogs.filter(c => c.id !== id);
    return of(true);
  }

  getCategories(): Observable<string[]> {
    const cats = [...new Set(this.mockCatalogs.map(c => c.categoria))];
    return of(cats);
  }
}
