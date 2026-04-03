#!/usr/bin/env zsh
# Generate SVG placeholder images for Betonea website

BASE="/Users/nmil/Betonea/public/images"

# Create all directories
mkdir -p "$BASE/categories"
mkdir -p "$BASE/clients"

CATEGORIES=(
  "betonske-zardinjere"
  "betonske-skulpture-za-bastu"
  "betonske-fontane"
  "stubovi-i-balustrade"
  "betonske-ograde"
  "kamin-maske"
  "betonske-okapnice"
  "betonske-klupe-i-stolovi"
  "letnjikovci"
  "urbani-mobilijar"
  "betonske-saksije"
  "betonska-stepenista"
  "nadgrobni-spomenici"
  "ostali-proizvodi"
)

for cat in "${CATEGORIES[@]}"; do
  mkdir -p "$BASE/products/$cat"
  mkdir -p "$BASE/gallery/$cat"
done

# --- SVG Generator ---
gen_svg() {
  local file="$1" w="$2" h="$3" label="$4" sublabel="$5"
  local bw=$(( w > 40 ? 4 : 2 ))
  local fs=$(( w > 600 ? 32 : w > 300 ? 24 : 14 ))
  local sfs=$(( fs - 8 > 10 ? fs - 8 : 10 ))
  local cy=$(( h / 2 ))
  local sy=$(( cy + fs + 4 ))
  local rw=$(( w - bw * 2 ))
  local rh=$(( h - bw * 2 ))

  local sub_line=""
  if [[ -n "$sublabel" ]]; then
    sub_line="<text x=\"50%\" y=\"$sy\" text-anchor=\"middle\" font-family=\"Georgia,serif\" font-size=\"${sfs}\" fill=\"#8B7D6B\">$sublabel</text>"
  fi

  cat > "$file" << SVGEOF
<svg xmlns="http://www.w3.org/2000/svg" width="$w" height="$h" viewBox="0 0 $w $h">
<rect width="$w" height="$h" fill="#E8E4DD"/>
<rect x="$bw" y="$bw" width="$rw" height="$rh" fill="none" stroke="#D4B96E" stroke-width="$bw" rx="2"/>
<text x="50%" y="$cy" text-anchor="middle" font-family="Georgia,serif" font-size="$fs" fill="#5C4F3D">$label</text>
$sub_line
</svg>
SVGEOF
}

# --- Site-wide images ---
gen_svg "$BASE/hero.svg" 1920 1080 "BETONEA" "Umjetnost u betonu"

cat > "$BASE/logo.svg" << 'EOF'
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="60" viewBox="0 0 200 60">
<rect width="200" height="60" fill="none"/>
<text x="100" y="38" text-anchor="middle" font-family="Georgia,serif" font-size="28" font-weight="bold" fill="#5C4F3D">BETONEA</text>
<line x1="30" y1="48" x2="170" y2="48" stroke="#D4B96E" stroke-width="2"/>
</svg>
EOF

cat > "$BASE/logo-white.svg" << 'EOF'
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="60" viewBox="0 0 200 60">
<rect width="200" height="60" fill="none"/>
<text x="100" y="38" text-anchor="middle" font-family="Georgia,serif" font-size="28" font-weight="bold" fill="#FFFFFF">BETONEA</text>
<line x1="30" y1="48" x2="170" y2="48" stroke="#D4B96E" stroke-width="2"/>
</svg>
EOF

gen_svg "$BASE/og-image.svg" 1200 630 "BETONEA" "Dekorativni betonski proizvodi"

# --- Category images (800x600) ---
typeset -A CAT_LABELS
CAT_LABELS=(
  [zardinjere]="Betonske Zardinjere"
  [skulpture]="Betonske Skulpture"
  [fontane]="Betonske Fontane"
  [stubovi]="Stubovi i Balustrade"
  [ograde]="Betonske Ograde"
  [kamin-maske]="Kamin Maske"
  [okapnice]="Betonske Okapnice"
  [klupe]="Klupe i Stolovi"
  [letnjikovci]="Letnjikovci"
  [urbani-mobilijar]="Urbani Mobilijar"
  [saksije]="Betonske Saksije"
  [stepenista]="Betonska Stepenista"
  [spomenici]="Nadgrobni Spomenici"
  [ostali]="Ostali Proizvodi"
)

for slug label in "${(@kv)CAT_LABELS}"; do
  gen_svg "$BASE/categories/$slug.svg" 800 600 "$label"
done

# --- Product images (600x600) ---
typeset -A PRODUCTS
PRODUCTS=(
  [betonske-zardinjere]="athena-v120 venus-v80 diana-v100 roma-v60 olimp-v150"
  [betonske-skulpture-za-bastu]="lav orao devocka-sa-vrcom andjeo afrodita"
  [betonske-fontane]="neptun versaj kaskada rimska mali-vodoskok"
  [stubovi-i-balustrade]="korintski-stub jonski-stub balustrada-klasik stub-atlas kapitel-stub"
  [betonske-ograde]="ograda-klasik ograda-moderna ograda-barok ograda-rustik"
  [kamin-maske]="kamin-versaj kamin-klasik kamin-modern"
  [betonske-okapnice]="okapnica-profilisana okapnica-ravna okapnica-ukrasna"
  [betonske-klupe-i-stolovi]="klupa-park klupa-moderna sto-okrugli klupa-sa-naslonom"
  [letnjikovci]="letnjikovac-rimski letnjikovac-moderni letnjikovac-klasik"
  [urbani-mobilijar]="kanta-za-smece stubic-parkovni jardinijera-urbana klupa-urbana"
  [betonske-saksije]="saksija-kugla saksija-konus saksija-pravougaona saksija-oval"
  [betonska-stepenista]="stepeniste-klasicno stepeniste-moderno stepeniste-spiralno"
  [nadgrobni-spomenici]="spomenik-krst spomenik-andjeo spomenik-klasik"
  [ostali-proizvodi]="ukrasni-kamen betonski-cvet dekorativna-ploca"
)

prettify() {
  echo "$1" | sed 's/-/ /g' | awk '{for(i=1;i<=NF;i++) $i=toupper(substr($i,1,1)) tolower(substr($i,2))}1'
}

for cat prods in "${(@kv)PRODUCTS}"; do
  for product in ${(s: :)prods}; do
    label=$(prettify "$product")
    gen_svg "$BASE/products/$cat/${product}-1.svg" 600 600 "$label"
    gen_svg "$BASE/products/$cat/${product}-2.svg" 600 600 "$label" "Pogled 2"
    gen_svg "$BASE/gallery/$cat/${product}.svg" 800 600 "$label" "Galerija"
  done
done

# --- Client logos (200x80) ---
for i in 1 2 3 4 5 6; do
  gen_svg "$BASE/clients/klient-$i.svg" 200 80 "Klijent $i"
done

# Summary
echo "=== SVG Placeholder Generation Complete ==="
echo "Generated SVG files:"
find "$BASE" -name "*.svg" | wc -l | tr -d ' '
echo "Total size:"
du -sh "$BASE"
