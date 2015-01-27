/**
 * Created by mayurk on 1/23/2015.
 */
angular.module("todo")
.service("TodoService",[function () {
    return {
        todos:[],
        add:function(item) {
            this.todos.push(item);
        },
        delete:function(item){
            this.todos.splice(this.todos.indexOf(item));
        },
        clearCompleted:function(){
            for(var i=0; i<this.todos.length;i++) {
                if(this.todos[i].completed == true) {
                    this.todos.splice(i,1);
                }
            }
        },
        clearAll:function(){
            this.todos= [];
            console.log(this.todos);
        }
    }
}]);