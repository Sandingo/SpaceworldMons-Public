{
    name: "Water Tail",
    gen: 2,
    fling: {basePower: 30},
    onUpdate(pokemon) {
      if (pokemon.status === "brn") {
        this.add("-activate", pokemon, "item: Water Tail");
        pokemon.cureStatus();
      }
    },
    onSetStatus(status, target, source, effect) {
      if (status.id !== "brn")
        return;
      if (effect?.status) {
        this.add("-immune", target, "[from] item: Water Tail");
      }
      return false;
    }
}