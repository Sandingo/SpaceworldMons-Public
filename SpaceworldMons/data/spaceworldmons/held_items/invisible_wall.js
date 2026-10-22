{
    name: "Invisible Wall",
    gen: 2,
    fling: {
      basePower: 10
    },
    onDamagePriority: -40,
    onDamage(damage, target, source, effect) {
      if (move.category === "Special") {
        target.useItem();
        this.debug("-50% reduction - Still broken");
        this.add("-enditem", target, this.effect, "[weaken]");
        return this.chainModify(0.5);
    }
}}