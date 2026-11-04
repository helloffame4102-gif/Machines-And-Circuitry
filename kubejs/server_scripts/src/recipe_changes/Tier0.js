ServerEvents.recipes(event => {

  event.remove({id: "clayworks:kiln"}),
  event.remove({id: "minecraft:furnace"})
  event.remove({id: "minecraft:packed_mud"})
  event.remove({mod: "clayworks", output: "minecraft:charcoal"})

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

  // Campfire, Kiln, Blast furnace
  event.replaceInput(
    {id: 'minecraft:campfire'},
    '#minecraft:coals',
    "#minecraft:planks"
  ),
  event.shaped(
    Item.of("clayworks:kiln", 1),
    [
      "ABA",
      "ACA",
      "DDD"
    ],
    {
      "A": "#minecraft:logs",
      "B": "#minecraft:stone_tool_materials",
      "C": "minecraft:campfire",
      "D": "minecraft:mud_bricks"
    }
  )
  event.replaceInput(
    {id: "farmersdelight:packed_mud_from_straw"},
    'minecraft:mud',
    '#minecraft:dirt'
  )
})