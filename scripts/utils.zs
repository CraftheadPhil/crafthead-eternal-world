val stone = <item:minecraft:stone>;
val spiderString = <item:minecraft:string>;
val air = <item:minecraft:air>;

craftingTable.addShaped("endstone", <item:minecraft:end_stone> * 8, [
    [stone, stone, stone],
    [stone, <item:endersdelight:ender_shard>, stone],
    [stone, stone, stone],
]);
craftingTable.addShaped("cobweb", <item:minecraft:cobweb>, [
    [<item:minecraft:air>, spiderString, <item:minecraft:air>],
    [spiderString, <item:minecraft:slime_ball>, spiderString],
    [<item:minecraft:air>, spiderString, <item:minecraft:air>],
]);
craftingTable.addShapeless("rottenflesh_to_leather", <item:minecraft:leather>, [
    <item:minecraft:rotten_flesh>, <item:minecraft:rotten_flesh>
]);
