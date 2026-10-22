{
    name: "Snake Skin",
    gen: 2,
    fling: {basePower: 30},
    onUpdate(pokemon) {
      if (pokemon.status === "psn" || pokemon.status === "tox") {
        this.add("-activate", pokemon, "item: Snake Skin");
        pokemon.cureStatus();
      }
    },
    onSetStatus(status, target, source, effect) {
      if (status.id !== "psn" && status.id !== "tox")
        return;
      if (effect?.status) {
        this.add("-immune", target, "[from] item: Snake Skin");
      }
      return false;
    }
}