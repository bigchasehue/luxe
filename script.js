/**
 * LUXE. — Luxury Furniture Frontend Architecture & Interactions
 * Features:
 *  - Full-Screen 100vh Hero Moving Carousel with synchronized animations
 *  - Interactive Three.js 3D Furniture Studio with OrbitControls & Material Switcher
 *  - Swiper.js Carousels for New Arrivals & Voices of Discernment
 *  - Expanded 16-Piece Luxury Catalog with Category Filtering & Sorting
 *  - Comprehensive Product Dossier Modal:
 *      * Dedicated 4-Way Angle Perspective Bar (Middle, Left, Right, Top)
 *      * Curated Architectural Color Suggestions & Palette Harmonies
 *      * Full Technical Specifications ("side and ma" - Dimensions & Materials)
 *      * Verified Customer Reviews with Rating Breakdown & "Write Review"
 *      * Dynamic Finish Swatches, Quantity Adjuster & Add-to-Cart
 *  - Universal Clickability across all products
 *  - Slide-out Cart Drawer with 3 Flexible Payment Plans (Pay in Full, 4 Split, 12 Mo)
 *  - Order Checkout Confirmation Modal with Payment Schedule
 *  - Interactive Client Portal with Google Authentication Simulation
 *  - Live Search Overlay with instant previews
 *  - Wishlist Toggle with badge animations
 *  - Toast Notification System
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. COLOR PALETTE HARMONIES DEFINITIONS
     ========================================================================== */
  const paletteHarmonies = {
    cognac: {
      name: "Cognac Tuscan Leather",
      desc: "Rich burnished cognac leather exudes organic warmth. Pairs magnificently with luminous Calacatta gold marble and brushed satin bronze metalwork.",
      chips: [
        { name: "Calacatta Gold", color: "#F5F1EA" },
        { name: "Champagne Brass", color: "#C9A96E" },
        { name: "Smoked Bronze", color: "#3B3835" },
        { name: "Warm Alabaster", color: "#EAE6DF" }
      ]
    },
    emerald: {
      name: "Royal Forest Velvet",
      desc: "Deep emerald Rubelli cotton velvet creates dramatic architectural chiaroscuro. Complements Nero Marquina marble, satin brass, and warm European oak.",
      chips: [
        { name: "Nero Marquina", color: "#1E1E1E" },
        { name: "Satin Brass", color: "#DFC48E" },
        { name: "White Oak", color: "#8C6A48" },
        { name: "Roman Travertine", color: "#D6CEC3" }
      ]
    },
    ivory: {
      name: "Ivory Wool Bouclé",
      desc: "Textured tactile bouclé reflects ambient daylight softly. Pairs with dark smoked oak, fluted travertine, and matte charcoal architectural accents.",
      chips: [
        { name: "Smoked Oak", color: "#36281D" },
        { name: "Roman Travertine", color: "#D6CEC3" },
        { name: "Matte Charcoal", color: "#222222" },
        { name: "Brushed Brass", color: "#C9A96E" }
      ]
    },
    obsidian: {
      name: "Midnight Obsidian",
      desc: "Sleek monochromatic velvet absorbs extraneous reflections, accentuating sculptural silhouette. Harmonizes with polished marble and champagne gold trim.",
      chips: [
        { name: "Carrara White", color: "#EFEFEF" },
        { name: "Champagne Gold", color: "#C9A96E" },
        { name: "Smoked Bronze", color: "#3B3835" },
        { name: "Natural Walnut", color: "#4A3525" }
      ]
    }
  };

  /* ==========================================================================
     2. EXPANDED PRODUCTS DATABASE (16 CURATED PIECES WITH 4 EXPLICIT ANGLES)
     ========================================================================== */
  const productsDB = [
  {
    "id": 1,
    "name": "Milano Bouclé Curved Sofa",
    "category": "living",
    "categoryLabel": "Living Room",
    "price": 4250,
    "priceFormatted": "$4,250",
    "rating": 5,
    "reviewsCount": 38,
    "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80",
    "badge": "Exclusive",
    "description": "An architectural focal point defined by sculptural serpentine curves and cloud-like Belgian textured wool bouclé. Handcrafted on a solid kiln-dried European white oak structure.",
    "gallery": [
      {
        "label": "Master Perspective",
        "url": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Bouclé Grain Close-Up",
        "url": "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Salon Architectural Context",
        "url": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Joinery & Profile",
        "url": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
      }
    ],
    "specs": {
      "dimensions": "240W × 110D × 76H cm",
      "seatHeight": "42 cm",
      "armrestHeight": "65 cm",
      "netWeight": "86 kg",
      "materials": "Solid European White Oak, High-Resilience Cold-Cure Foam, Belgian Textured Wool Bouclé",
      "origin": "Studio Milano, Lombardy, Italy",
      "care": "Vacuum gently with soft upholstery brush. Spot clean with wool-safe mild detergent.",
      "leadTime": "In Stock — White-Glove Delivery in 3-5 Business Days"
    },
    "reviews": [
      {
        "author": "Elena Rostova",
        "location": "Zurich, Switzerland",
        "rating": 5,
        "date": "August 18, 2026",
        "text": "The sculptural silhouette anchors our open-concept penthouse magnificently. The bouclé fabric feels extraordinarily plush yet resilient."
      },
      {
        "author": "Marcello V.",
        "location": "Milan, Italy",
        "rating": 5,
        "date": "July 29, 2026",
        "text": "Unrivaled Italian craftsmanship. The curves provide sublime ergonomics whether sitting or reclining."
      }
    ]
  },
  {
    "id": 2,
    "name": "Aurelia Travertine Coffee Table",
    "category": "accents",
    "categoryLabel": "Accents & Tables",
    "price": 1890,
    "priceFormatted": "$1,890",
    "rating": 4.9,
    "reviewsCount": 24,
    "image": "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1000&q=80",
    "badge": "New Season",
    "description": "Monolithic sculpture carved from authentic un-filled Roman travertine. Preserves natural cavities and vein patterns, protected by a satin matte stone sealant.",
    "gallery": [
      {
        "label": "Master Perspective",
        "url": "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Natural Stone Cavities",
        "url": "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Low Profile Silhouette",
        "url": "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Sculptural Stance",
        "url": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=85"
      }
    ],
    "specs": {
      "dimensions": "135W × 80D × 34H cm",
      "seatHeight": "N/A (Coffee Table)",
      "armrestHeight": "N/A",
      "netWeight": "94 kg",
      "materials": "Natural Italian Roman Travertine, Satin Micro-Porous Protective Sealant",
      "origin": "Tivoli Quarries & Verona Workshop, Italy",
      "care": "Wipe with damp cloth and pH-neutral stone cleaner. Use coasters for acidic beverages.",
      "leadTime": "In Stock — Dedicated Stone Handling Team"
    },
    "reviews": [
      {
        "author": "Julian Vance",
        "location": "Milan, Italy",
        "rating": 5,
        "date": "August 2, 2026",
        "text": "The organic texture of the Roman travertine brings authentic geological warmth into contemporary spaces."
      }
    ]
  },
  {
    "id": 3,
    "name": "Kyoto Minimalist Platform Bed",
    "category": "bedroom",
    "categoryLabel": "Bedroom Suites",
    "price": 3400,
    "priceFormatted": "$3,400",
    "rating": 5,
    "reviewsCount": 31,
    "image": "https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?auto=format&fit=crop&w=1000&q=80",
    "badge": "Handcrafted",
    "description": "Low-profile architectural platform bed crafted from solid European white oak with subtle cantilevered side ledges and integrated soft LED ambient backlighting.",
    "gallery": [
      {
        "label": "Master Perspective",
        "url": "https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Japanese Joinery Detail",
        "url": "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Floating Cantilever Ledge",
        "url": "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Sanctuary Ambience",
        "url": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85"
      }
    ],
    "specs": {
      "dimensions": "220W × 210D × 82H cm (Fits King Mattress)",
      "seatHeight": "28 cm (Platform Height)",
      "armrestHeight": "N/A",
      "netWeight": "112 kg",
      "materials": "FSC-Certified Solid European White Oak, Slatted Beech Support, Brushed Brass Fittings",
      "origin": "Kyoto Studio & Belluno Atelier, Italy",
      "care": "Dust with dry microfiber cloth. Treat annually with organic Scandinavian beeswax oil.",
      "leadTime": "Made to Order (3-4 Weeks)"
    },
    "reviews": [
      {
        "author": "Kenzo Takahashi",
        "location": "Tokyo / Milan",
        "rating": 5,
        "date": "August 12, 2026",
        "text": "Pure serenity. The platform height creates a grounded, restorative atmosphere."
      }
    ]
  },
  {
    "id": 4,
    "name": "Eos Sculptural Lounge Chair",
    "category": "living",
    "categoryLabel": "Living Room",
    "price": 2150,
    "priceFormatted": "$2,150",
    "rating": 4.95,
    "reviewsCount": 42,
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80",
    "badge": "Iconic Design",
    "description": "An ergonomic masterpiece featuring an enveloping wraparound barrel backrest and hand-stitched Tuscan semi-aniline cognac leather with brushed gold satin base.",
    "gallery": [
      {
        "label": "Master Perspective",
        "url": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Saddle-Stitched Leather",
        "url": "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Brushed Brass Pedestal",
        "url": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Reading Corner Styling",
        "url": "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=85"
      }
    ],
    "specs": {
      "dimensions": "86W × 84D × 74H cm",
      "seatHeight": "41 cm",
      "armrestHeight": "62 cm",
      "netWeight": "34 kg",
      "materials": "Full-Grain Italian Semi-Aniline Leather, Cold-Cure Foam Core, Solid Cast Brass Base",
      "origin": "Florence Tannery & Milan Workshop, Italy",
      "care": "Apply luxury leather balm every six months. Protect from direct heat sources.",
      "leadTime": "In Stock — Dispatches within 48 Hours"
    },
    "reviews": [
      {
        "author": "Sophia Laurent",
        "location": "Paris, France",
        "rating": 5,
        "date": "August 15, 2026",
        "text": "The leather grain has a subtle patina that elevates our living room into a private gallery."
      }
    ]
  },
  {
    "id": 5,
    "name": "Calacatta Fluted Dining Table",
    "category": "dining",
    "categoryLabel": "Dining Room",
    "price": 5600,
    "priceFormatted": "$5,600",
    "rating": 5,
    "reviewsCount": 19,
    "image": "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1000&q=80",
    "badge": "Masterpiece",
    "description": "Solid oval tabletop cut from a single block of Italian Calacatta Gold marble, resting upon dual architectural fluted columns with brushed champagne brass collars.",
    "gallery": [
      {
        "label": "Master Perspective",
        "url": "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Gold Veining Close-Up",
        "url": "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Fluted Pedestal Column",
        "url": "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Dinner Setting Scale",
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
      }
    ],
    "specs": {
      "dimensions": "260W × 115D × 75H cm (Seats 8-10 Guests)",
      "seatHeight": "N/A (75 cm table height)",
      "armrestHeight": "N/A",
      "netWeight": "185 kg (Split Crated for Transit)",
      "materials": "Authentic Bookmatched Calacatta Gold Marble, Fluted Oak Core, Brushed Champagne Brass",
      "origin": "Carrara Quarries & Monza Finishing Atelier, Italy",
      "care": "Sealed with DuPont micro-porous stone barrier. Clean with warm water and microfiber.",
      "leadTime": "Made to Order (4-6 Weeks) — Includes White-Glove In-Room Assembly"
    },
    "reviews": [
      {
        "author": "Lord Julian Sterling",
        "location": "London, UK",
        "rating": 5,
        "date": "August 10, 2026",
        "text": "The focal point of our estate dining room. The bookmatched Calacatta veins are magnificent."
      }
    ]
  },
  {
    "id": 6,
    "name": "Zephyr Smoked Glass Bookshelf",
    "category": "office",
    "categoryLabel": "Executive Office",
    "price": 2780,
    "priceFormatted": "$2,780",
    "rating": 4.88,
    "reviewsCount": 28,
    "image": "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=80",
    "badge": "Architectural",
    "description": "Open-profile display shelving uniting tempered bronze smoked glass with a matte-charcoal aerospace-grade aluminum framework and integrated warm LED shelf lighting.",
    "gallery": [
      {
        "label": "Master Perspective",
        "url": "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Smoked Bronze Reflection",
        "url": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Library Styling View",
        "url": "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Integrated Concealed Lighting",
        "url": "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=85"
      }
    ],
    "specs": {
      "dimensions": "160W × 42D × 210H cm",
      "seatHeight": "N/A",
      "armrestHeight": "N/A",
      "netWeight": "78 kg",
      "materials": "10mm Tempered Smoked Bronze Glass, Extruded Anodized Matte Charcoal Aluminum",
      "origin": "Treviso Precision Glassworks, Italy",
      "care": "Clean glass surfaces with ammonia-free lint-free glass spray.",
      "leadTime": "In Stock — 5-7 Business Days with Dedicated Art Freight"
    },
    "reviews": [
      {
        "author": "Dr. Alexander Brandt",
        "location": "Berlin, Germany",
        "rating": 5,
        "date": "August 04, 2026",
        "text": "The smoked bronze transparency gives lightness to our study without visual clutter."
      }
    ]
  },
  {
    "id": 7,
    "name": "Solstice Walnut Sideboard",
    "category": "dining",
    "categoryLabel": "Dining & Monoliths",
    "price": 3100,
    "priceFormatted": "$3,100",
    "rating": 4.92,
    "reviewsCount": 33,
    "image": "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1000&q=80",
    "badge": "Italian Craft",
    "description": "Fluted Canaletto walnut credenza with continuous woodgrain flow across 4 soft-close touch-latch doors and a recessed Nero Marquina marble top.",
    "gallery": [
      {
        "label": "Master Perspective",
        "url": "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Nero Marquina Top",
        "url": "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Fluted Texture Close-Up",
        "url": "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Interior Velvet Lining",
        "url": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=85"
      }
    ],
    "specs": {
      "dimensions": "200W × 50D × 78H cm",
      "seatHeight": "N/A",
      "armrestHeight": "N/A",
      "netWeight": "92 kg",
      "materials": "Solid Canaletto Walnut, Nero Marquina Marble Inset, Blum Soft-Close German Hardware",
      "origin": "Vicenza Cabinetry Studios, Italy",
      "care": "Dust with dry cotton rag. Polish wood annually with organic citrus oil balm.",
      "leadTime": "In Stock — White-Glove In-Room Placement Included"
    },
    "reviews": [
      {
        "author": "Chiara Moretti",
        "location": "Rome, Italy",
        "rating": 5,
        "date": "August 14, 2026",
        "text": "The Nero Marquina marble inset gives a sensational contrast against the warm fluted walnut."
      }
    ]
  },
  {
    "id": 8,
    "name": "Vesper Matte Black Floor Lamp",
    "category": "accents",
    "categoryLabel": "Sculptural Accents",
    "price": 890,
    "priceFormatted": "$890",
    "rating": 4.96,
    "reviewsCount": 47,
    "image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=80",
    "badge": "Ambient Luminary",
    "description": "Slender counterbalanced luminary featuring an articulated architectural arm, mouth-blown opal glass globe, and solid weighted Marquina marble base.",
    "gallery": [
      {
        "label": "Master Perspective",
        "url": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Mouth-Blown Opal Globe",
        "url": "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Heavy Stone Footing",
        "url": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Warm Ambient Glow",
        "url": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
      }
    ],
    "specs": {
      "dimensions": "140W × 38D × 195H cm (Adjustable Cantilever Arc)",
      "seatHeight": "N/A",
      "armrestHeight": "N/A",
      "netWeight": "22 kg (Weighted marble counter-balance)",
      "materials": "Matte Powder-Coated Carbon Steel, Mouth-Blown Triplex Opal Glass, Nero Marquina Base",
      "origin": "Venetian Lighting Guild & Milan Workshop, Italy",
      "care": "Wipe with dry microfiber cloth. Compatible with 2700K Warm LED bulbs (dimmable).",
      "leadTime": "In Stock — 48-Hour Express Dispatch"
    },
    "reviews": [
      {
        "author": "Patrick Dupont",
        "location": "Geneva, Switzerland",
        "rating": 5,
        "date": "July 30, 2026",
        "text": "The counterbalanced mechanical arm is so smooth. The light cast is warm and painterly."
      }
    ]
  },
  {
    "id": 9,
    "name": "Ravello Italian Leather Armchair",
    "category": "living",
    "categoryLabel": "Living Room",
    "price": 1950,
    "priceFormatted": "$1,950",
    "rating": 4.93,
    "reviewsCount": 36,
    "image": "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1000&q=80",
    "badge": "Artisanal",
    "description": "Low-slung club chair handcrafted in Florence with vegetable-tanned chestnut leather, exposed dowel joinery, and goose-down padded lumbar pillow.",
    "gallery": [
      {
        "label": "Master Perspective",
        "url": "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Exposed Dowel Joinery",
        "url": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Supple Chestnut Leather",
        "url": "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Library Fireside Context",
        "url": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=85"
      }
    ],
    "specs": {
      "dimensions": "92W × 88D × 76H cm",
      "seatHeight": "42 cm",
      "armrestHeight": "58 cm",
      "netWeight": "36 kg",
      "materials": "Vegetable-Tanned Tuscan Leather, FSC Ash Timber Frame, Goose Down & Latex Cushioning",
      "origin": "Florence Tannery & Brescia Ateliers, Italy",
      "care": "Condition with natural beeswax leather cream twice yearly.",
      "leadTime": "In Stock — 3-5 Business Days"
    },
    "reviews": [
      {
        "author": "Liam Hemsworth",
        "location": "Sydney, Australia",
        "rating": 5,
        "date": "August 11, 2026",
        "text": "Astonishing comfort and build quality. The smell of genuine Italian leather is incredible."
      }
    ]
  },
  {
    "id": 10,
    "name": "Siena Fluted Oak Credenza",
    "category": "office",
    "categoryLabel": "Executive Office",
    "price": 3850,
    "priceFormatted": "$3,850",
    "rating": 4.97,
    "reviewsCount": 22,
    "image": "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=80",
    "badge": "Architectural",
    "description": "Monumental executive credenza featuring vertical acoustic fluting in European blonde oak, with internal velvet document drawers and cable management ports.",
    "gallery": [
      {
        "label": "Master Perspective",
        "url": "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Blonde Oak Fluting",
        "url": "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Concealed Cable Pass",
        "url": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Executive Suite Setting",
        "url": "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=85"
      }
    ],
    "specs": {
      "dimensions": "220W × 52D × 82H cm",
      "seatHeight": "N/A",
      "armrestHeight": "N/A",
      "netWeight": "105 kg",
      "materials": "FSC European White Oak, Anodized Brass Handles, Velvet Drawer Insets",
      "origin": "Siena Woodcraft Workshops, Tuscany, Italy",
      "care": "Dust with dry soft cloth. Use felt pads beneath heavy decorative objects.",
      "leadTime": "Made to Order (3-4 Weeks)"
    },
    "reviews": [
      {
        "author": "Charlotte de Saint-Germain",
        "location": "Paris, France",
        "rating": 5,
        "date": "August 09, 2026",
        "text": "The tactile fluting and whisper-quiet door dampers make this the crown of my home office."
      }
    ]
  },
  {
    "id": 11,
    "name": "Bellagio Brushed Brass Chandelier",
    "category": "accents",
    "categoryLabel": "Sculptural Accents",
    "price": 2300,
    "priceFormatted": "$2,300",
    "rating": 5,
    "reviewsCount": 18,
    "image": "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1000&q=80",
    "badge": "Gallery Piece",
    "description": "Kinetic architectural chandelier of interlocking solid satin brass rings holding hand-blown Murano glass diffusers with 360-degree dimmable illumination.",
    "gallery": [
      {
        "label": "Master Perspective",
        "url": "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Murano Glass Diffusers",
        "url": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Brushed Brass Geometry",
        "url": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "High-Ceiling Salon View",
        "url": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
      }
    ],
    "specs": {
      "dimensions": "110 Diameter × 75H cm (Adjustable Suspension Cable up to 250 cm)",
      "seatHeight": "N/A",
      "armrestHeight": "N/A",
      "netWeight": "18 kg",
      "materials": "Solid Cast Brass with Satin Protective Lacquer, Hand-Blown Murano Opal Glass",
      "origin": "Murano & Bellagio Workshops, Italy",
      "care": "Dust gently with feather duster or dry microfiber.",
      "leadTime": "In Stock — Specially Crated for Safe Transit"
    },
    "reviews": [
      {
        "author": "Matteo Bianchi",
        "location": "Como, Italy",
        "rating": 5,
        "date": "August 05, 2026",
        "text": "Suspended over our dining table, it creates the most captivating golden glow."
      }
    ]
  },
  {
    "id": 12,
    "name": "Verona Low Marble Coffee Table",
    "category": "dining",
    "categoryLabel": "Dining & Monoliths",
    "price": 1720,
    "priceFormatted": "$1,720",
    "rating": 4.91,
    "reviewsCount": 26,
    "image": "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80",
    "badge": "New Season",
    "description": "Sculptural low-slung table composed of two interlocking geometric blocks carved from honed Grigio Carnico grey marble.",
    "gallery": [
      {
        "label": "Master Perspective",
        "url": "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Grigio Carnico Marble",
        "url": "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Interlocking Geometric Blocks",
        "url": "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Low-Profile Salon View",
        "url": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=85"
      }
    ],
    "specs": {
      "dimensions": "120W × 120D × 28H cm",
      "seatHeight": "N/A",
      "armrestHeight": "N/A",
      "netWeight": "88 kg",
      "materials": "Honed Italian Grigio Carnico Marble with Beveled Edges",
      "origin": "Verona Stoneworks, Italy",
      "care": "Wipe with damp cloth and pH-neutral stone cleaner.",
      "leadTime": "In Stock — Dispatches within 3-5 Business Days"
    },
    "reviews": [
      {
        "author": "Sophia V.",
        "location": "Vienna, Austria",
        "rating": 5,
        "date": "August 13, 2026",
        "text": "Minimalist perfection. The low height keeps the room feeling expansive and open."
      }
    ]
  },
  {
    "id": 13,
    "name": "Como Ergonomic Velvet Chaise",
    "category": "living",
    "categoryLabel": "Living Room",
    "price": 2690,
    "priceFormatted": "$2,690",
    "rating": 4.98,
    "reviewsCount": 29,
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80",
    "badge": "Cloud Comfort",
    "description": "An undulating reclining chaise upholstered in deep moss green Rubelli cotton velvet, engineered to support the natural spinal curve with zero-pressure balance.",
    "gallery": [
      {
        "label": "Master Perspective",
        "url": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Rubelli Cotton Velvet",
        "url": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Sinuous Contour Line",
        "url": "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Library Window Alignment",
        "url": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
      }
    ],
    "specs": {
      "dimensions": "185L × 82W × 78H cm",
      "seatHeight": "38 cm",
      "armrestHeight": "N/A",
      "netWeight": "44 kg",
      "materials": "Venetian Rubelli Cotton Velvet, Multi-Density Memory Foam, Internal Steel Skeleton",
      "origin": "Como Atelier, Northern Italy",
      "care": "Steam lightly or brush with velvet bristle brush to maintain pile.",
      "leadTime": "Made to Order (2-3 Weeks)"
    },
    "reviews": [
      {
        "author": "Giacomo Rinaldi",
        "location": "Lugano, Switzerland",
        "rating": 5,
        "date": "August 01, 2026",
        "text": "The velvet has extraordinary depth of color. The ergonomic support for reading is superb."
      }
    ]
  },
  {
    "id": 14,
    "name": "Tivoli Architectural Dining Chairs (Pair)",
    "category": "dining",
    "categoryLabel": "Dining Room",
    "price": 1680,
    "priceFormatted": "$1,680",
    "rating": 4.89,
    "reviewsCount": 35,
    "image": "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1000&q=80",
    "badge": "Pair Set",
    "description": "Sold as a pair. Minimalist cantilever dining chairs crafted with seamless tubular brass framing and ivory bouclé upholstered saddle seats.",
    "gallery": [
      {
        "label": "Master Perspective",
        "url": "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Cantilever Brass Flex",
        "url": "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Ivory Saddle Upholstery",
        "url": "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Calacatta Table Match",
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
      }
    ],
    "specs": {
      "dimensions": "54W × 58D × 82H cm (Per Chair)",
      "seatHeight": "47 cm",
      "armrestHeight": "68 cm",
      "netWeight": "12 kg (Per Chair)",
      "materials": "Heavy-Gauge Brushed Brass Tube, High-Density Foam, Belgian Wool Bouclé",
      "origin": "Tivoli Metalworks, Italy",
      "care": "Spot clean fabric with wool safe foam. Polish brass with microfiber.",
      "leadTime": "In Stock — Packaged in Reinforced Dual Crate"
    },
    "reviews": [
      {
        "author": "Amelie Fontaine",
        "location": "Brussels, Belgium",
        "rating": 5,
        "date": "August 17, 2026",
        "text": "The subtle cantilever flex makes long dinner conversations wonderfully effortless."
      }
    ]
  },
  {
    "id": 15,
    "name": "Palermo Hand-Knotted Wool Rug",
    "category": "accents",
    "categoryLabel": "Sculptural Accents",
    "price": 1450,
    "priceFormatted": "$1,450",
    "rating": 4.94,
    "reviewsCount": 21,
    "image": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80",
    "badge": "Heritage",
    "description": "High-density hand-knotted architectural rug woven from un-dyed New Zealand wool with organic raised pile relief lines inspired by Sicilian coastline strata.",
    "gallery": [
      {
        "label": "Master Perspective",
        "url": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Relief Pile Lines",
        "url": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Wool Knot Density",
        "url": "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Living Salon Footing",
        "url": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85"
      }
    ],
    "specs": {
      "dimensions": "300W × 240D cm (Large Salon Format)",
      "seatHeight": "N/A (18mm Pile Height)",
      "armrestHeight": "N/A",
      "netWeight": "28 kg",
      "materials": "100% Pure Un-Dyed New Zealand Wool on Organic Cotton Warp",
      "origin": "Artisanal Looms, Palermo / Sicily",
      "care": "Vacuum regularly without rotating beater bar.",
      "leadTime": "In Stock — Rolled with Heavy-Duty Protective Sleeve"
    },
    "reviews": [
      {
        "author": "Diana Spencer",
        "location": "London, UK",
        "rating": 5,
        "date": "August 08, 2026",
        "text": "So soft underfoot with magnificent texture and thickness."
      }
    ]
  },
  {
    "id": 16,
    "name": "Cortina Sculptural Travertine Pedestal",
    "category": "accents",
    "categoryLabel": "Sculptural Accents",
    "price": 1120,
    "priceFormatted": "$1,120",
    "rating": 4.95,
    "reviewsCount": 15,
    "image": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1000&q=80",
    "badge": "Gallery Piece",
    "description": "Monumental fluted Roman stone pedestal designed to display bronze sculptures, oversized botanical urns, or architectural books.",
    "gallery": [
      {
        "label": "Master Perspective",
        "url": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Fluted Stone Texture",
        "url": "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Heavy Base Stability",
        "url": "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Gallery Entry Placement",
        "url": "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=85"
      }
    ],
    "specs": {
      "dimensions": "35W × 35D × 95H cm",
      "seatHeight": "N/A",
      "armrestHeight": "N/A",
      "netWeight": "46 kg",
      "materials": "Solid Natural Italian Travertine, Satin Sealant",
      "origin": "Tivoli Stone Ateliers, Italy",
      "care": "Dust with dry cloth. Spot clean with stone cleaner.",
      "leadTime": "In Stock — Dispatches within 48 Hours"
    },
    "reviews": [
      {
        "author": "Valeria Castiglioni",
        "location": "Milan, Italy",
        "rating": 5,
        "date": "August 16, 2026",
        "text": "The perfect height for our bronze sculpture in the gallery entrance."
      }
    ]
  },
  {
    "id": 17,
    "name": "Bergamo Modular Sectional",
    "category": "living",
    "categoryLabel": "Living Room",
    "price": 5800,
    "priceFormatted": "$5,800",
    "rating": 5,
    "reviewsCount": 27,
    "image": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80",
    "badge": "Masterpiece",
    "description": "Expansive 4-piece architectural modular sectional wrapped in Italian heavyweight oatmeal bouclé with removable channel-quilted back cushions.",
    "gallery": [
      {
        "label": "Master Perspective",
        "url": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Modular Magnetic Joinery",
        "url": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Channel Quilted Cushions",
        "url": "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Panoramic Villa Setting",
        "url": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85"
      }
    ],
    "specs": {
      "dimensions": "360W × 220D × 74H cm",
      "seatHeight": "40 cm",
      "armrestHeight": "60 cm",
      "netWeight": "142 kg",
      "materials": "FSC Solid Beech Frame, Feather Down Padded Core, Italian Oatmeal Bouclé",
      "origin": "Bergamo Master Ateliers, Italy",
      "care": "Professional upholstery clean only. Fluff cushions regularly.",
      "leadTime": "Made to Order (3-4 Weeks)"
    },
    "reviews": [
      {
        "author": "Marcus Lindqvist",
        "location": "Stockholm, Sweden",
        "rating": 5,
        "date": "August 19, 2026",
        "text": "The scale is magnificent. It seats eight adults with immense luxury and zero crowding."
      }
    ]
  },
  {
    "id": 18,
    "name": "Sorrento Swivel Armchair",
    "category": "living",
    "categoryLabel": "Living Room",
    "price": 1850,
    "priceFormatted": "$1,850",
    "rating": 4.92,
    "reviewsCount": 34,
    "image": "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1000&q=80",
    "badge": "360° Motion",
    "description": "Sculptural round club armchair with silent 360-degree ball-bearing swivel mechanism, wrapped in rich rust cognac textured chenille.",
    "gallery": [
      {
        "label": "Master Perspective",
        "url": "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Concealed Smooth Swivel",
        "url": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Chenille Weave Close-Up",
        "url": "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Fireside Pairing",
        "url": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=85"
      }
    ],
    "specs": {
      "dimensions": "84W × 84D × 72H cm",
      "seatHeight": "41 cm",
      "armrestHeight": "56 cm",
      "netWeight": "32 kg",
      "materials": "Cognac Textured Chenille, Cold-Cure Foam, Steel Swivel Bearing Plate",
      "origin": "Sorrento Craft Guild, Southern Italy",
      "care": "Vacuum with soft attachment. Spot clean with dry cleaning solvent.",
      "leadTime": "In Stock — Dispatches in 48 Hours"
    },
    "reviews": [
      {
        "author": "Arianna Rossi",
        "location": "Naples, Italy",
        "rating": 5,
        "date": "August 14, 2026",
        "text": "Silent swivel and ultra plush. The rust cognac tone is deep and vibrant."
      }
    ]
  },
  {
    "id": 19,
    "name": "Positano Woven Rattan Lounge",
    "category": "outdoor",
    "categoryLabel": "Outdoor Living",
    "price": 2450,
    "priceFormatted": "$2,450",
    "rating": 4.96,
    "reviewsCount": 25,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    "badge": "All-Weather",
    "description": "Sculptural outdoor daybed crafted with marine-grade synthetic wicker hand-woven around powder-coated aluminum, complete with quick-dry Sunbrella cushions.",
    "gallery": [
      {
        "label": "Master Perspective",
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Marine Grade Weave",
        "url": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Sunbrella Fabric Texture",
        "url": "https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Sea View Terrace Setting",
        "url": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85"
      }
    ],
    "specs": {
      "dimensions": "190L × 90W × 68H cm",
      "seatHeight": "36 cm",
      "armrestHeight": "N/A",
      "netWeight": "38 kg",
      "materials": "All-Weather UV-Resistant Synthetic Rattan, Marine Aluminum, Reticulated Foam, Sunbrella Canvas",
      "origin": "Positano Coastal Design Atelier, Italy",
      "care": "Hose with fresh water. Store cushions during heavy winter storms.",
      "leadTime": "In Stock — Ready for Summer Delivery"
    },
    "reviews": [
      {
        "author": "Jean-Luc Moreau",
        "location": "Cannes, France",
        "rating": 5,
        "date": "August 12, 2026",
        "text": "Resists salt air and Mediterranean sun effortlessly. Stunning on our terrace."
      }
    ]
  },
  {
    "id": 20,
    "name": "Portofino Travertine Dining Bench",
    "category": "dining",
    "categoryLabel": "Dining & Monoliths",
    "price": 1420,
    "priceFormatted": "$1,420",
    "rating": 4.88,
    "reviewsCount": 16,
    "image": "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80",
    "badge": "Solid Stone",
    "description": "Architectural bench carved from un-filled Roman travertine slab resting on dual solid stone block legs with leather bolster cushion.",
    "gallery": [
      {
        "label": "Master Perspective",
        "url": "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Travertine Veins Detail",
        "url": "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Leather Strap Fastening",
        "url": "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Minimalist Dining Alignment",
        "url": "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=85"
      }
    ],
    "specs": {
      "dimensions": "160W × 40D × 45H cm",
      "seatHeight": "45 cm",
      "armrestHeight": "N/A",
      "netWeight": "72 kg",
      "materials": "Solid Roman Travertine, Italian Saddle Leather Straps, High-Density Foam Pad",
      "origin": "Portofino Studio & Tivoli Quarry, Italy",
      "care": "Wipe with damp stone cloth. Condition leather straps annually.",
      "leadTime": "In Stock — Dispatched in Heavy Duty Wooden Crate"
    },
    "reviews": [
      {
        "author": "Stefano D.",
        "location": "Genoa, Italy",
        "rating": 5,
        "date": "August 06, 2026",
        "text": "Sensational companion to our stone dining table. Sturdy, elegant, timeless."
      }
    ]
  },
  {
    "id": 21,
    "name": "Modena Fluted Oak Dining Table",
    "category": "dining",
    "categoryLabel": "Dining Room",
    "price": 4600,
    "priceFormatted": "$4,600",
    "rating": 4.97,
    "reviewsCount": 23,
    "image": "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1000&q=80",
    "badge": "Artisanal",
    "description": "Solid circular oak statement table with a micro-fluted cylindrical pedestal base and bevel-cut tabletop finished in matte Danish timber oil.",
    "gallery": [
      {
        "label": "Master Perspective",
        "url": "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Fluted Pedestal Close-Up",
        "url": "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Beveled Oak Top Edge",
        "url": "https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Dining Salon View",
        "url": "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=85"
      }
    ],
    "specs": {
      "dimensions": "160 Diameter × 75H cm (Comfortably Seats 6-8)",
      "seatHeight": "N/A",
      "armrestHeight": "N/A",
      "netWeight": "84 kg",
      "materials": "100% Solid European Oak, Matte Low-VOC Danish Hardwax Oil",
      "origin": "Modena Master Woodcraft, Emilia-Romagna, Italy",
      "care": "Clean with mild wood soap. Avoid chemical solvents.",
      "leadTime": "Made to Order (3-4 Weeks)"
    },
    "reviews": [
      {
        "author": "Elisabetta Rossi",
        "location": "Bologna, Italy",
        "rating": 5,
        "date": "August 15, 2026",
        "text": "The round format invites such intimate conversations. The fluted wood base is a work of art."
      }
    ]
  },
  {
    "id": 22,
    "name": "Solstice Walnut Nightstand (Pair)",
    "category": "bedroom",
    "categoryLabel": "Bedroom Suites",
    "price": 1350,
    "priceFormatted": "$1,350",
    "rating": 4.95,
    "reviewsCount": 30,
    "image": "https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?auto=format&fit=crop&w=1000&q=80",
    "badge": "Pair Set",
    "description": "Sold as a matched pair. Floating cantilever bedside tables in Canaletto walnut with fluted drawer fronts and wireless induction charging hidden under the top.",
    "gallery": [
      {
        "label": "Master Perspective",
        "url": "https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Integrated Qi Charger",
        "url": "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Walnut Fluted Grain",
        "url": "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Bedside Sanctuary View",
        "url": "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=85"
      }
    ],
    "specs": {
      "dimensions": "55W × 42D × 48H cm (Per Nightstand)",
      "seatHeight": "N/A",
      "armrestHeight": "N/A",
      "netWeight": "18 kg (Per Unit)",
      "materials": "Canaletto Walnut, Concealed Blum Soft-Close Runners, Qi Induction Wireless Transmitter",
      "origin": "Vicenza Cabinetry, Italy",
      "care": "Dust with soft dry cloth. Keep surface dry.",
      "leadTime": "In Stock — 48-Hour Dispatch"
    },
    "reviews": [
      {
        "author": "Tobias Meier",
        "location": "Basel, Switzerland",
        "rating": 5,
        "date": "August 13, 2026",
        "text": "The invisible phone charging built into the walnut surface is pure genius."
      }
    ]
  },
  {
    "id": 23,
    "name": "Bellagio Upholstered Headboard Bed",
    "category": "bedroom",
    "categoryLabel": "Bedroom Suites",
    "price": 3900,
    "priceFormatted": "$3,900",
    "rating": 5,
    "reviewsCount": 20,
    "image": "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1000&q=80",
    "badge": "Masterpiece",
    "description": "Wingback king bed enveloped in textured Belgian oyster linen with vertical hand-tufted fluting and an integrated walnut surround base.",
    "gallery": [
      {
        "label": "Master Perspective",
        "url": "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Oyster Linen Fluting",
        "url": "https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Wingback Acoustic Enclosure",
        "url": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Hotel Suite Luxury",
        "url": "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=85"
      }
    ],
    "specs": {
      "dimensions": "228W × 218D × 140H cm",
      "seatHeight": "32 cm (Base Height)",
      "armrestHeight": "N/A",
      "netWeight": "128 kg",
      "materials": "Belgian Organic Oyster Linen, Solid Pine & Birch Subframe, High-Resilience Padding",
      "origin": "Bellagio Upholstery Ateliers, Italy",
      "care": "Vacuum with soft attachment. Fabric treated with stain repellant barrier.",
      "leadTime": "Made to Order (3-4 Weeks) — White-Glove In-Room Assembly Included"
    },
    "reviews": [
      {
        "author": "Lady Arabella Lennox",
        "location": "Cotswolds, UK",
        "rating": 5,
        "date": "August 10, 2026",
        "text": "The acoustic wingback wraps around you like a cocoon of quiet and serenity."
      }
    ]
  },
  {
    "id": 24,
    "name": "Matera Belgian Linen Dresser",
    "category": "bedroom",
    "categoryLabel": "Bedroom Suites",
    "price": 2850,
    "priceFormatted": "$2,850",
    "rating": 4.9,
    "reviewsCount": 17,
    "image": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80",
    "badge": "Handcrafted",
    "description": "6-drawer low dresser encased in stretched raw Belgian linen with hand-rubbed beeswax finish and solid cast brass pull handles.",
    "gallery": [
      {
        "label": "Master Perspective",
        "url": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Raw Linen Texture",
        "url": "https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Hand-Rubbed Brass Pulls",
        "url": "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Master Suite Alignment",
        "url": "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=85"
      }
    ],
    "specs": {
      "dimensions": "170W × 50D × 84H cm",
      "seatHeight": "N/A",
      "armrestHeight": "N/A",
      "netWeight": "82 kg",
      "materials": "Stretched Belgian Linen, Solid European Ash, Solid Cast Unlacquered Brass",
      "origin": "Matera Craft Workshops, Southern Italy",
      "care": "Dust with dry cloth. Spot treat spills promptly.",
      "leadTime": "In Stock — 5-7 Business Days"
    },
    "reviews": [
      {
        "author": "Filippo Nardi",
        "location": "Florence, Italy",
        "rating": 5,
        "date": "August 03, 2026",
        "text": "The linen wrap is extraordinarily tactile and unique. The drawers glide with zero sound."
      }
    ]
  },
  {
    "id": 25,
    "name": "Lugano Bouclé End-of-Bed Bench",
    "category": "bedroom",
    "categoryLabel": "Bedroom Suites",
    "price": 1250,
    "priceFormatted": "$1,250",
    "rating": 4.93,
    "reviewsCount": 22,
    "image": "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1000&q=80",
    "badge": "Cloud Comfort",
    "description": "Curved architectural ottoman bench wrapped in cloud-like ivory bouclé with recessed smoked walnut plinth base.",
    "gallery": [
      {
        "label": "Master Perspective",
        "url": "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Bouclé Cushioning",
        "url": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Recessed Walnut Plinth",
        "url": "https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "King Bed Footing",
        "url": "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=85"
      }
    ],
    "specs": {
      "dimensions": "150W × 46D × 45H cm",
      "seatHeight": "45 cm",
      "armrestHeight": "N/A",
      "netWeight": "24 kg",
      "materials": "Belgian Ivory Bouclé, Canaletto Walnut Base, High-Density Foam",
      "origin": "Lugano / Como Border Ateliers",
      "care": "Vacuum with upholstery attachment.",
      "leadTime": "In Stock — 48-Hour Dispatch"
    },
    "reviews": [
      {
        "author": "Hanna Lind",
        "location": "Copenhagen, Denmark",
        "rating": 5,
        "date": "August 16, 2026",
        "text": "The curved edges make walking around the bedroom so seamless. Beautifully made."
      }
    ]
  },
  {
    "id": 26,
    "name": "Duomo Executive Walnut Desk",
    "category": "office",
    "categoryLabel": "Executive Office",
    "price": 4100,
    "priceFormatted": "$4,100",
    "rating": 5,
    "reviewsCount": 19,
    "image": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=80",
    "badge": "Masterpiece",
    "description": "Cantilevered executive desk featuring bookmatched Canaletto walnut grain, Italian full-grain leather desktop inlay, and hidden wireless power hubs.",
    "gallery": [
      {
        "label": "Master Perspective",
        "url": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Leather Desktop Blotter",
        "url": "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Cantilever Joinery Detail",
        "url": "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Corner Executive Office",
        "url": "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=85"
      }
    ],
    "specs": {
      "dimensions": "200W × 90D × 76H cm",
      "seatHeight": "N/A (76 cm desk height)",
      "armrestHeight": "N/A",
      "netWeight": "96 kg",
      "materials": "Canaletto Walnut, Florentine Full-Grain Saddle Leather Inlay, Integrated USB-C & AC Power Hubs",
      "origin": "Milan Executive Furniture Atelier, Italy",
      "care": "Wipe with damp cloth. Polish leather inlay with natural leather conditioner.",
      "leadTime": "Made to Order (3-4 Weeks)"
    },
    "reviews": [
      {
        "author": "Arthur Pendelton",
        "location": "New York, USA",
        "rating": 5,
        "date": "August 18, 2026",
        "text": "The cantilever architecture creates immense presence. Writing on the leather inlay is sheer pleasure."
      }
    ]
  },
  {
    "id": 27,
    "name": "Torino Ergonomic Leather Task Chair",
    "category": "office",
    "categoryLabel": "Executive Office",
    "price": 1750,
    "priceFormatted": "$1,750",
    "rating": 4.94,
    "reviewsCount": 38,
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80",
    "badge": "Ergonomic Master",
    "description": "Executive desk chair uniting Italian semi-aniline leather with synchronized knee-tilt pneumatic mechanism and sculpted cast champagne brass arms.",
    "gallery": [
      {
        "label": "Master Perspective",
        "url": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Knee-Tilt Mechanical Hub",
        "url": "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Cast Brass Armrests",
        "url": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Executive Desk Pair",
        "url": "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=85"
      }
    ],
    "specs": {
      "dimensions": "68W × 68D × 98-106H cm (Pneumatic Height Adjust)",
      "seatHeight": "45-53 cm",
      "armrestHeight": "65-73 cm",
      "netWeight": "26 kg",
      "materials": "Full-Grain Semi-Aniline Italian Leather, Solid Cast Brass Base, German Class-4 Gas Cylinder",
      "origin": "Torino Automotive-Inspired Guild, Italy",
      "care": "Wipe with soft damp cloth. Condition leather twice yearly.",
      "leadTime": "In Stock — 48-Hour Dispatch"
    },
    "reviews": [
      {
        "author": "Evelyn Reed",
        "location": "London, UK",
        "rating": 5,
        "date": "August 14, 2026",
        "text": "Finally an office chair that looks like high sculpture while offering flawless 10-hour lumbar support."
      }
    ]
  },
  {
    "id": 28,
    "name": "Amalfi Teak Lounger",
    "category": "outdoor",
    "categoryLabel": "Outdoor Living",
    "price": 2200,
    "priceFormatted": "$2,200",
    "rating": 4.96,
    "reviewsCount": 29,
    "image": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
    "badge": "All-Weather",
    "description": "Architectural pool lounger carved from certified sustainably-harvested Grade-A plantation teak, with 5-position reclining backrest and wheels.",
    "gallery": [
      {
        "label": "Master Perspective",
        "url": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Grade-A Teak Slatting",
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Marine Stainless Hardware",
        "url": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85"
      },
      {
        "label": "Infinity Pool View",
        "url": "https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?auto=format&fit=crop&w=1200&q=85"
      }
    ],
    "specs": {
      "dimensions": "205L × 76W × 32H cm",
      "seatHeight": "32 cm",
      "armrestHeight": "N/A",
      "netWeight": "36 kg",
      "materials": "100% Plantation Teak, 316 Marine Stainless Steel, Water-Permeable Dry-Fast Cushion",
      "origin": "Amalfi Coast Atelier & Florence Mill, Italy",
      "care": "Teak will weather naturally to a silvery grey patina, or apply teak oil to retain golden tone.",
      "leadTime": "In Stock — Includes Custom Fitted All-Weather Cover"
    },
    "reviews": [
      {
        "author": "Countess Marina D.",
        "location": "Capri, Italy",
        "rating": 5,
        "date": "August 11, 2026",
        "text": "The Grade-A teak is dense, silky, and impervious to ocean breeze. Sublime poolside comfort."
      }
    ]
  }
];

  const NAIRA_PER_USD = 1600;
  const nairaFormatter = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0
  });

  function formatNaira(amount) {
    return nairaFormatter.format(Math.round(amount));
  }

  function optimizeProductImage(url) {
    return url
      .replace(/([?&])w=\d+/i, '$1w=640')
      .replace(/([?&])q=\d+/i, '$1q=62');
  }

  // Keep the curated seed pieces and create a full 100-piece collection per category.
  productsDB.forEach(product => {
    product.price = Math.round(product.price * NAIRA_PER_USD);
    product.priceFormatted = formatNaira(product.price);
  });

  const categoryBlueprints = {
    living: { label: 'Living Room', prefix: 'Living Atelier Piece', images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7', 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c'] },
    bedroom: { label: 'Bedroom Suites', prefix: 'Sanctuary Bedroom Piece', images: ['https://images.unsplash.com/photo-1540518614846-7ede433c4ef0', 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0'] },
    dining: { label: 'Dining Room', prefix: 'Dining Atelier Piece', images: ['https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf', 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c'] },
    office: { label: 'Executive Office', prefix: 'Executive Office Piece', images: ['https://images.unsplash.com/photo-1497366811353-6870744d04b2', 'https://images.unsplash.com/photo-1524758631624-e2822e304c36', 'https://images.unsplash.com/photo-1497366754035-f200968a6e72'] },
    outdoor: { label: 'Outdoor Living', prefix: 'Outdoor Living Piece', images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0', 'https://images.unsplash.com/photo-1549490349-8643362247b5'] },
    accents: { label: 'Accents & Lighting', prefix: 'Sculptural Accent Piece', images: ['https://images.unsplash.com/photo-1507473885765-e6ed057f782c', 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38', 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88'] }
  };

  let generatedProductId = productsDB.reduce((highest, product) => Math.max(highest, product.id), 0) + 1;
  Object.entries(categoryBlueprints).forEach(([category, blueprint]) => {
    const categoryProducts = productsDB.filter(product => product.category === category);
    for (let index = categoryProducts.length; index < 100; index += 1) {
      const source = categoryProducts[index % categoryProducts.length] || productsDB[0];
      const generatedPrice = Math.round((source.price / NAIRA_PER_USD) * (0.72 + ((index % 9) * 0.06)) * NAIRA_PER_USD);
      productsDB.push({
        ...source,
        id: generatedProductId++,
        name: `${blueprint.prefix} ${String(index + 1).padStart(2, '0')}`,
        category,
        categoryLabel: blueprint.label,
        image: `${blueprint.images[index % blueprint.images.length]}?auto=format&fit=crop&w=640&q=62`,
        description: `A distinct ${blueprint.label.toLowerCase()} composition shaped around ${['natural texture', 'quiet geometry', 'hand-finished detail'][index % 3]} and made for considered interiors.`,
        price: generatedPrice,
        priceFormatted: formatNaira(generatedPrice),
        badge: index % 4 === 0 ? 'New Arrival' : 'Artisanal',
        reviewsCount: 8 + (index % 40),
        rating: Number((4.6 + ((index % 5) * 0.1)).toFixed(1))
      });
    }
  });

  // Cart State (Initialized with 2 items)
  let cartState = [
    { id: 1, quantity: 1 },
    { id: 2, quantity: 1 },
    { id: 4, quantity: 1 }
  ];

  // Selected Payment Plan ('pay-full', 'split-4', 'finance-12')
  let selectedPaymentPlan = 'split-4';

  // Wishlist State
  const wishlistState = new Set(JSON.parse(localStorage.getItem('luxe_wishlist') || '[]'));

  // User Authentication State
  let currentUser = JSON.parse(localStorage.getItem('luxe_user') || 'null');

  /* ==========================================================================
     3. TOAST NOTIFICATION ENGINE
     ========================================================================== */
  const toastContainer = document.getElementById('toast-container');

  function showLuxuryToast(title, message, iconClass = 'fa-solid fa-check') {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = 'luxury-toast';
    toast.innerHTML = `
      <div class="toast-icon"><i class="${iconClass}"></i></div>
      <div class="toast-body">
        <div class="toast-title">${title}</div>
        <div class="toast-msg">${message}</div>
      </div>
    `;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('hide');
      setTimeout(() => toast.remove(), 450);
    }, 3800);
  }

  /* ==========================================================================
     4. HERO FULL-SCREEN MOVING CAROUSEL
     ========================================================================== */
  const heroSlides = document.querySelectorAll('.hero-slide');
  const heroDots = document.querySelectorAll('.hero-dot');
  const heroPrevBtn = document.getElementById('hero-prev-btn');
  const heroNextBtn = document.getElementById('hero-next-btn');
  const heroCurrNum = document.getElementById('hero-curr-num');
  const heroProgressBar = document.getElementById('hero-progress-bar');

  let currentSlideIndex = 0;
  const totalHeroSlides = heroSlides.length;
  const slideDuration = 7000;
  let progressAnimation = null;
  let progressStartTime = 0;

  function setSlide(index) {
    currentSlideIndex = (index + totalHeroSlides) % totalHeroSlides;

    heroSlides.forEach((slide, i) => {
      slide.classList.toggle('active', i === currentSlideIndex);
    });

    heroDots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentSlideIndex);
    });

    if (heroCurrNum) {
      heroCurrNum.textContent = String(currentSlideIndex + 1).padStart(2, '0');
    }

    resetAndStartTimer();
  }

  function nextSlide() {
    setSlide(currentSlideIndex + 1);
  }

  function prevSlide() {
    setSlide(currentSlideIndex - 1);
  }

  function resetAndStartTimer() {
    if (progressAnimation) cancelAnimationFrame(progressAnimation);
    if (heroProgressBar) heroProgressBar.style.width = '0%';

    progressStartTime = performance.now();

    function updateProgress(currentTime) {
      const elapsed = currentTime - progressStartTime;
      const percent = Math.min((elapsed / slideDuration) * 100, 100);

      if (heroProgressBar) {
        heroProgressBar.style.width = `${percent}%`;
      }

      if (elapsed < slideDuration) {
        progressAnimation = requestAnimationFrame(updateProgress);
      } else {
        nextSlide();
      }
    }

    progressAnimation = requestAnimationFrame(updateProgress);
  }

  if (heroNextBtn) heroNextBtn.addEventListener('click', nextSlide);
  if (heroPrevBtn) heroPrevBtn.addEventListener('click', prevSlide);

  heroDots.forEach(dot => {
    dot.addEventListener('click', () => {
      const targetIndex = parseInt(dot.getAttribute('data-index'), 10);
      setSlide(targetIndex);
    });
  });

  if (heroSlides.length > 0) {
    setSlide(0);
  }

  /* ==========================================================================
     5. NAVBAR & USER AUTHENTICATION CONTROLLER
     ========================================================================== */
  const siteHeader = document.getElementById('site-header');
  const desktopNavLinks = document.querySelectorAll('.nav-link');
  const userBtn = document.getElementById('user-btn');
  const userDropdownMenu = document.getElementById('user-dropdown-menu');
  const dropdownUserName = document.getElementById('dropdown-user-name');
  const dropdownUserEmail = document.getElementById('dropdown-user-email');
  const dropdownUserAddress = document.getElementById('dropdown-user-address');
  const profileEditToggle = document.getElementById('profile-edit-toggle');
  const profileEditForm = document.getElementById('profile-edit-form');
  const profileAddress = document.getElementById('profile-address');
  const profileState = document.getElementById('profile-state');
  const profilePhone = document.getElementById('profile-phone');
  const userOrderTrackerBtn = document.getElementById('user-order-tracker-btn');
  const userOrderTrackerLabel = document.getElementById('user-order-tracker-label');
  const userSignoutBtn = document.getElementById('user-signout-btn');

  // Auth Modal Elements
  const authModalOverlay = document.getElementById('auth-modal-overlay');
  const authCloseBtn = document.getElementById('auth-close-btn');
  const tabSigninBtn = document.getElementById('tab-signin-btn');
  const tabSignupBtn = document.getElementById('tab-signup-btn');
  const signinForm = document.getElementById('signin-form');
  const signupForm = document.getElementById('signup-form');
  const verificationForm = document.getElementById('verification-form');
  const verificationNote = document.getElementById('verification-note');
  const verificationResendBtn = document.getElementById('verification-resend-btn');
  const googleAuthTriggerBtn = document.getElementById('google-auth-trigger-btn');
  const authModalTitle = document.getElementById('auth-modal-title');
  let pendingSignup = null;
  let pendingVerificationCode = '';

  function getSavedOrder() {
    return JSON.parse(localStorage.getItem('luxe_last_order') || 'null');
  }

  function updateClientProfile(profile) {
    if (!currentUser) return;
    currentUser = { ...currentUser, ...profile };
    localStorage.setItem('luxe_user', JSON.stringify(currentUser));
    renderUserAuthState();
  }

  function renderUserAuthState() {
    if (!userBtn) return;

    if (currentUser) {
      const initials = currentUser.avatar || 'VIP';
      userBtn.innerHTML = `
        <div class="nav-user-avatar">
          ${initials}
          <span class="user-status-dot"></span>
        </div>
      `;
      if (dropdownUserName) dropdownUserName.textContent = currentUser.name;
      if (dropdownUserEmail) dropdownUserEmail.textContent = currentUser.email || 'No email saved';
      if (dropdownUserAddress) dropdownUserAddress.textContent = currentUser.address
        ? `${currentUser.address}${currentUser.state ? `, ${currentUser.state}` : ''}`
        : 'Add a delivery address at checkout';
      if (profileAddress) profileAddress.value = currentUser.address || '';
      if (profileState) profileState.value = currentUser.state || '';
      if (profilePhone) profilePhone.value = currentUser.phone || '';
      const savedOrder = getSavedOrder();
      if (userOrderTrackerLabel) userOrderTrackerLabel.textContent = savedOrder
        ? `Track Order ${savedOrder.reference}`
        : 'Track Latest Order';
      if (userOrderTrackerBtn) userOrderTrackerBtn.disabled = !savedOrder;
    } else {
      userBtn.innerHTML = `<i class="fa-regular fa-user"></i>`;
      if (userDropdownMenu) userDropdownMenu.classList.remove('open');
    }
  }

  function openAuthModal(isSignUp = false) {
    if (authModalOverlay) {
      authModalOverlay.classList.add('open');
      document.body.style.overflow = 'hidden';
      if (isSignUp) {
        tabSignupBtn.click();
      } else {
        tabSigninBtn.click();
      }
    }
  }

  function closeAuthModal() {
    if (authModalOverlay) {
      authModalOverlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  if (userBtn) {
    userBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (currentUser) {
        // Toggle user dropdown
        if (userDropdownMenu) userDropdownMenu.classList.toggle('open');
      } else {
        // Open Auth Modal
        openAuthModal(false);
      }
    });
  }

  userOrderTrackerBtn?.addEventListener('click', () => {
    const savedOrder = getSavedOrder();
    if (!savedOrder) {
      showLuxuryToast('No Orders Yet', 'Your latest order tracker will appear here after checkout.', 'fa-solid fa-box-open');
      return;
    }
    userDropdownMenu?.classList.remove('open');
    openTrackingModal();
  });

  profileEditToggle?.addEventListener('click', () => {
    profileEditForm?.classList.toggle('open');
  });

  profileEditForm?.addEventListener('submit', event => {
    event.preventDefault();
    const address = profileAddress?.value.trim() || '';
    const state = profileState?.value.trim() || '';
    const phone = profilePhone?.value.trim() || '';
    if (!address || !phone) {
      showLuxuryToast('Profile Details Required', 'Add your home address and phone number before saving.', 'fa-solid fa-circle-exclamation');
      return;
    }
    updateClientProfile({ address, state, phone });
    profileEditForm.classList.remove('open');
    showLuxuryToast('Profile Updated', 'Your delivery details are ready for the next order.', 'fa-solid fa-check');
  });

  // Close dropdown on outside click
  document.addEventListener('click', (e) => {
    if (userDropdownMenu && !e.target.closest('#nav-user-wrap')) {
      userDropdownMenu.classList.remove('open');
    }
  });

  if (authCloseBtn) authCloseBtn.addEventListener('click', closeAuthModal);
  if (authModalOverlay) {
    authModalOverlay.addEventListener('click', (e) => {
      if (e.target === authModalOverlay) closeAuthModal();
    });
  }

  // Auth Tabs switching
  if (tabSigninBtn && tabSignupBtn) {
    tabSigninBtn.addEventListener('click', () => {
      tabSigninBtn.classList.add('active');
      tabSignupBtn.classList.remove('active');
      signinForm.style.display = 'flex';
      signupForm.style.display = 'none';
      if (verificationForm) verificationForm.style.display = 'none';
      if (authModalTitle) authModalTitle.textContent = 'Private Atelier Sign In';
    });

    tabSignupBtn.addEventListener('click', () => {
      tabSignupBtn.classList.add('active');
      tabSigninBtn.classList.remove('active');
      signupForm.style.display = 'flex';
      signinForm.style.display = 'none';
      if (verificationForm) verificationForm.style.display = 'none';
      if (authModalTitle) authModalTitle.textContent = 'Join Private Atelier';
    });
  }

  // Google Authentication Simulation
  if (googleAuthTriggerBtn) {
    googleAuthTriggerBtn.addEventListener('click', () => {
      const originalHTML = googleAuthTriggerBtn.innerHTML;
      googleAuthTriggerBtn.innerHTML = `
        <i class="fa-solid fa-spinner fa-spin text-gold"></i>
        <span>Authenticating via Google Private Cloud...</span>
      `;
      googleAuthTriggerBtn.disabled = true;

      setTimeout(() => {
        currentUser = {
          name: "Lord Julian Sterling",
          email: "julian@sterling-estates.com",
          address: '',
          tier: "VIP Private Atelier Client",
          avatar: "JS"
        };
        localStorage.setItem('luxe_user', JSON.stringify(currentUser));
        renderUserAuthState();
        closeAuthModal();

        googleAuthTriggerBtn.innerHTML = originalHTML;
        googleAuthTriggerBtn.disabled = false;

        showLuxuryToast(
          'Google Authentication Confirmed',
          'Welcome, Julian Sterling. Private Atelier privileges and bespoke dossiers unlocked.',
          'fa-brands fa-google'
        );
      }, 1200);
    });
  }

  // Sign In Form Simulation
  if (signinForm) {
    signinForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('signin-email').value;
      currentUser = {
        name: email.split('@')[0].toUpperCase(),
        email: email,
        address: currentUser?.email === email ? currentUser.address : '',
        state: currentUser?.email === email ? currentUser.state : '',
        tier: "VIP Private Atelier Client",
        avatar: email.substring(0, 2).toUpperCase()
      };
      localStorage.setItem('luxe_user', JSON.stringify(currentUser));
      renderUserAuthState();
      closeAuthModal();
      showLuxuryToast('Welcome Back', `Authenticated as ${currentUser.name}.`, 'fa-solid fa-crown');
    });
  }

  // Sign Up Form Simulation
  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('signup-name').value;
      const email = document.getElementById('signup-email').value;
      const initials = name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
      pendingSignup = {
        name: name,
        email: email,
        address: document.getElementById('signup-address')?.value.trim() || '',
        tier: "VIP Private Atelier Client",
        avatar: initials || 'VIP'
      };
      pendingVerificationCode = String(Math.floor(100000 + Math.random() * 900000));
      signupForm.style.display = 'none';
      if (verificationForm) verificationForm.style.display = 'flex';
      if (authModalTitle) authModalTitle.textContent = 'Verify Your Private Email';
      if (verificationNote) verificationNote.textContent = `A verification code was sent to ${email}. Demo code: ${pendingVerificationCode}`;
      showLuxuryToast('Verification Email Sent', `Check ${email} for your six-digit Atelier verification code.`, 'fa-solid fa-envelope');
    });
  }

  if (verificationForm) {
    verificationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const code = document.getElementById('verification-code').value.trim();
      if (code !== pendingVerificationCode || !pendingSignup) {
        showLuxuryToast('Code Not Recognized', 'Enter the six-digit code sent to your inbox.', 'fa-solid fa-circle-exclamation');
        return;
      }
      currentUser = pendingSignup;
      currentUser.emailVerified = true;
      localStorage.setItem('luxe_user', JSON.stringify(currentUser));
      pendingSignup = null;
      pendingVerificationCode = '';
      renderUserAuthState();
      closeAuthModal();
      showLuxuryToast('Account Verified', `Welcome to LUXE. Atelier, ${currentUser.name}.`, 'fa-solid fa-gem');
    });
  }

  if (verificationResendBtn) {
    verificationResendBtn.addEventListener('click', () => {
      if (!pendingSignup) return;
      pendingVerificationCode = String(Math.floor(100000 + Math.random() * 900000));
      if (verificationNote) verificationNote.textContent = `A new verification code was sent to ${pendingSignup.email}. Demo code: ${pendingVerificationCode}`;
      showLuxuryToast('New Code Sent', `A fresh verification code is ready for ${pendingSignup.email}.`, 'fa-solid fa-rotate');
    });
  }

  // Sign Out Action
  if (userSignoutBtn) {
    userSignoutBtn.addEventListener('click', () => {
      currentUser = null;
      localStorage.removeItem('luxe_user');
      renderUserAuthState();
      showLuxuryToast('Signed Out', 'You have disconnected from your private atelier session.', 'fa-solid fa-door-open');
    });
  }

  renderUserAuthState();

  // Scroll Behavior for Navbar
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }

    const scrollPos = window.scrollY + 160;
    const sections = ['hero', 'categories', 'products', 'catalog', 'showcase-3d', 'new-arrivals', 'about'];

    sections.forEach(secId => {
      const el = document.getElementById(secId);
      if (el) {
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          desktopNavLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${secId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      }
    });
  }, { passive: true });

  // Mobile drawer toggle
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileNavDrawer = document.getElementById('mobile-nav-drawer');
  const mobileCloseBtn = document.getElementById('mobile-close-btn');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  function openMobileNav() {
    mobileNavDrawer.classList.add('open');
    hamburgerBtn.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    mobileNavDrawer.classList.remove('open');
    hamburgerBtn.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', () => {
      if (mobileNavDrawer.classList.contains('open')) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });
  }

  if (mobileCloseBtn) mobileCloseBtn.addEventListener('click', closeMobileNav);
  mobileLinks.forEach(link => link.addEventListener('click', closeMobileNav));

  /* ==========================================================================
     6. CART DRAWER & PAYMENT PLAN ENGINE
     ========================================================================== */
  const cartDrawer = document.getElementById('cart-drawer');
  const cartOverlay = document.getElementById('cart-drawer-overlay');
  const cartOpenBtn = document.getElementById('cart-open-btn');
  const cartCloseBtn = document.getElementById('cart-close-btn');
  const cartBadge = document.getElementById('cart-badge');
  const cartItemsCount = document.getElementById('cart-items-count');
  const cartItemsContainer = document.getElementById('cart-items-container');
  const cartSubtotalPrice = document.getElementById('cart-subtotal-price');
  const cartShippingBar = document.getElementById('cart-shipping-bar');
  const shippingProgressText = document.getElementById('shipping-progress-text');
  const cartPaymentPlansList = document.getElementById('cart-payment-plans-list');
  const checkoutOpenModalBtn = document.getElementById('checkout-open-modal-btn');

  // Checkout Modal
  const checkoutModalOverlay = document.getElementById('checkout-modal-overlay');
  const checkoutCloseBtn = document.getElementById('checkout-close-btn');
  const checkoutPlanLabel = document.getElementById('checkout-plan-label');
  const checkoutInstallmentsText = document.getElementById('checkout-installments-text');
  const checkoutTotalPrice = document.getElementById('checkout-total-price');
  const confirmOrderActionBtn = document.getElementById('confirm-order-action-btn');
  const checkoutAddress = document.getElementById('checkout-address');
  const checkoutPhone = document.getElementById('checkout-phone');
  const checkoutEmail = document.getElementById('checkout-email');
  const cardPaymentFields = document.getElementById('card-payment-fields');

  function openCartDrawer() {
    cartDrawer.classList.add('open');
    cartOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeCartDrawer() {
    cartDrawer.classList.remove('open');
    cartOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (cartOpenBtn) cartOpenBtn.addEventListener('click', openCartDrawer);
  if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCartDrawer);
  if (cartOverlay) cartOverlay.addEventListener('click', closeCartDrawer);

  function renderCart() {
    updateCartButtons();
    if (!cartItemsContainer) return;

    const totalCount = cartState.reduce((sum, item) => sum + item.quantity, 0);
    let subtotal = 0;

    if (cartBadge) {
      cartBadge.textContent = totalCount;
      cartBadge.classList.add('pop');
      setTimeout(() => cartBadge.classList.remove('pop'), 300);
    }
    if (cartItemsCount) {
      cartItemsCount.textContent = totalCount;
    }

    if (cartState.length === 0) {
      cartItemsContainer.innerHTML = `
        <div class="cart-empty-state">
          <i class="fa-solid fa-bag-shopping cart-empty-icon"></i>
          <p class="cart-empty-text">Your bespoke shopping cart is currently empty.</p>
          <a href="#catalog" class="btn btn-outline" style="margin-top: 1rem;" onclick="document.getElementById('cart-close-btn').click();">
            Explore Collection
          </a>
        </div>
      `;
      if (cartSubtotalPrice) cartSubtotalPrice.textContent = formatNaira(0);
      if (cartShippingBar) cartShippingBar.style.width = '0%';
      if (shippingProgressText) shippingProgressText.textContent = 'Add items for White-Glove delivery';
      if (cartPaymentPlansList) cartPaymentPlansList.innerHTML = '';
      return;
    }

    cartItemsContainer.innerHTML = '';

    cartState.forEach(cartItem => {
      const product = productsDB.find(p => p.id === cartItem.id);
      if (!product) return;

      const itemTotal = product.price * cartItem.quantity;
      subtotal += itemTotal;

      const itemEl = document.createElement('div');
      itemEl.className = 'cart-item';
      itemEl.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="cart-item-img">
        <div class="cart-item-details">
          <h4 class="cart-item-name">${product.name}</h4>
          <div class="cart-item-meta">
            <div class="cart-item-price">${formatNaira(product.price)}</div>
            <button class="cart-view-details" data-id="${product.id}" type="button">View Piece Details <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
          </div>
          <div class="cart-item-actions">
            <div class="qty-controls">
              <button class="qty-btn dec-qty" data-id="${product.id}" aria-label="Decrease quantity">
                <i class="fa-solid fa-minus"></i>
              </button>
              <span class="qty-val">${cartItem.quantity}</span>
              <button class="qty-btn inc-qty" data-id="${product.id}" aria-label="Increase quantity">
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
            <button class="remove-item-btn" data-id="${product.id}">
              <i class="fa-regular fa-trash-can"></i> Remove
            </button>
          </div>
        </div>
      `;
      cartItemsContainer.appendChild(itemEl);
    });

    cartItemsContainer.querySelectorAll('.cart-view-details').forEach(button => {
      button.addEventListener('click', () => {
        closeCartDrawer();
        openProductDossier(parseInt(button.dataset.id, 10));
      });
    });

    if (cartSubtotalPrice) {
      cartSubtotalPrice.textContent = formatNaira(subtotal);
    }

    // White-Glove shipping threshold
    const threshold = 3000;
    if (cartShippingBar && shippingProgressText) {
      if (subtotal >= threshold) {
        cartShippingBar.style.width = '100%';
        shippingProgressText.innerHTML = 'Complimentary <span class="text-gold">White-Glove Delivery</span> Unlocked!';
      } else {
        const remaining = threshold - subtotal;
        const pct = Math.min((subtotal / threshold) * 100, 100);
        cartShippingBar.style.width = `${pct}%`;
        shippingProgressText.innerHTML = `Add <span class="text-gold">${formatNaira(remaining)}</span> more for White-Glove Delivery`;
      }
    }

    // Render 3 Flexible Luxury Payment Plans
    renderPaymentPlans(subtotal);

    attachCartItemEvents();
  }

  function renderPaymentPlans(subtotal) {
    if (!cartPaymentPlansList) return;

    const installment4 = Math.round(subtotal / 4).toLocaleString();
    const installment12 = Math.round(subtotal / 12).toLocaleString();

    cartPaymentPlansList.innerHTML = `
      <div class="plan-card ${selectedPaymentPlan === 'pay-full' ? 'selected' : ''}" data-plan="pay-full">
        <div class="plan-info">
          <span class="plan-name">Pay in Full</span>
          <span class="plan-calc">${formatNaira(subtotal)} — Single settlement with 2% VIP savings</span>
        </div>
        <span class="plan-badge-apr">VIP PERK</span>
      </div>

      <div class="plan-card ${selectedPaymentPlan === 'split-4' ? 'selected' : ''}" data-plan="split-4">
        <div class="plan-info">
          <span class="plan-name">4 Split Installments</span>
          <span class="plan-calc">4 bi-weekly payments of <strong>${formatNaira(Math.round(subtotal / 4))}</strong></span>
        </div>
        <span class="plan-badge-apr">0% APR</span>
      </div>

      <div class="plan-card ${selectedPaymentPlan === 'finance-12' ? 'selected' : ''}" data-plan="finance-12">
        <div class="plan-info">
          <span class="plan-name">12-Month Atelier Credit</span>
          <span class="plan-calc">12 monthly payments of <strong>${formatNaira(Math.round(subtotal / 12))}</strong>/mo</span>
        </div>
        <span class="plan-badge-apr">0% APR</span>
      </div>
    `;

    cartPaymentPlansList.querySelectorAll('.plan-card').forEach(card => {
      card.addEventListener('click', () => {
        cartPaymentPlansList.querySelectorAll('.plan-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        selectedPaymentPlan = card.getAttribute('data-plan');
        showLuxuryToast('Payment Structure Updated', `Selected: ${card.querySelector('.plan-name').textContent}`, 'fa-solid fa-credit-card');
      });
    });
  }

  function attachCartItemEvents() {
    document.querySelectorAll('.inc-qty').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = parseInt(btn.getAttribute('data-id'), 10);
        const item = cartState.find(it => it.id === id);
        if (item) {
          item.quantity += 1;
          renderCart();
        }
      });
    });

    document.querySelectorAll('.dec-qty').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = parseInt(btn.getAttribute('data-id'), 10);
        const item = cartState.find(it => it.id === id);
        if (item) {
          if (item.quantity > 1) {
            item.quantity -= 1;
          } else {
            cartState = cartState.filter(it => it.id !== id);
          }
          renderCart();
        }
      });
    });

    document.querySelectorAll('.remove-item-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = parseInt(btn.getAttribute('data-id'), 10);
        const prod = productsDB.find(p => p.id === id);
        cartState = cartState.filter(it => it.id !== id);
        renderCart();
        if (prod) {
          showLuxuryToast('Item Removed', `${prod.name} removed from your cart.`, 'fa-solid fa-trash');
        }
      });
    });
  }

  function addToCart(productId, quantity = 1) {
    const product = productsDB.find(p => p.id === productId);
    if (!product) return;

    const existing = cartState.find(it => it.id === productId);
    if (existing) {
      cartState = cartState.filter(it => it.id !== productId);
      renderCart();
      showLuxuryToast('Removed From Cart', `${product.name} removed from your shopping cart.`, 'fa-solid fa-trash');
      return;
    } else {
      cartState.push({ id: productId, quantity: quantity });
    }

    renderCart();
    updateDossierCartButton();
    showLuxuryToast('Added To Cart', `${product.name} (${quantity}) added to your shopping cart.`);
  }

  function updateDossierCartButton() {
    if (!dossierAddBtn || !activeDossierProduct) return;

    const isInCart = cartState.some(item => item.id === activeDossierProduct.id);
    dossierAddBtn.classList.toggle('remove-from-cart', isInCart);
    dossierAddBtn.innerHTML = `<i class="fa-solid ${isInCart ? 'fa-trash-can' : 'fa-bag-shopping'}"></i> ${isInCart ? 'Remove From Cart' : 'Add To Cart'}`;
  }

  function updateCartButtons() {
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
      const productId = parseInt(btn.getAttribute('data-id'), 10);
      const isInCart = cartState.some(item => item.id === productId);

      btn.classList.toggle('remove-from-cart', isInCart);
      btn.innerHTML = `<i class="fa-solid ${isInCart ? 'fa-trash-can' : 'fa-bag-shopping'}"></i> ${isInCart ? 'Remove From Cart' : 'Add To Cart'}`;
    });
  }

  // Open Checkout Confirmation Modal
  if (checkoutOpenModalBtn) {
    checkoutOpenModalBtn.addEventListener('click', () => {
      if (cartState.length === 0) {
        showLuxuryToast('Cart is Empty', 'Please select a furniture piece before proceeding.', 'fa-solid fa-circle-exclamation');
        return;
      }
      closeCartDrawer();

      const subtotal = cartState.reduce((sum, item) => {
        const p = productsDB.find(prod => prod.id === item.id);
        return sum + (p ? p.price * item.quantity : 0);
      }, 0);

      if (currentUser) {
        if (checkoutAddress && currentUser.address) checkoutAddress.value = currentUser.address;
        if (checkoutEmail && currentUser.email) checkoutEmail.value = currentUser.email;
      }

      if (checkoutTotalPrice) checkoutTotalPrice.textContent = formatNaira(subtotal);

      if (selectedPaymentPlan === 'pay-full') {
        if (checkoutPlanLabel) checkoutPlanLabel.textContent = 'Pay in Full (Single VIP Settlement)';
        if (checkoutInstallmentsText) checkoutInstallmentsText.textContent = `1 payment of ${formatNaira(subtotal)} upon dispatch`;
      } else if (selectedPaymentPlan === 'split-4') {
        const inst = Math.round(subtotal / 4).toLocaleString();
        if (checkoutPlanLabel) checkoutPlanLabel.textContent = '4 Split Installments (0% APR)';
        if (checkoutInstallmentsText) checkoutInstallmentsText.textContent = `4 payments of ${formatNaira(Math.round(subtotal / 4))} every 2 weeks via LUXE Vault`;
      } else {
        const inst = Math.round(subtotal / 12).toLocaleString();
        if (checkoutPlanLabel) checkoutPlanLabel.textContent = '12-Month Atelier Financing (0% APR)';
        if (checkoutInstallmentsText) checkoutInstallmentsText.textContent = `12 monthly payments of ${formatNaira(Math.round(subtotal / 12))}/month via Atelier Credit`;
      }

      if (checkoutModalOverlay) {
        checkoutModalOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    });
  }

  if (checkoutCloseBtn) {
    checkoutCloseBtn.addEventListener('click', () => {
      if (checkoutModalOverlay) {
        checkoutModalOverlay.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  if (confirmOrderActionBtn) {
    confirmOrderActionBtn.addEventListener('click', () => {
      const addressVal = checkoutAddress ? checkoutAddress.value.trim() : '';
      const phoneVal = checkoutPhone ? checkoutPhone.value.trim() : '';
      const emailVal = checkoutEmail ? checkoutEmail.value.trim() : '';
      const stateVal = document.getElementById('checkout-state')?.value || 'Lagos';

      if (!addressVal || !phoneVal || phoneVal.length < 10) {
        showLuxuryToast('Delivery Details Required', 'Add a Nigerian delivery address and valid phone number before paying.', 'fa-solid fa-location-dot');
        return;
      }

      // Email validation for Paystack receipt
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailVal || !emailRegex.test(emailVal)) {
        showLuxuryToast('Valid Email Required', 'Please provide a valid VIP client email for your Paystack receipt.', 'fa-solid fa-envelope');
        if (checkoutEmail) checkoutEmail.focus();
        return;
      }

      // Calculate total payable amount in NGN and Kobo
      const subtotal = cartState.reduce((sum, item) => {
        const p = productsDB.find(prod => prod.id === item.id);
        return sum + (p ? p.price * item.quantity : 0);
      }, 0);

      if (subtotal <= 0) {
        showLuxuryToast('Cart is Empty', 'Please select a furniture piece before proceeding.', 'fa-solid fa-circle-exclamation');
        return;
      }

      let payableAmount = subtotal;
      let planDescription = 'Pay in Full (Single VIP Settlement)';
      if (selectedPaymentPlan === 'split-4') {
        payableAmount = Math.round(subtotal / 4);
        planDescription = '4 Split Installments (First 25% Deposit)';
      } else if (selectedPaymentPlan === 'finance-12') {
        payableAmount = Math.round(subtotal / 12);
        planDescription = '12-Month Atelier Financing (First Month)';
      }

      const amountInKobo = Math.round(payableAmount * 100);
      const paymentMethod = document.querySelector('input[name="payment-method"]:checked')?.value || 'paystack';
      const orderReference = `LUXE-NG-${new Date().getFullYear()}-${String(Date.now()).slice(-6)}`;

      if (paymentMethod === 'concierge') {
        // Direct Atelier Wire / Private Banking Concierge
        const order = {
          reference: orderReference,
          status: 'Pending Atelier Wire Settlement',
          address: addressVal,
          state: stateVal,
          phone: phoneVal,
          email: emailVal,
          amount: payableAmount,
          currency: 'NGN',
          plan: planDescription,
          items: getOrderLineItems(),
          placedAt: new Date().toISOString(),
          date: new Date().toISOString()
        };
        localStorage.setItem('luxe_last_order', JSON.stringify(order));
        updateClientProfile({ address: addressVal, state: stateVal, phone: phoneVal, email: emailVal });
        if (checkoutModalOverlay) {
          checkoutModalOverlay.classList.remove('open');
          document.body.style.overflow = '';
        }
        cartState = [];
        renderCart();
        showLuxuryToast(
          'Atelier Commission Reserved',
          `Order ${orderReference} is on private reserve. A concierge will reach out on ${phoneVal}.`,
          'fa-solid fa-building-columns'
        );
        setTimeout(() => {
          if (typeof openTrackingModal === 'function') openTrackingModal();
        }, 250);
        return;
      }

      // Paystack Inline works with a public test key only. Never mark an order paid locally.
      const paystackKey = window.LUXE_PAYSTACK_KEY || '';

      if (!paystackKey || !paystackKey.startsWith('pk_test_')) {
        showLuxuryToast(
          'Paystack Test Key Required',
          'Add your Paystack public test key to the page configuration before starting demo checkout.',
          'fa-solid fa-key'
        );
        return;
      }

      if (typeof PaystackPop !== 'undefined') {
        const handler = PaystackPop.setup({
          key: paystackKey,
          email: emailVal,
          amount: amountInKobo,
          currency: 'NGN',
          ref: orderReference,
          metadata: {
            custom_fields: [
              { display_name: 'Client Address', variable_name: 'client_address', value: addressVal },
              { display_name: 'Nigerian State', variable_name: 'nigerian_state', value: stateVal },
              { display_name: 'Phone Number', variable_name: 'phone_number', value: phoneVal },
              { display_name: 'Payment Plan', variable_name: 'payment_plan', value: planDescription },
              { display_name: 'Total Order Value', variable_name: 'total_order_value', value: formatNaira(subtotal) }
            ]
          },
          callback: function(response) {
            const verifiedRef = response.reference || orderReference;
            const order = {
              reference: verifiedRef,
              paystack_tx_ref: response.trans || response.trxref || verifiedRef,
              status: 'Atelier Confirmed (Paid via Paystack Gateway)',
              address: addressVal,
              state: stateVal,
              phone: phoneVal,
              email: emailVal,
              amount: payableAmount,
              currency: 'NGN',
              plan: planDescription,
              items: getOrderLineItems(),
              placedAt: new Date().toISOString(),
              paidAt: new Date().toISOString()
            };
            localStorage.setItem('luxe_last_order', JSON.stringify(order));
            updateClientProfile({ address: addressVal, state: stateVal, phone: phoneVal, email: emailVal });

            if (checkoutModalOverlay) {
              checkoutModalOverlay.classList.remove('open');
              document.body.style.overflow = '';
            }
            cartState = [];
            renderCart();
            showLuxuryToast(
              'Payment Verified via Paystack',
              `Commission ${verifiedRef} is active! White-glove logistics initiated.`,
              'fa-solid fa-circle-check'
            );
            setTimeout(() => {
              if (typeof openTrackingModal === 'function') openTrackingModal();
            }, 250);
          },
          onClose: function() {
            showLuxuryToast(
              'Checkout Paused',
              'Your bespoke curation remains preserved in your private bag.',
              'fa-solid fa-bag-shopping'
            );
          }
        });
        handler.openIframe();
      } else {
        showLuxuryToast(
          'Paystack Unavailable',
          'The Paystack test checkout could not load. Your cart is still preserved.',
          'fa-solid fa-wifi'
        );
      }
    });
  }

  document.querySelectorAll('input[name="payment-method"]').forEach(method => {
    method.addEventListener('change', () => {
      if (confirmOrderActionBtn) {
        if (method.value === 'paystack') {
          confirmOrderActionBtn.innerHTML = '<i class="fa-solid fa-lock" style="margin-right: 0.5rem;"></i> Pay with Paystack Gateway';
        } else {
          confirmOrderActionBtn.innerHTML = '<i class="fa-solid fa-building-columns" style="margin-right: 0.5rem;"></i> Reserve via Atelier Private Wire';
        }
      }
      if (cardPaymentFields) cardPaymentFields.style.display = method.value === 'card' && method.checked ? 'grid' : 'none';
    });
  });

  const trackingModalOverlay = document.getElementById('tracking-modal-overlay');
  const trackingOpenBtn = document.getElementById('tracking-open-btn');
  const trackingCloseBtn = document.getElementById('tracking-close-btn');
  const trackingForm = document.getElementById('tracking-form');
  const trackingReference = document.getElementById('tracking-reference');
  const trackingResult = document.getElementById('tracking-result');

  function getOrderLineItems() {
    return cartState.map(item => {
      const product = productsDB.find(productItem => productItem.id === item.id);
      return product ? {
        id: product.id,
        name: product.name,
        image: product.image,
        quantity: item.quantity,
        priceFormatted: formatNaira(product.price)
      } : null;
    }).filter(Boolean);
  }

  function renderTrackingResult(order) {
    if (!trackingResult) return;
    const stages = [
      { icon: 'fa-receipt', title: 'Order placed', text: 'Your order has been received by the LUXE. atelier.' },
      { icon: 'fa-credit-card', title: 'Payment confirmed', text: order.status.includes('Pending') ? 'Awaiting private wire settlement.' : 'Payment has been confirmed securely.' },
      { icon: 'fa-box-open', title: 'Preparing your pieces', text: 'Your collection is being inspected and wrapped for delivery.' },
      { icon: 'fa-truck-fast', title: 'White-glove delivery', text: 'Your delivery team will contact you before arrival.' }
    ];
    const activeStage = order.status.includes('Pending') ? 1 : 2;
    const items = order.items || [];
    const placedDate = new Date(order.placedAt || order.paidAt || order.date || Date.now());
    trackingResult.innerHTML = `
      <div class="tracking-status">
        <div class="tracking-status-header">
          <div><span class="tracking-eyebrow">ORDER TRACKER</span><strong>${order.reference}</strong></div>
          <span class="tracking-live-badge"><span></span>${order.status.includes('Pending') ? 'Payment pending' : 'In progress'}</span>
        </div>
        <div class="tracking-placed-banner">
          <i class="fa-solid fa-circle-check"></i>
          <div><strong>Order placed</strong><span>Received by the LUXE. atelier on ${placedDate.toLocaleDateString('en-NG', { day: 'numeric', month: 'short', year: 'numeric' })}.</span></div>
        </div>
        <div class="tracking-summary-grid">
          <div><span>Destination</span><b>${order.address || 'Saved delivery address'}, ${order.state || 'Nigeria'}</b></div>
          <div><span>Payment</span><b>${order.plan || 'Paystack checkout'}</b></div>
          <div><span>Order total</span><b>${formatNaira(order.amount || 0)}</b></div>
          <div><span>Placed</span><b>${placedDate.toLocaleDateString('en-NG', { day: 'numeric', month: 'short', year: 'numeric' })}</b></div>
        </div>
        <div class="tracking-timeline">
          ${stages.map((stage, index) => `
            <div class="tracking-step ${index <= activeStage ? 'complete' : ''} ${index === activeStage ? 'current' : ''}">
              <div class="tracking-step-marker"><i class="fa-solid ${index < activeStage ? 'fa-check' : stage.icon}"></i></div>
              <div class="tracking-step-copy"><b>${stage.title}</b><span>${stage.text}</span></div>
            </div>
          `).join('')}
        </div>
        ${items.length ? `<div class="tracking-items"><h4>Items in this order</h4>${items.map(item => `<div class="tracking-item"><img src="${item.image}" alt="${item.name}"><span>${item.name}<small>Quantity ${item.quantity}</small></span><b>${item.priceFormatted}</b></div>`).join('')}</div>` : '<p class="tracking-legacy-note">Item-level details were not saved for this older order, but its delivery reference remains active.</p>'}
        <p class="tracking-support-note"><i class="fa-solid fa-headset"></i> Need help? Your private concierge will contact you at ${order.phone || 'your saved phone number'}.</p>
      </div>
    `;
  }

  function openTrackingModal() {
    trackingModalOverlay?.classList.add('open');
    document.body.style.overflow = 'hidden';
    const lastOrder = JSON.parse(localStorage.getItem('luxe_last_order') || 'null');
    if (lastOrder && trackingReference) trackingReference.value = lastOrder.reference;
    if (lastOrder) renderTrackingResult(lastOrder);
  }

  function closeTrackingModal() {
    trackingModalOverlay?.classList.remove('open');
    document.body.style.overflow = '';
  }

  trackingOpenBtn?.addEventListener('click', openTrackingModal);
  trackingCloseBtn?.addEventListener('click', closeTrackingModal);
  trackingModalOverlay?.addEventListener('click', event => {
    if (event.target === trackingModalOverlay) closeTrackingModal();
  });
  trackingForm?.addEventListener('submit', event => {
    event.preventDefault();
    const lastOrder = JSON.parse(localStorage.getItem('luxe_last_order') || 'null');
    const reference = trackingReference.value.trim().toUpperCase();
    if (!lastOrder || reference !== lastOrder.reference) {
      trackingResult.innerHTML = '<p class="tracking-error">No local order found for that reference. Check the reference in your confirmation message.</p>';
      return;
    }
    renderTrackingResult(lastOrder);
  });

  renderCart();

  /* ==========================================================================
     7. WISHLIST TOGGLE ENGINE
     ========================================================================== */
  const wishlistBadge = document.getElementById('wishlist-badge');

  function updateWishlistBadge() {
    if (!wishlistBadge) return;
    wishlistBadge.textContent = wishlistState.size;
    wishlistBadge.classList.add('pop');
    setTimeout(() => wishlistBadge.classList.remove('pop'), 300);
  }

  function toggleWishlist(id, wishBtn) {
    const product = productsDB.find(p => p.id === id);
    const icon = wishBtn.querySelector('i');

    if (wishlistState.has(id)) {
      wishlistState.delete(id);
      wishBtn.classList.remove('active-wishlist');
      if (icon) icon.className = 'fa-regular fa-heart';
      if (product) {
        showLuxuryToast('Removed from Wishlist', `${product.name} removed from saved pieces.`, 'fa-regular fa-heart');
      }
    } else {
      wishlistState.add(id);
      wishBtn.classList.add('active-wishlist');
      if (icon) icon.className = 'fa-solid fa-heart';
      if (product) {
        showLuxuryToast('Added to Wishlist', `${product.name} saved to your private curation.`, 'fa-solid fa-heart');
      }
    }
    localStorage.setItem('luxe_wishlist', JSON.stringify([...wishlistState]));
    updateWishlistBadge();
  }

  updateWishlistBadge();

  const wishlistBtn = document.getElementById('wishlist-btn');
  const wishlistModalOverlay = document.getElementById('wishlist-modal-overlay');
  const wishlistCloseBtn = document.getElementById('wishlist-close-btn');
  const wishlistItems = document.getElementById('wishlist-items');

  function renderWishlist() {
    if (!wishlistItems) return;
    const products = [...wishlistState].map(id => productsDB.find(product => product.id === id)).filter(Boolean);
    wishlistItems.innerHTML = products.length ? products.map(product => `
      <article class="wishlist-item" data-id="${product.id}" tabindex="0">
        <img src="${product.image}" alt="${product.name}">
        <div class="wishlist-item-copy"><span>${product.categoryLabel}</span><h4>${product.name}</h4><b>${product.priceFormatted}</b></div>
        <button class="wishlist-remove-btn" data-id="${product.id}" aria-label="Remove ${product.name} from wishlist"><i class="fa-solid fa-xmark"></i></button>
      </article>
    `).join('') : '<div class="wishlist-empty"><i class="fa-regular fa-heart"></i><p>Your saved pieces will appear here.</p><button class="btn btn-outline" id="wishlist-explore-btn">Explore the catalog</button></div>';
  }

  function openWishlist() {
    renderWishlist();
    wishlistModalOverlay?.classList.add('open');
    wishlistBtn?.classList.add('active');
    wishlistBtn?.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeWishlist() {
    wishlistModalOverlay?.classList.remove('open');
    wishlistBtn?.classList.remove('active');
    wishlistBtn?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  wishlistBtn?.addEventListener('click', openWishlist);
  wishlistCloseBtn?.addEventListener('click', closeWishlist);
  wishlistModalOverlay?.addEventListener('click', event => {
    if (event.target === wishlistModalOverlay) closeWishlist();
  });
  wishlistItems?.addEventListener('click', event => {
    const removeButton = event.target.closest('.wishlist-remove-btn');
    const exploreButton = event.target.closest('#wishlist-explore-btn');
    const item = event.target.closest('.wishlist-item');
    if (removeButton) {
      const id = parseInt(removeButton.dataset.id, 10);
      wishlistState.delete(id);
      localStorage.setItem('luxe_wishlist', JSON.stringify([...wishlistState]));
      updateWishlistBadge();
      renderWishlist();
    } else if (exploreButton) {
      closeWishlist();
      document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
    } else if (item) {
      closeWishlist();
      openProductDossier(parseInt(item.dataset.id, 10));
    }
  });

  /* ==========================================================================
     8. COMPREHENSIVE PRODUCT DOSSIER (4-WAY ANGLES & COLOR SUGGESTIONS)
     ========================================================================== */
  const productModalOverlay = document.getElementById('product-modal-overlay');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  // Curated Photography Gallery
  const dossierMainImg = document.getElementById('dossier-main-img');
  const dossierGalleryBadge = document.getElementById('dossier-gallery-badge');
  const dossierThumbnailsReel = document.getElementById('dossier-thumbnails-reel');

  // Color Swatches & Suggestions
  const dossierActiveColorName = document.getElementById('dossier-active-color-name');
  const dossierSwatchesList = document.getElementById('dossier-swatches-list');
  const harmonyDescriptionText = document.getElementById('harmony-description-text');
  const harmonyChipsList = document.getElementById('harmony-chips-list');

  // Details & Tabs
  const dossierCategory = document.getElementById('dossier-category');
  const dossierLeadBadge = document.getElementById('dossier-lead-badge');
  const dossierTitle = document.getElementById('dossier-title');
  const dossierStars = document.getElementById('dossier-stars');
  const dossierReviewLink = document.getElementById('dossier-review-link');
  const dossierPrice = document.getElementById('dossier-price');
  const dossierDesc = document.getElementById('dossier-desc');
  const dossierSpecsTable = document.getElementById('dossier-specs-table');
  const dossierMaterialsText = document.getElementById('dossier-materials-text');
  const dossierReviewsList = document.getElementById('dossier-reviews-list');
  const dossierScoreBig = document.getElementById('dossier-score-big');
  const dossierReviewCountLabel = document.getElementById('dossier-review-count-label');

  // Actions
  const dossierQtyVal = document.getElementById('dossier-qty-val');
  const dossierQtyDec = document.getElementById('dossier-qty-dec');
  const dossierQtyInc = document.getElementById('dossier-qty-inc');
  const dossierAddBtn = document.getElementById('dossier-add-btn');
  const dossierWishlistBtn = document.getElementById('dossier-wishlist-btn');

  let activeDossierProduct = null;
  let activeDossierQty = 1;
  let activeDossierPhotoIndex = 0; // 'middle', 'left', 'right', 'top'
  let activeDossierColorKey = 'cognac';

  function openProductDossier(productId) {
    const product = productsDB.find(p => p.id === productId);
    if (!product) return;

    activeDossierProduct = product;
    activeDossierQty = 1;
    activeDossierAngle = 'middle';
    activeDossierColorKey = 'cognac';
    updateDossierCartButton();

    if (dossierQtyVal) dossierQtyVal.textContent = '1';

    // Set Text Details
    if (dossierCategory) dossierCategory.textContent = product.categoryLabel;
    if (dossierTitle) dossierTitle.textContent = product.name;
    if (dossierPrice) dossierPrice.textContent = product.priceFormatted;
    if (dossierDesc) dossierDesc.textContent = product.description;

    if (dossierLeadBadge) {
      dossierLeadBadge.innerHTML = `<i class="fa-solid fa-circle"></i> ${product.specs ? product.specs.leadTime.split('—')[0] : 'In Stock'}`;
    }

    if (dossierStars) {
      dossierStars.innerHTML = `<i class="fa-solid fa-star"></i>`.repeat(5);
    }

    if (dossierReviewLink) {
      dossierReviewLink.textContent = `(${product.reviewsCount || 28} Verified Reviews)`;
    }

    // Setup Curated Photography Gallery
    updateGalleryPhoto(0);

    // Setup Color Swatches & Architectural Palette Suggestions
    renderColorSuggestions();

    // Populate Specs Table ("side and ma")
    if (dossierSpecsTable && product.specs) {
      dossierSpecsTable.innerHTML = `
        <tr><td>Dimensions (W×D×H)</td><td>${product.specs.dimensions}</td></tr>
        <tr><td>Seat Height</td><td>${product.specs.seatHeight}</td></tr>
        <tr><td>Armrest Clearance</td><td>${product.specs.armrestHeight}</td></tr>
        <tr><td>Net Weight</td><td>${product.specs.netWeight}</td></tr>
        <tr><td>Artisanal Origin</td><td>${product.specs.origin}</td></tr>
        <tr><td>Care Instructions</td><td>${product.specs.care}</td></tr>
      `;
    }

    if (dossierMaterialsText && product.specs) {
      dossierMaterialsText.textContent = product.specs.materials;
    }

    // Populate Customer Reviews
    const reviews = product.reviews || [
      { author: "Elena Rostova", location: "Zurich", rating: 5, date: "August 2026", text: "Exceptional craftsmanship. A sublime balance of comfort and timeless elegance." }
    ];

    if (dossierScoreBig) dossierScoreBig.textContent = product.rating.toFixed(1);
    if (dossierReviewCountLabel) dossierReviewCountLabel.textContent = `Based on ${product.reviewsCount} verified purchases`;

    if (dossierReviewsList) {
      dossierReviewsList.innerHTML = reviews.map(rev => `
        <div class="review-item">
          <div class="review-item-header">
            <div>
              <span class="review-author">${rev.author}</span>
              <span class="verified-badge"><i class="fa-solid fa-check"></i> Verified Client</span>
              <div style="font-size: 0.75rem; color: var(--color-gold);">${rev.location}</div>
            </div>
            <span class="review-date">${rev.date}</span>
          </div>
          <div style="color: #e5b95a; font-size: 0.75rem; margin-bottom: 0.3rem;">
            ${'<i class="fa-solid fa-star"></i>'.repeat(rev.rating)}
          </div>
          <p class="review-text">${rev.text}</p>
        </div>
      `).join('');
    }

    // Wishlist state
    if (dossierWishlistBtn) {
      const isWish = wishlistState.has(product.id);
      dossierWishlistBtn.classList.toggle('active-wishlist', isWish);
      dossierWishlistBtn.innerHTML = isWish ? '<i class="fa-solid fa-heart" style="color: #c94444;"></i>' : '<i class="fa-regular fa-heart"></i>';
    }

    productModalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    switchDossierTab('overview');
  }

  function updateGalleryPhoto(index) {
    if (!activeDossierProduct) return;
    const gallery = activeDossierProduct.gallery || [
      { label: "Master Perspective", url: activeDossierProduct.image }
    ];
    activeDossierPhotoIndex = Math.max(0, Math.min(index, gallery.length - 1));
    const photo = gallery[activeDossierPhotoIndex];

    // Update Main Image with Crossfade
    if (dossierMainImg) {
      dossierMainImg.style.opacity = '0.25';
      setTimeout(() => {
        dossierMainImg.src = photo.url;
        dossierMainImg.alt = `${activeDossierProduct.name} - ${photo.label}`;
        if (dossierGalleryBadge) dossierGalleryBadge.textContent = photo.label;
        dossierMainImg.style.opacity = '1';
      }, 180);
    }

    // Update Thumbnails Reel
    if (dossierThumbnailsReel) {
      dossierThumbnailsReel.innerHTML = gallery.map((item, i) => {
        const isCurrent = i === activeDossierPhotoIndex;
        return `
          <button class="gallery-thumb-btn ${isCurrent ? 'active' : ''}" data-index="${i}" aria-label="${item.label}">
            <img src="${item.url}" alt="${item.label}">
            <span class="thumb-label">${item.label}</span>
          </button>
        `;
      }).join('');

      dossierThumbnailsReel.querySelectorAll('.gallery-thumb-btn').forEach(tb => {
        tb.addEventListener('click', () => {
          const idx = parseInt(tb.getAttribute('data-index'), 10);
          updateGalleryPhoto(idx);
        });
      });
    }
  }

  // Color Suggestions & Architectural Palette Rendering
  function renderColorSuggestions() {
    const swatches = [
      { key: 'cognac', name: 'Cognac Tuscan Leather', color: '#8B4513' },
      { key: 'emerald', name: 'Royal Forest Velvet', color: '#1B382B' },
      { key: 'ivory', name: 'Ivory Wool Bouclé', color: '#EAE6DF' },
      { key: 'obsidian', name: 'Midnight Obsidian', color: '#1C1C1C' }
    ];

    if (dossierSwatchesList) {
      dossierSwatchesList.innerHTML = swatches.map(sw => `
        <span class="color-dot ${sw.key === activeDossierColorKey ? 'active' : ''}" 
              data-key="${sw.key}" 
              data-name="${sw.name}"
              style="width: 28px; height: 28px; background-color: ${sw.color}; border: 2px solid ${sw.key === activeDossierColorKey ? 'var(--color-gold)' : 'rgba(255,255,255,0.2)'}; cursor: pointer; border-radius: 50%;" 
              title="${sw.name}"></span>
      `).join('');

      dossierSwatchesList.querySelectorAll('.color-dot').forEach(dot => {
        dot.addEventListener('click', () => {
          activeDossierColorKey = dot.getAttribute('data-key');
          const colorName = dot.getAttribute('data-name');
          if (dossierActiveColorName) dossierActiveColorName.textContent = colorName;

          renderColorSuggestions();
          showLuxuryToast('Finish Selected', `Now styling in ${colorName}. Palette harmonies updated.`, 'fa-solid fa-palette');
        });
      });
    }

    const harmony = paletteHarmonies[activeDossierColorKey] || paletteHarmonies.cognac;
    if (dossierActiveColorName) dossierActiveColorName.textContent = harmony.name;
    if (harmonyDescriptionText) harmonyDescriptionText.textContent = harmony.desc;

    if (harmonyChipsList) {
      harmonyChipsList.innerHTML = harmony.chips.map(ch => `
        <div class="harmony-chip">
          <span class="chip-circle" style="background-color: ${ch.color};"></span>
          <span>${ch.name}</span>
        </div>
      `).join('');
    }
  }

  function closeProductDossier() {
    productModalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProductDossier);
  if (productModalOverlay) {
    productModalOverlay.addEventListener('click', (e) => {
      if (e.target === productModalOverlay) closeProductDossier();
    });
  }

  // Dossier Tabs
  const dossierTabBtns = document.querySelectorAll('.dossier-tab-btn');
  const dossierTabPanels = document.querySelectorAll('.dossier-tab-panel');

  function switchDossierTab(tabId) {
    dossierTabBtns.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-tab') === tabId);
    });
    dossierTabPanels.forEach(panel => {
      panel.classList.toggle('active', panel.id === `tab-${tabId}`);
    });
  }

  dossierTabBtns.forEach(btn => {
    btn.addEventListener('click', () => switchDossierTab(btn.getAttribute('data-tab')));
  });

  if (dossierReviewLink) {
    dossierReviewLink.addEventListener('click', () => switchDossierTab('reviews'));
  }

  // Qty Controls
  if (dossierQtyInc) {
    dossierQtyInc.addEventListener('click', () => {
      activeDossierQty += 1;
      if (dossierQtyVal) dossierQtyVal.textContent = activeDossierQty;
    });
  }

  if (dossierQtyDec) {
    dossierQtyDec.addEventListener('click', () => {
      if (activeDossierQty > 1) {
        activeDossierQty -= 1;
        if (dossierQtyVal) dossierQtyVal.textContent = activeDossierQty;
      }
    });
  }

  // Dossier Add to Cart
  if (dossierAddBtn) {
    dossierAddBtn.addEventListener('click', () => {
      if (activeDossierProduct) {
        addToCart(activeDossierProduct.id, activeDossierQty);
        closeProductDossier();
      }
    });
  }

  // Dossier Wishlist Toggle
  if (dossierWishlistBtn) {
    dossierWishlistBtn.addEventListener('click', () => {
      if (activeDossierProduct) {
        toggleWishlist(activeDossierProduct.id, dossierWishlistBtn);
      }
    });
  }

  // "Write Review" button
  const writeReviewBtn = document.getElementById('write-review-btn');
  if (writeReviewBtn) {
    writeReviewBtn.addEventListener('click', () => {
      showLuxuryToast(
        'Review Submitted for Verification',
        'Thank you for your appraisal. Our Milanese verification team will review and publish your rating.',
        'fa-solid fa-pen-nib'
      );
    });
  }

  /* ==========================================================================
     9. EXPANDED ATELIER CATALOG SECTION (16 PIECES WITH LIVE SORT & FILTER)
     ========================================================================== */
  const catalogGrid = document.getElementById('catalog-grid');
  const catalogSortSelect = document.getElementById('catalog-sort-select');
  const catalogCategoryTabs = document.querySelectorAll('.catalog-filter-btn');
  const catalogResultsCount = document.getElementById('catalog-results-count');
  const catalogLoadMoreBtn = document.getElementById('catalog-load-more-btn');

  let currentCatalogCategory = 'all';
  let currentCatalogSort = 'featured';
  let catalogVisibleCount = 12;

  function renderCatalogGrid() {
    if (!catalogGrid) return;

    let filtered = productsDB.filter(p => {
      if (currentCatalogCategory === 'all') return true;
      return p.category === currentCatalogCategory;
    });

    if (currentCatalogSort === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (currentCatalogSort === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (currentCatalogSort === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    const visibleProducts = filtered.slice(0, catalogVisibleCount);

    if (catalogResultsCount) {
      catalogResultsCount.textContent = `Showing ${visibleProducts.length} of ${filtered.length} Curated Masterpieces`;
    }

    catalogGrid.innerHTML = visibleProducts.map(prod => `
      <article class="product-card" data-id="${prod.id}">
        <div class="product-img-wrap">
          <span class="product-badge">${prod.badge || 'Artisanal'}</span>
          <div class="product-actions">
            <button class="action-btn wishlist-toggle-btn ${wishlistState.has(prod.id) ? 'active-wishlist' : ''}" title="Add to Wishlist" data-id="${prod.id}">
              <i class="${wishlistState.has(prod.id) ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
            </button>
            <button class="action-btn quickview-trigger-btn" title="Inspect Details & Specs" data-id="${prod.id}">
              <i class="fa-regular fa-eye"></i>
            </button>
          </div>
          <img src="${optimizeProductImage(prod.image)}" alt="${prod.name}" class="product-img" loading="lazy" decoding="async">
          <button class="quick-add-btn add-to-cart-btn" data-id="${prod.id}">
            <i class="fa-solid fa-bag-shopping"></i> Add To Cart
          </button>
        </div>
        <div class="product-info">
          <span class="product-category">${prod.categoryLabel}</span>
          <h3 class="product-title">${prod.name}</h3>
          <div class="product-rating">
            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
            <span class="rating-count">(${prod.reviewsCount})</span>
          </div>
          <div class="product-price-row">
            <span class="product-price">${prod.priceFormatted}</span>
            <span class="btn-text" style="font-size: 0.72rem;">View Piece Details →</span>
          </div>
        </div>
      </article>
    `).join('');

    if (catalogLoadMoreBtn) {
      const hasMore = visibleProducts.length < filtered.length;
      catalogLoadMoreBtn.hidden = !hasMore;
      catalogLoadMoreBtn.innerHTML = hasMore
        ? 'Load More Pieces <i class="fa-solid fa-arrow-down"></i>'
        : 'All Pieces Displayed';
    }

    updateCartButtons();
  }

  if (catalogLoadMoreBtn) {
    catalogLoadMoreBtn.addEventListener('click', () => {
      catalogVisibleCount += 12;
      renderCatalogGrid();
    });
  }

  if (catalogSortSelect) {
    catalogSortSelect.addEventListener('change', (e) => {
      currentCatalogSort = e.target.value;
      renderCatalogGrid();
    });
  }

  function navigateToCategory(categoryKey) {
    const cleanKey = categoryKey || 'all';
    currentCatalogCategory = cleanKey;
    catalogVisibleCount = 12;

    // Update Catalog Filter Tabs UI
    if (catalogCategoryTabs) {
      catalogCategoryTabs.forEach(tab => {
        tab.classList.toggle('active', tab.getAttribute('data-filter') === cleanKey);
      });
    }

    // Re-render Catalog Grid
    renderCatalogGrid();

    // Smooth scroll to catalog section
    const catalogEl = document.getElementById('catalog');
    if (catalogEl) {
      const headerOffset = 90;
      const elementPosition = catalogEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }

    // Toast notification
    const catTitles = {
      all: "All Curated Masterpieces",
      living: "Living Room Collection",
      bedroom: "Sanctuary Bedroom Suites",
      dining: "Dining & Monoliths",
      office: "Executive Office Atelier",
      outdoor: "Outdoor Living & Terraces",
      accents: "Sculptural Accents & Lighting"
    };
    const title = catTitles[cleanKey] || "Curated Collection";
    showLuxuryToast(title, "Displaying matching architectural pieces in the catalog.", "fa-solid fa-compass-drafting");
  }

  catalogCategoryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const filter = tab.getAttribute('data-filter');
      navigateToCategory(filter);
    });
  });

  // Wire up Category Cards for instant routing
  document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const cat = card.getAttribute('data-category');
      if (cat) navigateToCategory(cat);
    });
  });

  // Wire up Hero CTA buttons for category routing
  document.querySelectorAll('.hero-nav-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const cat = btn.getAttribute('data-category');
      if (cat) {
        e.preventDefault();
        navigateToCategory(cat);
      }
    });
  });

  // Wire up Footer category links
  document.querySelectorAll('.footer-nav-cat').forEach(link => {
    link.addEventListener('click', (e) => {
      const cat = link.getAttribute('data-category');
      if (cat) {
        e.preventDefault();
        navigateToCategory(cat);
      }
    });
  });

  renderCatalogGrid();

  /* ==========================================================================
     10. UNIVERSAL PRODUCT CLICK HANDLER
     ========================================================================== */
  document.addEventListener('click', (e) => {
    const wishBtn = e.target.closest('.wishlist-toggle-btn');
    if (wishBtn) {
      e.stopPropagation();
      const id = parseInt(wishBtn.getAttribute('data-id'), 10);
      if (id) toggleWishlist(id, wishBtn);
      return;
    }

    const addBtn = e.target.closest('.add-to-cart-btn');
    if (addBtn && !addBtn.classList.contains('dossier-add-btn')) {
      e.stopPropagation();
      const id = parseInt(addBtn.getAttribute('data-id'), 10);
      if (id) addToCart(id);
      return;
    }

    const prodCard = e.target.closest('.product-card, .arrival-card, .search-result-item, .quickview-trigger-btn');
    if (prodCard) {
      const id = parseInt(prodCard.getAttribute('data-id'), 10);
      if (id) {
        if (prodCard.classList.contains('search-result-item')) closeSearchModal();
        openProductDossier(id);
      }
    }
  });

  /* ==========================================================================
     11. HOMEPAGE PRODUCT GRID FILTER TABS
     ========================================================================== */
  const filterBtns = document.querySelectorAll('#product-filter-tabs .filter-btn');
  const featuredProductCards = document.querySelectorAll('#products-grid .product-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      featuredProductCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.transition = 'all 0.4s var(--transition-smooth)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  /* ==========================================================================
     12. QUICK SEARCH OVERLAY
     ========================================================================== */
  const searchModalOverlay = document.getElementById('search-modal-overlay');
  const searchOpenBtn = document.getElementById('search-open-btn');
  const searchCloseBtn = document.getElementById('search-close-btn');
  const searchMainInput = document.getElementById('search-main-input');
  const searchResultsList = document.getElementById('search-results-list');

  function openSearchModal() {
    searchModalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      if (searchMainInput) {
        searchMainInput.value = '';
        searchMainInput.focus();
        renderSearchResults('');
      }
    }, 150);
  }

  function closeSearchModal() {
    searchModalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (searchOpenBtn) searchOpenBtn.addEventListener('click', openSearchModal);
  if (searchCloseBtn) searchCloseBtn.addEventListener('click', closeSearchModal);

  function renderSearchResults(query) {
    if (!searchResultsList) return;
    const cleanQuery = query.toLowerCase().trim();

    const filtered = productsDB.filter(p => {
      const searchableText = [
        p.name,
        p.categoryLabel,
        p.description,
        p.specs?.materials,
        p.badge
      ].filter(Boolean).join(' ').toLowerCase();
      return searchableText.includes(cleanQuery);
    });

    if (filtered.length === 0) {
      searchResultsList.innerHTML = `
        <div style="text-align: center; padding: 2rem; color: var(--text-muted);">
          No architectural pieces found matching "${query}".
        </div>
      `;
      return;
    }

    searchResultsList.innerHTML = filtered.map(item => `
      <div class="search-result-item" data-id="${item.id}">
        <img src="${item.image}" alt="${item.name}" class="search-result-thumb">
        <div style="flex-grow: 1;">
          <h4 style="font-family: var(--font-serif); font-size: 1.25rem; color: var(--color-cream); margin-bottom: 0.25rem;">
            ${item.name}
          </h4>
          <span style="font-size: 0.75rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--color-gold);">
            ${item.categoryLabel}
          </span>
        </div>
        <div style="font-weight: 600; color: var(--color-gold); font-size: 1.1rem;">
          ${item.priceFormatted}
        </div>
      </div>
    `).join('');
  }

  if (searchMainInput) {
    searchMainInput.addEventListener('input', (e) => {
      renderSearchResults(e.target.value);
    });
  }

  // Keyboard shortcut: ESC closes modals
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCartDrawer();
      closeProductDossier();
      closeSearchModal();
      closeMobileNav();
      closeAuthModal();
      if (checkoutModalOverlay) checkoutModalOverlay.classList.remove('open');
    }
  });

  /* ==========================================================================
     13. THREE.JS 3D FURNITURE SHOWCASE
     ========================================================================== */
  function initThreeJsShowcase() {
    const container = document.getElementById('threejs-canvas');
    if (!container || typeof THREE === 'undefined') return;

    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(3.2, 2.4, 4.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    let controls = null;
    if (typeof THREE.OrbitControls !== 'undefined') {
      controls = new THREE.OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.maxPolarAngle = Math.PI / 2 + 0.05;
      controls.minDistance = 2.5;
      controls.maxDistance = 7;
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.8;
      controls.enablePan = false;
    }

    const ambientLight = new THREE.AmbientLight(0xfff8ee, 0.9);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.4);
    keyLight.position.set(5, 7, 5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xc9a96e, 1.0);
    rimLight.position.set(-5, 4, -4);
    scene.add(rimLight);

    const fillLight = new THREE.DirectionalLight(0xa5c4d4, 0.4);
    fillLight.position.set(-3, 2, 4);
    scene.add(fillLight);

    const shadowGeo = new THREE.PlaneGeometry(10, 10);
    const shadowMat = new THREE.ShadowMaterial({ opacity: 0.28 });
    const floor = new THREE.Mesh(shadowGeo, shadowMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -0.9;
    floor.receiveShadow = true;
    scene.add(floor);

    const upholsteryMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x8B4513,
      roughness: 0.38,
      metalness: 0.05,
      clearcoat: 0.25,
      clearcoatRoughness: 0.2,
      reflectivity: 0.5
    });

    const brassLegsMaterial = new THREE.MeshStandardMaterial({
      color: 0xC9A96E,
      roughness: 0.28,
      metalness: 0.85
    });

    const chairGroup = new THREE.Group();
    chairGroup.position.y = -0.15;

    const seatGeo = new THREE.CylinderGeometry(1.05, 0.98, 0.32, 48);
    const seat = new THREE.Mesh(seatGeo, upholsteryMaterial);
    seat.position.y = 0;
    seat.castShadow = true;
    seat.receiveShadow = true;
    chairGroup.add(seat);

    const backrestGeo = new THREE.CylinderGeometry(
      1.12, 1.05, 1.15, 48, 1, true, -Math.PI * 0.45, Math.PI * 0.9
    );
    const backrest = new THREE.Mesh(backrestGeo, upholsteryMaterial);
    backrest.position.set(0, 0.52, -0.05);
    backrest.castShadow = true;
    backrest.receiveShadow = true;
    chairGroup.add(backrest);

    const rimTorusGeo = new THREE.TorusGeometry(1.12, 0.1, 16, 48, Math.PI * 0.9);
    const rim = new THREE.Mesh(rimTorusGeo, upholsteryMaterial);
    rim.rotation.x = Math.PI / 2;
    rim.rotation.z = Math.PI * 0.05;
    rim.position.set(0, 1.08, -0.05);
    rim.castShadow = true;
    chairGroup.add(rim);

    const pillowGeo = new THREE.SphereGeometry(0.55, 32, 16);
    pillowGeo.scale(1.2, 0.55, 0.45);
    const pillow = new THREE.Mesh(pillowGeo, upholsteryMaterial);
    pillow.position.set(0, 0.35, -0.38);
    pillow.rotation.x = 0.25;
    pillow.castShadow = true;
    chairGroup.add(pillow);

    const legPositions = [
      { x: 0.72, z: 0.72, rotX: 0.15, rotZ: -0.15 },
      { x: -0.72, z: 0.72, rotX: 0.15, rotZ: 0.15 },
      { x: 0.7, z: -0.68, rotX: -0.15, rotZ: -0.15 },
      { x: -0.7, z: -0.68, rotX: -0.15, rotZ: 0.15 }
    ];

    legPositions.forEach(pos => {
      const legGeo = new THREE.CylinderGeometry(0.038, 0.018, 0.85, 24);
      const leg = new THREE.Mesh(legGeo, brassLegsMaterial);
      leg.position.set(pos.x, -0.48, pos.z);
      leg.rotation.x = pos.rotX;
      leg.rotation.z = pos.rotZ;
      leg.castShadow = true;
      chairGroup.add(leg);
    });

    const crossGeo = new THREE.TorusGeometry(0.5, 0.035, 16, 32);
    const cross = new THREE.Mesh(crossGeo, brassLegsMaterial);
    cross.rotation.x = Math.PI / 2;
    cross.position.y = -0.18;
    cross.castShadow = true;
    chairGroup.add(cross);

    scene.add(chairGroup);

    const swatchBtns = document.querySelectorAll('.showcase-3d-section .swatch-btn');
    const selectedMaterialLabel = document.getElementById('selected-material-label');

    swatchBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        swatchBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const hexColor = parseInt(btn.getAttribute('data-color'), 16);
        const name = btn.getAttribute('data-name');

        if (selectedMaterialLabel) selectedMaterialLabel.textContent = name;

        if (typeof gsap !== 'undefined') {
          const currentRGB = upholsteryMaterial.color;
          const targetRGB = new THREE.Color(hexColor);
          gsap.to(currentRGB, {
            r: targetRGB.r,
            g: targetRGB.g,
            b: targetRGB.b,
            duration: 0.7,
            ease: "power2.out"
          });
        } else {
          upholsteryMaterial.color.setHex(hexColor);
        }

        if (name.includes('Velvet')) {
          upholsteryMaterial.roughness = 0.82;
          upholsteryMaterial.clearcoat = 0.1;
        } else if (name.includes('Bouclé')) {
          upholsteryMaterial.roughness = 0.94;
          upholsteryMaterial.clearcoat = 0.05;
        } else {
          upholsteryMaterial.roughness = 0.38;
          upholsteryMaterial.clearcoat = 0.3;
        }
      });
    });

    if (controls) {
      controls.addEventListener('start', () => {
        controls.autoRotate = false;
      });
      controls.addEventListener('end', () => {
        setTimeout(() => {
          controls.autoRotate = true;
        }, 3000);
      });
    }

    function animate() {
      requestAnimationFrame(animate);
      if (controls) controls.update();
      renderer.render(scene, camera);
    }
    animate();

    window.addEventListener('resize', () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    });
  }

  setTimeout(initThreeJsShowcase, 100);

  /* ==========================================================================
     14. SWIPER.JS CAROUSEL SETUPS
     ========================================================================== */
  function initSwiperSliders() {
    if (typeof Swiper === 'undefined') return;

    new Swiper('.arrivals-slider', {
      slidesPerView: 1.2,
      spaceBetween: 24,
      grabCursor: true,
      navigation: {
        nextEl: '.arrivals-next',
        prevEl: '.arrivals-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 2.2,
          spaceBetween: 24,
        },
        1024: {
          slidesPerView: 3.3,
          spaceBetween: 30,
        },
        1400: {
          slidesPerView: 4,
          spaceBetween: 32,
        }
      }
    });

    new Swiper('.testimonial-slider', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.testimonials-pagination',
        clickable: true,
      },
      breakpoints: {
        992: {
          slidesPerView: 2,
          spaceBetween: 36,
        }
      }
    });
  }

  initSwiperSliders();

  /* ==========================================================================
     15. NEWSLETTER FORM VALIDATION
     ========================================================================== */
  const newsletterForm = document.getElementById('newsletter-form');
  const newsletterEmail = document.getElementById('newsletter-email');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = newsletterEmail.value.trim();

      if (!email || !email.includes('@')) {
        showLuxuryToast('Invalid Email', 'Please enter a valid private email address.', 'fa-solid fa-circle-exclamation');
        return;
      }

      showLuxuryToast(
        'Invitation Confirmed',
        `A private welcome dossier has been dispatched to ${email}.`,
        'fa-solid fa-envelope-open-text'
      );
      newsletterEmail.value = '';
    });
  }

  /* ==========================================================================
     16. STATS COUNTER ON SCROLL REVEAL
     ========================================================================== */
  const statNums = document.querySelectorAll('.stat-num');
  let statsAnimated = false;

  function handleStatsCounter() {
    if (statsAnimated || statNums.length === 0) return;

    const aboutSec = document.getElementById('about');
    if (!aboutSec) return;

    const rect = aboutSec.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.75) {
      statsAnimated = true;
      statNums.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'), 10);
        const suffix = stat.textContent.replace(/[0-9]/g, '');
        let current = 0;
        const stepTime = 40;
        const totalSteps = 30;
        const increment = target / totalSteps;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            stat.textContent = target + suffix;
            clearInterval(timer);
          } else {
            stat.textContent = Math.floor(current) + suffix;
          }
        }, stepTime);
      });
    }
  }

  window.addEventListener('scroll', handleStatsCounter, { passive: true });

});
