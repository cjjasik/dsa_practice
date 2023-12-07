// WRITE A JAVASCRIPT FUNCTION THAT TAKES IN AN ARRAY OF FULL NAMES 
// AND RETURNS THE MOST COMMONLY RECURRING FIRST NAME:

function getMostCommonFirstName(names){
    //if names is an empty array, return undefined
    if(names.length<1){
        return undefined;
    }
    let frequencyCounter = {};
    //loop through names once
    //seperate the first name
    //set each name to lowercase
    //O(n)
    for(let i=0; i<names.length; i++){
        let firstName = names[i].split(' ')[0].toLowerCase();
            //if name is in frequency counter, increment the count
            if(frequencyCounter[firstName]){
                frequencyCounter[firstName]++;
            } else{
                //else, add name to counter, count = 1
                frequencyCounter[firstName] = 1;
            }
    }
    //convert object to array
    //O(n)
    let frequencyArray = Object.keys(frequencyCounter).map(name =>[name,frequencyCounter[name]]);
    //O(nlog(n))
    frequencyArray.sort((a,b)=> b[1]-a[1]);
    return frequencyArray[0][0];
}

module.exports = getMostCommonFirstName;