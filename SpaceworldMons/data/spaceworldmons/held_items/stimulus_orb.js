{
    name: "Stimulus Orb",
    gen: 2,
    fling: {basePower: 30},
    onUpdate(pokemon) {
      if (pokemon.status === "slp") {
        this.add("-activate", pokemon, "item: Stimulus Orb");
        pokemon.cureStatus();
      }
    },
    onSetStatus(status, target, source, effect) {
      if (status.id !== "slp")
        return;
      if (effect?.status) {
        this.add("-immune", target, "[from] item: Stimulus Orb");
      }
      return false;
    },
    onTryAddVolatile(status, target) {
      if (status.id === "yawn") {
        this.add("-immune", target, "[from] item: Stimulus Orb");
        return null;
      }
    }
}