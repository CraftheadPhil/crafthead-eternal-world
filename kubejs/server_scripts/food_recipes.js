ServerEvents.recipes(event => {
    event.smoking('kubejs:smoked_meat', 'minecraft:cooked_beef');
    event.smoking('kubejs:smoked_fish', 'minecraft:cooked_cod');
    event.smoking('kubejs:smoked_fish', 'minecraft:cooked_salmon');
    event.smoking('kubejs:smoked_fish', 'minecraft:tropical_fish');
    event.smoking('kubejs:smoked_mutton', 'minecraft:cooked_mutton');
    event.smoking('kubejs:smoked_chicken', 'minecraft:cooked_chicken');
    event.smoking('kubejs:smoked_pork', 'minecraft:cooked_porkchop');
});
