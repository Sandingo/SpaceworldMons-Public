{
    accuracy: 100,
    basePower: 0,
    category: "Physical",
    basePowerCallback(pokemon, target) {
      const targetWeight = target.getWeight();
      const pokemonWeight = pokemon.getWeight();
      let bp;
      if (pokemonWeight >= targetWeight * 5) {
        bp = 120;
      } else if (pokemonWeight >= targetWeight * 4) {
        bp = 100;
      } else if (pokemonWeight >= targetWeight * 3) {
        bp = 80;
      } else if (pokemonWeight >= targetWeight * 2) {
        bp = 60;
      } else {
        bp = 40;
      }
      this.debug("BP: " + bp);
      return bp;
    },
    name: "Rapid Descent",
    pp: 10,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1, nonsky: 1, metronome: 1 },
    onTryHit(target, pokemon, move) {
      if (target.volatiles["dynamax"]) {
        this.add("-fail", pokemon, "Dynamax");
        this.attrLastMove("[still]");
        return null;
      }
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: { basePower: 160 },
    maxMove: { basePower: 130 },
    contestType: "Tough",
    gen: 3
}