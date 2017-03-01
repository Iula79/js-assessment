exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
    indexOf: function(arr, item) {
        return arr.indexOf(item);
    },

    sum: function(arr) {
        return arr.reduce((a, b) => a + b);
    },

    remove: function(arr, item) {

        arr.forEach(function(){
                arr.splice(arr.indexOf(item), 1);
        });
        return arr
    },

    removeWithoutCopy: function(arr, item) {

        var arrLength = arr.length - 1;
        for (i = arrLength; i >= 0; i--) {
            if (arr[i] == item) {
                arr.splice(i, 1);
            }          
        }
        return arr
    },

    append: function(arr, item) {
         arr.push(item)
         return arr
    },

    truncate: function(arr) {
        arr.pop()
         return arr
    },

    prepend: function(arr, item) {
        arr.unshift(item)
        return arr
    },

    curtail: function(arr) {
        arr.shift()
        return arr
    },

    concat: function(arr1, arr2) {
         var newArr= arr1.concat(arr2)
         return newArr
    },

    insert: function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr

    },

    count: function(arr, item) {
        var count = 0
        for (i=0; i<arr.length; i++){
            if (arr[i] == item){
                count ++
            }
        }
        return count
    },

    duplicates: function(arr) {
        arr.sort();
        var result = [];
        var count =0;
        for(i=0; i<arr.length; i++){
            if(arr[i]== arr[i-1]&& count!=arr[i]){
                result.push(arr[i])
                count = arr[i];
            }else if ( arr[i]== arr[i-1]&& count==arr[i]){
                continue;
            } 
        }
        return result
    },

    square: function(arr) {
        newArr = []
        arr.forEach(i=>{i=i * i;
            newArr.push(i)
        });
        return newArr
    },

    findAllOccurrences: function(arr, target) {
        var result = [];
        for (i=0; i<arr.length; i++){
            if (arr[i]==target){
                result.push(i);
            }
        }
        return result
    }
};
