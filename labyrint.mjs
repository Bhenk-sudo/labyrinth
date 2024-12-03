// Add Door in starting level (represented as a specific symbol)
const DOOR = "D"; // Symbol for the door
// Modify `loadLevelListings()` to load level files that will contain this "D" symbol for the door

if (level[playerPos.row][playerPos.col] == DOOR) {
    eventText = "You enter aSharpPlace.";
    level = readMapFile(levels["aSharpPlace"]);  // Transition to aSharpPlace level
    playerPos.row = 0;  // Reset player position if needed
    playerPos.col = 0;  // Reset player position if needed
}

// Create a third level (e.g., "thirdLevel") and link it to aSharpPlace
levels["thirdLevel"] = "thirdLevelFile";  // Make sure the level file exists

// Implement Teleportation Logic
let teleportSymbols = [];
// Find all teleport symbols in the map
for (let row = 0; row < level.length; row++) {
    for (let col = 0; col < level[row].length; col++) {
        if (level[row][col] == "♨︎") {
            teleportSymbols.push({ row, col });
        }
    }
}
// If player moves to a teleport symbol
if (level[tRow][tcol] == "♨︎") {
    let otherTeleport = teleportSymbols.find(symbol => symbol.row !== tRow || symbol.col !== tCol);
    playerPos = otherTeleport; // Teleport to the other symbol
}
// Example of NPC "X" patrol within range of +/- 2
let npcPos = { row: 5, col: 5 };  // Example NPC starting position
let patrolRange = 2;
let npcDirection = 1;  // Patrol direction: 1 for right/down, -1 for left/up

// Update NPC patrol logic in the `update()` method
if (npcPos.row >= 5 + patrolRange || npcPos.row <= 5 - patrolRange) {
    npcDirection *= -1;  // Change direction when at the edge
}
npcPos.row += npcDirection;
const HEALTH_POTION = "P";
const POISON = "X";

// Add these items to the map, and apply effects
if (level[tRow][tcol] == HEALTH_POTION) {
    playerStats.hp = Math.min(HP_MAX, playerStats.hp + 2);  // Heal by 2
    eventText = "You gained health!";
} else if (level[tRow][tcol] == POISON) {
    playerStats.hp = Math.max(0, playerStats.hp - 2);  // Poison damage
    eventText = "You took poison damage!";
}
// Implement Menu System
function showMenu() {
    console.log("Welcome to the game!");
    console.log("1. Play");
    console.log("2. Exit");
    const choice = KeyBoardManager.getInput();  // Assuming getInput waits for player input
    if (choice === "1") {
        // Start the game
        startGame();
    } else {
        process.exit();  // Exit the game
    }
}
import { showSplashScreen } from "./splashScreen.mjs";
showSplashScreen();
// NPC B shooting projectiles
function shootProjectile() {
    // Create projectiles and move them in a straight line
    let projectile = { row: npcPos.row, col: npcPos.col, direction: 1 };
    // Move the projectile in a straight line, check for collision with the player
}