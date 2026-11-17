GTCEuStartupEvents.registry('gtceu:element', event => {
    // Elements

   event.create('vibranium')
        .protons(120)
        .neutrons(181)
        .halfLifeSeconds(-1)
        .decayTo(null)
        .symbol('Vb')
        .isIsotope(false)
   event.create('mythril')
        .protons(120)
        .neutrons(181)
        .halfLifeSeconds(-1)
        .decayTo(null)
        .symbol('My')
        .isIsotope(false)
   event.create('adamantine')
        .protons(119)
        .neutrons(178)
        .halfLifeSeconds(-1)
        .decayTo(null)
        .symbol('Ad')
        .isIsotope(false)
   event.create('desh')
        .protons(119)
        .neutrons(178)
        .halfLifeSeconds(-1)
        .decayTo(null)
        .symbol('Ds')
        .isIsotope(false)
   event.create('lunarium')
        .protons(119)
        .neutrons(178)
        .halfLifeSeconds(-1)
        .decayTo(null)
        .symbol('Ll')
        .isIsotope(false)
   event.create('space_crystal')
        .protons(119)
        .neutrons(178)
        .halfLifeSeconds(-1)
        .decayTo(null)
        .symbol('❖')
        .isIsotope(false)
})

// Materials

GTCEuStartupEvents.registry('gtceu:material', event => {
    // Element Materials

    event.create('vibranium')
        .ingot()
        .element('vibranium')
        .color(0x0fff6f).secondaryColor(0x06752b).iconSet(GTMaterialIconSet.SHINY)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.NO_SMELTING
        )
    event.create('adamantine')
        .ingot()
        .element('adamantine')
        .blastTemp(4900, "high", GTValues.VA[GTValues.IV], 80*20)
        .color(0xff4840).secondaryColor(0xb40901).iconSet(GTMaterialIconSet.METALLIC)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_DENSE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.GENERATE_SMALL_GEAR,
            GTMaterialFlags.GENERATE_FRAME
        )
    event.create('mythril')
        .ingot()
        .element('mythril')
        .color(0xabb7c3).secondaryColor(0x676f76).iconSet(GTMaterialIconSet.EMERALD)
        .flags(
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_LENS,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.GENERATE_RING,
            GTMaterialFlags.GENERATE_ROUND,
            GTMaterialFlags.NO_SMELTING
        )
    event.create('desh')
        .ingot()
        .element('desh')
        .color(0xd38b4c).secondaryColor(0x792f44).iconSet(GTMaterialIconSet.DIAMOND)
        .blastTemp(3746, "high", GTValues.VA[GTValues.IV], 47*20)
        .flags(
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_DENSE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_RING,
            GTMaterialFlags.GENERATE_ROUND,
        )
    event.create('lunarium')
        .ingot()
        .element('lunarium')
        .color(0x28289F).secondaryColor(0x07024B).iconSet(GTMaterialIconSet.METALLIC)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.NO_SMELTING
        )

    // Space Crystal Materials

    event.create('vibranium_sludge')
        .dust()
        .element(null)
        .color(0x0ff65c).secondaryColor(0x844e29)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)
    event.create('mythril_dense_concentrate')
        .dust()
        .element(null)
        .color(0xb3cbe4).secondaryColor(0x844e29)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)
    event.create('adamantine_salt_ion')
        .dust()
        .element(null)
        .color(0xcf0001).secondaryColor(0x000000)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)
    event.create('acidic_naquadah_mixture')
        .liquid(3500)
        .color(0x105313)
        .element(null)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)
    event.create('space_crystal')
        .gem()
        .color(0xffaead).secondaryColor(0xffd7a6)
        .element('space_crystal')
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    // Crystal-Refined Materials

    event.create('crystal_refined_adamantine_salt_ion')
        .dust()
        .element(null)
        .color(0xE55E52).secondaryColor(0x000000)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)
    event.create('rare_crystal_refined_space_mixture')
        .dust()
        .element(null)
        .color(0xd38b4c).secondaryColor(0x0006b1)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)
    event.create('crystal_refined_vibranium_sludge')
        .dust()
        .element(null)
        .color(0x078905).secondaryColor(0x2b0233)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)
    event.create('crystal_refined_acidic_naquadah_mixture')
        .dust()
        .element(null)
        .color(0x5d2f06).secondaryColor(0x1d1f1d)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)
    event.create('crystal_refined_mythril_concentrate')
        .dust()
        .element(null)
        .color(0xabb7c3).secondaryColor(0x212427)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)
    event.create('impure_space_mixture')
            .dust()
            .element(null)
            .color(0xd38b4c).secondaryColor(0x073D74)
            .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

})
// Mat. Compositions
GTCEuStartupEvents.materialModification((_event) => {
})
