import { Injectable } from '@angular/core';
import { HttpClient, JsonpClientBackend} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudOperationService {

  constructor(private http:HttpClient) { }
  

  getData(){
    let url = "https://jsonplaceholder.typicode.com/todos";
    return this.http.get<any>(url);
  }

  postData(body: { title: any; userId: any; }){

   const PostBody ={
      title: body.title,
      userId: body.userId,
    }

    this.http.post("https://jsonplaceholder.typicode.com/users",body);
  }
}
