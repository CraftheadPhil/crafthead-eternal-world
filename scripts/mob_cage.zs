// Mob cages require domination core from completing the eternal gate.
craftingTable.remove(<item:cagedmobs:mob_cage>);
craftingTable.addShaped("mob_cage", <item:cagedmobs:mob_cage> * 1, [[<item:reliquary:hero_medallion>, <item:supplementaries:cage>, <item:reliquary:hero_medallion>], [<item:immersiveengineering:steel_fence>, <item:kubejs:domination_core>, <item:immersiveengineering:steel_fence>], [<item:immersiveengineering:storage_steel>, <item:immersiveengineering:storage_steel>, <item:immersiveengineering:storage_steel>]]);

craftingTable.remove(<item:cagedmobs:hopping_mob_cage>);
craftingTable.addShaped("hopping_cage", <item:cagedmobs:hopping_mob_cage> * 1, [[<item:minecraft:air>, <item:supplementaries:lock_block>, <item:minecraft:air>], [<item:rsgauges:industrial_small_lever>, <item:cagedmobs:mob_cage>, <item:supplementaries:crank>], [<item:minecraft:air>, <item:engineersdecor:factory_hopper>, <item:minecraft:air>]]);
