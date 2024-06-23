const removals = [
    {id: "exocraft:reinforced_iron_plate"},

    // Armors
    {id: "immersive_armors:wither_helmet"},
    {id: "immersive_armors:wither_chestplate"},
    {id: "immersive_armors:wither_leggings"},
    {id: "immersive_armors:wither_boots"},

    {id: "immersive_armors:heavy_helmet"},
    {id: "immersive_armors:heavy_chestplate"},
    {id: "immersive_armors:heavy_leggings"},
    {id: "immersive_armors:heavy_boots"},


    // Reactors parts
    {id: "bigreactors:reactor/basic/casing"},
    {id: "bigreactors:reactor/basic/fuelrod_ingots_yellorium"},
    {id: "bigreactors:reactor/basic/fuelrod_ingots_uranium"},
    {id: "bigreactors:reactor/basic/solidaccessport"},
    {id: "bigreactors:reactor/basic/redstoneport"},
    {id: "bigreactors:reactor/basic/controlrod"},
    {id: "bigreactors:reactor/basic/activetap_fe"},
    {id: "bigreactors:reactor/basic/passivetap_fe"},

    {id: "bigreactors:reactor/reinforced/casing"},
    {id: "bigreactors:reactor/reinforced/casing_upgrade"},
    {id: "bigreactors:reactor/reinforced/fuelrod_ingots_yellorium"},
    {id: "bigreactors:reactor/reinforced/fuelrod_ingots_uranium"},
    {id: "bigreactors:reactor/reinforced/solidaccessport"},
    {id: "bigreactors:reactor/reinforced/redstoneport"},
    {id: "bigreactors:reactor/reinforced/controlrod"},
    {id: "bigreactors:reactor/reinforced/activetap_fe"},
    {id: "bigreactors:reactor/reinforced/passivetap_fe"},
    {id: "bigreactors:reactor/reinforced/computerport"},
    {id: "bigreactors:reactor/reinforced/fluidaccessport"},
    {id: "bigreactors:reactor/reinforced/controller_ingots_yellorium"},
    {id: "bigreactors:reactor/reinforced/controller_ingots_uranium"},
    {id: "bigreactors:reactor/reinforced/passivefluidport_forge"},
    {id: "bigreactors:reactor/reinforced/activefluidport_forge"},

    {id: "bigreactors:fluidizer/casing"},
    {id: "bigreactors:fluidizer/controller"},
    {id: "bigreactors:fluidizer/solidinjector"},
    {id: "bigreactors:fluidizer/fluidinjector"},
    {id: "bigreactors:fluidizer/outputport"},
    {id: "bigreactors:fluidizer/powerport"},

    {id: "bigreactors:reprocessor/casing"},
    {id: "bigreactors:reprocessor/controller"},
    {id: "bigreactors:reprocessor/wasteinjector"},
    {id: "bigreactors:reprocessor/fluidinjector"},
    {id: "bigreactors:reprocessor/outputport"},
    {id: "bigreactors:reprocessor/powerport"},
    {id: "bigreactors:reprocessor/collector"},

    {id: "bigreactors:turbine/basic/casing"},
    {id: "bigreactors:turbine/basic/controller"},
    {id: "bigreactors:turbine/basic/bearing"},
    {id: "bigreactors:turbine/basic/shaft"},
    {id: "bigreactors:turbine/basic/blade"},
    {id: "bigreactors:turbine/basic/activetap_fe"},
    {id: "bigreactors:turbine/basic/passivetap_fe"},
    {id: "bigreactors:turbine/basic/redstoneport"},
    {id: "bigreactors:turbine/basic/passivefluidport_forge"},
    {id: "bigreactors:turbine/basic/activefluidport_forge"},

    {id: "bigreactors:turbine/reinforced/casing"},
    {id: "bigreactors:turbine/reinforced/controller"},
    {id: "bigreactors:turbine/reinforced/bearing"},
    {id: "bigreactors:turbine/reinforced/shaft"},
    {id: "bigreactors:turbine/reinforced/blade"},
    {id: "bigreactors:turbine/reinforced/activetap_fe"},
    {id: "bigreactors:turbine/reinforced/passivetap_fe"},
    {id: "bigreactors:turbine/reinforced/redstoneport"},
    {id: "bigreactors:turbine/reinforced/computerport"},
    {id: "bigreactors:turbine/reinforced/passivefluidport_forge"},
    {id: "bigreactors:turbine/reinforced/activefluidport_forge"},
];

ServerEvents.recipes(event => {
    removals.forEach(r => event.remove(r));
});
