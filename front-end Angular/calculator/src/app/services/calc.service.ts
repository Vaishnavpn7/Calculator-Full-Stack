import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcService {


  addition(data:any){

    let options={

      'method':'post',
      'body':JSON.stringify(data),
      'headers':{
        'content-type':'application/json'
      }
    }

    return fetch('http://127.0.0.1:8000/add',options)


  }


  sub(data:any){

    let options={

      'method':'post',
      'body':JSON.stringify(data),
      'headers':{
        'content-type':'application/json'
      }
    }

    return fetch('http://127.0.0.1:8000/sub',options)


  }

  constructor() { }
}
