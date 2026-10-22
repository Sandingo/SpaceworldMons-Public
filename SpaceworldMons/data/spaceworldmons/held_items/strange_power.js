{
    name: "Strange Power",
    gen: 2,
    fling: {
      basePower: 10
    },
    onSourceModifyMove(move, source, pokemon) {
      move.type = "???";
      this.debug("Strange Power neutralization");
    },
    onModifyMove(move, pokemon) {
      move.type = "???";
      this.debug("Strange Power neutralization");
    }
}