import mods.jeitweaker.Jei;

Jei.hideModIngredients("rechiseled", path => path == "chisel");
Jei.hideModIngredients("chipped", path => "table" in path | "bench" in path | path == "glassblower");
