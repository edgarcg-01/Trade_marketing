import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

export type FotoTipo = 'entrega_firmada' | 'ine_receptor' | 'paquete' | 'daño' | 'general';

export interface FotoMetadata {
  lat?: number;
  lng?: number;
  timestamp?: string;
  device?: string;
}

export interface Foto {
  id: string;
  embarque_id: string;
  guia_id: string;
  chofer_id: string;
  tipo: FotoTipo;
  url: string;
  public_id: string;
  metadata?: FotoMetadata;
  fecha_subida: string;
  fecha_hora_subida?: string; // Fecha y hora completas de subida
  created_at: string;
  updated_at: string;
}

export interface ValidacionFotos {
  valid: boolean;
  missing: FotoTipo[];
}

@Injectable({
  providedIn: 'root'
})
export class FotosService {
  private apiUrl = `${environment.apiUrl}/fotos`;

  constructor(private http: HttpClient) {}

  /**
   * Subir foto usando FormData (para archivos de la cámara)
   */
  uploadFoto(
    file: File,
    embarqueId: string,
    guiaId: string,
    choferId: string,
    tipo: FotoTipo,
    metadata?: FotoMetadata
  ): Observable<Foto> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('choferId', choferId);
    formData.append('tipo', tipo);
    
    if (metadata?.lat !== undefined) {
      formData.append('lat', metadata.lat.toString());
    }
    if (metadata?.lng !== undefined) {
      formData.append('lng', metadata.lng.toString());
    }
    if (metadata?.timestamp) {
      formData.append('timestamp', metadata.timestamp);
    }

    return this.http.post<Foto>(`${this.apiUrl}/upload/${embarqueId}/${guiaId}`, formData);
  }

  uploadGeneric(file: File, tipo: string, metadata?: any): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('tipo', tipo);
    if (metadata) {
      formData.append('metadata', JSON.stringify(metadata));
    }
    return this.http.post<any>(`${this.apiUrl}/upload-generic`, formData);
  }

  /**
   * Subir foto en base64 (para firmas o capturas de canvas)
   */
  uploadFotoBase64(
    base64: string,
    embarqueId: string,
    guiaId: string,
    choferId: string,
    tipo: FotoTipo,
    metadata?: FotoMetadata
  ): Observable<Foto> {
    const body = {
      choferId,
      tipo,
      base64,
      lat: metadata?.lat,
      lng: metadata?.lng,
      timestamp: metadata?.timestamp || new Date().toISOString(),
    };

    return this.http.post<Foto>(`${this.apiUrl}/upload-base64/${embarqueId}/${guiaId}`, body);
  }

  /**
   * Obtener todas las fotos de un embarque
   */
  getByEmbarque(embarqueId: string): Observable<Foto[]> {
    return this.http.get<Foto[]>(`${this.apiUrl}/${embarqueId}`);
  }

  /**
   * Obtener fotos por tipo
   */
  getByEmbarqueAndTipo(embarqueId: string, tipo: FotoTipo): Observable<Foto[]> {
    return this.http.get<Foto[]>(`${this.apiUrl}/${embarqueId}/${tipo}`);
  }

  /**
   * Validar que existan las fotos requeridas (entrega_firmada e ine_receptor)
   */
  validarFotosRequeridas(embarqueId: string): Observable<ValidacionFotos> {
    return this.http.get<ValidacionFotos>(`${this.apiUrl}/validar/${embarqueId}`);
  }

  /**
   * Eliminar una foto
   */
  deleteFoto(fotoId: string): Observable<{ success: boolean }> {
    return this.http.delete<{ success: boolean }>(`${this.apiUrl}/${fotoId}`);
  }

  /**
   * Verificar si ya existen fotos requeridas
   */
  async checkFotosRequeridasExist(embarqueId: string): Promise<{ entrega_firmada: boolean; ine_receptor: boolean }> {
    try {
      const validacion = await this.validarFotosRequeridas(embarqueId).toPromise();
      return {
        entrega_firmada: !validacion?.missing.includes('entrega_firmada'),
        ine_receptor: !validacion?.missing.includes('ine_receptor'),
      };
    } catch {
      return { entrega_firmada: false, ine_receptor: false };
    }
  }

  /**
   * Capturar foto desde la cámara del dispositivo
   */
  async captureFromCamera(): Promise<File | null> {
    return new Promise((resolve) => {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';
      input.capture = 'environment'; // Usa la cámara trasera en móviles
      
      input.onchange = (event: any) => {
        const file = event.target.files?.[0];
        resolve(file || null);
      };
      
      input.click();
    });
  }

  /**
   * Convertir File a base64
   */
  fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  }

  /**
   * Obtener ubicación actual del dispositivo
   */
  async getCurrentLocation(): Promise<{ lat: number; lng: number } | null> {
    return new Promise((resolve) => {
      if (!navigator.geolocation) {
        resolve(null);
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        () => {
          resolve(null);
        },
        { enableHighAccuracy: true, timeout: 10000 }
      );
    });
  }
}
