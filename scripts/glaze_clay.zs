val air = <item:minecraft:air>;
val glazeClay = <item:kubejs:glaze_clay>;
val clay = <item:minecraft:clay_ball>;
val ash = <item:supplementaries:ash>;
val unfired_glazed_pot = <item:kubejs:unfired_glazed_pot>;
val glazed_pot = <item:kubejs:glazed_pot>;

craftingTable.addShapeless("glaze_clay", glazeClay, [
    clay, ash
]);
craftingTable.addShaped("unfired_glazed_pot", unfired_glazed_pot, [
    [air, air, air],
    [glazeClay, air, glazeClay],
    [air, glazeClay, air]
]);

furnace.addRecipe("glazed_pot", glazed_pot, unfired_glazed_pot, 1, 200);
