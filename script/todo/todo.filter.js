/**
 * Created by mayurk on 1/27/2015.
 */
angular.module("todo")
.filter('TodoFilter', [function(){
        return function(array, criteria) {
            var filterArray = [];
            array.forEach(function(item){
                if(criteria==='All') {
                    filterArray.push(item);
                }
                if(criteria==='Active' && item.completed !=true) {
                    filterArray.push(item);
                }
                if(criteria==='Completed' && item.completed ==true) {
                    filterArray.push(item);
                }
            });
            return filterArray;
        };
    }]);