LootJS.modifiers((event) => {
    event
        .addBlockLootModifier("minecraft:grass")
        .randomChance(1)
        .addLoot("minecraft:grass");
});