StartupEvents.registry('block', event => {
    event.create('wrought_iron_casing')
        .displayName('Wrought Iron Casing')
        .textureAll('kubejs:block/casings/wrought_iron/casing')
    event.create('wrought_iron_firebox_casing')
        .displayName('Wrought Iron Firebox Casing')
        .textureAll('kubejs:block/casings/wrought_iron/firebox_casing')
}) 