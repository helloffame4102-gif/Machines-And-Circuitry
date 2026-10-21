ServerEvents.recipes(event => {
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
})