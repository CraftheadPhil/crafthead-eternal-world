import mods.spoiled.SpoilingManager;
import crafttweaker.api.item.IItemStack;

var spoilManager = <recipetype:spoiled:spoil_recipe>;

val spoiledFood = <item:kubejs:spoiled_food>;
val spoilTime = 120;
val smokedSpoilTime = 600;

spoilManager.removeAll();

spoilManager.addModSpoiling("minecraft", spoiledFood, spoilTime);
spoilManager.addModSpoiling("farmersdelight", spoiledFood, spoilTime);
spoilManager.addModSpoiling("farmersrespite", spoiledFood, spoilTime);
spoilManager.addModSpoiling("culturaldelights", spoiledFood, spoilTime);
spoilManager.addModSpoiling("delightful", spoiledFood, spoilTime);
spoilManager.addModSpoiling("endersdelight", spoiledFood, spoilTime);
spoilManager.addModSpoiling("nethersdelight", spoiledFood, spoilTime);
spoilManager.addModSpoiling("oceansdelight", spoiledFood, spoilTime);
spoilManager.addModSpoiling("casualness_delight", spoiledFood, spoilTime);
spoilManager.addModSpoiling("italian_delight", spoiledFood, spoilTime);
spoilManager.addModSpoiling("pineapple_delight", spoiledFood, spoilTime);
spoilManager.addModSpoiling("collectorsreap", spoiledFood, spoilTime);
spoilManager.addModSpoiling("brewinandchewin", spoiledFood, spoilTime);

// Stuff that should not rot
spoilManager.removeByInput(<item:minecraft:spider_eye>);
spoilManager.removeByInput(<item:minecraft:rotten_flesh>);
spoilManager.removeByInput(<item:minecraft:honey_bottle>);
spoilManager.removeByInput(<item:brewinandchewin:jerky>);
spoilManager.removeByInput(<item:brewinandchewin:kippers>);
spoilManager.removeByInput(<item:brewinandchewin:pickled_pickles>);
spoilManager.removeByInput(<item:brewinandchewin:kimchi>);
spoilManager.removeByInput(<item:farmersdelight:wheat_dough>);
spoilManager.removeByInput(<item:farmersdelight:raw_pasta>);
spoilManager.removeByInput(<item:farmersdelight:pie_crust>);
spoilManager.removeByInput(<item:farmersdelight:apple_cider>);
spoilManager.removeByInput(<item:minecraft:dried_kelp>);

// Beverages should not spoil
spoilManager.removeByInput(<item:brewinandchewin:mead>);
spoilManager.removeByInput(<item:brewinandchewin:saccharine_rum>);
spoilManager.removeByInput(<item:brewinandchewin:rice_wine>);
spoilManager.removeByInput(<item:brewinandchewin:egg_grog>);
spoilManager.removeByInput(<item:brewinandchewin:strongroot_ale>);
spoilManager.removeByInput(<item:brewinandchewin:pale_jane>);
spoilManager.removeByInput(<item:brewinandchewin:salty_folly>);
spoilManager.removeByInput(<item:brewinandchewin:steel_toe_stout>);
spoilManager.removeByInput(<item:brewinandchewin:glittering_grenadine>);
spoilManager.removeByInput(<item:brewinandchewin:bloody_mary>);
spoilManager.removeByInput(<item:brewinandchewin:red_rum>);
spoilManager.removeByInput(<item:brewinandchewin:withering_dross>);
spoilManager.removeByInput(<item:brewinandchewin:kombucha>);

spoilManager.removeByInput(<item:collectorsreap:pomegranate_seeds>);
spoilManager.removeByInput(<item:collectorsreap:candied_lime>);
spoilManager.removeByInput(<item:collectorsreap:pomegranate_gummy>);
spoilManager.removeByInput(<item:collectorsreap:lime_gummy>);
spoilManager.removeByInput(<item:collectorsreap:apple_gummy>);
spoilManager.removeByInput(<item:collectorsreap:melon_gummy>);
spoilManager.removeByInput(<item:collectorsreap:green_tea_gummy>);
spoilManager.removeByInput(<item:collectorsreap:yellow_tea_gummy>);
spoilManager.removeByInput(<item:collectorsreap:black_tea_gummy>);
spoilManager.removeByInput(<item:collectorsreap:coffee_gummy>);

spoilManager.removeByInput(<item:collectorsreap:lime_green_tea>);
spoilManager.removeByInput(<item:collectorsreap:pomegranate_black_tea>);
spoilManager.removeByInput(<item:collectorsreap:pomegranate_custard>);

spoilManager.removeByInput(<item:collectorsreap:limeade>);
spoilManager.removeByInput(<item:collectorsreap:berry_limeade>);
spoilManager.removeByInput(<item:collectorsreap:pink_limeade>);

spoilManager.removeByInput(<item:culturaldelights:corn_dough>);
spoilManager.removeByInput(<item:culturaldelights:tortilla>);
spoilManager.removeByInput(<item:culturaldelights:tortilla_chips>);

spoilManager.removeByInput(<item:delightful:animal_fat>);
spoilManager.removeByInput(<item:delightful:salmonberry_gummy>);
spoilManager.removeByInput(<item:delightful:acorn>);
spoilManager.removeByInput(<item:delightful:nut_butter_bottle>);
spoilManager.removeByInput(<item:delightful:jelly_bottle>);
spoilManager.removeByInput(<item:delightful:glow_jelly_bottle>);
spoilManager.removeByInput(<item:delightful:matcha_latte>);
spoilManager.removeByInput(<item:delightful:berry_matcha_latte>);
spoilManager.removeByInput(<item:delightful:rock_candy>);

spoilManager.removeByInput(<item:endersdelight:chorus_juice>);

spoilManager.removeByInput(<item:farmersrespite:green_tea>);
spoilManager.removeByInput(<item:farmersrespite:black_tea>);
spoilManager.removeByInput(<item:farmersrespite:yellow_tea>);
spoilManager.removeByInput(<item:farmersrespite:rose_hip_tea>);
spoilManager.removeByInput(<item:farmersrespite:dandelion_tea>);
spoilManager.removeByInput(<item:farmersrespite:purulent_tea>);
spoilManager.removeByInput(<item:farmersrespite:gamblers_tea>);
spoilManager.removeByInput(<item:farmersrespite:coffee>);

spoilManager.removeByInput(<item:italian_delight:sweet_berry_wine>);
spoilManager.removeByInput(<item:italian_delight:glowberry_wine>);
spoilManager.removeByInput(<item:italian_delight:rosewine>);
spoilManager.removeByInput(<item:italian_delight:hasting_potion>);
spoilManager.removeByInput(<item:italian_delight:hellhound_wine>);
spoilManager.removeByInput(<item:italian_delight:dragonborn_wine>);

spoilManager.removeByInput(<item:pineapple_delight:pineapple_juice>);

// Smoked food last longer.
val smokedFood = [
    <item:culturaldelights:smoked_eggplant>,
    <item:culturaldelights:smoked_tomato>,
    <item:culturaldelights:smoked_cut_eggplant>,
    <item:culturaldelights:smoked_white_eggplant>,
    <item:farmersdelight:smoked_ham>,
    <item:farmersdelight:tomato_sauce>,
    <item:kubejs:smoked_meat>,
    <item:kubejs:smoked_fish>,
    <item:kubejs:smoked_mutton>,
    <item:kubejs:smoked_chicken>,
    <item:kubejs:smoked_pork>
] as IItemStack[];


for item in smokedFood {
    spoilManager.removeByInput(item);
    spoilManager.addSpoiling("spoiling/" + item.registryName.path, item, spoiledFood, smokedSpoilTime);
}
