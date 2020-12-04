var fruit = "Papayas";
if(fruit == 'Oranges')
{
    console.log('Oranges are $0.59 a pound.');
}
else if(fruit == 'Mangoes')
{
}
else if(fruit == 'Papayas')
{
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
}
else
{
    console.log('Sorry, we are out of ' + expr + '.');
}

var fruit = "Papayas";

switch(fruit){
    case "Oranges":
        console.log("oranges");
        break;
    case "Mangoes":
        console.log("mangoes");
        break;
    case "Papayas":
        console.log("papayas");
        break;
    default:
        console.log("default")
}

var age = 20

switch(true){
    case 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9 || 10 || 11 || 12 || 13 || 14 || 15 || 16 || 17 || 18:
        console.log("you cannot drink");
        break;
    case (19 || 20):
        console.log("almost but no");
        break;
    default:
        console.log("you can drink");
        break
}