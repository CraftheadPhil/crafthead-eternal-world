import crafttweaker.api.item.IItemStack;
import mods.jeitweaker.Jei;

val remove = [
<item:bigreactors:reinforced_reactorfluidport_mekanism_passive>,
<item:bigreactors:reinforced_reactorcreativewatergenerator>,
<item:bigreactors:basic_turbinecreativesteamgenerator>,
<item:bigreactors:reinforced_turbinecreativesteamgenerator>,
<item:delightful:azalea_tea>,
<item:delightful:lavender_tea>,
<item:delightful:prickly_pear_juice>,
<item:delightful:crab_rangoon>,
<item:italian_delight:spumante>,

] as IItemStack[];

for item in remove {
    Jei.hideIngredient(item);
}