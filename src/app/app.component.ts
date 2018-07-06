import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDO List';
todos = []
  addTodo(newToDoLabel){
    var newToDo = {
      label :newToDoLabel,
      
      done : false
    };
    this.todos.push(newToDo);
  }
deleteToDo(todo){
 
  this.todos = this.todos.filter(t => t.label !== todo.label);


}
checkValue(event: any){
  console.log(event);
}
checks(hd){
 
}
}
