"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CircketCoach_1 = require("./CircketCoach");
var GolfCoach_1 = require("./GolfCoach");
var myCricketCoach = new CircketCoach_1.CircketCoach();
var myGolfCoach = new GolfCoach_1.GolfCoach();
var coaches = [];
coaches.push(myCricketCoach);
coaches.push(myGolfCoach);
for (var _i = 0, coaches_1 = coaches; _i < coaches_1.length; _i++) {
    var coach = coaches_1[_i];
    console.log(coach.getDailyWorkout());
}
