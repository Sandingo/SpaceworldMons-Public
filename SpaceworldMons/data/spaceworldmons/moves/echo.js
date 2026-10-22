{
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Echo",
    pp: 20,
    priority: 0,
    flags: { failencore: 1, nosleeptalk: 1, noassist: 1, failcopycat: 1, failmimic: 1, failinstruct: 1, sound: 1 },
    onTryHit(target, pokemon) {
      const move = target.lastMove;
      if (!move?.flags["mirror"] || move.isZ || move.isMax) {
        return false;
      }
      this.actions.useMove(move.id, pokemon, target);
      return null;
    },
    secondary: null,
    target: "normal",
    type: "Psychic",
    zMove: { boost: { spa: 2 } },
    contestType: "Clever",
    gen: 3
}