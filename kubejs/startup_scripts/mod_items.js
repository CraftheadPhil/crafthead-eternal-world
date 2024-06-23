const exoticArmors = [
  'atlas',
  'legion',
  'stryder',
  'ogre',
  'ion'
]

ItemEvents.modification(event => {
    event.modify('minecraft:ender_pearl', item => {
      item.maxStackSize = 64
      item.fireResistant = true
      item.rarity = "UNCOMMON"
    });

    exoticArmors.forEach(armor => {
      event.modify(`exocraft:${armor}_helmet`, item => {
        item.armorToughness = 3;
        item.armorProtection = 4;
        item.maxDamage = 450;
      });
      event.modify(`exocraft:${armor}_chestplate`, item => {
        item.armorToughness = 3;
        item.armorProtection = 9;
        item.maxDamage = 650;
      });
      event.modify(`exocraft:${armor}_leggings`, item => {
        item.armorToughness = 3;
        item.armorProtection = 7;
        item.maxDamage = 600;
      });
      event.modify(`exocraft:${armor}_boots`, item => {
        item.armorToughness = 3;
        item.armorProtection = 4;
        item.maxDamage = 550;
      });
    });
});
