{
    name: "Ice Bikini",
    gen: 2,
    fling: {
      basePower: 10
    },
    onSourceModifyDamage(damage, source, target, move) {
      if (move.type === "Ice" && target.getMoveHitData(move).typeMod > 0) {
        const hitSub = target.volatiles["substitute"] && !move.flags["bypasssub"] && !(move.infiltrates && this.gen >= 6);
        if (hitSub)
          return;
          this.debug("-20% reduction");
          this.add("-enditem", target, this.effect, "[weaken]");
          return this.chainModify(0.8);
      }
    }
}