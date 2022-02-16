//this is a array program

let reviews: number[] = [23,44,56.7,89];
let total: number=0;

for(let i=0;i< reviews.length;i++)
{
    console.log(reviews[i]);
    total += reviews[i];
}

let avg: number= total / reviews.length;
console.log("Reviews average: "+avg);