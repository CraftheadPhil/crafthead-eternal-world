StartupEvents.registry('item', (event) => {
    event.create('chromium_dust')
        .texture('machineryrp:item/chromium_dust');
    event.create('machine_core')
        .texture('machineryrp:item/machine_core');
    event.create('stainless_steel_ingot')
        .texture('machineryrp:item/stainless_steel_ingot');
    event.create('stainless_steel_plate')
        .texture('machineryrp:item/stainless_steel_plate');
    event.create('plastic_plate')
        .texture('machineryrp:item/plastic_plate');
    event.create('crystal_dust')
        .glow(true)
        .texture('machineryrp:item/crystal_dust');
    event.create('domination_core')
        .glow(true)
        .texture('machineryrp:item/domination_core');

    event.create('storage_core')
        .glow(true)
        .texture('machineryrp:item/storage_core');

    event.create('eternal_crystal')
        .glow(true)
        .tooltip('Complete eternal gate to obtain')
        .texture('machineryrp:item/eternal_crystal');
    event.create('eternal_shard')
        .glow(true)
        .tooltip('Obtained by completing waves of the eternal gate')
        .texture('machineryrp:item/eternal_shard');
    event.create('eternal_dust')
        .glow(true)
        .texture('machineryrp:item/eternal_dust');

    event.create('spoiled_food')
        .texture('machineryrp:item/spoiled_food');

    event.create('circuit_board')
        .texture('machineryrp:item/circuit_board');

    event.create('warp_metal')
        .glow(true)
        .texture('machineryrp:item/warp_metal');

    event.create('obsidian_dust')
        .texture('machineryrp:item/obsidian_dust');

    event.create('farming_core')
        .texture('machineryrp:item/farming_core');

    event.create('glaze_clay')
        .texture('machineryrp:item/glaze_clay');

    event.create('unfired_glazed_pot')
        .texture('machineryrp:item/unfired_glazed_pot');

    event.create('glazed_pot')
        .texture('machineryrp:item/glazed_pot');

    event.create('inconel_ingot')
        .texture('machineryrp:item/inconel_ingot');

    event.create('inconel_dust')
        .texture('machineryrp:item/inconel_dust');

    event.create('inconel_plate')
        .texture('machineryrp:item/inconel_plate');

    event.create('speed_upgrade')
        .maxStackSize(16)
        .texture('machineryrp:item/speed_upgrade');

    event.create('energy_upgrade')
        .maxStackSize(16)
        .texture('machineryrp:item/energy_upgrade');
});
