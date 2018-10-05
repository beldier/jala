import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PackagesService {

  constructor(private httpServ: HttpClient) { }
getPackage(){
  //cambiar por localhost para conectar con el backend
  return this.httpServ.get('http://late-glade-8787.getsandbox.com/packages');
}
}
