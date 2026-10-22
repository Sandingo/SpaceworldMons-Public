{
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Passage",
    pp: 40,
    priority: -6,
    flags: { metronome: 1 },
    onHit(target) {
      if (!this.canSwitch(target.side) || target.volatiles["commanded"]) {
        this.attrLastMove("[still]");
        this.add("-fail", target);
        return this.NOT_FAIL;
      }
    },
    self: {
      onHit(source) {
        source.skipBeforeSwitchOutEventFlag = true;
      }
    },
    secondary: null,
    target: "self",
    type: "Ghost",
    contestType: "Clever",
    gen: 3
}