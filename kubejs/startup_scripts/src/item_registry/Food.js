StartupEvents.registry('item', event => {
  const create = (name, hunger, saturation, is_poison) => {
    event.create(name)
      .texture("kubejs:item/food/" + name)
      .food(food => {
        food
          .hunger(hunger)
          .saturation(saturation)
        if (is_poison)
          food.effect("minecraft:poison", 600, 0, 1)


    })
  }
  create("wheat_flour", 1, 0, true)
  create("wheat_bread", 3, 1, false)
  create("chicken_stock", 3, 1, false)
})