let number = 15
if(number % 3 == 0 && number % 5 == 0){
    console.log("FizBuzz");
}
else if(number % 5 == 0){
    console.log("Buzz");
}
else if(number % 3 == 0){
    console.log("Fizz");
} 
else{
    console.log("Not divisible");
}





    let day = 3

    switch(day){
        case 1:
        console.log("Its Monday");
        break
    case 2:
        console.log("Its Tuesday");
        break
    case 3:
        console.log("Its Wednesday");
        break
    case 4:
        console.log("Its Thursday");
        break
    case 5:
        console.log("Its Friday");
        break
    case 6:
        console.log("Its Saturday");
        break
    case 7:
        console.log("Its sunday");
        break;
    default:
        console.log("not a default day")
        break
    }