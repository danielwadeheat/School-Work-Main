// Simple Scoreboard
// Goal: Arrays, objects, loops, and basic logic.

// Players as objects in an array
const players = [
  { name: "Ava", points: 10 },
  { name: "Noah", points: 15 },
  { name: "Mia", points: 8 },
  { name: "Liam", points: 12 }
];

// Add points to a player by name
function addPoints(playerName, amount) {
  const player = players.find(function (p) {
    return p.name === playerName;
  });

  if (!player) {
    console.log("Player not found:", playerName);
    return false;
  }

  player.points += amount;
  return true;
}

// Get the top player
function getTopPlayer() {
  if (players.length === 0) return null;

  return players.reduce(function (top, current) {
    return current.points > top.points ? current : top;
  });
}

// Print scoreboard report
function printReport() {
  console.log("=== Scoreboard Report ===");

  players.forEach(function (player, index) {
    console.log(index + 1 + ".", player.name + ":", player.points, "points");
  });

  const topPlayer = getTopPlayer();
  if (topPlayer) {
    console.log("Top Player:", topPlayer.name, "-", topPlayer.points, "points");
  }
}

// Test calls
console.log("Add points: Noah +5");
addPoints("Noah", 5);

console.log("Add points: Mia +12");
addPoints("Mia", 12);

console.log("Add points: Ava +3");
addPoints("Ava", 3);

printReport();