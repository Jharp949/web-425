import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {

  composers: Array<IComposer>;

  constructor() {
    this.composers = [
      {composerId: 100, fullName: "Bedřich Smetana", genre: "Romantic"},
      {composerId: 101, fullName: "Sergei Vasilyevich Rachmaninoff", genre: "Romantic"},
      {composerId: 102, fullName: "Igor Stravinsky", genre: "Modern"},
      {composerId: 103, fullName: "Ludwig Van Beethoven", genre: "Classical"},
      {composerId: 104, fullName: "Hans Florian Zimmer", genre: "Post Modern"}
    ]
  }

  getComposers() {
    return this.composers;
  }

  getComposer(composerId: number) : IComposer {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
    return {} as IComposer;
  }
}
