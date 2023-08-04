import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  constructor() { }

  //TODO: Will be replace by actual data from spring backend later
  recipes = [{id:1, name:'Fried Rice', description:'Rice, groundnut oil, green onion, spices, peppe,salt, etc'},
            {id:2, name:'Beans-poradge', description:'Beans, palm oil, peppe, onion, spicies, etc'},
            {id:3, name: 'Akara', description:'Grounded beans, palm oil, peppe, salt, fish, etc'}
            ];

  selectedRecipe?:any;

  ngOnInit(): void {
  }

  onSelect(recipe:any):void{
    this.selectedRecipe = recipe
  }

  onDelete(recipe:any):void{
    this.recipes = this.recipes.filter(obj => obj.id != recipe.id);
  }

}
