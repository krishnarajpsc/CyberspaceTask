import { Component, OnInit } from '@angular/core';
import { MovieService } from '../service/movie.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit{
  movieDetails:any;
  movieId:number=0;
  backdropImage:any='';
  posterImage:any='';
constructor(private movieService:MovieService, private route: ActivatedRoute){
  this.route.queryParams.subscribe(params => {
    this.movieId = params['id'];
});
}
ngOnInit(): void {
  this.movieService.getMovieDetails(this.movieId).subscribe(result=>{
    this.movieDetails=result;
    this.backdropImage = {'background-image':'url(https://image.tmdb.org/t/p/original'+result.poster_path+')'};
    this.posterImage = 'https://image.tmdb.org/t/p/original'+result.poster_path;
  },
  error=>{
    console.log(error);
  });
}
imagePathGenerator(imagePath:string):string{
  return 'https://image.tmdb.org/t/p/original'+imagePath;
}
}
