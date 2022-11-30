const previousLogs = [
    {
        title: "First Log - All Systems Go!",
        entry: "All systems running normally.",
        shipIsBroken: false
    },
    {
        title: "Second Log - Smooth Sailing",
        entry: "Maintenance check performed. No new issues.",
        shipIsBroken: false
    },
    {
        title: "Third Log - Time To Refuel",
        entry: "Maintenance check performed. Fuel level at 50%.",
        shipIsBroken: false
    },
    {
        title: "Fourth Log - Engine Overheated",
        entry: "Engine shutoff due to overheating.",
        shipIsBroken: true
    },
    {
        title: "Fifth Log - Added Super Coolant",
        entry: "Added coolant. Engine running normally.",
        shipIsBroken: false
    },
    {
        title: "Sixth Log - Fuel Tank Almost Empty",
        entry: "Fuel tank almost empty. Speed reduced to 1LYPH.",
        shipIsBroken: true
    },
    {
        title: "Seventh Log - Fuel Tank Full Again",
        entry: "Added fuel. Engine running normally.",
        shipIsBroken: true
    },
    {
        title: "Eighth Log - Spaceship Armageddon",
        entry: "Made it home and tired.  Logging off.  Bravo niner.",
        shipIsBroken: true
    }
];

module.exports = { previousLogs };