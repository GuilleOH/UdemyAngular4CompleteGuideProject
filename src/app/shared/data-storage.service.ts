import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams ,HttpRequest } from '@angular/common/http';

import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import {AuthService} from '../auth/auth.service';

import 'rxjs/add/operator/map'


@Injectable()
export class DataStorageService{
  constructor(
    private httpClient : HttpClient,
    private recipeService: RecipeService,
    private authService : AuthService
  ) {}

  storeRecipes(){
    // const token = this.authService.getToken();
    // return this.httpClient.put('https://ng-recipe-booki-4430a.firebaseio.com/recipes.json',
    //   this.recipeService.getRecipes(), {
    //   observe: 'body',
    //   params: new HttpParams().set('auth', token)
    //   // headers: new HttpHeaders().set('Authorization', 'Bearer 2shdgshedhsdhsgdfn')
    //
    // });
    const req = new HttpRequest('PUT', 'https://ng-recipe-booki-4430a.firebaseio.com/recipes.json',
    this.recipeService.getRecipes(), {reportProgress: true});
    return this.httpClient.request(req);
  }

  getRecipes(){
    // this.httpClient.get< Recipe[]>('https://ng-recipe-booki-4430a.firebaseio.com/recipes.json?auth='+ token)
    this.httpClient.get<Recipe[]>('https://ng-recipe-booki-4430a.firebaseio.com/recipes.json', {
      observe: 'body',
      responseType: 'json'
    })
    .map(
      (recipes) => {
        console.log(recipes);
        for(let recipe of recipes){
          if(!recipe['ingredients']){
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      }
    )
    .subscribe(
      (recipes : Recipe[]) =>{
        this.recipeService.setRecipes(recipes);
      }
    );
  }
}
