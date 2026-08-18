ServerEvents.recipes(event => {
    event.replaceInput(
        { id: "gtceu:shaped/flour_to_dough"},
        "gtceu:wheat_dust",
        "kubejs:wheat_flour"
    )
    event.replaceInput(
        { id: "gtceu:mixer/flour_to_dough"},
        "gtceu:wheat_dust",
        "kubejs:wheat_flour"
    )

    event.shapeless(
        Item.of("kubejs:wheat_flour"),
        [
            "minecraft:wheat",
            "#forge:tools/mortars"
        ]
    )
    event.recipes.gtceu.macerator("kubejs:food/macerator/flour")
        .itemInputs("minecraft:wheat")
        .itemOutputs('2x kubejs:wheat_flour')
        .chancedOutput()
        .duration(100)
        .EUt(2)
})