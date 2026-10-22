{
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Beak Shield",
    pp: 10,
    priority: 3,
    flags: { snatch: 1 },
    sideCondition: "beakshield",
    onTry() {
      return !!this.queue.willAct();
    },
    condition: {
      duration: 1,
      onSideStart(target, source) {
        this.add("-singleturn", source, "Beak Shield");
      },
      onTryHitPriority: 3,
      onTryHit(target, source, move) {
        if (["self", "all"].includes(move.target) || move.category !== "Physical")
          return;
        this.add("-activate", target, "move: Beak Shield");
        return this.NOT_FAIL;
      }
    },
    secondary: null,
    target: "allySide",
    type: "Flying",
    zMove: { boost: { def: 1 } },
    contestType: "Tough",
    gen: 3
}