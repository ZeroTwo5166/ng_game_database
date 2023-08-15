import { Component, Input } from '@angular/core';
import { Game, Screenshots, Trailer } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';
import { environment as env } from 'src/environments/environment';

@Component({
  selector: 'app-game-tabs',
  templateUrl: './game-tabs.component.html',
  styleUrls: ['./game-tabs.component.scss']
})
export class GameTabsComponent {

  gameScreenshots !: Array<Screenshots>;
  gameSlug !: string;
  gameTrailers !: Array<Trailer>;

  @Input() game!: Game;
  constructor(   ){}

    ngOnInit(){
      this.gameSlug = this.game.slug;
      const imageURL = `${env.IMAGE_URL}/${this.gameSlug}/screenshots?${env.KEY}`;
      const trailerURL = `${env.IMAGE_URL}/${this.gameSlug}/movies?${env.KEY}`;
      this.getImages(imageURL);
      this.getTrailers(trailerURL);
    }

    getImages(url: string){
      fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {      
        this.gameScreenshots = data.results.map((item: any) => item.image);
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
    }

    getTrailers(url: string){
      fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        this.gameTrailers = data.results.map((item: any) => item);
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
    }




}

