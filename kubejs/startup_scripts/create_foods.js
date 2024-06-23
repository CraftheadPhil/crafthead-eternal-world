const SMOKED_FOOD_TOOLTIP = "Smoked food last longer";

StartupEvents.registry('item', event => {
    event.create("smoked_meat")
        .texture("customfood:item/smoked_meat")
        .tooltip(SMOKED_FOOD_TOOLTIP)
        .tag("forge:cooked_beef")
        .food(food => {
            food.hunger(6)
                .saturation(0.6)
                .meat();
        });
    event.create("smoked_fish")
        .texture("customfood:item/smoked_fish")
        .tooltip(SMOKED_FOOD_TOOLTIP)
        .tag("forge:cooked_fishes")
        .food(food => {
            food.hunger(6)
                .saturation(0.6)
                .meat();
        });
    event.create("smoked_chicken")
        .texture("customfood:item/smoked_chicken")
        .tooltip(SMOKED_FOOD_TOOLTIP)
        .tag("forge:cooked_chicken")
        .food(food => {
            food.hunger(6)
                .saturation(0.6)
                .meat();
        });
    event.create("smoked_mutton")
        .texture("customfood:item/smoked_mutton")
        .tooltip(SMOKED_FOOD_TOOLTIP)
        .tag("forge:cooked_mutton")
        .food(food => {
            food.hunger(6)
                .saturation(0.6)
                .meat();
        });
    event.create("smoked_pork")
        .texture("customfood:item/smoked_pork")
        .tooltip(SMOKED_FOOD_TOOLTIP)
        .tag("forge:cooked_pork")
        .food(food => {
            food.hunger(7)
                .saturation(0.6)
                .meat();
        });
});
