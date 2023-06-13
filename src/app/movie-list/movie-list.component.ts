import { Component, OnInit } from '@angular/core';
import { Movie } from '../interface/movie';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  providers:[]
})
export class MovieListComponent implements OnInit {
  movieList:Movie[]=[];
constructor(private movieService:MovieService){

}
ngOnInit(): void {
  this.movieService.getMovieList().subscribe(result=>{
    this.movieList=result.results;
  },
  error=>{
    console.log(error);
  });
}
imagePathGenerator(imagePath:string):string{
  return 'https://image.tmdb.org/t/p/original'+imagePath;
}
backgroundImageGenerator(imagePath:string):any{
  return { 'background-image':'url(https://image.tmdb.org/t/p/original'+imagePath+')'};
}
}
