import { Vhs } from './vhs';
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class VhsService {
  private vhsUrl = 'api/vhses';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  getVhses(): Promise<Vhs[]> {
    return this.http.get(this.vhsUrl)
      .toPromise()
      .then(response => response.json().data as Vhs[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getVhs(id: number): Promise<Vhs> {
    const url = `${this.vhsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Vhs)
      .catch(this.handleError);
  }

  update(vhs: Vhs): Promise<Vhs> {
    const url = `${this.vhsUrl}/${vhs.id}`;
    return this.http
      .put(url, JSON.stringify(vhs), { headers: this.headers })
      .toPromise()
      .then(() => vhs)
      .catch(this.handleError);
  }

  create(vhs: Vhs): Promise<Vhs> {
    return this.http
      .post(this.vhsUrl, JSON.stringify({ name: vhs.name, rented:0, year:vhs.year, urlJpeg:vhs.urlJpeg, urlGif:vhs.urlGif}), { headers: this.headers })
      .toPromise()
      .then(res => res.json().data as Vhs)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.vhsUrl}/${id}`;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

}
