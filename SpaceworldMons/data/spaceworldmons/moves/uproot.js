{
    accuracy: 100,
    basePower: 60,
    category: "Physical",
    name: "Uproot",
    pp: 10,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
    basePowerCallback(pokemon, target, move) {
      if (target.volatiles["ingrain"]) {
        this.debug("Uproot damage boost");
        return move.basePower * 2;
      }
      return move.basePower;
    },
    onHit(target, source) {
      if (target.volatiles["ingrain"]) {
        target.removeVolatile("ingrain");
      	this.add("-activate", source, "move: Uproot", "[of] " + target);
      }
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    contestType: "Tough",
    gen: 2
  }