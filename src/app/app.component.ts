import { Component } from '@angular/core';
import {AngularFireStorage, AngularFireStorageModule } from '@angular/fire/storage';
import { Observable } from 'rxjs';

export interface Item { name: string; }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  profileUrl: Observable<string | null>;
  constructor(private storage: AngularFireStorage) {
     const ref = this.storage.ref('PXL_20201029_194222615.jpg');
     this.profileUrl = ref.getDownloadURL();
  }
}