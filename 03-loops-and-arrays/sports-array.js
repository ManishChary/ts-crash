var sportOne = ["Cricket", "Tennis", "Golf", "Football"];
console.log(sportOne);
//another method
for (var _i = 0, sportOne_1 = sportOne; _i < sportOne_1.length; _i++) {
    var sport = sportOne_1[_i];
    if (sport == "Cricket") {
        console.log(sport + "is My fav sport");
    }
    else {
        console.log(sport);
    }
}
