# Batak Cultural Heritage Website - Development Plan

## Design Guidelines

### Design References
- **Batak Traditional Art**: Gorga patterns (red, black, white), carved wood motifs
- **Style**: Dark Luxury + Cultural Heritage + Modern Immersive

### Color Palette
- Primary Background: #0D0D0D (Deep Black)
- Secondary Background: #1A1209 (Dark Brown-Black)
- Card Background: #1C1410 (Dark Warm Brown)
- Accent Gold: #C8A45C (Batak Gold - primary accent)
- Accent Red: #8B1A1A (Batak Deep Red - Gorga inspired)
- Accent Warm: #D4A574 (Warm Sand)
- Text Primary: #F5F0E8 (Warm White)
- Text Secondary: #A89880 (Muted Gold)
- Border: #2A2018 (Dark Brown Border)

### Typography
- Heading Display: Playfair Display, font-weight 700 (hero titles, cultural emphasis)
- Heading: Inter, font-weight 700 (section titles)
- Body: Inter, font-weight 400 (paragraphs)
- Accent/Quote: Playfair Display Italic (cultural quotes)

### Key Component Styles
- **Navigation**: Fixed top, glassmorphism dark with gold accents, blur backdrop
- **Hero**: Full viewport, parallax background, animated text reveal
- **Cards**: Dark brown with gold border on hover, subtle glow effect
- **Buttons**: Gold outline or filled, hover: warm glow
- **Section dividers**: Gorga-inspired geometric patterns using CSS
- **Timeline**: Vertical line with gold dots, alternating cards

### Images to Generate
1. **hero-batak-landscape.jpg** - Majestic Lake Toba panoramic view at golden hour with dramatic clouds, cinematic wide shot (photorealistic, 1024x576)
2. **ulos-weaving.jpg** - Close-up of traditional Batak ulos textile with intricate red, black and gold patterns being woven on a traditional loom (photorealistic, 1024x768)
3. **rumah-bolon.jpg** - Traditional Batak Toba house (Rumah Bolon) with distinctive curved roof and carved wooden facade, surrounded by lush greenery (photorealistic, 1024x768)
4. **lake-toba-aerial.jpg** - Stunning aerial view of Lake Toba with Samosir Island in the center, turquoise waters, green hills (photorealistic, 1024x576)
5. **batak-food-spread.jpg** - Traditional Batak feast spread on banana leaves featuring grilled pork, saksang, arsik fish, rice, and sambal, warm lighting (photorealistic, 1024x768)
6. **batak-warrior.jpg** - Dramatic artistic depiction of ancient Batak warrior holding traditional podang sword and shield with gorga carvings, misty mountain background (photorealistic, 1024x768)

---

## Development Tasks & File Structure (max 8 files)

### Files to Create:
1. **src/pages/Index.tsx** - Homepage with hero, featured sections preview, navigation to all pages
2. **src/pages/UlosPhilosophy.tsx** - Ulos types, meanings, ceremonial uses
3. **src/pages/BatakHistory.tsx** - Interactive timeline of Batak civilization
4. **src/pages/TraditionalHouses.tsx** - Rumah Bolon, architecture philosophy
5. **src/pages/BatakWeapons.tsx** - Traditional weapons and their significance
6. **src/pages/BatakFood.tsx** - Culinary heritage and traditional dishes
7. **src/pages/Tourism.tsx** - Tourist destinations around Lake Toba
8. **src/components/Layout.tsx** - Shared navigation, footer, page transitions

### Files to Modify:
- **src/App.tsx** - Add routes for all pages
- **src/index.css** - Custom styles, animations, Gorga patterns
- **index.html** - Update title