import { Pipe, PipeTransform } from '@angular/core';
import { Meal } from '../../shared/interfaces/search-by-name';
@Pipe({
  name: 'filteration'
})
export class FilterationPipe implements PipeTransform {


  transform(RecipeList : Meal[] , userWord : string): Meal[] {
    return RecipeList.filter(function(value , index){
      return value.strMeal.toLowerCase().includes(userWord.toLowerCase());
    });
  }

}
