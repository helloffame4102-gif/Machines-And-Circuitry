ServerEvents.recipes(event => {
    // Helpers
    const remove = (id) => {
        event.remove({id: id})
    }
    // Removal
    remove("farmersdelight:wheat_dough_from_water")
    remove("farmersdelight:bread_from_smelting")
    remove("farmersdelight:bread_from_smoking")
    remove("minecraft:bread")

    // Bread
    event.replaceInput(
        { id: "gtceu:shaped/flour_to_dough"},
        "gtceu:wheat_dust",
        "kubejs:wheat_flour"
    )
    event.replaceInput(
        { id: "gtceu:smelting/dough_to_bread"},
        "#forge:dough",
        "gtceu:dough"
    )
    event.replaceInput(
        { id: "gtceu:smoking/dough_to_bread"},
        "#forge:dough",
        "gtceu:dough"
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

    event.recipes.gtceu.macerator("kubejs:food/flour")
        .itemInputs("minecraft:wheat")
        .itemOutputs(Item.of('2x kubejs:wheat_flour'))
        .chancedOutput('kubejs:wheat_flour', 3500,750)
        .duration(100)
        .EUt(2)

    // Stock
    event.recipes.farmersdelight.cooking(
        ["minecraft:chicken", "farmersdelight:onion", "farmersdelight:onion",
        "farmersdelight:onion","minecraft:carrot", "minecraft:carrot"],
        "kubejs:chicken_stock",
        30,
        300,
        "minecraft:bowl",
    )
    event.replaceInput(
        {id: "farmersdelight:cooking/noodle_soup"},
        "#forge:raw_pork",
        "kubejs:chicken_stock"
    )
})