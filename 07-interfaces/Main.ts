import { CircketCoach } from "./CircketCoach";
import { Coach } from "./Coach";
import { GolfCoach } from "./GolfCoach";

let myCricketCoach = new CircketCoach();
let myGolfCoach = new GolfCoach();

let coaches: Coach[] = [];

coaches.push(myCricketCoach);
coaches.push(myGolfCoach);
for(let coach of coaches)
{
    console.log(coach.getDailyWorkout());
}