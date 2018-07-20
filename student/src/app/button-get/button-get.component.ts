import { ApiService } from "./../api.service";
import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { Http } from "@angular/http";

@Component({
  selector: "app-button-get",
  templateUrl: "./button-get.component.html",
  styleUrls: ["./button-get.component.css"]
})
export class ButtonGetComponent implements OnInit {
  posts: any[];
  constructor(private apiService: ApiService) {
    apiService.getStudents().subscribe(response => {
      console.log(response.json());
      this.posts = response.json();
    });
  }

  addPost(newStudent: HTMLInputElement) {
    //newStudent.value = "";

    let post = { firstName: newStudent.value };
    console.log(post.firstName);

    this.apiService.addStudent(post).subscribe(response => {
      post["id"] = response.json().id;
      this.posts.push(post);
      console.log(response.json());
    });
  }

  deletePost(id) {
    console.log("id: " + id);
    this.apiService.deleteStudent(id).subscribe(response => {
      console.log(response);
      let itemId = this.posts.indexOf(id);
      this.posts.splice(itemId, 1);
      console.log(itemId);
    });
  }
  ngOnInit() {}
}
