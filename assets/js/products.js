// Wonda Luxe Products Data
const products = [
  {
    id: "kiko-glossy-lip-set",
    name: "KIKO Milano Glossy Lip Set",
    category: "Lips",
    price: 8500,
    image: "assets/images/571976.jpg",
    description: "The perfect glossy lip kit featuring hydrating 3D Hydra Lip Glosses and a plumping Lip Volume cream. Delivers rich pearlescent colour, high shine, and deep hydration for voluminous, soft lips.",
    ingredients: "3D Hydra Lipgloss: Polybutene, Octyldodecanol, Silica Dimethyl Silylate, Octyldodecyl Stearoyl Stearate, Triethylhexanoin, Triisodecyl Trimellitate, Isocetyl Stearate, Diisostearyl Malate, Pentaerythrityl Tetraisostearate, Phenylpropyldimethylsiloxysilicate, Glyceryl Behenate/Eicosadioate, Elaeis Guineensis (Palm) Oil, Gossypium Herbaceum (Cotton) Seed Oil, Bidens Pilosa Extract, Linum Usitatissimum (Linseed) Seed Oil, Tocopherol, Diethylhexyl Syringylidenemalonate, Caprylic/Capric Triglyceride, Tocopheryl Acetate, Ethyl Vanillin, Calcium Sodium Borosilicate, Calcium Aluminum Borosilicate, Silica, Synthetic Fluorphlogopite, Mica, Tin Oxide. May contain: CI 77891, CI 77491, CI 77492, CI 77499, CI 15850, CI 19140, CI 45410, CI 42090.\n\nLip Volume (Tutu Rose): Hydrogenated Polydecene, Polybutene, Hydrogenated Styrene/Isoprene Copolymer, Caprylic/Capric Triglyceride, Ethylhexyl Palmitate, Bis-Behenyl/Isostearyl/Phytosteryl Dimer Dilinoleyl Dimer Dilinoleate, Dipentaerythrityl Tetrahydroxystearate/Tetraisostearate, Dimethyl Isosorbide, Menthone Glycerin Acetal, Aroma, Pentaerythrityl Tetra-Di-T-Butyl Hydroxyhydrocinnamate, Tocopherol, Sesamum Indicum Seed Extract, Silica Dimethyl Silylate, Butylene Glycol, Caprylyl Glycol, Phenoxyethanol, Sodium Hyaluronate, Hexylene Glycol."
  },
  {
    id: "nyx-bare-with-me-blur",
    name: "NYX Bare With Me Blur Tint Foundation - 14 Medium Tan",
    category: "Face",
    price: 7200,
    image: "assets/images/571975.jpg",
    description: "Lightweight blurring tint foundation with medium buildable coverage and a soft matte finish. Formulated with Glycerin, Matcha (Camellia Sinensis), and Niacinamide for smooth, filter-like skin that lasts up to 12 hours. Ideal for normal to oily skin. Vegan & cruelty-free.",
    ingredients: "Dimethicone, Aqua/Water/Eau, Isododecane, Glycerin, Silica, PEG-9 Polydimethylsiloxyethyl Dimethicone, Propylene Glycol, Disteardimonium Hectorite, Dimethicone Crosspolymer, PEG-10 Dimethicone, Cetyl PEG/PPG-10/1 Dimethicone, Phenoxyethanol, Sodium Chloride, Polyglyceryl-4 Isostearate, Caprylyl Glycol, Disodium Stearoyl Glutamate, Ethylhexylglycerin, Aluminum Hydroxide, Butylene Glycol, Camellia Sinensis Leaf Extract, Niacinamide, Sodium Hyaluronate, Tocopherol, Pentaerythrityl Tetra-Di-T-Butyl Hydroxyhydrocinnamate. May contain: CI 77891/Titanium Dioxide, CI 77491, CI 77492, CI 77499/Iron Oxides."
  },
  {
    id: "lavin-heel-cream",
    name: "LAVIN Heel Crack Cream (Topuk Çatlak Kremi) 100ml",
    category: "Body Care",
    price: 4500,
    image: "assets/images/571974.jpg",
    description: "Specialized heel crack cream enriched with Allantoin to repair and soften dry, cracked, and rough heels. Provides intensive hydration and visible improvement with regular use. Suitable for dry and calloused feet.",
    ingredients: "Aqua, Urea, Glycerin, Caprylic/Capric Triglyceride, Cetearyl Alcohol, Panthenol, Allantoin, Tocopheryl Acetate, Aloe Barbadensis Leaf Extract, Dimethicone, Carbomer, Triethanolamine, Parfum, and other moisturizing agents. (Formulated with Allantoin for cracked heels.) (Check product packaging for the full ingredient list.)"
  },
  {
    id: "sheglam-oil-control-powder",
    name: "SHEGLAM Oil Control Powder - Cappuccino",
    category: "Face",
    price: 5500,
    image: "assets/images/571973.jpg",
    description: "Oil-control setting powder that instantly blurs, minimizes pores, and gives a baked glow. Features before-and-after results for a flawless, matte finish. Lightweight and long-wearing. Shade: Cappuccino.",
    ingredients: "Mica, Silica, Synthetic Wax, Synthetic Fluorphlogopite, Aluminum Starch Octenylsuccinate, Diphenyl Dimethicone/Vinyl Diphenyl Dimethicone/Silsesquioxane Crosspolymer, Diisostearyl Malate, Cetyl Dimethicone, Petrolatum, Triethylhexanoin, Boron Nitride, Dimethicone, Saccharomyces Ferment, Triethoxycaprylylsilane, Phenoxyethanol, Simmondsia Chinensis (Jojoba) Seed Oil, Butyrospermum Parkii (Shea) Butter, Methicone, Hydrogen Dimethicone, Caprylyl Glycol, Tocopheryl Acetate, Lauroyl Lysine, Alumina, Titanium Dioxide (CI 77891), Iron Oxides (CI 77492, CI 77491, CI 77499)."
  },
  {
    id: "sheglam-skin-sync-foundation",
    name: "SHEGLAM Skin Sync Satin Foundation",
    category: "Face",
    price: 6800,
    image: "assets/images/571972.jpg",
    description: "Satin finish foundation with buildable coverage suitable for dry, oily & combination skin. Provides 8H wear, soft-focus blur of pores, and a natural satin glow. Enriched with meadowfoam seed oil, sodium hyaluronate, and squalane.",
    ingredients: "Water/Aqua/Eau, Dimethicone, Propylene Glycol, Isododecane, Glycerin, Hydrogenated Didecene, Trimethylsiloxysilicate, Phenyl Trimethicone, PEG-10 Dimethicone, Synthetic Fluorphlogopite, Cetyl PEG/PPG-10/1 Dimethicone, Aluminum Starch Octenylsuccinate, Polyglyceryl-2 Triisostearate, Disteardimonium Hectorite, Magnesium Sulfate, Polyglyceryl-4 Isostearate, Phenoxyethanol, Glyceryl Behenate/Eicosadioate, Propylene Carbonate, Ethylhexylglycerin, Caprylyl Glycol, Aluminum Hydroxide, Triethoxycaprylylsilane, Disodium EDTA, Squalane, Limnanthes Alba (Meadowfoam) Seed Oil, Pentylene Glycol, Pentaerythrityl Tetra-Di-T-Butyl Hydroxyhydrocinnamate, Sodium Hyaluronate, Sodium Acetylated Hyaluronate, Sodium Hyaluronate Crosspolymer, Hydrolyzed Sodium Hyaluronate. May contain: Titanium Dioxide/CI 77891, Iron Oxides/CI 77492, CI 77491, CI 77499."
  },
  {
    id: "sheglam-eyeshadow-palette",
    name: "SHEGLAM 4-Shade Eyeshadow Palette",
    category: "Eyes",
    price: 6200,
    image: "assets/images/571969.jpg",
    description: "Versatile 4-shade eyeshadow palette with matte and highly glittery finishes. Perfect for everyday and glam looks. Features warm bronze, gold, and shimmer shades that blend seamlessly.",
    ingredients: "Mica, Talc, Synthetic Fluorphlogopite, Silica, Dimethicone, Caprylic/Capric Triglyceride, Phenoxyethanol, Tin Oxide, and colorants (Iron Oxides, Titanium Dioxide, Ultramarines, etc.). Glitter shades contain light-reflecting particles. (Check product packaging for the full ingredient list.)"
  },
  {
    id: "loreal-true-match-c6",
    name: "L'Oréal True Match Super-Blendable Foundation - C6 Cool Medium",
    category: "Face",
    price: 9800,
    image: "assets/images/571968.jpg",
    description: "Super-blendable skincare-infused foundation with precise skin-matching technology. Enriched with Hyaluronic Acid for 24H hydration. Medium buildable coverage with a natural, breathable finish. Suitable for sensitive skin. 30ml.",
    ingredients: "Aqua/Water, Dimethicone, Isododecane, Cyclohexasiloxane, Glycerin, PEG-10 Dimethicone, Methyl Methacrylate Crosspolymer, Butylene Glycol, Pentylene Glycol, Synthetic Fluorphlogopite, Disteardimonium Hectorite, Hydroxyethylpiperazine Ethane Sulfonic Acid, Cetyl PEG/PPG-10/1 Dimethicone, Sodium Chloride, Polyglyceryl-4 Isostearate, Hexyl Laurate, Caprylyl Glycol, Phenoxyethanol, Disodium Stearoyl Glutamate, Tocopherol, Panthenol, Aluminum Hydroxide, Hydroxyethyl Urea, Aloe Barbadensis Leaf Juice Powder, Sodium Hyaluronate, Silica, Tin Oxide, Pentaerythrityl Tetra-Di-T-Butyl Hydroxyhydrocinnamate. May contain: CI 77891, CI 77491, CI 77492, CI 77499, Mica, CI 77007, CI 77288."
  },
  {
    id: "rimmel-lasting-finish-302",
    name: "Rimmel Lasting Finish 35HR Foundation - 302 Warm Olive",
    category: "Face",
    price: 8900,
    image: "assets/images/571971.jpg",
    description: "Full coverage liquid foundation with up to 35-hour wear and SPF 20. Enriched with Hyaluronic Acid, 2% Niacinamide, and Vitamin E for unbeatable hydration. Natural healthy-looking finish. Vegan & cruelty-free. 30ml.",
    ingredients: "Aqua/Water/Eau, Dicaprylyl Ether, Dicaprylyl Carbonate, Isododecane, Zinc Oxide [nano], Silica, Aluminum Starch Octenylsuccinate, Glycerin, Cetyl PEG/PPG-10/1 Dimethicone, Tri(Polyglyceryl-3/Lauryl) Hydrogenated Trilinoleate, Sodium Chloride, Trimethylsiloxysilicate, Niacinamide, 2,3-Butanediol, Stearalkonium Bentonite, Propylene Carbonate, Tocopheryl Acetate, Caprylic/Capric Triglyceride, Triethoxycaprylylsilane, Alpha-Glucan Oligosaccharide, Silica Dimethyl Silylate, Sodium Benzoate, Chlorphenesin, Parfum/Fragrance, Sodium Hyaluronate, Hexyl Cinnamal, Limonene, Dimethylmethoxy Chromanol, Rosa Damascena Flower Extract, Tocopherol, Benzyl Salicylate, Linalool, Geraniol, Citronellol, Alpha-Isomethyl Ionone, Pentaerythrityl Tetra-Di-T-Butyl Hydroxyhydrocinnamate. May contain: Iron Oxides (CI 77491, CI 77492, CI 77499), Titanium Dioxide (CI 77891)."
  },
  {
    id: "lace-makeup-bags",
    name: "Luxury Lace Makeup Bags Set (3 Pieces)",
    category: "Accessories",
    price: 7500,
    image: "assets/images/571970.jpg",
    description: "Elegant cream lace makeup bags set of 3 different sizes. Perfect for organizing brushes, products, and travel. Beautiful floral lace design with black zippers and charm details. Stylish and functional.",
    ingredients: "N/A - Accessory. Made from lace fabric, polyester lining, and metal zipper hardware."
  },
  {
    id: "elf-bronzer-contour",
    name: "e.l.f. Camo Liquid Bronzer & Contour",
    category: "Face",
    price: 4800,
    image: "assets/images/571967.jpg",
    description: "High-pigment liquid bronzer and contour hybrid for a long-lasting sun-kissed and sculpted look. Lightweight, blendable formula with natural finish. Comes with grooved applicator. Vegan & cruelty-free.",
    ingredients: "Hydrogenated Polyisobutene, Hydrogenated Poly(C6-14 Olefin), Octyldodecanol, Trimethylolpropane Triisostearate, Boron Nitride, Hydrogenated Styrene/Methylstyrene/Indene Copolymer, C9-12 Alkane, Trimethylsiloxysilicate, Alumina, Illite, Disteardimonium Hectorite, Phenyl Trimethicone, Ethylene/Propylene/Styrene Copolymer, Propylene Carbonate, Sorbitan Sesquioleate, Ethylhexylglycerin, Triethoxycaprylylsilane, Tin Oxide, Pentaerythrityl Tetra-Di-T-Butyl Hydroxyhydrocinnamate, Butylene/Ethylene/Styrene Copolymer, Tocopherol, Rosa Damascena Flower Water, Water (Aqua), Ricinus Communis (Castor) Seed Oil, Sodium Hyaluronate, Hydrogenated Castor Oil, Hibiscus Mutabilis Flower Extract, Phenoxyethanol. May contain: Iron Oxides (CI 77491, CI 77492, CI 77499), Titanium Dioxide (CI 77891)."
  },
  {
    id: "maybelline-fitme-powder-320",
    name: "Maybelline Fit Me Matte + Poreless Powder - 320 Natural Tan",
    category: "Face",
    price: 5200,
    image: "assets/images/571966.jpg",
    description: "Matte + Poreless pressed powder that instantly mattifies skin and minimizes the look of pores. Lightweight with 12-hour wear. Ideal for normal to oily skin. Dermatologist tested, non-comedogenic. 8.5g.",
    ingredients: "Talc, Perlite, Triisostearin, Phenyl Trimethicone, Magnesium Stearate, Caprylyl Glycol. May contain: CI 77891/Titanium Dioxide, CI 77491, CI 77492, CI 77499/Iron Oxides."
  },
  {
    id: "perfume-set-maison",
    name: "Luxury Perfume Collection (Maison Asrar, Zandas Sugar Radio, Genie's Secret Bombshell)",
    category: "Fragrance",
    price: 18500,
    image: "assets/images/571964.jpg",
    description: "Exclusive set featuring Maison Asrar perfume, Zandas Sugar Radio perfume body spray, and Genie's Secret Bombshell Seduction eau de parfum. A mix of elegant and seductive scents.",
    ingredients: "Alcohol Denat., Parfum/Fragrance, Aqua, and other fragrance compounds. Individual notes vary by bottle (oriental, sweet, floral). (Check product packaging for the full ingredient list.)"
  },
  {
    id: "arabic-perfume-set",
    name: "Arabic Eau de Parfum Gift Set",
    category: "Fragrance",
    price: 15000,
    image: "assets/images/571965.jpg",
    description: "Premium Arabic-style eau de parfum set in elegant packaging with traditional design elements. Long-lasting oriental fragrances.",
    ingredients: "Alcohol Denat., Parfum, Aqua, and proprietary fragrance oils typical of Arabic perfumery (oud, musk, floral notes). (Check product packaging for the full ingredient list.)"
  },
  {
    id: "kaylia-summer-set",
    name: "Kaylia & My Her Fragrance Set (Vanilla, Sugar Candy, My Her)",
    category: "Fragrance",
    price: 12000,
    image: "assets/images/571963.jpg",
    description: "Delightful summer scent collection including My Her Fragrance Deluxe, Sugar Candy Body Mist, and Kaylia Vanilla. Fresh, sweet, and playful fragrances.",
    ingredients: "Alcohol Denat., Parfum, Aqua, Glycerin (for mists). Notes include vanilla, candy, floral. (Check product packaging for the full ingredient list.)"
  },
  {
    id: "cocktail-kaylia-set",
    name: "Cocktail Intense & Kaylia Elixir Set",
    category: "Fragrance",
    price: 13500,
    image: "assets/images/571962.jpg",
    description: "Bold fragrance set featuring Cocktail Intense eau de parfum, Sugar X Chrome body spray, and Kaylia Elixir. Intense and sophisticated scents.",
    ingredients: "Alcohol Denat., Parfum/Fragrance, Aqua. Concentrated perfume oils. (Check product packaging for the full ingredient list.)"
  },
  {
    id: "ashantee-armaf-set",
    name: "Ashantee Floral, Armaf Island Bliss & Now Diva Set",
    category: "Fragrance",
    price: 16000,
    image: "assets/images/571961.jpg",
    description: "Tropical and floral fragrance collection: Ashantee Floral (L'Amour à Paris), Armaf Island Bliss Delight, and Now Diva. Perfect for summer vibes.",
    ingredients: "Alcohol Denat., Parfum, Aqua. Notes include floral, fruity, and fresh accords. (Check product packaging for the full ingredient list.)"
  },
  {
    id: "amd-oud-6000",
    name: "AMD Oud 6000 Eau de Parfum",
    category: "Fragrance",
    price: 22000,
    image: "assets/images/571958.jpg",
    description: "Luxurious oud fragrance with main accords of oud, warm spicy, rose, smoky, woody, white floral, leather, fresh spicy, citrus, and floral. Elegant bottle with gold detailing.",
    ingredients: "Alcohol Denat., Parfum, Aqua. Rich in oud, rose, spices, and woody notes. (Check product packaging for the full ingredient list.)"
  },
  {
    id: "venom-incarnat",
    name: "Stephane Humbert Lucas Venom Incarnat Eau de Parfum 60ml",
    category: "Fragrance",
    price: 45000,
    image: "assets/images/571955.jpg",
    description: "Exclusive niche fragrance from Stephane Humbert Lucas Paris. Bold and captivating scent presented in a striking red bottle with ornate design. 60ml / 1.7 fl.oz.",
    ingredients: "Alcohol Denat., Parfum, Aqua. Proprietary niche fragrance composition. (Check product packaging for the full ingredient list.)"
  },
  {
    id: "wild-card-lipstick",
    name: "Matte Lipstick - 004 Wild Card",
    category: "Lips",
    price: 3500,
    image: "assets/images/571977.jpg",
    description: "Intense matte red lipstick in shade 004 Wild Card. Provides bold, long-lasting color with a velvety matte finish. Perfect for statement looks.",
    ingredients: "Isododecane, Dimethicone, Silica, Synthetic Wax, and colorants (CI 15850, CI 77491, etc.). Long-wear matte formula. (Check product packaging for the full ingredient list.)"
  }
];

// Export for use in other scripts if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = products;
}
