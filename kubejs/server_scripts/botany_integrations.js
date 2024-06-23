const glazedPot = 'kubejs:glazed_pot';
const farmingCore = 'kubejs:farming_core';
const eternalShard = 'kubejs:eternal_shard';
const emerald = 'minecraft:emerald';
const fertileEssence = 'reliquary:fertile_essence';
const terracotta = 'minecraft:terracotta';
const fertilizer = 'immersiveengineering:fertilizer';

const sack = "supplementaries:sack";
const basket = "farmersdelight:basket";
const factoryHopper = "engineersdecor:factory_hopper";
const outputUpgrade = "betterfurnacesreforged:autooutput_upgrade";
const netherStar = "minecraft:nether_star";


const tiers = [
    "elite_",
    "ultra_",
    "creative_",
];


const tierRecipes = {
    "": (event, base, colorBlock) => {
        console.log(base);
        console.log(colorBlock);
        event.shaped(
            base,
            [
                'tft',
                'tgt',
                'ete',
            ],
            {
                f: farmingCore,
                t: colorBlock,
                e: fertilizer,
                g: glazedPot,
            }
        )
    },
    elite_: (event, base, previous) => {
        console.log(`${previous} -> ${base}`);
        event.shaped(
            base,
            [
                'gcg',
                'vpv',
                'gig'
            ],
            {
                c: farmingCore,
                p: previous,
                v: "minecraft:vine",
                i: "minecraft:ender_pearl",
                g: "minecraft:gold_block"
            }
        );
    },
    ultra_: (event, base, previous) => {
        console.log(`${previous} -> ${base}`);
        event.shaped(
            base,
            [
                'ncn',
                'epe',
                'nsn'
            ],
            {
                n: 'minecraft:diamond_block',
                s: netherStar,
                e: eternalShard,
                p: previous,
                c: farmingCore,

            }
        )

    },
    creative_: (event, base, previous) => {
        console.log(`${previous} -> ${base}`);
        event.shaped(
            base,
            [
                'ncn',
                'dpd',
                'nen'
            ],
            {
                n: 'minecraft:netherite_block',
                d: 'cagedmobs:dragon_scale',
                e: 'kubejs:eternal_crystal',
                p: previous,
                c: farmingCore,

            }
        );
    }
}

const materials = [
    'terracotta',
    'glazed_terracotta',
    'concrete'
];

const colors = [
    "",
    "white_",
    "orange_",
    "magenta_",
    "light_blue_",
    "yellow_",
    "lime_",
    "pink_",
    "gray_",
    "light_gray_",
    "cyan_",
    "purple_",
    "blue_",
    "brown_",
    "green_",
    "red_",
    "black_"
];

const botanyMods = [
    "botanypots",
    "botanypotstiers"
];



function formatPot(mod, tier, color, mat, hop) {
    return `${mod}:${tier}${color}${mat}${hop}_botany_pot`
}

function formatMaterial(color, mat) {
    return `minecraft:${color}${mat}`
}

function stack(item) {
    return `1x ${item}`
}

function addHopperRecipe(event, base, hopper) {
    console.log(hopper);
    event.remove({output: hopper});
    event.shaped(
        stack(hopper),
        [
            ' o ',
            'sbc',
            ' h '
        ],
        {
            b: base,
            s: sack,
            c: basket,
            h: factoryHopper,
            o: outputUpgrade,
        }
    )
}

function addBaseRecipe(event, base, tier, arg) {
    event.remove({output: base});
    tierRecipes[tier](event, base, arg);
}

function handleTier(event, mod, tier, previousTier) {
    const previousMod = previousTier === '' ? botanyMods[0] : mod;
    colors.forEach(color => {
        materials.forEach(mat => {
            const current = formatPot(mod, tier, color, mat, '');
            const currentHopper = formatPot(mod, tier, color, mat, '_hopper');
            const material = formatMaterial(color, mat);
            if (color === '' && mat !== 'terracotta') {
                return;
            }
            if (previousTier === -1) {
                addBaseRecipe(event, current, tier, material)
            } else {
                addBaseRecipe(event, current, tier, formatPot(previousMod, previousTier, color, mat, ""));
                addBaseRecipe(event, currentHopper, tier, formatPot(previousMod, previousTier, color, mat, "_hopper"));
            }
            addHopperRecipe(event, current, currentHopper);
        });
    });
}

ServerEvents.recipes(event => {
    event.shaped(
        stack(farmingCore),
        [
            'efe',
            'fgf',
            'efe'
        ],
        {
            e: fertilizer,
            g: emerald,
            f: fertileEssence,
        }
    );
    let previousMod = botanyMods[0];
    botanyMods.forEach(mod => {
        let previous = '';
        if (mod === "botanypots") {
            handleTier(event, mod, '', -1);
        } else {
            tiers.forEach(tier => {
                handleTier(event, mod, tier, previous);
                previous = tier;
            });
        }
    })
});
