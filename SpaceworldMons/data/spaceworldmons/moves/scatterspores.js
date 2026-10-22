{
    accuracy: 75,
    basePower: 0,
    category: "Status",
    name: "Scatter Spores",
    pp: 15,
    priority: 0,
    flags: { protect: 1, reflectable: 1, mirror: 1, metronome: 1, powder: 1 },
   secondary: {
      chance: 100,
      onHit(target, source) {
        const result = this.random(3);
        if (result === 0) {
          target.trySetStatus("psn", source);
        } else if (result === 1) {
          target.trySetStatus("par", source);
        } else {
          target.trySetStatus("slp", source);
        }
      }
    },
    target: "normal",
    type: "Grass",
    zMove: { boost: { spe: 1 } },
    contestType: "Clever",
    gen: 3
}