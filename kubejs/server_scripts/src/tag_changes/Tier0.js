ServerEvents.tags('block', event => {
    event.add("minecraft:mineable/hoe", "minecraft:grass")
    event.remove("minecraft:mineable/axe", "minecraft:grass")
})
