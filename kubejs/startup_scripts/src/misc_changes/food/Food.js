StartupEvents.registry('item', event => {
  const create = (name) => {
    event.create(name).texture("kubejs:item/food/" + name)
  }
  create("wheat_flour")
  create("wheat_bread")

})