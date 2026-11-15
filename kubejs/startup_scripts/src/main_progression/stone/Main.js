StartupEvents.registry('item', event => {
    event.create('string_mesh', 'basic').texture("kubejs:item/main_progression/stone/string_mesh")
})
ItemEvents.modification(event => {
  event.modify('kubejs:string_mesh', item => {
    item.craftingRemainder = 'kubejs:string_mesh'
  })
})
