// encourage using sawmills.

const woods = [
    ["minecraft:oak_log", "minecraft:oak_planks", "manyideas_core:planks_seamless_oak"],
    ["minecraft:dark_oak_log", "minecraft:dark_oak_planks", "manyideas_core:planks_seamless_dark_oak"],
    ["minecraft:birch_log", "minecraft:birch_planks", "manyideas_core:planks_seamless_birch"],
    ["minecraft:spruce_log", "minecraft:spruce_planks", "manyideas_core:planks_seamless_spruce"],
    ["minecraft:jungle_log", "minecraft:jungle_planks", "manyideas_core:planks_seamless_jungle"],
    ["minecraft:acacia_log", "minecraft:acacia_planks", "manyideas_core:planks_seamless_acacia"],
    ["minecraft:mangrove_log", "minecraft:mangrove_planks", "manyideas_core:planks_seamless_mangrove"],
    ["minecraft:crimson_stem", "minecraft:crimson_planks", "manyideas_core:planks_seamless_crimson"],
    ["minecraft:warped_stem", "minecraft:warped_planks", "manyideas_core:planks_seamless_warped"],
    ["culturaldelights:avocado_log", "minecraft:jungle_planks", null],
];

ServerEvents.recipes(event => {
    woods.forEach((wood) => {
        const [log, planks, seamless] = wood;
        event.remove({ input: log, output: planks, type: "minecraft:crafting_shapeless" });
        event.shapeless(`2x ${planks}`, [log]);
        if (seamless) {
            event.remove({ output: seamless })
        }
    });
});