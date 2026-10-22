ServerEvents.recipes(event => {
    // Space Crystal

    event.recipes.gtceu.mixer("space-line/space_crystal_filling")
        .itemInputs(
            "12x gtceu:purified_vibranium_sludge_dust",
            "16x gtceu:mythril_dense_concentrate_dust"
        )
        .itemOutputs("8x gtceu:space_crystal_waste_dust")
        .inputFluids("gtceu:binding_fluid 5000")
        .outputFluids("gtceu:space_crystal_filling 3200")
        .duration(30*20)
        .EUt(7680)

    // Binding Fluid
    event.recipes.gtceu.large_chemical_reactor("space-line/binding_fluid/bismuth_nitrate")
        .itemInputs("1x gtceu:bismuth_dust")
        .inputFluids("gtceu:nitric_acid 6000")
        .itemOutputs("1x gtceu:bismuth_nitrate_dust")
        .outputFluids("gtceu:nitrogen_dioxide 3000", "minecraft:water 3000")
        .duration(9*20)
        .EUt(1920)
    event.recipes.gtceu.large_chemical_reactor("space-line/binding_fluid/bismuth_subcarbonate")
        .itemInputs("4x gtceu:bismuth_nitrate_dust", "6x gtceu:soda_ash_dust")
        .inputFluids("minecraft:water 1000")
        .itemOutputs("2x gtceu:bismuth_subcarbonate_dust", "12x gtceu:sodium_nitrate_dust")
        .outputFluids("gtceu:carbon_dioxide 4000", "minecraft:water 1000")
        .duration(9*20)
        .EUt(1920)
    event.recipes.gtceu.mixer("space-line/binding_fluid")
        .itemInputs("3x gtceu:bismuth_subcarbonate_dust", "4x gtceu:magnetite_dust")
        .inputFluids("gtceu:neodymium 5000")
        .outputFluids("gtceu:binding_fluid 5500")
        .duration(9*20)
        .EUt(1920)
})