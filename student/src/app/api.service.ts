import { Http, RequestOptions } from "@angular/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  private options: RequestOptions;

  constructor(private http: Http) {}

  private url = "http://192.168.1.104:8080/api/students";

  private urlAdd = "http://192.168.1.104:8080/api/student";

  getStudents() {
    return this.http.get(this.url);
  }

  addStudent(data) {
    /*  let post = {
      firstName: "DummyData"
    }; */
    console.log(data);
    return this.http.post(this.urlAdd, data);
  }
  deleteStudent(id) {
    let url = this.urlAdd + "/" + id;
    return this.http.delete(url);
  }
}
