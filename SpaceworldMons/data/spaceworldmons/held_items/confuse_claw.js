{
    name: "Confuse Claw",
    gen: 2,
    fling: {
      basePower: 80
    },
    onStart(pokemon) {
      if (pokemon.confuseClaw)
        return;
      if (!pokemon.hp)
        return;
      for (const target of pokemon.foes()) {
        pokemon.confuseClaw = true;
        if (!target.hasAbility("magicguard")) {
        this.damage(target.baseMaxhp / 8, target, pokemon);
        }
      }
    }
}