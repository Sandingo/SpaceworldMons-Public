{
    name: "Steel Shell",
    gen: 2,
    fling: {
      basePower: 10
    },
    onModifyDefPriority: 1,
    onModifyDef(def) {
      return this.chainModify(1.1);
    }
}