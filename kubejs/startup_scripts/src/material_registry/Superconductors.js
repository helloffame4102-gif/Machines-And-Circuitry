const plate = GTMaterialFlags.GENERATE_PLATE
const rod = GTMaterialFlags.GENERATE_ROD
const bolt_screw = GTMaterialFlags.GENERATE_BOLT_SCREW
const frame = GTMaterialFlags.GENERATE_FRAME
const gear = GTMaterialFlags.GENERATE_GEAR
const long_rod = GTMaterialFlags.GENERATE_LONG_ROD
const block = GTMaterialFlags.FORCE_GENERATE_BLOCK
const no_smelt = GTMaterialFlags.NO_SMELTING
const wire = GTMaterialFlags.GENERATE_FINE_WIRE
const foil = GTMaterialFlags.GENERATE_FOIL

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('silver_brass_alloy')
        .ingot(3)
        .color(0xe1c96d)
        .secondaryColor(0xc4c4c4)
        .iconSet(GTMaterialIconSet.METALLIC)

        .components('3x silver', '4x brass')
        .flags(plate, foil, wire)
        .cableProperties(32, 2, 0, true)
})
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('magnetic_alloy')
        .ingot(3)
        .color(0xe1c96d)
        .secondaryColor(0xc4c4c4)
        .iconSet(GTMaterialIconSet.METALLIC)

        .components('3x iron', '7x manganese')
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('pulsating_alloy')
        .ingot(3)
        .color(0xe1c96d)
        .secondaryColor(0x3acfa7)
        .iconSet(GTMaterialIconSet.BRIGHT)

        .components('2x silver_brass_alloy', '5x magnetic_alloy')
        .flags(plate, foil, wire)
        .cableProperties(128, 4, 0, true)
})

