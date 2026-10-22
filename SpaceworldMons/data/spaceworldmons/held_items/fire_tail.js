{
    name: "Fire Tail",
    gen: 2,
    fling: {basePower: 30},
    onUpdate(pokemon) {
      if (pokemon.status === "frz") {
        this.add("-activate", pokemon, "item: Fire Tail");
        pokemon.cureStatus();
      }
    },
    onSetStatus(status, target, source, effect) {
      if (status.id !== "frz")
        return;
      if (effect?.status) {
        this.add("-immune", target, "[from] item: Fire Tail");
      }
      return false;
    }
}