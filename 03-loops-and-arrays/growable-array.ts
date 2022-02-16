let sportsTwo: string[]=["Cricket","Tennis"];

sportsTwo.push("Tennis");
sportsTwo.push("Badminton");
console.log(sportsTwo);

sportsTwo.pop();
sportsTwo.reverse();

for(let sport of sportsTwo)
{
    console.log(sport);
}