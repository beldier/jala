import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PackagesService {

  constructor(private httpServ: HttpClient) { }
getPackage(){
  return this.httpServ.get('http://late-glade-8787.getsandbox.com/packages');
}
}
