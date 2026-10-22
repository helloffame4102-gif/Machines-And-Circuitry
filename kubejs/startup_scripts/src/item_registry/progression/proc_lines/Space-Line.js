// Elements

GTCEuStartupEvents.registry('gtceu:element', event => {
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
   event.create('space_crystal')
        .protons(120)
        .neutrons(181)
        .halfLifeSeconds(-1)
        .decayTo(null)
        .symbol('◊')
        .isIsotope(false)
   event.create('adamantine')
        .protons(119)
        .neutrons(178)
        .halfLifeSeconds(-1)
        .decayTo(null)
        .symbol('Ad')
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
        .color(0xff4840).secondaryColor(0xb40901).iconSet(GTMaterialIconSet.METALLIC)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_DENSE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.GENERATE_SMALL_GEAR,
            GTMaterialFlags.GENERATE_FRAME,
            GTMaterialFlags.NO_SMELTING
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


    // Binding Fluid Materials

    event.create('nitrate')
        .dust()
        .components('1x nitrogen', '3x oxygen')
        .color(0xcec4ba).secondaryColor(0xc0b2a5)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)
    event.create('bismuth_nitrate')
        .dust()
        .components('1x bismuth', '3x nitrate')
        .color(0xebd89d)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)
    event.create('bismuth_4_oxide')
        .dust()
        .components('1x bismuth', '1x oxygen')
        .color(0x14100d)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)
    event.create('bismuth_subcarbonate')
        .dust()
        .components('2x bismuth_4_oxide', '1x carbon', '3x oxygen')
        .color(0xcfa829).secondaryColor(0x94761c)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)
   event.create('sodium_nitrate')
        .dust()
        .components('1x sodium', '1x nitrogen', '3x oxygen')
        .color(0xcacac3)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)

    // Space Crystal Materials

    event.create('purified_vibranium_sludge')
        .dust()
        .element(null)
        .color(0x0ff65c).secondaryColor(0x844e29)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)
    event.create('mythril_dense_concentrate')
        .dust()
        .element(null)
        .color(0xb3cbe4).secondaryColor(0x844e29)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)
    event.create('binding_fluid')
        .liquid(564)
        .element(null)
        .color(0x2e00ff).secondaryColor(0xf64a02)
    event.create('space_crystal_filling')
        .liquid(1245)
        .components('mythril', 'vibranium')
        .color(0xFFE2E2).secondaryColor(0xf64a02)
    event.create('space_crystal_waste')
        .dust()
        .color(0xFFE2E2).secondaryColor(0x6d372e)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)
    event.create('adamantine_carbon_salt')
        .dust()
        .element(null)
        .color(0xcf0001).secondaryColor(0x000000)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)
})
// Mat. names
GTCEuStartupEvents.materialModification((_event) => {
    GTMaterials.get("purified_vibranium_sludge").setFormula("Vb(Fe3O4)(CaO)3?2")
    GTMaterials.get("mythril_dense_concentrate").setFormula("My3(SiO2)7?")
    GTMaterials.get("adamantine_carbon_salt").setFormula("Ad4C3(MgO)7?")
})