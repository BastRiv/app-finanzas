import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ApiRoot } from './apiroute';
import { type } from 'os';


let apiUrl = ApiRoot.url;

@Injectable({
  providedIn: 'root'
})
export class DirectoryService {

  constructor(private http: HttpClient,) {}

  getCourts(token:any) {
    return new Promise((resolve, reject) => {
    let headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':'Token '+ token});
    return this.http.get(apiUrl+ 'court/',{headers: headers})
    .subscribe(res => {
            resolve(res);
    }, (err) => {
            reject(err);
    });
    
  });
}




createMatch(token:any, data:any) {
  return new Promise((resolve, reject) => {
    let headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Token '+ token});

    this.http.post(apiUrl + "game/", JSON.stringify(data), {headers: headers})
    .subscribe(res => {
      resolve(res);
    }, (err) => {
      reject(err);
    });
  });
}

getMatches(token:any) {
  return new Promise((resolve, reject) => {
  let headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':'Token '+ token});
  return this.http.get(apiUrl+ 'game/',{headers: headers})
  .subscribe(res => {
          resolve(res);
  }, (err) => {
          reject(err);
  });
  
});
}

getOneMatch(token:any, matchid:any) {
  return new Promise((resolve, reject) => {
  let headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':'Token '+ token});
  return this.http.get(apiUrl+ 'game/?gameid=' + matchid ,{headers: headers})
  .subscribe(res => {
          resolve(res);
  }, (err) => {
          reject(err);
  });
  
});
}

getComments(token:any) {
  return new Promise((resolve, reject) => {
  let headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':'Token '+ token});
  return this.http.get(apiUrl+ 'court/comment/' ,{headers: headers})
  .subscribe(res => {
          resolve(res);
  }, (err) => {
          reject(err);
  });
  
});
}


postFavoriteField(token:any, data:any) {
  return new Promise((resolve, reject) => {
    let headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Token '+ token});

    this.http.post(apiUrl + "court/favorite/add/", JSON.stringify(data), {headers: headers})
    .subscribe(res => {
      resolve(res);
    }, (err) => {
      reject(err);
    });
  });
}

getFavoriteFields(token:any, userid:any){
  return new Promise((resolve,reject)=>{
    let headers = new HttpHeaders({'Content-Type':'application/json', 'Authorization': 'Token ' + token});

    this.http.get(apiUrl + "court/favorite/?userid=" + userid, {headers:headers})
    .subscribe(res =>{
      resolve(res);
    }, (err)=>{
      reject(err);
    });
  });
}

postTeam(token:any, data:any) {
  return new Promise((resolve, reject) => {
    let headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Token '+ token});

    this.http.post(apiUrl + "team/", JSON.stringify(data), {headers: headers})
    .subscribe(res => {
      resolve(res);
    }, (err) => {
      reject(err);
    });
  });
}
updateTeam(token:any,pk_team:any, data:any) {
  return new Promise((resolve, reject) => {
    let headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Token '+ token});

    this.http.patch(apiUrl + "team/"+pk_team + "/", JSON.stringify(data), {headers: headers})
    .subscribe(res => {
      resolve(res);
    }, (err) => {
      reject(err);
    });
  });
}
getTeams(token:any, userid:any){
  return new Promise((resolve,reject)=>{
    let headers = new HttpHeaders({'Content-Type':'application/json', 'Authorization': 'Token ' + token});

    this.http.get(apiUrl + "team/?owner=" + userid, {headers:headers})
    .subscribe(res =>{
      resolve(res);
    }, (err)=>{
      reject(err);
    });
  });
}

getTeamInfo(token:any, pk_team:any){
  return new Promise((resolve,reject)=>{
    let headers = new HttpHeaders({'Content-Type':'application/json', 'Authorization': 'Token ' + token});

    this.http.get(apiUrl + "team/" + pk_team + "/", {headers:headers})
    .subscribe(res =>{
      resolve(res);
    }, (err)=>{
      reject(err);
    });
  });
}

getFields(token:any) {
  return new Promise((resolve, reject) => {
  let headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':'Token '+ token});
  return this.http.get(apiUrl+ 'branch/',{headers: headers})
  .subscribe(res => {
          resolve(res);
  }, (err) => {
          reject(err);
  });
  
});
}

getFieldInfo(token:any,fieldid:any) {
  return new Promise((resolve, reject) => {
  let headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':'Token '+ token});
  return this.http.get(apiUrl+ 'field/'+fieldid +"/",{headers: headers})
  .subscribe(res => {
          resolve(res);
  }, (err) => {
          reject(err);
  });
  
});
}

getFieldInfoFull(token:any,fieldid:any) {
  return new Promise((resolve, reject) => {
  let headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':'Token '+ token});
  return this.http.get(apiUrl+ 'field/full/?pk=' + fieldid, {headers: headers})
  .subscribe(res => {
          resolve(res);
  }, (err) => {
          reject(err);
  });
  
});
}

goSearchField(token:any,comuna:any,type_field:any,date:any,hour_search:any) {
  return new Promise((resolve, reject) => {
  let headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':'Token '+ token});
  return this.http.get(apiUrl+ 'field/search/?comuna='+ comuna +"&type_field=" + type_field + "&date=" + date + "&hour_search=" + hour_search ,{headers: headers})
  .subscribe(res => {
          resolve(res);
  }, (err) => {
          reject(err);
  });

}); 
}

getMyGames(token:any, userid:any){
  return new Promise((resolve,reject)=>{
    let headers = new HttpHeaders({'Content-Type':'application/json', 'Authorization': 'Token ' + token});

    this.http.get(apiUrl + "game/?owner_player="+userid, {headers:headers})
    .subscribe(res =>{
      resolve(res);
    }, (err)=>{
      reject(err);
    });
  });
}

getGameTeamInfo(token:any, pk:any){
  return new Promise((resolve,reject)=>{
    let headers = new HttpHeaders({'Content-Type':'application/json', 'Authorization': 'Token ' + token});

    this.http.get(apiUrl + "game/full/" + pk + "/", {headers:headers})
    .subscribe(res =>{
      resolve(res);
    }, (err)=>{
      reject(err);
    });
  });
}




}
