StartupEvents.registry("fluid", (event) => {
    event.create("treated_water")
        .thinTexture(0x00AAFF)
        .bucketColor(0x00AAFF)
        .displayName("Treated Water");

    event.create("sulfuric_acid")
        .thinTexture(0xffea00)
        .bucketColor(0xffea00)
        .displayName("Sulfuric acid");

    event.create("liquid_crystal")
        .thickTexture(0xa4036d)
        .bucketColor(0xa4036d)
        .displayName("Liquid Crystal");

    event.create("iron_slurry")
        .thickTexture(0xf5c173)
        .noBucket()
        .noBlock()
        .displayName("Iron Slurry");

    event.create("gold_slurry")
        .thickTexture(0xffd208)
        .noBucket()
        .noBlock()
        .displayName("Gold Slurry");
    
    event.create("copper_slurry")
        .thickTexture(0xff8519)
        .noBucket()
        .noBlock()
        .displayName("Copper Slurry");

    event.create("silver_slurry")
        .thickTexture(0xe0e0e0)
        .noBucket()
        .noBlock()
        .displayName("Silver Slurry");

    event.create("lead_slurry")
        .thickTexture(0x426299)
        .noBucket()
        .noBlock()
        .displayName("Lead Slurry");

    event.create("aluminum_slurry")
        .thickTexture(0xffc4fc)
        .noBucket()
        .noBlock()
        .displayName("Aluminum Slurry");

    event.create("nickel_slurry")
        .thickTexture(0x8c898c)
        .noBucket()
        .noBlock()
        .displayName("Nickel Slurry");

    event.create("enderfluid")
        .thickTexture(0x015c78)
        .noBucket()
        .noBlock()
        .displayName("Enderfluid");
});