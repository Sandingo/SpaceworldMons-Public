{
    accuracy: 100,
    basePower: 60,
    category: "Physical",
    name: "Lightning Strike",
    pp: 15,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
    onModifyMove(move, pokemon) {
      switch (pokemon.effectiveWeather()) {
        case "raindance":
        case "primordialsea":
          move.basePower *= 2;
          break;
      }
      this.debug("BP: " + move.basePower);
    },
    secondary: null,
    target: "normal",
    type: "Electric",
    zMove: { basePower: 90 },
    maxMove: { basePower: 75 },
    contestType: "Cool",
    gen: 3
  }