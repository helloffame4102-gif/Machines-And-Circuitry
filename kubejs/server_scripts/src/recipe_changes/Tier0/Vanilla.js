ServerEvents.recipes(event => {

  // Helpers
  const remove = (id) => {
    event.remove({id: id})}

  // Removal
  remove("minecraft:chest")
  remove("minecraft:barrel")
  remove("gtceu:assembler/barrel")
  // Stone tools
  event.replaceInput(
    {id: 'minecraft:stone_pickaxe'},
    '#minecraft:stone_tool_materials',
    "minecraft:stone"
  )
  event.replaceInput(
    {id: 'minecraft:stone_hoe'},
    '#minecraft:stone_tool_materials',
    "minecraft:stone"
  )
  event.replaceInput(
    {id: 'minecraft:stone_axe'},
    '#minecraft:stone_tool_materials',
    "minecraft:stone"
  )
  event.replaceInput(
    {id: 'minecraft:stone_shovel'},
    '#minecraft:stone_tool_materials',
    "minecraft:stone"
  )
  event.replaceInput(
    {id: 'minecraft:stone_sword'},
    '#minecraft:stone_tool_materials',
    "minecraft:stone"
  )
  // Utility
  event.shaped(Item.of("minecraft:chest"),
    [
      "ABA",
      "B B",
      "ABA"
    ],
    {
      A: "#minecraft:logs",
      B: "#minecraft:planks"
    }
  )
  event.shaped(Item.of("minecraft:barrel"),
    ["ABA",
     "CDC",
     "ABA"
    ],
    {
      A: "#minecraft:logs",
      B: "#minecraft:planks",
      C: "gtceu:iron_rod",
      D: "gtceu:double_iron_plate"
    }
  )
  event.recipes.gtceu.assembler("barrel")
    .itemInputs("3x #minecraft:planks", "#minecraft:logs", "2x gtceu:iron_plate")
    .itemOutputs("minecraft:barrel")
    .duration(100)
    .EUt(4)
})