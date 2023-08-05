import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  constructor(private recipeService: RecipeService) { }

  //TODO: Will be replace by actual data from spring backend later
  // recipes = [{id:1, name:'Fried Rice', description:'Rice, groundnut oil, green onion, spices, peppe,salt, etc'},
  //           {id:2, name:'Beans-poradge', description:'Beans, palm oil, peppe, onion, spicies, etc'},
  //           {id:3, name: 'Akara', description:'Grounded beans, palm oil, peppe, salt, fish, etc'}
  //           ];

  recipes?:any;

  selectedRecipe?:any;

  ngOnInit(): void {
    this.recipeService.getRecipeList().
    subscribe({next: r => this.recipes = r, error: e => console.log(e)});
  }

  onSelect(recipe:any):void{
    this.selectedRecipe = recipe
  }

  onDelete(recipe:any):void{
    this.recipeService.deleteRecipe(recipe.id).
    subscribe({next: r => this.ngOnInit(), error: e => console.log(e)});
  }

}
