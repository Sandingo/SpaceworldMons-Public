{
    name: "Earth",
    gen: 2,
    fling: {basePower: 30},
    onUpdate(pokemon) {
      if (pokemon.status === "par") {
        this.add("-activate", pokemon, "item: Earth");
        pokemon.cureStatus();
      }
    },
    onSetStatus(status, target, source, effect) {
      if (status.id !== "par")
        return;
      if (effect?.status) {
        this.add("-immune", target, "[from] item: Earth");
      }
      return false;
    }
}