StartupEvents.registry('item', event => {
    event.create('space_crystal_base').texture("kubejs:item/progression/space-line/space_crystal_base")
    event.create('unrefined_space_crystal').texture("kubejs:item/progression/space-line/unrefined_space_crystal")
    event.create('desh_rich_cluster').texture("kubejs:item/progression/space-line/desh_rich_cluster")
    event.create('unprocessed_lunarium_dust').texture("kubejs:item/progression/space-line/unprocessed_lunarium_dust")
})

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
        .color(0x0006b1).secondaryColor(0x07024B).iconSet(GTMaterialIconSet.METALLIC)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
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
        .color(0x4864ff).secondaryColor(0xf64a02)
    event.create('space_crystal_filling')
        .liquid(1245)
        .element(null)
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
    event.create('refined_naquatic_acid')
        .liquid(3500)
        .color(0x105313)
        .element(null)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)
    event.create('space_grade_refining_fluid')
        .liquid(200)
        .color(0xf7e788).secondaryColor(0xec94bc)
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
})
// Mat. Compositions
GTCEuStartupEvents.materialModification((_event) => {
    GTMaterials.get("purified_vibranium_sludge").setFormula("Vb(Fe3O4)(CaO)3?2")
    GTMaterials.get("mythril_dense_concentrate").setFormula("My3(SiO2)7?")
    GTMaterials.get("adamantine_carbon_salt").setFormula("Ad4C3(MgO)7?")
    GTMaterials.get("space_crystal_filling").setFormula("*MyVb*")
    GTMaterials.get("space_crystal_waste").setFormula("(SiO2)3??(MgO)7(CaO)3(Fe3O4)5")
    GTMaterials.get("refined_naquatic_acid").setFormula("(H2SO4)3Nq4?")
    GTMaterials.get("space_grade_refining_fluid").setFormula("*DsLl*")

    GTMaterials.get("crystal_refined_adamantine_salt_ion").setFormula("[HCO3(Ad(OH)3)2C4]-")
    GTMaterials.get("rare_crystal_refined_space_mixture").setFormula("(Ds(NH4)2)4(Ll(SO4)2HS)5")
    GTMaterials.get("crystal_refined_vibranium_sludge").setFormula("(VbCrO4)3(Li2SO4)2")
    GTMaterials.get("crystal_refined_acidic_naquadah_mixture").setFormula("Nq(SiO2)2((CH3CO2)2(NO3)Al)5")
})