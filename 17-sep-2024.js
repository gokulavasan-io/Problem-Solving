//1st .... Given the array train_departures = [10, 15, 7, 20, 5], where each element represents the departure time of a train in 24-hour format, find the earliest train to depart.

function early_train(train_departures) {
  let early = train_departures[0];
  for (let i = 0; i < train_departures.length; i++) {
    if (train_departures[i] < early) {
      early = train_departures[i];
    }
  }
  return early;
}
console.log(early_train([10, 15, 7, 20, 5]));

//2nd ...Given the array seats = [1, 0, 1, 1, 0, 0, 1, 0], where 1 means a seat is booked and 0 means a seat is available, count the total number of available seats.

function seat_available(seats) {
  let seat_available = 0;
  for (let i = 0; i < seats.length; i++) {
    if (seats[i] == 0) {
      seat_available++;
    }
  }
  return seat_available;
}

console.log(seat_available([1, 0, 1, 1, 0, 0, 1, 0]));

//3rd ... Given the array soldiers = [120, 300, 250, 180, 150], where each element represents the number of soldiers assigned to different regions, find the region with the highest number of soldiers.

function highest_soldiers(soldiers) {
  let highest_soldiers = 0;
  for (let i = 0; i < soldiers.length; i++) {
    if (soldiers[i] > highest_soldiers) {
      highest_soldiers = soldiers[i];
    }
  }
  return highest_soldiers;
}
console.log(highest_soldiers([120, 300, 250, 180, 150]));

//4th  ....Given the array populations = [50, 60, 70, 80, 90], where each element represents the population of an Indian state over the last 5 years, calculate the average population.
function average(populations) {
  let sum = 0;
  for (let i = 0; i < populations.length; i++) {
    sum += populations[i];
  }
  return sum / populations.length;
}
console.log(average([50, 60, 70, 80, 90]));

//5th ... Given the array water_levels = [30, 50, 20, 40, 60], where each element represents the current water level in a tank, find the tank with the lowest water level.

function lower_level(water_levels) {
  let lower_level = water_levels[0];
  for (let i = 0; i < water_levels.length; i++) {
    if (water_levels[i] < lower_level) {
      lower_level = water_levels[i];
    }
  }
  return lower_level;
}
console.log(lower_level([30, 50, 20, 40, 60]));

//6th ...Given the array days_until_festival = [30, 15, 45, 10, 25], where each element represents the number of days left until an important festival, find the closest upcoming festival.
function closest_fest(days_until_festival) {
  let closest_fest =days_until_festival[0];
  for (let i = 0; i < days_until_festival.length; i++) {
    if (days_until_festival[i] < closest_fest) {
      closest_fest = days_until_festival[i];
    }
  }
  return closest_fest;
}

console.log(closest_fest([30, 15, 45, 10, 25]));

//7th  ... Given the array landing_times = [12, 15, 12, 18, 20], where each element represents the time a helicopter is scheduled to land, check if any two helicopters are scheduled to land at the same time.
function same_time(landing_times) {
  for (let i = 0; i < landing_times.length; i++) {
    for (let j = i + 1; j < landing_times.length; j++) {
      if (landing_times[i] == landing_times[j]) {
        return "yes";
      }
    }
  }
  return "No";
}
console.log(same_time([12, 15, 19, 18, 12]));

//8th ... Given the array temperatures = [75, 80, 72, 85, 90], where each element represents the temperature in a specific region of a forest, identify which regions have temperatures above 80 degrees.
function temp_above_80(temperatures) {
  for (let i = 0; i < temperatures.length; i++) {
    if (temperatures[i] > 80) {
      console.log(temperatures[i]);
    }
  }
}
temp_above_80([75, 80, 72, 85, 90]);

//9th ... Given the array students_per_route = [45, 55, 30, 60, 40], where each element represents the number of students assigned to different bus routes, calculate the total number of buses required if each bus can hold a maximum of 50 students.
function total_no_of_buses(students_per_route) {
  let sum = 0;
  for (let i = 0; i < students_per_route.length; i++) {
    sum += students_per_route[i];
  }
  return sum / 50;
}
console.log(total_no_of_buses([45, 55, 30, 60, 40]));
