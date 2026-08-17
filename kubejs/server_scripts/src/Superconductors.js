ServerEvents.recipes(event => {
    event.recipes.gtceu.mixer('superconductors:silver-brass')
        .itemInputs(
            '3x gtceu:silver_dust',
            "4x gtceu:brass_dust"
        )
        .itemOutputs(
            "5x gtceu:silver_brass_alloy_dust"
        )
        .duration(100)
        .EUt(30)
})
