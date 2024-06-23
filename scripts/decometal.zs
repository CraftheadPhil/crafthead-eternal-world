import crafttweaker.api.recipe.FurnaceRecipeManager;
craftingTable.remove(<item:dustrial_decor:cast_iron_billet>);
craftingTable.remove(<item:dustrial_decor:industrial_iron_billet>);
furnace.addRecipe("cast_iron", <item:dustrial_decor:cast_iron_billet> * 2, <item:minecraft:iron_ingot>, 1, 200);
furnace.addRecipe("industrial_iron", <item:dustrial_decor:industrial_iron_billet>, <item:dustrial_decor:cast_iron_billet>, 1, 200);

val mold = <item:immersiveengineering:mold_rod>;

craftingTable.remove(<item:engineersdecor:metal_bar>);

<recipetype:immersiveengineering:metal_press>.addRecipe(
    "metal_bars", <item:dustrial_decor:industrial_iron_billet>, mold, 1000, <item:engineersdecor:metal_bar> * 2
);
