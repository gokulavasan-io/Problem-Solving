// 1. Write a program where a robot must complete 10 laps around a circuit. Use a while loop to count the laps and display the lap number each time the robot completes one.
function no_of_laps(count) {
  let i = 1;
  while (i <= count) {
    console.log(`${i} lab completed`);
    i++;
  }
}
no_of_laps(10);

console.log("==============================  2nd   ==============================");
// 2. A robot moves forward as long as its battery level is above 20%. Using a while loop, simulate the robot's movement, decreasing the battery level by 5% after each step and displaying the remaining battery level. Once the battery level is below 20%, Display Battery is low.
function robot_battery(battery) {
  while (battery > 20) {
    console.log(`Battery level: ${battery}%`);
    battery -= 5;
  }
  console.log("Battery is low.");
}
robot_battery(50);



console.log("==============================  3rd   ==============================");
// 3. A robot can move in 4 directions: North, South, East, and West. Use a switch statement to make the robot move in the direction entered by the user and print the robot's new position after each movement.

let x_position = 0;
let y_position = 0;
function direction_for_robot(direction) {
  switch (direction) {
    case "North":
      y_position += 1;
      break;
    case "South":
      y_position -= 1;
      break;
    case "East":
      x_position += 1;
      break;
    case "West":
      x_position -= 1;
      break;
  }
  console.log(
    `The robot moved "${direction}" and the new position is "(${x_position}, ${y_position})"`
  );
}
direction_for_robot("North");

console.log("==============================  4th   ==============================");

// 4. An airplane altitude currently is 1000ft and its altitude reduces each second by 10ft. Write a program which will print “Flight arrived” when the airplane altitude reaches 0ft.

function airplane_arrival(altitude, reduce_rate) {
  for (let i = altitude; i >= 0; i -= reduce_rate) {
    if (i == 0) {
      console.log("Flight arrived");
    } else {
      console.log(`Current altitude : ${i}ft`);
    }
  }
}
airplane_arrival(1000, 10);

console.log("==============================  5th   ==============================");

// 5. Based on the flight’s destination, direct the airplane to a specific runway. Use a switch statement to assign the runway depending on the destination entered by the user.

function flight_runway(destination) {
  switch (destination) {
    case "place1":
      console.log(`Flight to "${destination}" is on the runway 1.`);
      break;
    case "place2":
      console.log(`Flight to "${destination}" is on the runway 2.`);
      break;
    case "place3":
      console.log(`Flight to "${destination}" is on the runway 3.`);
      break;
    case "place4":
      console.log(`Flight to "${destination}" is on the runway 4.`);
      break;
    case "place5":
      console.log(`Flight to "${destination}" is on the runway 5.`);
      break;
  }
}

flight_runway("place4");


console.log("==============================  6th   ==============================");

//Write a program where an airplane climbs to a specific altitude(say 1000ft) over 10 intervals. Use a for loop to display the altitude after each interval.

function airplane_altitude(altitude,interval) {
    for (let i = 0; i <=altitude; i+=interval) {
        console.log(`Now the flight is at ${i}ft`);
    }

}
airplane_altitude(1000,10);