{
    name: "Counter Cuff",
    gen: 2,
    fling: {
      basePower: 60
    },
    onDamagingHitOrder: 2,
    onDamagingHit(damage, target, source, move) {
      if (move.category === "Physical" && source.hp && source.isActive && !source.hasAbility("magicguard")) {
        this.damage(source.baseMaxhp / 8, source, target);
      }
    }
}