let sportOne: string[]= ["Cricket","Tennis","Golf","Football"];
console.log(sportOne);

//another method

for(let sport of sportOne)
{
    if(sport=="Cricket")
    {
        console.log(sport+ "is My fav sport");
    }
    else
    {
        console.log(sport);
    }
}