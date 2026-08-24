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

const bright = GTMaterialIconSet.BRIGHT
const certus = GTMaterialIconSet.CERTUS
const diamond = GTMaterialIconSet.DIAMOND
const dull = GTMaterialIconSet.DULL
const emerald = GTMaterialIconSet.EMERALD
const fine = GTMaterialIconSet.FINE
const flint = GTMaterialIconSet.FLINT



GTCEuStartupEvents.registry('gtceu:material', event => {
    const create_wire = (name, color, secondarycolor, voltage, amps, loss, superCon) => {
        event.create(name)
            .ingot()
            .flags(plate, foil, wire)
            .cableProperties(voltage, amps, loss, superCon)
            .color(color)
            .secondaryColor(secondarycolor)
    }
    create_wire("lv_superconductor_alloy", 0x7f74a3, 0x46549e, 32, 2, 0, true)
}) 