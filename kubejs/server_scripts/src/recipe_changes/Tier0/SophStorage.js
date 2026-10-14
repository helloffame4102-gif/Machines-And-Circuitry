ServerEvents.recipes(event => {
  // Helpers
  const remove = (id) => {event.remove({id: id})}
  const wood_types = ["cherry", "acacia", "birch", "dark_oak", "jungle", "oak", "spruce", "mangrove"]
  const nether_wood = ["crimson", "warped"]

  // Removal
  event.remove({output: Item.of('sophisticatedstorage:barrel')})
  event.remove({output: Item.of('sophisticatedstorage:copper_barrel')})

  // Barrels
  wood_types.forEach(element => {
    event.shaped(Item.of('sophisticatedstorage:barrel',1,{woodType:element}),
      ["ABA",
       "CDC",
       "ABA"
      ],
      {
        A: element + "_log",
        B: element + "_planks",
        C: "gtceu:iron_screw",
        D: "gtceu:double_iron_plate"
      }
    )
    // event.shaped(Item.of('sophisticatedstorage:barrel',1,{woodType:element}),)
    
})

  nether_wood.forEach(element => {
    event.shaped(Item.of('sophisticatedstorage:barrel',1,{woodType:element}),
      ["ABA",
       "CDC",
       "ABA"
      ],
      {
        A: element + "_stem",
        B: element + "_planks",
        C: "gtceu:iron_screw",
        D: "gtceu:double_iron_plate"
      }
    )})
})