const removals = [
    ["manyideas_core:planks_seamless_oak"],
    ["manyideas_core:planks_seamless_dark_oak"],
    ["manyideas_core:planks_seamless_birch"],
    ["manyideas_core:planks_seamless_spruce"],
    ["manyideas_core:planks_seamless_jungle"],
    ["manyideas_core:planks_seamless_acacia"],
    ["manyideas_core:planks_seamless_mangrove"],
    ["manyideas_core:planks_seamless_crimson"],
    ["manyideas_core:planks_seamless_warped"],
];

JEIEvents.hideItems(event => {
    removals.forEach(([r]) => {
        event.hide(r);
    });
});
