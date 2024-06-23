// Removes all the gates, only the custom eternal gate remains.
import crafttweaker.api.item.IItemStack;
import mods.jeitweaker.Jei;

val removeRecipes = [
    <item:gateways:gate_pearl>.withTag({gateway: "gateways:blaze_gate"}),
    <item:gateways:gate_pearl>.withTag({gateway: "gateways:blaze_gate_large"}),
    <item:gateways:gate_pearl>.withTag({gateway: "gateways:blaze_gate_small"}),
    <item:gateways:gate_pearl>.withTag({gateway: "gateways:creeper_gate"}),
    <item:gateways:gate_pearl>.withTag({gateway: "gateways:creeper_gate_large"}),
    <item:gateways:gate_pearl>.withTag({gateway: "gateways:creeper_gate_small"}),
    <item:gateways:gate_pearl>.withTag({gateway: "gateways:enderman_gate"}),
    <item:gateways:gate_pearl>.withTag({gateway: "gateways:enderman_gate_large"}),
    <item:gateways:gate_pearl>.withTag({gateway: "gateways:enderman_gate_small"}),
    <item:gateways:gate_pearl>.withTag({gateway: "gateways:ghast_gate"}),
    <item:gateways:gate_pearl>.withTag({gateway: "gateways:ghast_gate_large"}),
    <item:gateways:gate_pearl>.withTag({gateway: "gateways:ghast_gate_small"}),
    <item:gateways:gate_pearl>.withTag({gateway: "gateways:magma_cube_gate"}),
    <item:gateways:gate_pearl>.withTag({gateway: "gateways:magma_cube_gate_large"}),
    <item:gateways:gate_pearl>.withTag({gateway: "gateways:magma_cube_gate_small"}),
    <item:gateways:gate_pearl>.withTag({gateway: "gateways:shulker_gate"}),
    <item:gateways:gate_pearl>.withTag({gateway: "gateways:shulker_gate_large"}),
    <item:gateways:gate_pearl>.withTag({gateway: "gateways:shulker_gate_small"}),
    <item:gateways:gate_pearl>.withTag({gateway: "gateways:skeleton_gate"}),
    <item:gateways:gate_pearl>.withTag({gateway: "gateways:skeleton_gate_large"}),
    <item:gateways:gate_pearl>.withTag({gateway: "gateways:skeleton_gate_small"}),
    <item:gateways:gate_pearl>.withTag({gateway: "gateways:slime_gate"}),
    <item:gateways:gate_pearl>.withTag({gateway: "gateways:slime_gate_large"}),
    <item:gateways:gate_pearl>.withTag({gateway: "gateways:slime_gate_small"}),
    <item:gateways:gate_pearl>.withTag({gateway: "gateways:spider_gate"}),
    <item:gateways:gate_pearl>.withTag({gateway: "gateways:spider_gate_large"}),
    <item:gateways:gate_pearl>.withTag({gateway: "gateways:spider_gate_small"}),
    <item:gateways:gate_pearl>.withTag({gateway: "gateways:witch_gate"}),
    <item:gateways:gate_pearl>.withTag({gateway: "gateways:witch_gate_large"}),
    <item:gateways:gate_pearl>.withTag({gateway: "gateways:witch_gate_small"}),
    <item:gateways:gate_pearl>.withTag({gateway: "gateways:zombie_gate"}),
    <item:gateways:gate_pearl>.withTag({gateway: "gateways:zombie_gate_large"}),
    <item:gateways:gate_pearl>.withTag({gateway: "gateways:zombie_gate_small"}),
] as IItemStack[];

for item in removeRecipes {
    craftingTable.remove(item);
    Jei.hideIngredient(item);
}