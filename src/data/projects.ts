/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, CaseStudy, Service, Skill, Experience, Testimonial } from '../types';

export const SERVICES_DATA: Service[] = [
  {
    id: 'logo-design',
    title: 'Logo Design',
    description: 'Creating memorable, timeless emblems that define a company\'s essence in a single, high-impact mark.',
    details: ['Vector geometry optimization', 'Responsive variant sheets', 'Custom hand-lettering', 'Black & white scalability'],
    iconName: 'Compass',
    accentColor: 'purple'
  },
  {
    id: 'brand-identity',
    title: 'Brand Identity',
    description: 'Constructing complete, cohesive visual systems including typography, palette design, and guidelines.',
    details: ['Comprehensive brand books', 'Typography scale systems', 'Custom color theory guides', 'Visual style orchestration'],
    iconName: 'Award',
    accentColor: 'blue'
  },
  {
    id: 'social-media',
    title: 'Social Media Design',
    description: 'Dynamic, high-conversion visual sets for platforms like Instagram, LinkedIn, and YouTube to drive engagement.',
    details: ['Instagram grid layouts', 'High-impact carousel systems', 'LinkedIn banner branding', 'YouTube thumbnail kits'],
    iconName: 'Instagram',
    accentColor: 'pink'
  },
  {
    id: 'poster-design',
    title: 'Poster & Editorial Design',
    description: 'Large-format typographic posters and layouts that command attention in physical and digital spaces.',
    details: ['Swiss modernist typography', 'Gig & event promotion visuals', 'Creative grid systems', 'Screen-print optimization'],
    iconName: 'Layers',
    accentColor: 'purple'
  },
  {
    id: 'packaging-design',
    title: 'Packaging Design',
    description: 'Tactile and striking product box and bottle designs that tell a story directly from the shelf.',
    details: ['Dieline structural design', 'Eco-friendly material consult', 'Matte & metallic finish specs', '3D digital pre-renders'],
    iconName: 'Box',
    accentColor: 'blue'
  },
  {
    id: 'business-cards',
    title: 'Premium Stationery',
    description: 'Elite business cards and corporate paper systems using specialty textures, embossing, and foil stamps.',
    details: ['Debossing & letterpress design', 'Edge-painting coordinates', 'Heavy duplex card stock advice', 'Minimalist stationery layout'],
    iconName: 'FileText',
    accentColor: 'pink'
  },
  {
    id: 'youtube-thumbnails',
    title: 'YouTube Thumbnail Design',
    description: 'Sleek, eye-catching thumbnails engineered for high click-through rates (CTR) and visual retention.',
    details: ['Contrast-focused composition', 'Slick typography lockups', 'Expressive detail lighting', 'Sizing test diagnostics'],
    iconName: 'Youtube',
    accentColor: 'purple'
  },
  {
    id: 'banner-design',
    title: 'Digital Banner Design',
    description: 'High-fidelity banners for websites, advertisement networks, and online storefronts.',
    details: ['Ad-network dimension suites', 'Responsive screen adaptations', 'Focal call-to-actions', 'Optimized fast-load formats'],
    iconName: 'Sparkles',
    accentColor: 'blue'
  },
  {
    id: 'print-design',
    title: 'Print Design',
    description: 'Slick brochures, catalog layouts, and editorial magazines utilizing precise pre-press calculations.',
    details: ['Pre-flight color separations', 'CMYK press optimization', 'Perfect-binding structures', 'Paper-stock textures guide'],
    iconName: 'Printer',
    accentColor: 'pink'
  },
  {
    id: 'ui-graphic-assets',
    title: 'UI Graphic Assets',
    description: 'Bespoke custom icons, abstract vector compositions, and user-interface background designs.',
    details: ['SVG custom vector kits', 'Abstract isometric sets', 'Hi-res custom noise textures', 'Figma design assets'],
    iconName: 'Cpu',
    accentColor: 'purple'
  }
];

export const SKILLS_DATA: Skill[] = [
  { name: 'Adobe Photoshop', category: 'Software', level: 98, iconName: 'Flame' },
  { name: 'Adobe Illustrator', category: 'Software', level: 96, iconName: 'Layers' },
  { name: 'Adobe InDesign', category: 'Software', level: 90, iconName: 'BookOpen' },
  { name: 'Figma', category: 'Software', level: 92, iconName: 'Framer' },
  { name: 'Brand Identity Design', category: 'Creative', level: 95, iconName: 'Compass' },
  { name: 'Typography & Layout', category: 'Creative', level: 93, iconName: 'Type' },
  { name: 'Packaging Design', category: 'Creative', level: 88, iconName: 'Package' },
  { name: 'Social Media Strategy', category: 'Core', level: 90, iconName: 'Share2' },
  { name: 'Motion Graphics', category: 'Core', level: 85, iconName: 'Activity' }
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: 'exp-1',
    year: '2024 - Present',
    role: 'Lead Brand Identity Designer',
    company: 'Vanguard Creative Studio',
    description: 'Orchestrating end-to-end visual identities and comprehensive packaging suites for high-growth global luxury brands.',
    highlights: [
      'Spearheaded visual rebranding for 12 international clients.',
      'Designed packaging that won two prominent regional design nominations.',
      'Led a dynamic visual team to standardize pre-flight and production-grade dielines.'
    ]
  },
  {
    id: 'exp-2',
    year: '2022 - 2024',
    role: 'Senior Graphic & Packaging Designer',
    company: 'Nova Aesthetic Labs',
    description: 'Engineered specialized physical mockups, social-first visual systems, and sleek consumer goods packaging.',
    highlights: [
      'Boosted client social engagement by average 140% via structured template systems.',
      'Architected 3D pre-render workflows reducing structural sample costs by 35%.',
      'Developed modular presentation decks adopted company-wide for enterprise client pitches.'
    ]
  },
  {
    id: 'exp-3',
    year: '2020 - 2022',
    role: 'Graphic Designer',
    company: 'Apex Digital Agency',
    description: 'Crafted impactful visual assets, social promotional material, vector icons, and minimalist corporate presentations.',
    highlights: [
      'Managed a portfolio of 45 active local and regional brands.',
      'Delivered over 350 completed logo designs and secondary vector marks.',
      'Collaborated directly with digital developers to translate vector brand elements into web interfaces.'
    ]
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Eleanor Sterling',
    role: 'Founder & CEO',
    company: 'Aura Coffee Co.',
    text: 'Dhruvin is an absolute visionary. He took our abstract feelings about coffee culture and sculpted them into a breathtaking, cohesive, luxury packaging and logo suite that has defined our company. Our sales surged by 45% post-relaunch.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 'test-2',
    name: 'Marcus Chen',
    role: 'Marketing Director',
    company: 'Kinetix Athletics',
    text: 'Working with Dhruvin on our social media grid redesign was a absolute masterclass in aesthetic cohesion. He is incredibly precise, values composition, and creates layout patterns that are uniquely captivating.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 'test-3',
    name: 'Sophia Laurent',
    role: 'Creative Director',
    company: 'Maison de Chic',
    text: 'Dhruvin understands luxury typography better than any designer I have encountered. The branding and packaging he structured for our capsule fragrance line perfectly balanced timeless elegance with modern digital polish.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200'
  }
];

// EXACTLY 40 REALISTIC GRAPHIC DESIGN PROJECTS
export const PROJECTS_DATA: Project[] = [
  {
    id: 'p-1',
    title: 'Aura Premium Beans',
    client: 'Aura Coffee Co.',
    description: 'A luxurious custom-embossed coffee canister and minimalist packaging system.',
    category: 'Coffee Branding',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=800',
    creativeProcess: [
      'Researching biodegradable dark-palette paper options.',
      'Vectorizing custom elegant serif letterforms.',
      'Formulating clean radial layout grid for key specifications.'
    ],
    mockupPresentation: {
      type: 'packaging',
      palette: ['#0A0A0A', '#DFD3C3', '#C7B198', '#1A1A1A'],
      typography: ['Cinzel Decorative', 'Inter Mono'],
      details: ['Textured matte canister skin', 'Gold foil lettering accents', 'Recycled cotton seal card']
    }
  },
  {
    id: 'p-2',
    title: 'Maison Parfum Suite',
    client: 'Maison de Chic',
    description: 'High-contrast typography-forward identity and custom box packaging for luxury fragrance.',
    category: 'Luxury Branding',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=800',
    creativeProcess: [
      'Designing custom heavy letter spacing geometry.',
      'Sourcing luxury glass refractive pre-render references.',
      'Drafting double-fold textured card outer packaging.'
    ],
    mockupPresentation: {
      type: 'packaging',
      palette: ['#030303', '#FFFFFF', '#D4AF37', '#EAEAEA'],
      typography: ['Didot Pro', 'Space Grotesk'],
      details: ['Frosted crystalline glass bottle mockup', 'Metallic embossed letterplates', 'Minimal magnetic clasp box']
    }
  },
  {
    id: 'p-3',
    title: 'Nova Tech Rebrand',
    client: 'Nova Labs',
    description: 'Sleek, futuristic blue and silver geometric vector system for an AI software suite.',
    category: 'Technology Branding',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
    creativeProcess: [
      'Drafting interlocking isometric geometric logos.',
      'Formulating secondary digital neon blue glowing accents.',
      'Constructing responsive vector icon grids.'
    ],
    mockupPresentation: {
      type: 'identity',
      palette: ['#020813', '#00D2FF', '#0072FF', '#E2E8F0'],
      typography: ['Plus Jakarta Sans', 'Fira Code'],
      details: ['Glass-morphic interactive app screens', 'Anodized aluminum card deck holder', 'Matte metallic stickers']
    }
  },
  {
    id: 'p-4',
    title: 'Kinetix Energy Pack',
    client: 'Kinetix Athletics',
    description: 'Neon pink and deep charcoal athletic supplement tub and identity design.',
    category: 'Fitness Branding',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800',
    creativeProcess: [
      'Developing bold, italicized heavy display typography.',
      'Optimizing contrast grids for intense retail lighting visibility.',
      'Calibrating neon physical dye pigment matches.'
    ],
    mockupPresentation: {
      type: 'packaging',
      palette: ['#0D0D0D', '#FF007F', '#FF00FF', '#EEEEEE'],
      typography: ['Syncopate Bold', 'Outfit'],
      details: ['Carbon-textured cylinder container', 'UV gloss spot-coated text elements', 'Matte black lid cover']
    }
  },
  {
    id: 'p-5',
    title: 'Botanical Gin Bottle',
    client: 'Verdant Distillery',
    description: 'Intricate floral illustration and gold foil detailing on heavy dark green glass.',
    category: 'Packaging',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&q=80&w=800',
    creativeProcess: [
      'Hand-drawing dense floral vector sketches.',
      'Aligning circular curved text labels with custom dies.',
      'Creating realistic wood-and-cork sealing renders.'
    ],
    mockupPresentation: {
      type: 'packaging',
      palette: ['#0C2D1C', '#E5C158', '#F5F5F3', '#1C2E24'],
      typography: ['Playfair Display', 'Cormorant Garamond'],
      details: ['Dark forest glass texture', 'Deep-embossed metallic leaf decals', 'Wax-sealed wooden stopper']
    }
  },
  {
    id: 'p-6',
    title: 'Apex Real Estate Identity',
    client: 'Apex Group',
    description: 'Ultra-luxurious bronze-foiled folder, business cards, and stationery layout.',
    category: 'Real Estate Branding',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    creativeProcess: [
      'Creating abstract structural archway vectors.',
      'Balancing absolute grid margins for extreme minimalism.',
      'Specifying luxury copper-bronze foil print coordinates.'
    ],
    mockupPresentation: {
      type: 'stationery',
      palette: ['#1F1E1C', '#B89B72', '#FAF7F2', '#363430'],
      typography: ['Tenor Sans', 'Montserrat'],
      details: ['600gsm linen business cards', 'Bronze foil edge paint', 'Debossed cotton folder sleeve']
    }
  },
  {
    id: 'p-7',
    title: 'Sienna Artisan Bakery',
    client: 'Sienna Oven',
    description: 'Earthy, rustic visual layout, menus, and custom paper bag stamps.',
    category: 'Restaurant Branding',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800',
    creativeProcess: [
      'Testing warm sepia-toned ink variations on kraft paper.',
      'Creating playful hand-rendered wheat graphics.',
      'Drafting multi-page textured card dinner menus.'
    ],
    mockupPresentation: {
      type: 'identity',
      palette: ['#3A2412', '#C87A53', '#FAF0E6', '#8F6F54'],
      typography: ['Fraunces', 'Satoshi'],
      details: ['Brown kraft paper carrier packages', 'Brass grommet menu binders', 'Charcoal wax-seal stamps']
    }
  },
  {
    id: 'p-8',
    title: 'Modern Minimalist Posters',
    client: 'Zurich Design Center',
    description: 'A collection of Swiss-style layout posters focusing on grid structures and typography.',
    category: 'Posters',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1561070791-26c113006238?auto=format&fit=crop&q=80&w=800',
    creativeProcess: [
      'Analyzing multi-column structural offset grids.',
      'Implementing strict mathematical hierarchy layout.',
      'Applying high-contrast primary colors.'
    ],
    mockupPresentation: {
      type: 'poster',
      palette: ['#F93121', '#000000', '#F2F2F2', '#FFFFFF'],
      typography: ['Neue Haas Grotesk', 'Space Mono'],
      details: ['Coated screen-print heavy paper texture', 'Anodized black frame casing', 'Dynamic shadow overlays']
    }
  },
  {
    id: 'p-9',
    title: 'Aero Apparel Hangtags',
    client: 'Aero Streetwear',
    description: 'Distressed black card stock hangtags with white screenprinted graphic assets.',
    category: 'Fashion Branding',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800',
    creativeProcess: [
      'Experimenting with high-friction grunge edge scuffs.',
      'Developing bold stenciled brand vectors.',
      'Pairing nylon rope and industrial eyelets.'
    ],
    mockupPresentation: {
      type: 'stationery',
      palette: ['#080808', '#FFFFFF', '#888888', '#EAEAEA'],
      typography: ['Syne Extra Bold', 'Geist Mono'],
      details: ['Matte-grain recycled paper tag card', 'Anodized metal gunmetal eyelets', 'Embossed vertical lettering']
    }
  },
  {
    id: 'p-10',
    title: 'Monarch Geometric Logos',
    client: 'Monarch Holdings',
    description: 'Precision-engineered crown and monogram system for a private investment group.',
    category: 'Logo Design',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1546256011-87df45d197cb?auto=format&fit=crop&q=80&w=800',
    creativeProcess: [
      'Drafting golden-ratio grid vector templates.',
      'Balancing counter-spaces of abstract monogram glyphs.',
      'Testing contrast legibility at 16px size.'
    ],
    mockupPresentation: {
      type: 'identity',
      palette: ['#0F1115', '#C5A880', '#1C1F26', '#FFFFFF'],
      typography: ['Cinzel Decorative', 'Inter'],
      details: ['Polished luxury gold metallic plate', 'Fine-grain black leather stamping', 'Polished glass office sign mockup']
    }
  },
  {
    id: 'p-11',
    title: 'Firma Business Cards',
    client: 'Firma Legal Partners',
    description: 'Duplexed emerald green and clean white cards with gold foil stamps.',
    category: 'Business Cards',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800',
    creativeProcess: [
      'Testing double-thick card gluing (duplexing).',
      'Placing classic legal serif lettermarks.',
      'Applying edge gilding colors.'
    ],
    mockupPresentation: {
      type: 'stationery',
      palette: ['#0A2A1E', '#E4C275', '#FFFFFF', '#E9EBE8'],
      typography: ['Cormorant Infant', 'Montserrat'],
      details: ['750gsm ultra-weight duplex stock', 'Mirror-finish gold gilded card edges', 'Custom-crafted leather storage envelope']
    }
  },
  {
    id: 'p-12',
    title: 'Velocity Grid System',
    client: 'Velocity E-Sports',
    description: 'Stunning high-energy social media promotional posters and dynamic carousel templates.',
    category: 'Social Media',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800',
    creativeProcess: [
      'Developing lightning-fast diagonal speed lines.',
      'Rendering dynamic glowing product halo outlines.',
      'Structuring customizable modular layout matrices.'
    ],
    mockupPresentation: {
      type: 'digital',
      palette: ['#05050A', '#39FF14', '#1F052E', '#F3F4F6'],
      typography: ['Cabinet Grotesk', 'Fira Code'],
      details: ['Mobile social feed layout view', 'Chroma-key glow graphic vectors', 'Ultra-high-contrast banner sets']
    }
  },
  {
    id: 'p-13',
    title: 'Hale Organic Tea',
    client: 'Hale Tea Co.',
    description: 'Clean pastel-hued paper tube packaging design with fine-line botanical illustrations.',
    category: 'Coffee Branding',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&q=80&w=800',
    creativeProcess: [
      'Mixing organic natural pastel pigment options.',
      'Structuring circular vector botanical frames.',
      'Choosing tactile eco-friendly packaging shells.'
    ],
    mockupPresentation: {
      type: 'packaging',
      palette: ['#D6E6DB', '#829B87', '#FAF9F6', '#4E5A4E'],
      typography: ['Italiana', 'Satoshi Light'],
      details: ['Earthy cylinder paperboard roll pack', 'Eco-soy screenprinted graphics', 'Unrefined hemp fiber handle tie']
    }
  },
  {
    id: 'p-14',
    title: 'Volta Electric Identity',
    client: 'Volta Automotives',
    description: 'Futuristic vector emblems, visual identity, and physical badge designs for EV brand.',
    category: 'Branding',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1558441719-ff34b0524a24?auto=format&fit=crop&q=80&w=800',
    creativeProcess: [
      'Refining dynamic aerodynamic line vectors.',
      'Balancing high-contrast neon green branding bars.',
      'Prototyping metallic silver vehicle emblem badges.'
    ],
    mockupPresentation: {
      type: 'identity',
      palette: ['#0B0C10', '#1F2833', '#66FCF1', '#C5C6C7'],
      typography: ['Oxanium', 'Inter'],
      details: ['Chrome metallic car badge prototype', 'Deep-contrast black company letterhead', 'Monochromatic fleet graphics design']
    }
  },
  {
    id: 'p-15',
    title: 'Elysian Fragrance Box',
    client: 'Elysian Cosmetics',
    description: 'Iridescent, holographic boxes and sleek bottles for modern luxury scent.',
    category: 'Packaging',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=800',
    creativeProcess: [
      'Creating spectrum gradient patterns.',
      'Scribing sophisticated thin geometric structures.',
      'Optimizing hot-stamping iridescent foil patterns.'
    ],
    mockupPresentation: {
      type: 'packaging',
      palette: ['#F3E8FF', '#E0F2FE', '#FAE8FF', '#1E1B4B'],
      typography: ['Cinzel', 'Outfit Light'],
      details: ['Holographic shimmer cardboard box', 'Minimalist white cap glass bottle', 'Silver micro-bead embossed text']
    }
  },
  {
    id: 'p-16',
    title: 'Atelier Fashion Catalog',
    client: 'Atelier de Couture',
    description: 'Sophisticated editorial layouts and heavy cover-stock fashion brand lookbooks.',
    category: 'Fashion Branding',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800',
    creativeProcess: [
      'Balancing large-scale black-and-white portraits.',
      'Applying asymmetrical text columns.',
      'Calibrating deep rich shadow ink levels.'
    ],
    mockupPresentation: {
      type: 'editorial',
      palette: ['#FFFFFF', '#0A0A0A', '#9B9B9B', '#D2B48C'],
      typography: ['Prata', 'Inter'],
      details: ['Heavy linen texture bound booklet', 'Matte interior art pages', 'Blind-debossed minimalist cover title']
    }
  },
  {
    id: 'p-17',
    title: 'Ignite Protein Shake',
    client: 'Ignite Nutrition',
    description: 'Bold orange and black performance powders with striking typography and clean lists.',
    category: 'Fitness Branding',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800',
    creativeProcess: [
      'Constructing powerful industrial-vibe display labels.',
      'Designing technical nutritional grid panels.',
      'Matching saturated signal orange pigments.'
    ],
    mockupPresentation: {
      type: 'packaging',
      palette: ['#0A0A0A', '#FF4500', '#222222', '#F3F4F6'],
      typography: ['Saira Extra Condensed', 'Space Grotesk'],
      details: ['Carbon fiber composite jar container', 'Glossy orange high-build vinyl labels', 'Rigid textured screw top']
    }
  },
  {
    id: 'p-18',
    title: 'The Daily Grind Coffee',
    client: 'The Daily Grind',
    description: 'Vibrant, typographical coffee cups and custom stamp graphics for creative cafes.',
    category: 'Coffee Branding',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&q=80&w=800',
    creativeProcess: [
      'Fusing retro block lettering with modern layouts.',
      'Drafting dynamic visual patterns for coffee cups.',
      'Creating rubber-stamp optimized vector designs.'
    ],
    mockupPresentation: {
      type: 'packaging',
      palette: ['#1A1A1A', '#FFD166', '#EF476F', '#FAF9F6'],
      typography: ['Clash Display', 'JetBrains Mono'],
      details: ['Heavy Kraft takeaway coffee cup', 'Dual-color fluorescent screen printing', 'Textured silicone sleeve wrapper']
    }
  },
  {
    id: 'p-19',
    title: 'Veridia Organic Farms',
    client: 'Veridia Co.',
    description: 'Earthy green and warm gold branding systems for custom high-end organic grocers.',
    category: 'Real Estate Branding',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=800',
    creativeProcess: [
      'Researching warm organic leaf geometries.',
      'Crafting cohesive corporate identity cards.',
      'Specifying environmental signage designs.'
    ],
    mockupPresentation: {
      type: 'identity',
      palette: ['#1E352F', '#D4AF37', '#FAF9F6', '#2D5146'],
      typography: ['Fraunces', 'Inter'],
      details: ['Polished copper farm signage panel', 'Fibre-textured organic packaging boxes', 'Cotton uniform patch tags']
    }
  },
  {
    id: 'p-20',
    title: 'Vertex Tech Logo',
    client: 'Vertex Blockchain',
    description: 'Hyper-precise multi-faceted geometric prism logo mark designed for dark screen displays.',
    category: 'Logo Design',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
    creativeProcess: [
      'Iterating three-dimensional prism geometry maps.',
      'Refining subtle glowing vector overlapping junctions.',
      'Validating visibility at microscopic pixel sizes.'
    ],
    mockupPresentation: {
      type: 'identity',
      palette: ['#030712', '#7C3AED', '#3B82F6', '#FFFFFF'],
      typography: ['Orbitron', 'Space Grotesk'],
      details: ['Brilliant floating neon laser cut office sign', 'Matte black metal access cards', 'High-res screen ui mockups']
    }
  },
  {
    id: 'p-21',
    title: 'Aura Social Carousel',
    client: 'Aura Coffee Co.',
    description: 'Story-driven, gorgeous layout slides explaining specialty bean sourcing on Instagram.',
    category: 'Social Media',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=800',
    creativeProcess: [
      'Formulating continuous swipe background ribbons.',
      'Applying high-contrast elegant serif text headlines.',
      'Sourcing atmospheric warm roasting photorealistic images.'
    ],
    mockupPresentation: {
      type: 'digital',
      palette: ['#121212', '#DFD3C3', '#9D8461', '#FFFFFF'],
      typography: ['Prata', 'Inter Mono'],
      details: ['1080x1350px high-fidelity Instagram frame previews', 'Custom typography overlay templates', 'Subtle grain filter layers']
    }
  },
  {
    id: 'p-22',
    title: 'Gourmet Olive Oil',
    client: 'Sol de Andalucia',
    description: 'Stunning white ceramic bottle with a wood seal cap and minimalist line-art detailing.',
    category: 'Packaging',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&q=80&w=800',
    creativeProcess: [
      'Creating elegant single-line abstract sun and leaf vectors.',
      'Selecting elegant slender ceramic bottle formats.',
      'Calibrating olive-green label borders.'
    ],
    mockupPresentation: {
      type: 'packaging',
      palette: ['#FFFFFF', '#4A5D4E', '#D9A05B', '#2A302B'],
      typography: ['Cormorant Garamond', 'Montserrat Light'],
      details: ['Opaque glossy white porcelain flask', 'Real walnut corked wood topper', 'Woven heavy card label attachment']
    }
  },
  {
    id: 'p-23',
    title: 'Opal Luxury Identity',
    client: 'Opal Fine Jewelers',
    description: 'Glistening velvet jewelry jewelry boxes and silver hot-stamp foil cards.',
    category: 'Luxury Branding',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800',
    creativeProcess: [
      'Designing sophisticated thin interconnected crests.',
      'Evaluating premium textured velvet fabric responses.',
      'Calculating silver-press microscopic tolerances.'
    ],
    mockupPresentation: {
      type: 'packaging',
      palette: ['#0F151B', '#E5E9EC', '#96A4AF', '#303D49'],
      typography: ['Playfair Display', 'Plus Jakarta Sans'],
      details: ['Deep sapphire plush velvet ring cases', 'Prismatic silver leaf embossed cards', 'Linen ribbon tie accents']
    }
  },
  {
    id: 'p-24',
    title: 'Verve Fitness Socials',
    client: 'Verve Studio',
    description: 'High-contrast black-and-yellow motivational workout schedules and post layout blocks.',
    category: 'Social Media',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800',
    creativeProcess: [
      'Crafting highly aggressive geometric layout dividers.',
      'Selecting athletic high-impact sans-serif pairings.',
      'Creating dynamic image-cutoff visual clipping masks.'
    ],
    mockupPresentation: {
      type: 'digital',
      palette: ['#000000', '#FFF200', '#1A1A1A', '#FFFFFF'],
      typography: ['Impact', 'Space Grotesk'],
      details: ['Dynamic responsive banner mockups', 'Instagram stories layout frames', 'High-contrast sport grid templates']
    }
  },
  {
    id: 'p-25',
    title: 'Maison Chic Hangtags',
    client: 'Maison de Chic',
    description: 'Textured natural cotton cloth hangtags with blind debossed classical text patterns.',
    category: 'Fashion Branding',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800',
    creativeProcess: [
      'Scribing timeless classical serif text spacing sheet.',
      'Developing sustainable weave fabric density models.',
      'Sourcing premium organic cotton strings.'
    ],
    mockupPresentation: {
      type: 'stationery',
      palette: ['#F7F5F0', '#1A1A1A', '#E3D7C4', '#D0C2A9'],
      typography: ['Didot Pro', 'Satoshi Light'],
      details: ['Woven high-density raw cream linen tags', 'Blind deep letterpress impression', 'Raw hemp thread binders']
    }
  },
  {
    id: 'p-26',
    title: 'Lumina Tech Web Assets',
    client: 'Lumina Cloud',
    description: 'Sleek custom glassmorphic vector icons and visual components for developer sites.',
    category: 'Technology Branding',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800',
    creativeProcess: [
      'Iterating vector glowing line overlapping transparency.',
      'Setting up multi-layered figma asset files.',
      'Generating noise-textured abstract space background sheets.'
    ],
    mockupPresentation: {
      type: 'digital',
      palette: ['#0A0915', '#EC4899', '#8B5CF6', '#FFFFFF'],
      typography: ['Geist', 'JetBrains Mono'],
      details: ['Semi-transparent browser mockups', 'SVG gradient tech icon files', 'Hi-res noise wallpapers']
    }
  },
  {
    id: 'p-27',
    title: 'Sienna Menu Pack',
    client: 'Sienna Oven',
    description: 'Chic embossed leather menus, customized copper coasters, and visual table cards.',
    category: 'Restaurant Branding',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800',
    creativeProcess: [
      'Selecting rich saddle-brown natural leather textures.',
      'Designing heavy vector stamp marks for copper plates.',
      'Arranging dynamic two-column modern menu layouts.'
    ],
    mockupPresentation: {
      type: 'stationery',
      palette: ['#2B1A0E', '#CD7F32', '#FAF0E6', '#F4A460'],
      typography: ['Oswald', 'Outfit'],
      details: ['Hand-stitched leather menu folders', 'Acid-etched raw bronze metal coasters', 'Heavy textured white paper insert sheet']
    }
  },
  {
    id: 'p-28',
    title: 'Onyx Mineral Water',
    client: 'Onyx Beverage',
    description: 'Brilliant deep-black glass bottles with high-gloss clear varnished typography.',
    category: 'Luxury Branding',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=800',
    creativeProcess: [
      'Calibrating gloss levels of clear coating over matte black.',
      'Designing pure minimalist geometric icons.',
      'Evaluating bottle silhouette glass weights.'
    ],
    mockupPresentation: {
      type: 'packaging',
      palette: ['#050505', '#121212', '#FFFFFF', '#6B7280'],
      typography: ['Cabinet Grotesk', 'Space Mono'],
      details: ['Polished pure obsidian glass flask', 'Clear gloss thermographic print graphics', 'Anodized black metal screw cork']
    }
  },
  {
    id: 'p-29',
    title: 'Nouveau Art Poster',
    client: 'Parisian Galerie',
    description: 'Elegant typographic poster featuring high-contrast serif details and abstract curved grids.',
    category: 'Posters',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1561070791-26c113006238?auto=format&fit=crop&q=80&w=800',
    creativeProcess: [
      'Mapping organic sweeping vector curves.',
      'Applying high-contrast rich cream background colors.',
      'Refining multi-layer offset letter typography.'
    ],
    mockupPresentation: {
      type: 'poster',
      palette: ['#EFEBE4', '#1A1A1A', '#C19A6B', '#2E3B33'],
      typography: ['Cormorant Garamond', 'Plus Jakarta Sans'],
      details: ['Warm matte cotton poster paper', 'Sleek light oak wood frames', 'Natural glass shadow reflection overlay']
    }
  },
  {
    id: 'p-30',
    title: 'Apex Business Folder',
    client: 'Apex Group',
    description: 'Thick corporate folders with sleek internal pocket dielines and high-end cards.',
    category: 'Business Cards',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800',
    creativeProcess: [
      'Designing secure interlocking folder tab structures.',
      'Positioning business card diagonal cut slits.',
      'Scribing gold metallic debossed brand text.'
    ],
    mockupPresentation: {
      type: 'stationery',
      palette: ['#141414', '#C39B62', '#FFFFFF', '#F3F4F6'],
      typography: ['Cinzel', 'Montserrat'],
      details: ['Premium heavy black paperboard folders', 'Matte metallic bronze foil layout', 'Sleek linen pattern pockets']
    }
  },
  {
    id: 'p-31',
    title: 'Helios Brand Mark',
    client: 'Helios Solar Systems',
    description: 'A radiant geometric sun mark constructed with perfect 45-degree angle lines.',
    category: 'Logo Design',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1546256011-87df45d197cb?auto=format&fit=crop&q=80&w=800',
    creativeProcess: [
      'Fusing circular geometry with linear radiant sunbeams.',
      'Ensuring grid alignments under isometric layout scales.',
      'Optimizing contrast balance for dark-mode screens.'
    ],
    mockupPresentation: {
      type: 'identity',
      palette: ['#080A10', '#F97316', '#FBBF24', '#FFFFFF'],
      typography: ['Clash Display', 'Inter'],
      details: ['Polished golden bronze wall sign', 'Debossed business letter heads', 'Laser engraved wood textures']
    }
  },
  {
    id: 'p-32',
    title: 'Kinetix Social Banner',
    client: 'Kinetix Athletics',
    description: 'High-contrast promotional banners for new workout apparel on digital channels.',
    category: 'Social Media',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800',
    creativeProcess: [
      'Integrating dark charcoal fitness model portraits.',
      'Applying high-energy fuchsia overlay boxes.',
      'Creating striking diagonal typography frames.'
    ],
    mockupPresentation: {
      type: 'digital',
      palette: ['#0B0B0C', '#EC4899', '#FFFFFF', '#1E1B4B'],
      typography: ['Syncopate', 'Space Grotesk'],
      details: ['Desktop digital banner layout sheets', 'Optimized fast-loading image sheets', 'High-contrast promotional templates']
    }
  },
  {
    id: 'p-33',
    title: 'Aura Premium Bag',
    client: 'Aura Coffee Co.',
    description: 'Elite textured charcoal paper bags with custom string handles and metal eyelets.',
    category: 'Coffee Branding',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=800',
    creativeProcess: [
      'Drafting structural dielines for heavy-weight carrier bags.',
      'Specifying reinforced cardboard insert bases.',
      'Sourcing luxury thick-woven cotton ropes.'
    ],
    mockupPresentation: {
      type: 'packaging',
      palette: ['#121212', '#C7B198', '#FFFFFF', '#2D2D2D'],
      typography: ['Cinzel', 'Inter'],
      details: ['Carbon textured shopping carrier pack', 'Hot stamped gold leaf logo panel', 'High-density metal grommet eyelets']
    }
  },
  {
    id: 'p-34',
    title: 'Lumina Cloud Cards',
    client: 'Lumina Cloud',
    description: 'Semi-transparent matte plastic cards with glowing neon purple edges.',
    category: 'Business Cards',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800',
    creativeProcess: [
      'Evaluating translucent polymer refraction indexes.',
      'Mapping neon ink spot coordinates.',
      'Designing white high-contrast text layers.'
    ],
    mockupPresentation: {
      type: 'stationery',
      palette: ['#0D0C1F', '#A855F7', '#3B82F6', '#FFFFFF'],
      typography: ['Geist Mono', 'Space Grotesk'],
      details: ['Matte-frosted polymer plastic cards', 'Vivid UV-activated glowing pink edge dye', 'Clear gloss printed geometric paths']
    }
  },
  {
    id: 'p-35',
    title: 'Prism Tech Posters',
    client: 'Prism Software',
    description: 'Dynamic poster designs showcasing digital light refraction, glass, and rainbows.',
    category: 'Posters',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
    creativeProcess: [
      'Rendering complex refraction vector bands.',
      'Pairing sleek dark layouts with rainbow elements.',
      'Structuring multi-layered geometric overlays.'
    ],
    mockupPresentation: {
      type: 'poster',
      palette: ['#05050A', '#3B82F6', '#EF4444', '#10B981'],
      typography: ['Cabinet Grotesk', 'Fira Code'],
      details: ['High-contrast canvas print mockup', 'Glossy clear acrylic frame casings', 'Atmospheric spotlight shadow overlays']
    }
  },
  {
    id: 'p-36',
    title: 'Maison Brand Mark',
    client: 'Maison de Chic',
    description: 'A custom hand-lettered classical wordmark pairing high-fashion curves with modern gaps.',
    category: 'Logo Design',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800',
    creativeProcess: [
      'Sketching calligraphic strokes on textured layouts.',
      'Translating strokes to ultra-clean Bézier paths.',
      'Calibrating character kerning at high resolutions.'
    ],
    mockupPresentation: {
      type: 'identity',
      palette: ['#0B0B0C', '#FFFFFF', '#D5C4A1', '#8C7A5B'],
      typography: ['Custom Calligraphy', 'Prata'],
      details: ['Polished gold clothing hanger emblem', 'Embossed heavy apparel box covers', 'Polished marble lobby wall logo mark']
    }
  },
  {
    id: 'p-37',
    title: 'Sienna Bakery Labels',
    client: 'Sienna Oven',
    description: 'Charming round kraft stickers and packaging seals with rustic typography.',
    category: 'Restaurant Branding',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800',
    creativeProcess: [
      'Drafting circular rustic borders.',
      'Testing natural-ink bleeding on unbleached fibers.',
      'Fusing retro woodblock fonts with modern layouts.'
    ],
    mockupPresentation: {
      type: 'packaging',
      palette: ['#5C3A21', '#FAF0E6', '#B07D62', '#1E120B'],
      typography: ['Fraunces', 'Inter'],
      details: ['Textured raw unbleached flour bag', 'Round die-cut kraft paper seal stickers', 'Rough hemp tie knots']
    }
  },
  {
    id: 'p-38',
    title: 'Apex Estate Identity',
    client: 'Apex Group',
    description: 'Premium modern visual branding for a high-end luxury skyscraper development.',
    category: 'Real Estate Branding',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    creativeProcess: [
      'Mapping physical building architecture forms to lines.',
      'Constructing polished elite marketing decks.',
      'Evaluating luxury matte bronze visual sheets.'
    ],
    mockupPresentation: {
      type: 'identity',
      palette: ['#1C1D1F', '#D4AF37', '#FAF9F6', '#4F4E4B'],
      typography: ['Tenor Sans', 'Montserrat'],
      details: ['Polished gold physical architect plan tubes', 'Brushed brass building directory map', 'Debossed linen visitor register book']
    }
  },
  {
    id: 'p-39',
    title: 'Velocity Logo Grid',
    client: 'Velocity E-Sports',
    description: 'An aggressive, forward-leaning cybernetic logo mark engineered on an angled vector grid.',
    category: 'Logo Design',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800',
    creativeProcess: [
      'Iterating lightning chevron paths on isometric grids.',
      'Applying high-energy fluorescent green glow effects.',
      'Optimizing scale dynamics for high-impact merchandising.'
    ],
    mockupPresentation: {
      type: 'identity',
      palette: ['#020205', '#39FF14', '#12121A', '#FFFFFF'],
      typography: ['Cabinet Grotesk', 'Fira Code'],
      details: ['Acrylic LED glowing gaming booth sign', 'Embossed gaming jersey collar label', 'High-res mobile stream overlay icon']
    }
  },
  {
    id: 'p-40',
    title: 'Botanical Gin Label',
    client: 'Verdant Distillery',
    description: 'High-end wrap-around textured paper labels with gold ink illustrations for craft spirits.',
    category: 'Packaging',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&q=80&w=800',
    creativeProcess: [
      'Sourcing botanical flora hand-sketch models.',
      'Calculating wrap-around paper overlap dimensions.',
      'Setting up gold metallic hot-foil print separations.'
    ],
    mockupPresentation: {
      type: 'packaging',
      palette: ['#0A2518', '#E6C687', '#FFFFFF', '#243A2E'],
      typography: ['Playfair Display', 'Cormorant Garamond'],
      details: ['Heavy organic green glass bottle', 'Fine-grain deckled paper adhesive labels', 'Intricately embossed gold leaf vines']
    }
  }
];

// 6 FEATURED PREMIUM CASE STUDIES
export const CASE_STUDIES_DATA: CaseStudy[] = [
  {
    id: 'aura-coffee',
    title: 'Aura Premium Beans',
    subtitle: 'Crafting a cohesive, high-end sensory packaging experience for specialty coffee.',
    client: 'Aura Coffee Co.',
    category: 'Coffee Branding',
    year: '2025',
    heroImage: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=1200',
    overview: 'Aura Coffee Co. is a boutique roaster sourcing rare, micro-lot specialty beans. They required a visual system that would command immediate retail authority, communicate the premium craftsmanship behind their roasting, and establish an immersive, sensory-rich unboxing ceremony.',
    challenge: 'Specialty coffee is a crowded visual market dominated by rustic Kraft paper or over-saturated cartoonish bags. The key challenge was developing an elite, architectural, typography-forward identity that felt more like high-end fragrance or couture rather than standard kitchen groceries, while using strictly sustainable, biodegradable materials.',
    solution: 'We constructed a dark-luxe visual system anchored on deep slate-charcoal matte canisters and heavy unbleached fiber sleeve wrappers. The typographic system pairs custom classical Roman letterforms with technical monospace metadata labels, establishing a clean, futuristic layout system that highlights roaster elevations, sensory notes, and harvest lot codes.',
    palette: ['#0A0A0A', '#DFD3C3', '#C7B198', '#2C2B29'],
    typography: ['Cinzel Decorative', 'JetBrains Mono', 'Inter'],
    mockups: [
      {
        title: 'Primary Canister Line',
        description: 'Debossed charcoal matte aluminum canisters detailed with premium hot-stamped gold foil labels.',
        image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=800',
        type: 'hero'
      },
      {
        title: 'Sensory Tag Kit',
        description: 'Thick unbleached deckled cotton tags containing hand-numbered roast metrics and color-coded crop seals.',
        image: 'https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&q=80&w=800',
        type: 'grid'
      },
      {
        title: 'Retail Storefront Pack',
        description: 'Complete shipping cartons, paper carrier bags, and premium barista uniform tags built with matching palettes.',
        image: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&q=80&w=800',
        type: 'wide'
      }
    ],
    process: [
      {
        phase: '01. Discovery',
        title: 'Sourcing Narrative',
        description: 'Conducted immersive cupping and tasting sessions with roasters to extract key design descriptors: raw, structured, and deep.'
      },
      {
        phase: '02. Typography',
        title: 'Geometrical Framing',
        description: 'Iterated custom-kerned vector alignments of classical serif headings, contrasting them with ultra-dense monospace grids.'
      },
      {
        phase: '03. Prototyping',
        title: 'Tactile Materialization',
        description: 'Tested 15 different weights of unbleached card stocks, checking thermal foil adhesion and adhesive ink bleed rates.'
      }
    ]
  },
  {
    id: 'maison-chic',
    title: 'Maison de Chic Suite',
    subtitle: 'Constructing an elegant, classical, and minimalist identity for a modern fashion house.',
    client: 'Maison de Chic',
    category: 'Fashion Branding',
    year: '2025',
    heroImage: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1200',
    overview: 'Maison de Chic is an emerging high-end Parisian couture capsule house. They sought a luxurious, timeless branding system that blends the rich heritage of classical French typography with modern, asymmetrical digital layout sensibilities.',
    challenge: 'High-fashion branding is prone to cliché or sterile, cold sans-serif marks. Our task was creating a visual mark that retained absolute classicism and high-contrast editorial elegance, yet translated dynamically into web screens, physical labels, fabric tags, and social templates.',
    solution: 'We designed a custom typography system based on refined classical Didot structures, applying extreme vertical stroke contrast and open geometrical gaps. This custom wordmark is paired with a heavy-cotton, blind-debossed physical print identity that emphasizes negative space, texture, and structural simplicity.',
    palette: ['#FFFFFF', '#0A0A0A', '#E3D7C4', '#D2B48C'],
    typography: ['Prata', 'Didot Pro', 'Satoshi'],
    mockups: [
      {
        title: 'Visual Lookbook Book',
        description: 'Linen-bound lookbook layout featuring heavy matte art paper, generous layout grids, and blind-debossed title text.',
        image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800',
        type: 'hero'
      },
      {
        title: 'Embossed Box Sets',
        description: 'Premium apparel presentation cartons structured with heavy unbleached linen board and custom gold eyelet rope handles.',
        image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800',
        type: 'grid'
      }
    ],
    process: [
      {
        phase: '01. Sketching',
        title: 'Bézier Calligraphy',
        description: 'Manually drafted typographic curves, adjusting hairline terminals to ensure digital scaling legibility.'
      },
      {
        phase: '02. Identity',
        title: 'Asymmetrical Layouts',
        description: 'Structured dynamic multi-column grids for lookbooks, ensuring vast white spaces act as active design components.'
      }
    ]
  },
  {
    id: 'sienna-oven',
    title: 'Sienna Bakery & Oven',
    subtitle: 'Developing a warm, rustic, and earthy visual ecosystem for an artisan sourdough bakery.',
    client: 'Sienna Oven',
    category: 'Restaurant Branding',
    year: '2024',
    heroImage: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=1200',
    overview: 'Sienna Oven is a high-end sourdough bakery. They needed an identity that evokes hand-crafted warmth and ancestral baking heritage while presenting a slick, premium visual front for their upscale urban locations.',
    challenge: 'Rustic food branding often leans too heavily into dark, dated, or messy hand-drawn vectors. We had to create an identity that felt organic, warm, and authentic, yet crisp, structured, and elegant.',
    solution: 'We curated a brand experience focusing on rich terracottas, warm creams, and deep unrefined sepia inks. The logo incorporates sophisticated serif glyphs with tiny organic offsets. Custom-textured round kraft labels, hand-stitched leather menu folders, and custom bread wrappers compile a cohesive in-store atmosphere.',
    palette: ['#3A2412', '#C87A53', '#FAF0E6', '#8F6F54'],
    typography: ['Fraunces', 'Satoshi', 'Inter'],
    mockups: [
      {
        title: 'Artisan Paper Bags',
        description: 'Earthy unbleached paper carriers hand-stamped with warm sepia ink and tied with textured unrefined hemp ties.',
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800',
        type: 'hero'
      },
      {
        title: 'Leather Menu Bindings',
        description: 'Fine saddle-brown leather covers hot-stamped with circular brand marks and held with polished brass rivets.',
        image: 'https://images.unsplash.com/photo-1546256011-87df45d197cb?auto=format&fit=crop&q=80&w=800',
        type: 'grid'
      }
    ],
    process: [
      {
        phase: '01. Concept',
        title: 'Tactile Warmth',
        description: 'Analyzed traditional bread scoring lines, deriving minimal geometric arcs used in circular logos.'
      },
      {
        phase: '02. Crafting',
        title: 'Organic Texture',
        description: 'Designed custom stamp patterns, optimizing line weight to retain complete clarity under low-pressure ink stamps.'
      }
    ]
  },
  {
    id: 'apex-group',
    title: 'Apex Tower Suite',
    subtitle: 'Designing a prestigious, ultra-luxury marketing brand for a high-end real estate skyscraper.',
    client: 'Apex Group',
    category: 'Real Estate Branding',
    year: '2024',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    overview: 'Apex Group is a premier real estate development firm. For their flagship 60-story luxury high-rise, they commissioned an absolute top-tier, gold-detailed marketing suite and physical brand experience.',
    challenge: 'Real estate marketing often relies on generic steel-and-glass photography and uninspired layouts. The project required an identity that projected extreme wealth, classical structure, and architectural authority to high-net-worth buyers.',
    solution: 'We structured an elite visual system centered on a bronze-gold color scheme and charcoal canvas patterns. The corporate folder system, fine-weave business cards, floor-plan pamphlets, and gilded building signage compile an uncompromised statement of modern architectural luxury.',
    palette: ['#1F1E1C', '#B89B72', '#FAF7F2', '#363430'],
    typography: ['Tenor Sans', 'Montserrat', 'Inter'],
    mockups: [
      {
        title: 'Bronze Foil Folder Kit',
        description: 'Ultra-thick black board folders detailed with laser-engraved building profiles and gold-foiled architectural grids.',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
        type: 'hero'
      },
      {
        title: 'Gilded Business Stationery',
        description: 'Fine-weave cotton paper letterheads featuring debossed coordinates and business cards with mirror-polished bronze edge paints.',
        image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800',
        type: 'grid'
      }
    ],
    process: [
      {
        phase: '01. Drafting',
        title: 'Architectural Geometries',
        description: 'Derived abstract line patterns from the building\'s actual structural beams and floor trusses.'
      },
      {
        phase: '02. Printing',
        title: 'Foil Calibration',
        description: 'Calibrated double-strike metallic hot stamping, validating complete visual detail across deep paper fibers.'
      }
    ]
  },
  {
    id: 'nova-labs',
    title: 'Nova Tech Cloud',
    subtitle: 'Reimagining developer-facing digital assets and geometric software visual brand systems.',
    client: 'Nova Labs',
    category: 'Technology Branding',
    year: '2024',
    heroImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200',
    overview: 'Nova Labs provides high-speed cloud infrastructure and decentralized ledger software. They requested a modern, developer-first rebranding system that feels highly sophisticated, secure, and visually advanced.',
    challenge: 'Tech startups frequently use flat, childish illustrations and generic pastel gradients. Nova Labs needed to project cutting-edge cryptographic engineering, visual clarity, and computational speed.',
    solution: 'We built a high-density, mathematical visual grid system anchored on deep slate backgrounds, metallic silver vectors, and bright neon blue coordinates. The visual design system relies on complex overlapping geometric prisms, high-contrast typography, and glassmorphic user-interface elements.',
    palette: ['#020813', '#00D2FF', '#0072FF', '#FFFFFF'],
    typography: ['Plus Jakarta Sans', 'Fira Code', 'Space Grotesk'],
    mockups: [
      {
        title: 'Cryptographic Prism Vector',
        description: 'Multi-layered vector geometric brand mark optimized for rich OLED dark displays and holographic stickers.',
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
        type: 'hero'
      },
      {
        title: 'Developer Interface Assets',
        description: 'Custom semi-transparent glassmorphic icons, user-interface cards, and high-definition wallpaper sets.',
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800',
        type: 'grid'
      }
    ],
    process: [
      {
        phase: '01. Math Mapping',
        title: 'Vector Isometric Grids',
        description: 'Calculated interlocking line grids, ensuring absolute geometric accuracy across three-dimensional axes.'
      },
      {
        phase: '02. UI System',
        title: 'Glassmorphism Styling',
        description: 'Specified border radii, frosted opacity levels, and fine noise backdrops for digital dashboard elements.'
      }
    ]
  },
  {
    id: 'kinetix-athletics',
    title: 'Kinetix Active Systems',
    subtitle: 'Engineering high-energy packaging and bold typography grids for modern sport nutrition.',
    client: 'Kinetix Athletics',
    category: 'Fitness Branding',
    year: '2025',
    heroImage: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=1200',
    overview: 'Kinetix Athletics manufactures clean, scientific workout powders and supplements. They commissioned a full physical branding and packaging system that stands out instantly on store shelves and drives high-intent digital conversions.',
    challenge: 'Sports nutrition is filled with over-cluttered labels, screaming bad gradients, and complex tables. Our goal was bringing clean, high-impact architectural structure and neon kinetic energy together in a highly professional visual container.',
    solution: 'We created an athletic layout driven by heavy, italicized display typography, neon pink highlights, and matte charcoal carbon jar containers. High-contrast detail columns and spot-gloss UV varnishes on the typography elements compile a visually striking and clean shelf presentation.',
    palette: ['#0D0D0D', '#FF007F', '#FF00FF', '#FFFFFF'],
    typography: ['Syncopate', 'Outfit', 'Space Grotesk'],
    mockups: [
      {
        title: 'Supplement Tub Showcase',
        description: 'Heavy-weight matte black cylinders featuring glowing neon pink vinyl wraps and spot-UV varnished graphic lines.',
        image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800',
        type: 'hero'
      },
      {
        title: 'Social Promotional Assets',
        description: 'High-contrast Instagram grid carousels, workout routines, and web banner kits highlighting nutritional layouts.',
        image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800',
        type: 'grid'
      }
    ],
    process: [
      {
        phase: '01. Typography',
        title: 'Dynamic Weight Balance',
        description: 'Iterated thick display italic cuts, ensuring words project immediate forward motion, speed, and raw strength.'
      },
      {
        phase: '02. Packaging',
        title: 'Spot Varnishing',
        description: 'Drafted vector plates for precise gloss spot coating over matte packaging textures, yielding a beautiful tactile feel.'
      }
    ]
  }
];
