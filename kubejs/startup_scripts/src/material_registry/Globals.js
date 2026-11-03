global.plate = GTMaterialFlags.GENERATE_PLATE
global.rod = GTMaterialFlags.GENERATE_ROD
global.bolt_screw = GTMaterialFlags.GENERATE_BOLT_SCREW
global.frame = GTMaterialFlags.GENERATE_FRAME
global.gear = GTMaterialFlags.GENERATE_GEAR
global.long_rod = GTMaterialFlags.GENERATE_LONG_ROD
global.block = GTMaterialFlags.FORCE_GENERATE_BLOCK
global.no_smelt = GTMaterialFlags.NO_SMELTING
global.wire = GTMaterialFlags.GENERATE_FINE_WIRE
global.foil = GTMaterialFlags.GENERATE_FOIL

global.bright = GTMaterialIconSet.BRIGHT
global.certus = GTMaterialIconSet.CERTUS
global.diamond = GTMaterialIconSet.DIAMOND
global.dull = GTMaterialIconSet.DULL
global.emerald = GTMaterialIconSet.EMERALD
global.fine = GTMaterialIconSet.FINE
global.flint = GTMaterialIconSet.FLINT



GTCEuStartupEvents.registry('gtceu:material', event => {
    const create_wire = (name, color, secondaryColor, voltage, amps, loss, superCon) => {
        event.create(name)
            .ingot()
            .flags(plate, foil, wire)
            .cableProperties(voltage, amps, loss, superCon)
            .color(color)
            .secondaryColor(secondaryColor)
    }
}) 