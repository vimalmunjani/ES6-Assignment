let bubbleSort = (a) => {                   // bubblesort using fat arrow function taking array as parameter

                                            //using let keyword defined all the variables
    let swapp,j;                            //variable swapp to check if swapp happens in the current iteration                
    let n = a.length - 1;                   //n storing the length of array - 1
    let x = a;                              //copying array a in x
    
    do{                                     //using do while until there is a swapp in each iteration
        swapp = false;                      //initialising swapp to false
        for(j = 0; j < n; j++){             //iterating through the array x
                                            //sorting in descending order
            if(x[j] < x[j+1]){              //if the first element is smaller than next element, swapp

                let temp = x[j];
                x[j] = x[j+1];
                x[j+1] = temp;
                swapp = true;               //hence, setting swapp to true
            }
        }
        n--;                                //after each iteration, decrementing the array to be sorted by 1
    }while(swapp)
  return x;                                 //returning the sorted array
}

let b = [12,46,75,54,8,32,78]               //dummy array b
alert(`Unsorted array - ${b}`)              //displaying Unsorted array in the alert
let c = bubbleSort(b)                       //calling the function bubblesort by passing array b
alert(`Sorted array - ${c}`)                //displaying Sorted array in the alert
 