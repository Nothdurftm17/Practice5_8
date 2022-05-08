var twoSum = function(numbers, target) {
    for(var l = 0; l < numbers.length; l++){

        for (var r = l+1; r < numbers.length;r++){
            var sum = numbers[l] + numbers[r];

            if(sum === target){
                var index = [ ]
                index.push(l + 1)
                index.push(r + 1)
                return index
            }
        }
    }
};

console.log(twoSum([2,7,11,15], 9 ))