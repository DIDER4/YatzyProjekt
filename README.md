# Yatzy Spil
<img width="730" height="876" alt="Skærmbillede 2025-11-20 194907" src="https://github.com/user-attachments/assets/9b2a16d9-22fc-4e81-ac28-5ee603f683d6" />


Et interaktivt Yatzy-spil bygget med HTML, CSS og JavaScript.

## 📋 Beskrivelse

Dette projekt er en webbaseret implementation af det klassiske terningspil Yatzy. Spillet indeholder en grafisk brugergrænseflade med animerede terninger, pointberegning og et komplet scoreboard.

## 🎮 Features

- **Interaktive terninger**: Klik på terningerne for at holde dem mellem kast
- **Automatisk pointberegning**: Systemet beregner automatisk point for alle kategorier
- **Bonus beregning**: Får automatisk bonus ved 63+ point i øverste sektion
- **Visuelt feedback**: Animationer og hover-effekter for bedre brugeroplevelse
- **Responsivt design**: Layoutet tilpasser sig forskellige skærmstørrelser

## 🛠️ Teknologier

- **HTML5**: Strukturering af spillet
- **CSS3**: Styling og animationer
- **JavaScript**: Spillogik og interaktivitet

## 📁 Projektstruktur

```
YatzyProjekt/
│
├── Application/
│   └── Application.js       # Spillogik og beregninger
│
├── GUI/
│   ├── GUI.html            # Hovedstruktur
│   ├── GUI.css             # Styling og animationer
│   ├── GUI.JS              # UI interaktioner
│   └── Images/             # Terningbilleder
│       ├── terning1.png
│       ├── terning2.png
│       ├── terning3.png
│       ├── terning4.png
│       ├── terning5.png
│       └── terning6.png
│
└── README.md
```

## 🚀 Kom i gang

1. **Klon repository:**
   ```bash
   git clone https://github.com/DIDER4/YatzyProjekt.git
   ```

2. **Åbn projektet:**
   Naviger til `GUI/GUI.html` og åbn filen i en webbrowser

3. **Spil:**
   - Klik på "Kast terninger" for at kaste
   - Klik på terninger for at holde dem
   - Vælg kategori ved at klikke på scorefelterne

## 🎯 Spilleregler

### Øvre sektion (1-6)
- **1-ere til 6-ere**: Sum af den valgte værdi
- **Bonus**: 50 point hvis sum ≥ 63

### Nedre sektion
- **Et par**: Sum af to ens terninger
- **To par**: Sum af to forskellige par
- **Tre ens**: Sum af tre ens terninger
- **Fire ens**: Sum af fire ens terninger
- **Fuldt hus**: Tre ens + et par = 25 point
- **Lille straight**: 1-2-3-4-5 = 15 point
- **Stor straight**: 2-3-4-5-6 = 20 point
- **Chance**: Sum af alle terninger
- **Yatzy**: Fem ens = 50 point

## 💻 Kode-highlights

### HTML
- Semantisk struktur med clear separation mellem game og scoreboard
- Accessibility features (role, tabindex)
- Data-attributter til state management

### CSS
- CSS Grid layout for responsive design
- Keyframe animationer for dynamiske effekter
- Hover og transition effekter for bedre UX

### JavaScript
- Modulær funktionsstruktur
- Automatisk beregning af alle scorekategorier
- Event handling for brugerinteraktion

## 🎨 Design-filosofi

Projektet fokuserer på:
- **Brugervenlighed**: Intuitiv interface med clear feedback
- **Visuel appel**: Farverige animationer og moderne design
- **Performance**: Optimeret kode uden unødvendige dependencies

## 📝 Fremtidige forbedringer

- [ ] Multiplayer support
- [ ] Highscore system
- [ ] Lydeffekter
- [ ] Mobil-optimering
- [ ] Forskellige sværhedsgrader

## 👥 Forfatter

**DIDER4**
- GitHub: [@DIDER4](https://github.com/DIDER4)
**NUTQUACK**
- GitHub: [@NUTQUACK](https://github.com/Nutquack)
**SARA STATOUA**
- GitHub: [@SARASTATOUA](https://github.com/sarastatoua)

## 📄 Licens

Dette projekt er lavet som skoleprojekt og er frit tilgængeligt til læring og inspiration.

## 🙏 Anerkendelser

- Terningbilleder: Custom designed for projektet
- Inspiration: Klassisk Yatzy spil

---

**Lavet med ❤️ som skoleprojekt**
