// Recipes that need to be removed alone.
import crafttweaker.api.item.IItemStack;

val removeRecipes = [
    <item:prettypipes:pipe>,
    <item:prettypipes:item_terminal>,
    <item:prettypipes:pressurizer>,
    <item:tesseract:tesseract>,
    <item:waystones:warp_dust>,
    <item:waystones:warp_stone>,
    <item:bigreactors:basic_reactorcontroller>,

] as IItemStack[];

for item in removeRecipes {
    craftingTable.remove(item);
}