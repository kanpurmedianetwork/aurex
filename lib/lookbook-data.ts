export interface JewelryPiece {
  id: string
  name: string
  collection: string
  category: 'engagement' | 'wedding' | 'emerald' | 'earrings' | 'rings' | 'bracelets' | 'accessories' | 'everyday'
  subtitle: string
  quote: string
  description: string
  gemstones: string
  metal: string
  origin?: string
  image: string
  page: number
  featured?: boolean
  tag?: string
}

export interface ClientDiaryEntry {
  id: string
  title: string
  client: string
  quote: string
  description: string
  image: string
  jewelryItem: string
  page: number
}

export interface LookbookChapter {
  id: string
  number: string
  title: string
  cursiveSubtitle: string
  collectionName: string
  description: string
  keyImage: string
  featuredPieces: string[]
  pageRange: string
}

export const AUREX_BRAND = {
  name: 'AUREX',
  tagline: 'Fine Jewellery Collection',
  legacyTitle: 'House of Legacy, Trust, and Tradition',
  established: '1975',
  origin: 'Jaipur, India',
  designer: 'Neeru',
  heritage: '10th Generation Fine Jewellers',
  founderHeritage: 'Mr. Chandra Prakash Agroya (Jaipur)',
  website: 'www.aurex.in',
  email: 'aurex1975@gmail.com',
  phone: '+91 98390 12345',
  whatsappMessage: "Hello Aurex, I am interested in scheduling a bespoke consultation for high jewellery pieces from the lookbook.",
  mission:
    "Aurex is a house of legacy, trust, and tradition. A bequest that seeks to bring the world's finest offerings in rare and precious jewels collected over the years and brought right to your doorstep. Since its inception, Aurex has merged the characteristics of the latest international jewelry trends with traditional Indian designs.",
  founderStory:
    "Drawing upon hundreds of years of family history as jewelers, she fell in love with the world of jewelry at a young age. As the daughter of a fine jeweler and being the 10th generation, Neeru has added more to the family legacy recreating a modern business. Surrounded by some of the most precious pieces in her collection, she brings forth an incredibly unique jewelry experience, and one that will continue for generations to come."
}

export const JEWELRY_PIECES: JewelryPiece[] = [
  // --- ENGAGEMENT RINGS ---
  {
    id: 'engagement-solitaire-yellow-gold',
    name: 'Antwerp Brilliant Solitaire Ring',
    collection: 'Engagement Rings',
    category: 'engagement',
    subtitle: 'The only answer is yes',
    quote: 'For the promise of a life, Aurex offers diamond engagement rings to celebrate eternal love and passion.',
    description: 'Adorned with handcrafted precious diamonds of the highest quality from the mines of Antwerp. Set in 18K warm yellow gold with a pavé encrusted shank.',
    gemstones: 'Antwerp Certified Round Brilliant Diamond (2.5ct), Micro-Pavé Diamonds',
    metal: '18K Yellow Gold',
    origin: 'Antwerp Mines',
    image: '/lookbook/jewel_018.jpg',
    page: 6,
    featured: true,
    tag: 'Haute Solitaire'
  },
  {
    id: 'engagement-cushion-halo',
    name: 'Pavé Cushion Diamond Halo Ring',
    collection: 'Engagement Rings',
    category: 'engagement',
    subtitle: 'The only answer is yes',
    quote: 'Diamond pavé rings and diamond solitaire rings are made to celebrate love with.',
    description: 'A magnificent cushion cut diamond illuminated by a scintillating diamond halo and diamond-set cathedral band.',
    gemstones: 'Cushion Cut Diamond, Brilliant Round Halo Diamonds',
    metal: 'Platinum / 18K White Gold',
    origin: 'Antwerp',
    image: '/lookbook/jewel_016.jpg',
    page: 5,
    featured: true,
    tag: 'Iconic Halo'
  },
  {
    id: 'engagement-round-halo',
    name: 'Circular Diamond Pavé Ring',
    collection: 'Engagement Rings',
    category: 'engagement',
    subtitle: 'The only answer is yes',
    quote: 'Handcrafted precious diamonds of the highest clarity from Antwerp.',
    description: 'Round brilliant solitaire centered within a floating micro-pavé halo, creating an illusion of boundless radiance.',
    gemstones: 'Round Brilliant Diamond, Antwerp Pavé Accent Diamonds',
    metal: '18K White Gold',
    origin: 'Antwerp',
    image: '/lookbook/jewel_014.jpg',
    page: 5
  },
  {
    id: 'engagement-twin-platinum',
    name: 'Dual Solitaire Platinum Bands',
    collection: 'Engagement Rings',
    category: 'engagement',
    subtitle: 'The only answer is yes',
    quote: 'Aurex diamond wedding rings to celebrate eternal love.',
    description: 'Sculptural architectural platinum bands mounting twin round brilliant solitaire diamonds.',
    gemstones: 'Twin Antwerp Diamonds',
    metal: '950 Platinum',
    origin: 'Antwerp',
    image: '/lookbook/jewel_012.jpg',
    page: 4
  },
  {
    id: 'wedding-eternity-bands',
    name: 'Two-Tone Textured Wedding Bands',
    collection: 'Engagement Rings',
    category: 'engagement',
    subtitle: 'The only answer is yes',
    quote: 'Timeless symbols of unyielding devotion.',
    description: 'Hand-finished brushed white and yellow gold wedding rings with inset star diamonds.',
    gemstones: 'Inset Antwerp Diamonds',
    metal: '18K Dual-Tone Gold',
    image: '/lookbook/jewel_010.jpg',
    page: 4
  },

  // --- WEDDING COLLECTION ---
  {
    id: 'wedding-ruby-polki-necklace',
    name: 'Royal Carved Ruby & Polki Grand Haar',
    collection: 'Wedding Collection',
    category: 'wedding',
    subtitle: "Love's finest symbol",
    quote: 'Enchanted poesy of ultimate magnificence, boundless creativity and visionary craftsmanship.',
    description: 'Three cascading rows of hand-carved Burmese ruby beads suspended from floral uncut diamond polki motifs with Basra pearls.',
    gemstones: 'Natural Carved Burmese Rubies, Uncut Diamond Polki, Natural Basra Pearls',
    metal: '22K Hallmarked Gold with Kundan setting',
    origin: 'Jaipur & Burma',
    image: '/lookbook/jewel_022.jpg',
    page: 8,
    featured: true,
    tag: 'Bridal Masterpiece'
  },
  {
    id: 'wedding-emerald-polki-choker',
    name: 'Imperial Polki & Colombian Emerald Choker',
    collection: 'Wedding Collection',
    category: 'wedding',
    subtitle: "Love's finest symbol",
    quote: 'Classic, elegant and timeless styles accessorizing brides with visionary craftsmanship.',
    description: 'Geometric polki collets highlighted by Colombian emerald framing, finished with pear-shaped polki drops and seed pearls.',
    gemstones: 'Syndicate Polki Diamonds, Colombian Emerald Meenakari, Seed Pearls',
    metal: '22K Yellow Gold Kundan Work',
    origin: 'Jaipur Karigari',
    image: '/lookbook/jewel_024.jpg',
    page: 8,
    featured: true,
    tag: 'Haute Bridal'
  },
  {
    id: 'wedding-basra-pearl-choker',
    name: 'Basra Pearl & Emerald Crown Choker',
    collection: 'Wedding Collection',
    category: 'wedding',
    subtitle: "Love's finest symbol",
    quote: 'Styles that transcend decades and maintain a strong presence accessorizing brides.',
    description: 'Lustrous Basra pearls woven into a regal collar studded with cushion Colombian emeralds and pear-cut Antwerp diamonds.',
    gemstones: 'Cushion Cut Colombian Emeralds, Antwerp Diamonds, Fine Basra Pearls',
    metal: '18K Yellow Gold with Antique Patina',
    origin: 'Colombia & Jaipur',
    image: '/lookbook/jewel_026.jpg',
    page: 9,
    featured: true,
    tag: 'Heritage Archive'
  },
  {
    id: 'wedding-peacock-meenakari-hasli',
    name: 'Jaipur Peacock Meenakari Hasli & Chandbalis',
    collection: 'Wedding Collection',
    category: 'wedding',
    subtitle: "Love's finest symbol",
    quote: 'Handcrafted by skilled artisan craftsmen who have a reverence for the arts of ancient India.',
    description: 'Reversible red enamel hasli collar hand-painted with peacock motifs in green and white champlevé meenakari, with matching polki chandbalis.',
    gemstones: 'Uncut Diamonds, Natural Enamel (Meenakari), Basra Pearls',
    metal: '22K Gold Handcrafted Hasli',
    origin: 'Jaipur Artisans',
    image: '/lookbook/jewel_032.jpg',
    page: 10,
    featured: true,
    tag: 'Royal Meenakari'
  },
  {
    id: 'wedding-emerald-pearl-mala',
    name: 'Carved Colombian Emerald & Basra Pearl Mala',
    collection: 'Wedding Collection',
    category: 'wedding',
    subtitle: "Love's finest symbol",
    quote: 'A bequest that seeks to bring the world’s finest rare jewels.',
    description: 'Fluted Colombian emerald drops paired with graduated Basra pearls and kundan-set diamond caps.',
    gemstones: 'Carved Colombian Emerald Melons, Basra Pearls, Polki Diamonds',
    metal: '22K Gold',
    origin: 'Colombia & Basra',
    image: '/lookbook/jewel_030.jpg',
    page: 10
  },
  {
    id: 'wedding-seed-pearl-ruby-choker',
    name: 'Multi-Strand Seed Pearl & Ruby Choker',
    collection: 'Wedding Collection',
    category: 'wedding',
    subtitle: "Love's finest symbol",
    quote: 'Intricate micro-weaving of ancient royal courts.',
    description: 'Multiple rows of hand-strung natural seed pearls anchored by an opulent cabochon ruby medallion with diamond sprays.',
    gemstones: 'Cabochon Burmese Ruby, Natural Seed Pearls, Rose Cut Diamonds',
    metal: '18K Gold and Sterling Silver Setting',
    image: '/lookbook/jewel_028.jpg',
    page: 9
  },

  // --- COLUMBIAN EMERALD COLLECTION ---
  {
    id: 'emerald-tassel-sautoir',
    name: 'Colombian Emerald Bead Sautoir with Pearl Tassels',
    collection: 'Colombian Emerald Collection',
    category: 'emerald',
    subtitle: 'An Aurex Exclusive Collection',
    quote: 'This precious stone is associated with magic and mystery. The quintessential color of nature promoting a calm and peaceful spirit.',
    description: 'Long sautoir necklace of vibrant natural Colombian emerald beads joined by diamond pavé rondelles and twin hand-woven natural pearl tassels.',
    gemstones: 'Natural Colombian Emerald Beads, Fine Pearl Tassels, Antwerp Diamond Connectors',
    metal: '18K White Gold',
    origin: 'Muzo, Colombia',
    image: '/lookbook/jewel_070.jpg',
    page: 22,
    featured: true,
    tag: 'Aurex Exclusive'
  },
  {
    id: 'emerald-pear-diamond-drops',
    name: 'Colombian Emerald Pear-Cut Chandelier Drops',
    collection: 'Colombian Emerald Collection',
    category: 'emerald',
    subtitle: 'An Aurex Exclusive Collection',
    quote: 'Emeralds are an excellent centerpiece choice and the most sought after in the world.',
    description: 'Pair of vivid green pear-shaped Colombian emeralds suspended beneath graduated bezel-set Antwerp diamonds with diamond halos.',
    gemstones: 'Vivid Green Colombian Emeralds (12ct tw), Round Brilliant Diamonds',
    metal: 'Platinum / 18K White Gold',
    origin: 'Colombia',
    image: '/lookbook/jewel_044.jpg',
    page: 16,
    featured: true,
    tag: 'Museum Grade'
  },
  {
    id: 'emerald-tiered-cushion-earrings',
    name: 'Three-Tier Colombian Emerald & Diamond Drops',
    collection: 'Colombian Emerald Collection',
    category: 'emerald',
    subtitle: 'An Aurex Exclusive Collection',
    quote: 'Textural serendipity and vibrant colors of the ancient world.',
    description: 'Three graduated cushion Colombian emeralds surrounded by micro-pavé diamonds, articulated for fluid luminous movement.',
    gemstones: 'Colombian Emeralds (18ct tw), Antwerp Diamonds',
    metal: '18K White Gold',
    origin: 'Colombia',
    image: '/lookbook/jewel_046.jpg',
    page: 16
  },
  {
    id: 'emerald-cushion-halo-earrings',
    name: 'Cushion Colombian Emerald Drop Earrings',
    collection: 'Colombian Emerald Collection',
    category: 'emerald',
    subtitle: 'An Aurex Exclusive Collection',
    quote: 'The quintessence of quiet luxury.',
    description: 'Luminous cushion emeralds with pear-cut diamond surmounts, haloed by brilliant round diamonds.',
    gemstones: 'Colombian Emeralds, Pear & Round Diamonds',
    metal: '18K White Gold',
    origin: 'Colombia',
    image: '/lookbook/jewel_050.jpg',
    page: 17
  },
  {
    id: 'emerald-designer-jhumki',
    name: "Neeru's Signature Colombian Emerald Jhumki",
    collection: 'Colombian Emerald Collection',
    category: 'emerald',
    subtitle: 'An Aurex Exclusive Collection',
    quote: "Her signature style Columbian Emerald Jhumki, the one of a kind in the world, focuses on textural serendipity.",
    description: 'The iconic one-of-a-kind creation by 10th-generation designer Neeru. Combining natural Colombian emerald beads, carved jade motifs, and diamond halos.',
    gemstones: 'Colombian Emerald Drops, Polki Diamonds, Pearls',
    metal: '18K Gold',
    origin: 'Designed by Neeru (Aurex)',
    image: '/lookbook/jewel_155.jpg',
    page: 46,
    featured: true,
    tag: 'Designer Signature'
  },

  // --- CHANDELIER EARRINGS ---
  {
    id: 'earrings-polki-ruby-chandbali',
    name: 'Polki Diamond & Carved Ruby Chandbalis',
    collection: 'Chandelier Earrings',
    category: 'earrings',
    subtitle: 'Exuberance',
    quote: 'Supreme gemstones, breathtaking craftsmanship and modern, vibrant designs.',
    description: 'Flourishing floral crest with openwork gold scrolls, uncut syndicate diamonds, and rich dangling Burmese ruby beads.',
    gemstones: 'Syndicate Polki Diamonds, Burmese Ruby Drops, Pearls',
    metal: '22K Gold Kundan Setting',
    origin: 'Jaipur',
    image: '/lookbook/jewel_056.jpg',
    page: 19,
    featured: true,
    tag: 'Royal Karigari'
  },
  {
    id: 'earrings-ruby-diamond-crescent',
    name: 'Burmese Ruby & Diamond Crescent Drops',
    collection: 'Chandelier Earrings',
    category: 'earrings',
    subtitle: 'Exuberance',
    quote: 'Sculptural shapes inspired by sources as diverse as everyday objects, people and life moments.',
    description: 'Curved crescents of oval Burmese rubies framed in pavé diamonds with a pavé diamond surmount.',
    gemstones: 'Burmese Pigeon Blood Rubies, Antwerp Diamonds',
    metal: '18K White and Yellow Gold',
    origin: 'Burma',
    image: '/lookbook/jewel_054.jpg',
    page: 18
  },
  {
    id: 'earrings-marquise-emerald-chandelier',
    name: 'Marquise Cluster Pear Emerald Chandeliers',
    collection: 'Chandelier Earrings',
    category: 'earrings',
    subtitle: 'Exuberance',
    quote: 'Breath-taking, high quality jewelry that transcends the decades.',
    description: 'Diamond florets of marquise and brilliant diamonds cascading into luminous pear-shaped Colombian emerald drops.',
    gemstones: 'Pear Colombian Emeralds, Marquise and Round Diamonds (6.2ct tw)',
    metal: 'Platinum and 18K Yellow Gold prongs',
    image: '/lookbook/jewel_060.jpg',
    page: 20
  },

  // --- BESPOKE COCKTAIL RINGS ---
  {
    id: 'ring-emerald-sunburst-halo',
    name: 'Colombian Emerald Sunburst Halo Cocktail Ring',
    collection: 'Cocktail Rings',
    category: 'rings',
    subtitle: 'Bespoke',
    quote: 'Boldly oversized & eminently feminine, a collection for the chic and glamorous.',
    description: 'Cushion Colombian emerald surrounded by radiating pear and brilliant cut Antwerp diamonds in a sculptural high-dome setting.',
    gemstones: 'Natural Colombian Emerald (5.8ct), Antwerp Diamonds (3.4ct tw)',
    metal: '18K White Gold',
    origin: 'Colombia',
    image: '/lookbook/jewel_076.jpg',
    page: 24,
    featured: true,
    tag: 'Haute Cocktail'
  },
  {
    id: 'ring-royal-tanzanite-halo',
    name: 'Royal Tanzanite & Diamond Split-Shank Ring',
    collection: 'Cocktail Rings',
    category: 'rings',
    subtitle: 'Bespoke',
    quote: 'Invite individuals to explore and embrace their individuality in fresh and creative ways.',
    description: 'An exceptional deep royal violet-blue oval tanzanite haloed in diamonds with an intricate looping pavé diamond shank.',
    gemstones: 'Natural Royal Tanzanite (8.5ct), Antwerp Micro-Pavé Diamonds',
    metal: '18K White Gold',
    origin: 'Tanzania',
    image: '/lookbook/jewel_078.jpg',
    page: 25,
    featured: true,
    tag: 'Vibrant Solitaire'
  },
  {
    id: 'ring-burmese-ruby-starburst',
    name: 'Burmese Pear Ruby Starburst Ring',
    collection: 'Cocktail Rings',
    category: 'rings',
    subtitle: 'Bespoke',
    quote: 'Resolutely voluptuous and timeless, bringing together sensual designs and unrestrained glamor.',
    description: 'Pigeon-blood pear-shaped Burmese ruby encircled by exploding starburst layers of marquise diamonds.',
    gemstones: 'Unheated Burmese Ruby (4.2ct), Marquise Antwerp Diamonds',
    metal: 'Platinum & 18K Gold',
    origin: 'Mogok, Burma',
    image: '/lookbook/jewel_080.jpg',
    page: 25
  },
  {
    id: 'ring-south-sea-pearl-halo',
    name: 'South Sea Pearl & Diamond Petal Ring',
    collection: 'Cocktail Rings',
    category: 'rings',
    subtitle: 'Bespoke',
    quote: 'Adorned with gemstones that speak to timeless feminine elegance.',
    description: 'Immaculate 13mm South Sea cultured pearl surrounded by a corona of round brilliant Antwerp diamonds.',
    gemstones: 'Lustrous South Sea White Pearl, Antwerp Diamonds',
    metal: '18K White Gold',
    image: '/lookbook/jewel_082.jpg',
    page: 26
  },
  {
    id: 'ring-colombian-baguette-emerald',
    name: 'Colombian Oval Emerald Baguette Halo Ring',
    collection: 'Cocktail Rings',
    category: 'rings',
    subtitle: 'Bespoke',
    quote: 'Bringing together sensual designs and unrestrained glamor.',
    description: 'Magnificent oval Colombian emerald encased in a seamless radial halo of tapered diamond baguettes.',
    gemstones: 'Colombian Emerald (7.1ct), Tapered Diamond Baguettes',
    metal: 'Platinum and 18K Yellow Gold',
    image: '/lookbook/jewel_087.jpg',
    page: 27
  },

  // --- BRACELETS ---
  {
    id: 'bracelet-platinum-emerald-cuff',
    name: 'Platinum Colombian Emerald & Diamond Statement Cuff',
    collection: 'Bracelets',
    category: 'bracelets',
    subtitle: 'Excellence',
    quote: 'Whatever style you choose, make a chic statement with one of our bracelets.',
    description: 'Heavy honeycomb articulated platinum mesh band featuring a majestic octagonal step-cut Colombian emerald center in a baguette halo.',
    gemstones: 'Step-Cut Colombian Emerald (6.5ct), Baguette & Brilliant Diamonds',
    metal: '950 Platinum',
    origin: 'Colombia',
    image: '/lookbook/jewel_091.jpg',
    page: 30,
    featured: true,
    tag: 'Haute Horlogerie'
  },
  {
    id: 'bracelet-antwerp-tennis',
    name: 'Antwerp Brilliant Cut Diamond Tennis Bracelet',
    collection: 'Bracelets',
    category: 'bracelets',
    subtitle: 'Excellence',
    quote: 'Handcrafted from high quality gold and conflict-free diamonds.',
    description: 'Classic line bracelet of four-prong set round brilliant diamonds of matching color and clarity with invisible safety clasp.',
    gemstones: 'Antwerp Round Brilliant Diamonds (10.0ct tw)',
    metal: '18K White Gold',
    origin: 'Antwerp',
    image: '/lookbook/jewel_093.jpg',
    page: 30
  },
  {
    id: 'bracelet-enamel-peacock-kada',
    name: 'Royal Jaipur Enamel Peacock Wedding Kada',
    collection: 'Bracelets',
    category: 'bracelets',
    subtitle: 'Excellence',
    quote: 'Our craftsmen can work with you to create a one-of-a-kind tailored bracelet design.',
    description: 'Double-headed peacock kada rendered in intricate blue and green royal meenakari enamel, polki diamonds, and pearl fringes.',
    gemstones: 'Uncut Diamonds, Basra Pearl Drops, Royal Meenakari',
    metal: '22K Solid Gold',
    origin: 'Jaipur Karigari',
    image: '/lookbook/jewel_101.jpg',
    page: 31,
    featured: true,
    tag: 'Royal Heirloom'
  },
  {
    id: 'bracelet-emerald-cut-tennis',
    name: 'Emerald-Cut Diamond Articulated Tennis Bracelet',
    collection: 'Bracelets',
    category: 'bracelets',
    subtitle: 'Excellence',
    quote: 'Add a touch of elegance with a sparkling bracelet from Aurex.',
    description: 'Consecutive step-cut rectangular emerald-cut diamonds seamlessly channel set into an ultra-flexible 18K white gold track.',
    gemstones: 'Emerald Cut Diamonds (15.5ct tw)',
    metal: '18K White Gold',
    image: '/lookbook/jewel_097.jpg',
    page: 29
  },

  // --- ROYAL ACCESSORIES ---
  {
    id: 'accessory-emerald-kurta-buttons',
    name: 'Colombian Emerald Kurta Buttons (Set of 4)',
    collection: 'Royal Accessories',
    category: 'accessories',
    subtitle: 'Gemstone & Diamond',
    quote: 'Express your personality or make an artistic statement with Aurex bespoke accessories.',
    description: 'Fluted cabochon Colombian emeralds mounted in hand-crafted 18K gold cups with pavé diamond halos and joined link chain.',
    gemstones: 'Natural Colombian Emeralds, Antwerp Diamonds',
    metal: '18K Yellow Gold',
    origin: 'Colombia & Jaipur',
    image: '/lookbook/jewel_103.jpg',
    page: 33,
    featured: true,
    tag: 'Royal Men’s Edit'
  },
  {
    id: 'accessory-ruby-sherwani-buttons',
    name: 'Burmese Ruby Sherwani Buttons (Set of 7)',
    collection: 'Royal Accessories',
    category: 'accessories',
    subtitle: 'Gemstone & Diamond',
    quote: 'From fine red rubies to cobalt blue sapphires, crafted by talented artisans.',
    description: 'Floral rosette buttons featuring calibrated oval Burmese rubies radiating around an Antwerp diamond center with pavé diamond petals.',
    gemstones: 'Burmese Rubies, Brilliant Diamonds',
    metal: '18K Yellow Gold',
    origin: 'Burma',
    image: '/lookbook/jewel_105.jpg',
    page: 33,
    featured: true,
    tag: 'Bridal Groom Edit'
  },
  {
    id: 'accessory-emerald-hairclip',
    name: 'Diamond & Emerald Hairclip in 18K Gold',
    collection: 'Royal Accessories',
    category: 'accessories',
    subtitle: 'Hair Accessories',
    quote: 'Delightful dazzling details using precious gold and gemstones.',
    description: 'Interlocking Celtic-inspired ribbons of micro-pavé diamonds centering an oval Colombian emerald in warm rose and white gold.',
    gemstones: 'Oval Colombian Emerald, Antwerp Diamonds',
    metal: '18K Two-Tone Gold',
    image: '/lookbook/jewel_107.jpg',
    page: 34
  },
  {
    id: 'accessory-polki-hair-band',
    name: 'Diamond Polki & Gold Matha Patti / Hair Band',
    collection: 'Royal Accessories',
    category: 'accessories',
    subtitle: 'Hair Accessories',
    quote: 'Heirloom hair adornments crafted for royal Indian weddings.',
    description: 'Triple chain of polki diamonds linked to a circular medallion depicting floral enamel work and pearl suspensions.',
    gemstones: 'Uncut Diamonds, Pearls, Enamel',
    metal: '22K Gold',
    origin: 'Jaipur',
    image: '/lookbook/jewel_109.jpg',
    page: 34
  },
  {
    id: 'accessory-gold-snuff-box',
    name: 'Monogrammed Solid Gold & Diamond Snuff Box',
    collection: 'Royal Accessories',
    category: 'accessories',
    subtitle: 'Gemstone & Diamond',
    quote: 'An exquisite collector piece of high jewelry craftsmanship.',
    description: 'Hand-fluted solid yellow gold pocket case featuring a bespoke diamond monogram clasp.',
    gemstones: 'Pavé Set Antwerp Diamonds',
    metal: '18K Yellow Gold',
    image: '/lookbook/jewel_111.jpg',
    page: 35
  },

  // --- EVERYDAY BLING / OFFICE COLLECTION ---
  {
    id: 'everyday-floating-heart-pendant',
    name: 'Floating Diamond Heart Pendant',
    collection: 'Office Collection',
    category: 'everyday',
    subtitle: 'Everyday Bling',
    quote: 'Fine, beautiful everyday office jewelry for the modern woman made from 14ct gold.',
    description: 'Open heart silhouette in polished 14ct yellow gold housing three bezel-set floating dancing diamonds behind sapphire crystal.',
    gemstones: 'Antwerp Diamonds (0.35ct tw)',
    metal: '14K Yellow Gold',
    image: '/lookbook/jewel_141.jpg',
    page: 41,
    featured: true,
    tag: 'Daily Luxe'
  },
  {
    id: 'everyday-emerald-cross-necklace',
    name: 'Colombian Emerald Florets Cross Pendant',
    collection: 'Office Collection',
    category: 'everyday',
    subtitle: 'Everyday Bling',
    quote: 'Ethically sourced, conflict-free gemstones hand-picked by the designer herself.',
    description: 'Delicate cross pendant set with four pear-cut emeralds and a brilliant diamond rosette core on an airy cable chain.',
    gemstones: 'Natural Colombian Emeralds, Diamond Accents',
    metal: '14K Yellow Gold',
    image: '/lookbook/jewel_143.jpg',
    page: 41
  },
  {
    id: 'everyday-tree-of-life',
    name: 'Diamond Tree of Life Medallion',
    collection: 'Office Collection',
    category: 'everyday',
    subtitle: 'Everyday Bling',
    quote: 'Delicate gold and colorful gemstones for the modern woman looking for a unique piece to layer.',
    description: 'Circular openwork medallion depicting the sacred feminine tree of life accented with diamond foliage.',
    gemstones: 'Micro-Pavé Antwerp Diamonds',
    metal: '14K Two-Tone Gold',
    image: '/lookbook/jewel_137.jpg',
    page: 40
  },
  {
    id: 'everyday-ruby-butterfly',
    name: 'Burmese Ruby Butterfly Pendant',
    collection: 'Office Collection',
    category: 'everyday',
    subtitle: 'Everyday Bling',
    quote: 'A playful touch of fine luxury for everyday elegance.',
    description: 'Wings of faceted marquise and pear Burmese rubies with a diamond torso suspended on an 18K white gold chain.',
    gemstones: 'Burmese Rubies, Brilliant Diamonds',
    metal: '14K White Gold',
    image: '/lookbook/jewel_139.jpg',
    page: 40
  }
]

export const CLIENT_DIARIES: ClientDiaryEntry[] = [
  {
    id: 'client-300ct-emerald',
    title: 'The 300 Carat Colombian Emerald Heirloom',
    client: 'Royal Heritage Patron',
    quote: 'Aurex exclusive legacy featuring a beautiful 300 carat Columbian emerald and pearl necklace adorned by our lovely client.',
    description: 'Commissioned for a landmark family anniversary, this bespoke creation incorporates unheated Muzo emerald drops collected across two decades.',
    image: '/lookbook/jewel_150.jpg',
    jewelryItem: '300ct Colombian Emerald & Basra Pearl Haar',
    page: 42
  },
  {
    id: 'client-royal-bride',
    title: 'The Aurex Heritage Bride',
    client: 'Bespoke Bridal Patron',
    quote: 'An elegant bride adorning a piece from the Aurex wedding collection.',
    description: 'A radiant bride wearing the bespoke polki, emerald and basra pearl choker set paired with custom handcrafted jhumkis and maang tikka.',
    image: '/lookbook/jewel_145.jpg',
    jewelryItem: 'Imperial Polki & Colombian Emerald Bridal Set',
    page: 43
  },
  {
    id: 'client-palace-sautoir',
    title: 'Emerald & Pearls at Udaipur Palace',
    client: 'Private Collector',
    quote: 'A client wearing our most sought after Emerald and pearls tassel necklace.',
    description: 'Captured in the regal courtyard, adorned in the signature Aurex emerald bead sautoir with natural pearl tassels.',
    image: '/lookbook/jewel_148.jpg',
    jewelryItem: 'Colombian Emerald Bead Sautoir with Pearl Tassels',
    page: 44
  },
  {
    id: 'client-south-sea-pearl',
    title: 'Modern Sophistication in South Sea Pearls',
    client: 'Contemporary Patron',
    quote: 'Our beautiful client is wearing a South sea pearl Long knot necklace.',
    description: 'Effortlessly styled for an evening gala, proving how heritage pearl craftsmanship translates seamlessly into contemporary fashion.',
    image: '/lookbook/jewel_151.jpg',
    jewelryItem: 'South Sea Pearl Long Knot Sautoir',
    page: 45
  }
]

export const LOOKBOOK_CHAPTERS: LookbookChapter[] = [
  {
    id: 'ch-engagement',
    number: '01',
    title: 'Engagement Rings',
    cursiveSubtitle: 'The only answer is yes',
    collectionName: 'Engagement Rings',
    description: 'For the promise of a life, Aurex offers diamond engagement rings to celebrate eternal love and passion. Adorned with handcrafted precious diamonds of the highest quality from the mines of Antwerp.',
    keyImage: '/lookbook/jewel_018.jpg',
    featuredPieces: ['Antwerp Brilliant Solitaire Ring', 'Pavé Cushion Diamond Halo Ring', 'Dual Solitaire Platinum Bands'],
    pageRange: 'Pages 03–06'
  },
  {
    id: 'ch-wedding',
    number: '02',
    title: 'Wedding Collection',
    cursiveSubtitle: "Love's finest symbol",
    collectionName: 'Wedding Collection',
    description: 'Enchanted poesy of ultimate magnificence, boundless creativity and visionary craftsmanship come to life. Classic, elegant and timeless styles accessorizing brides with unique necklaces, chokers, bracelets and rings.',
    keyImage: '/lookbook/jewel_024.jpg',
    featuredPieces: ['Royal Carved Ruby & Polki Grand Haar', 'Imperial Polki & Colombian Emerald Choker', 'Jaipur Peacock Meenakari Hasli'],
    pageRange: 'Pages 07–10'
  },
  {
    id: 'ch-emerald',
    number: '03',
    title: 'Emerald Collection',
    cursiveSubtitle: 'Columbian Emerald',
    collectionName: 'Colombian Emerald Collection',
    description: 'This precious stone is associated with magic and mystery. Since it is the quintessential color of nature, it is believed to promote a calm and peaceful spirit. Emeralds are an excellent centerpiece choice and the most sought after in the world.',
    keyImage: '/lookbook/jewel_044.jpg',
    featuredPieces: ['Colombian Emerald Pear-Cut Chandelier Drops', 'Colombian Emerald Bead Sautoir with Pearl Tassels', "Neeru's Signature Jhumki"],
    pageRange: 'Pages 11–14'
  },
  {
    id: 'ch-earrings',
    number: '04',
    title: 'Chandelier Earrings',
    cursiveSubtitle: 'Exuberance',
    collectionName: 'Chandelier Earrings',
    description: 'Supreme gemstones, breathtaking craftsmanship and modern, vibrant designs. The sculptural shapes of our precious designs are inspired by sources as diverse as everyday objects, people and life moments.',
    keyImage: '/lookbook/jewel_056.jpg',
    featuredPieces: ['Polki Diamond & Carved Ruby Chandbalis', 'Burmese Ruby & Diamond Crescent Drops', 'Marquise Cluster Pear Emerald Chandeliers'],
    pageRange: 'Pages 15–20'
  },
  {
    id: 'ch-chains',
    number: '05',
    title: 'Diamond & Gemstone Chains',
    cursiveSubtitle: 'Diamond & Gemstone',
    collectionName: 'Chains & Sautoirs',
    description: 'From radiant diamond solitaires and layered sautoir necklaces to emerald and ruby beaded tassels crafted with peerless delicacy.',
    keyImage: '/lookbook/jewel_070.jpg',
    featuredPieces: ['Colombian Emerald Bead Sautoir with Pearl Tassels', 'Ruby and Pearl Long Chain', 'Antwerp Cluster Diamond Pendant'],
    pageRange: 'Pages 21–22'
  },
  {
    id: 'ch-cocktail',
    number: '06',
    title: 'Cocktail Rings',
    cursiveSubtitle: 'Bespoke',
    collectionName: 'Cocktail Rings',
    description: 'Boldly oversized & eminently feminine, a collection for the chic and glamorous. Adorned with Colombian emeralds, Burmese ruby and diamonds, this collection is resolutely voluptuous and timeless.',
    keyImage: '/lookbook/jewel_076.jpg',
    featuredPieces: ['Colombian Emerald Sunburst Halo Cocktail Ring', 'Royal Tanzanite & Diamond Split-Shank Ring', 'Burmese Pear Ruby Starburst Ring'],
    pageRange: 'Pages 23–27'
  },
  {
    id: 'ch-bracelets',
    number: '07',
    title: 'Bracelets',
    cursiveSubtitle: 'Excellence',
    collectionName: 'Bracelets & Cuffs',
    description: 'Add a touch of elegance with a sparkling bracelet from Aurex. Handcrafted from high quality gold and conflict-free diamonds. Our craftsmen can work with you to create a one-of-a-kind tailored design.',
    keyImage: '/lookbook/jewel_091.jpg',
    featuredPieces: ['Platinum Colombian Emerald Statement Cuff', 'Antwerp Brilliant Cut Tennis Bracelet', 'Royal Jaipur Enamel Peacock Kada'],
    pageRange: 'Pages 28–31'
  },
  {
    id: 'ch-accessories',
    number: '08',
    title: 'Royal Accessories',
    cursiveSubtitle: 'Gemstone & Diamond',
    collectionName: 'Royal Accessories',
    description: 'Express your personality or make an artistic statement with Aurex bespoke accessories. Kurta buttons, sherwani buttons, 18K gold hair ornaments, and diamond-set collector boxes.',
    keyImage: '/lookbook/jewel_103.jpg',
    featuredPieces: ['Colombian Emerald Kurta Buttons', 'Burmese Ruby Sherwani Buttons', 'Diamond & Emerald Hairclip in 18K Gold'],
    pageRange: 'Pages 32–35'
  },
  {
    id: 'ch-everyday',
    number: '09',
    title: 'Office Collection',
    cursiveSubtitle: 'Everyday Bling',
    collectionName: 'Office Collection',
    description: 'Fine, beautiful everyday office jewelry for the modern woman made from 14ct gold, ethically sourced, conflict-free gemstones hand-picked by the designer herself in India.',
    keyImage: '/lookbook/jewel_141.jpg',
    featuredPieces: ['Floating Diamond Heart Pendant', 'Colombian Emerald Florets Cross', 'Diamond Tree of Life Medallion'],
    pageRange: 'Pages 36–41'
  },
  {
    id: 'ch-diaries',
    number: '10',
    title: 'Client Diaries',
    cursiveSubtitle: 'Client Diaries',
    collectionName: 'Client Diaries',
    description: 'Real patrons and brides commemorating life milestones with bespoke Aurex creations, from 300-carat emerald heirlooms to contemporary bridal wear.',
    keyImage: '/lookbook/jewel_145.jpg',
    featuredPieces: ['The 300 Carat Colombian Emerald Heirloom', 'The Aurex Heritage Bride', 'Emerald & Pearls at Royal Palace'],
    pageRange: 'Pages 42–45'
  }
]
