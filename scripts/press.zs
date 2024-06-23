val plateMold = <item:immersiveengineering:mold_plate>;
val rodMold = <item:immersiveengineering:mold_rod>;

<recipetype:immersiveengineering:metal_press>.addRecipe(
    "stainless_steel_plate",
    <item:kubejs:stainless_steel_ingot>,
    plateMold,
    1000,
    <item:kubejs:stainless_steel_plate>
);
<recipetype:immersiveengineering:metal_press>.addRecipe(
    "inconel_plate",
    <item:kubejs:inconel_ingot>,
    plateMold,
    1000,
    <item:kubejs:inconel_plate>
);