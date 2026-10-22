{
    name: "Cacophony",
    onSourceDamagingHit(damage, target, source, move) {
      if (this.randomChance(3, 10) && move.flags["sound"]) {
          target.addVolatile("confusion");
      }
    },
    flags: {}
}