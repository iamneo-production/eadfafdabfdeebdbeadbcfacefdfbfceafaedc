
import { Component } from '@angular/core';

interface Food {
  name : string;
  calories : any;
  image : string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';

  FoodList : Food[] = [] ;


  changeValue(event,option) {
    console.log(event.target.value);
    if(option == "n")
      document.getElementById("name").setAttribute("value",event.target.value);
    else if(option == "c")
      document.getElementById("calories").setAttribute("value",event.target.value);
    else
      document.getElementById("image").setAttribute("value",event.target.value);
  }

  addFood() {
    const name = document.getElementById("name").getAttribute("value");
    const calories = document.getElementById("calories").getAttribute("value");
    const image = document.getElementById("image").getAttribute("value");
    const food : Food = {
      name : name,
      calories : calories,
      image : image
    }
    console.log(food);
    this.FoodList.push(food);
  }
}