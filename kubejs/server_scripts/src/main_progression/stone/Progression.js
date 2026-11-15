ServerEvents.recipes(event => {

  event.remove({id: "clayworks:kiln"}),
  event.remove({id: "minecraft:furnace"})
  event.remove({id: "minecraft:packed_mud"})
  event.remove({mod: "clayworks", output: "minecraft:charcoal"})
  event.remove({ id: "minecraft:blast_furnace" })
  event.remove({ id: "tconstruct:common/basalt_blast_furnace" })

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
  event.shaped(
      Item.of("minecraft:blast_furnace", 1),
      [
        "AAA",
        "ABA",
        "CCC"
      ],
      {
        "A": "gtceu:iron_plate",
        "B": "minecraft:furnace",
        "C": "minecraft:smooth_stone",
      }
  )
  // Mesh & Paper
  event.shaped(
        Item.of("kubejs:string_mesh", 1),
        [
          "CAC",
          "ABA",
          "CAC"
        ],
        {
          "A": "minecraft:string",
          "B": "#gtceu:tools/crafting_knives",
          "C": "minecraft:stick",
        }
    )
})
