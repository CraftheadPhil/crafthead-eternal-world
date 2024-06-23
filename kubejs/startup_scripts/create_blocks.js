StartupEvents.registry('block', (event) => {
    event.create("machine_casing")
        .displayName("Machine Casing")
        .material("metal")
        .hardness(1.0)
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('machineryrp:block/machine_plate');
    
    event.create("stainless_steel_block")
        .displayName("Stainless Steel Block")
        .material("metal")
        .hardness(1.0)
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('machineryrp:block/stainless_steel_block');

    event.create("stainless_steel_sheetmetal")
        .displayName("Stainless Steel Sheetmetal")
        .material("metal")
        .hardness(1.0)
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('machineryrp:block/stainless_steel_sheetmetal');

    event.create("inconel_block")
        .displayName("Inconel Block")
        .material("metal")
        .hardness(1.0)
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('machineryrp:block/inconel_block');

    event.create("inconel_sheetmetal")
        .displayName("Inconel Sheetmetal")
        .material("metal")
        .hardness(1.0)
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .textureAll('machineryrp:block/inconel_sheetmetal');

    event.create("infinity_crystal")
        .displayName("Infinity Crystal")
        .material("metal")
        .hardness(1.0)
        .requiresTool(true)
        .tagBlock('mineable/pickaxe')
        .tagBlock('minecraft:needs_diamond_tool')
        .noCollision()
        .notSolid()
        .renderType('cutout')
        .model('machineryrp:block/infinity_crystal');
});