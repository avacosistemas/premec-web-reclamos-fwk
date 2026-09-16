import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '@fwk/core';
import { PREFIX_DOMAIN_API } from 'environments/environment';

@Injectable({ providedIn: 'root' })
export class EstadisticasService extends HttpService {
    constructor(injector: Injector) {
        // super(injector, PREFIX_DOMAIN_API + 'reclamo/estadisticas/');
        super(injector, 'assets/mocks/');
    }

    getStats(maquinas: string[], periodos: { anio: number; mes: number }[]): Observable<any> {
        // return this.httpPost(this.baseUrl + 'maquina-parada', {
        //     maquinas,
        //     periodos
        // });
        return this.httpGet(this.baseUrl + 'maquina-parada.json');
    }
}
