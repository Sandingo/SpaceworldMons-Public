{
    accuracy: true,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Bell Chime",
    pp: 10,
    priority: 0,
    flags: { snatch: 1, sound: 1, metronome: 1 },
    onHit(pokemon) {
      if (["", "slp", "frz"].includes(pokemon.status))
        return false;
      pokemon.cureStatus();
    },
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: { effect: "heal" },
    contestType: "Cute",
    gen: 2
  }