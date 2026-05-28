import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShipmentsService {
  private apiUrl = `${environment.apiUrl}/shipments`;

  constructor(private http: HttpClient) {}

  findAll(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  findOne(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  update(id: string, data: any): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/${id}`, data);
  }

  getDashboard(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/dashboard`);
  }

  downloadPdf(id: string): Observable<Blob> {
    return this.http.get(`${environment.apiUrl}/reports/shipment/${id}/pdf`, {
      responseType: 'blob'
    });
  }

  getStatuses(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/statuses`);
  }
}

@Injectable({
  providedIn: 'root'
})
export class FleetService {
  private apiUrl = `${environment.apiUrl}/fleet`;

  constructor(private http: HttpClient) {}

  findAll(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  create(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  update(id: string, data: any): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/${id}`, data);
  }

  getHistory(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}/history`);
  }

  // Bitácora de Uso
  checkIn(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/usage/check-in`, data);
  }

  checkOut(id: string, data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/usage/${id}/check-out`, data);
  }

  getActiveLogs(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/usage/active`);
  }

  // Mantenimientos
  createMaintenance(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/maintenance`, data);
  }

  getMaintenance(filters: any = {}): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/maintenance`, { params: filters });
  }
}

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  private apiUrl = `${environment.apiUrl}/staff`;

  constructor(private http: HttpClient) {}

  findAll(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  create(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  update(id: string, data: any): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/${id}`, data);
  }

  getRoles(): Observable<{ label: string; value: string }[]> {
    return this.http.get<{ label: string; value: string }[]>(`${this.apiUrl}/roles`);
  }
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private apiUrl = `${environment.apiUrl}/config`;

  constructor(private http: HttpClient) {}

  getPeriods(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/periods`);
  }

  getCurrentPeriod(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/periods/current`);
  }

  getFinanzas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/finance`);
  }

  getDestinos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/destinos`);
  }

  createDestino(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/destinos`, data);
  }

  updateDestino(id: string, data: any): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/destinos/${id}`, data);
  }

  deleteDestino(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/destinos/${id}`);
  }
}

@Injectable({
  providedIn: 'root'
})
export class GuidesService {
  private apiUrl = `${environment.apiUrl}/guides`;

  constructor(private http: HttpClient) {}

  getGuides(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getGuide(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  update(id: string, data: any): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/${id}`, data);
  }

  updateStatus(id: string, estado: string): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/${id}/status`, { estado });
  }
}

@Injectable({
  providedIn: 'root'
})
export class CostsService {
  private apiUrl = `${environment.apiUrl}/logistics/costs`;

  constructor(private http: HttpClient) {}

  findAll(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  findByEmbarque(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/embarque/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  update(id: string, data: any): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/${id}`, data);
  }
}
