//this is a array program
var reviews = [23, 44, 56.7, 89];
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
var avg = total / reviews.length;
console.log("Reviews average: " + avg);
