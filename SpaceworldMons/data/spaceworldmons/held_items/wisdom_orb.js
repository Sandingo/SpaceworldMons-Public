{
    name: "Wisdom Orb",
    gen: 2,
    fling: {
      basePower: 10
    },
    onModifySpDPriority: 1,
    onModifySpD(spd) {
      return this.chainModify(1.1);
    }
}