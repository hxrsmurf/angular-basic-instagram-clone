import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  images = [
    "PXL_20201029_194222615.jpg",
    "PXL_20201030_160801382.jpg",
    "PXL_20201030_184121431.jpg",
    "PXL_20201030_193554668.jpg"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
