ItemEvents.modification( (event) => {
    event.modify('minecraft:bread', (item) => {
        item.maxStackSize = 16
        item.overrideFood((food) => {
            food.hunger(2)
            food.saturation(0.4)
            food.meat(false)
            food.alwaysEdible(false)
            food.fastToEat(false)
        })
    })
})  