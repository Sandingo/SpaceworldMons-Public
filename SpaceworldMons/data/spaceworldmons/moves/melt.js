 {
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Melt",
    pp: 20,
    priority: 0,
    flags: { protect: 1, reflectable: 1, mirror: 1, allyanim: 1, metronome: 1 },
    onHit(target) {
        if (!target.hasType("Steel") && !target.hasType("Ice")) {
            this.add("-fail", target);
            return null;
        }
        if (target.hasType("Steel")) {
            target.setType(target.getTypes(true).map((type) => type === "Steel" ? "Normal" : type));
        }
        if (target.hasType("Ice")) {
            target.setType(target.getTypes(true).map((type) => type === "Ice" ? "Water" : type));
        }
        this.add("-start", target, "typechange", target.getTypes().join("/"), "[from] move: Melt");
    },
    secondary: null,
    target: "normal",
    type: "Fire",
    zMove: { boost: { spa: 1 } },
    contestType: "Cool",
    gen: 5
}