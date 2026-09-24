# 🎮 RPG → Three.js Multiplayer Design Atlas

> A reference guide for translating tabletop RPG systems, settings, mechanics, and tropes into browser-native multiplayer games using **HTML + JavaScript + Three.js + PeerJS**.

---

# 📑 Table of Contents

1. 🎲 RPG Systems
2. 🧙 Fantasy Worlds
3. 🚀 Science Fiction
4. 🤖 Mechs & War
5. 🕵️ Investigation
6. 👻 Horror Worlds
7. 🌆 Cyberpunk
8. 🦸 Superheroes
9. 🐺 Transformation
10. ⚔️ Old-School RPG
11. 🗺️ Exploration
12. 🏰 World Building
13. 🎭 Character Systems
14. ⚙️ Game Mechanics
15. 🧠 RPG Tropes
16. 🌐 Multiplayer
17. 🧊 Three.js Mapping
18. 🤖 Agent Players
19. 🏗️ Architecture
20. 🌌 Unified RPG Sim

---

# 1. 🎲 RPG Systems

The supplied catalog contains a surprisingly broad RPG design laboratory: fantasy,
science fiction, cyberpunk, horror, superheroes, military simulation, investigation,
miniatures, generic systems, and old-school dungeon games.

## 👾 Arkham Horror RPG

- 🎲 System: Arkham Horror RPG
- 👻 Dimension: supernatural horror
- 🕵️ Primary loop: investigation → discovery → danger
- 🧠 Trope: forbidden knowledge
- 🗺️ World: explorable mystery spaces
- 👥 Multiplayer: investigator party

### Titles

- 📕 The Thompson Files — Arkham Horror Bestiary
- 🎲 Arkham Horror RPG Dice Set
- 🕳️ Hungering Abyss — Starter Set
- 🏘️ Welcome to Promise — Starter Set

### Three.js Translation

- procedural haunted environments
- clue objects represented as interactive geometry
- shared investigation state
- environmental storytelling
- dynamic monsters
- player-specific discoveries
- synchronized PeerJS party exploration

---

## 🤖 BattleTech

- 🎲 System: BattleTech
- 🤖 Dimension: giant-mech warfare
- 🗺️ Core mechanic: terrain + positioning
- 🔥 Trope: machine versus machine
- 🧠 Strategy: heat, weapons, armor, movement
- 👥 Multiplayer: lance/team warfare

### Titles

- 🤖 Gray Death Legion Heavy Battle Lance
- 🌋 Hot Spots: Draconis Reach
- 🪖 Mercenaries Box Set
- ⚔️ 21st Centauri Lancers Command Lance
- 🛡️ McCarron's Armored Cavalry Assault Lance

### Battlefields

- 🌋 Fire & Ice 1 — Erupting Canyon
- 🌊 Fire & Ice 2 — Magma Fjords
- 🛰️ Fire & Ice 3 — Umber Station
- 🏔️ Fire & Ice 4 — Caldera Lake
- ❄️ Tundra / Grasslands
- 🌋 Volcanic

### Three.js Translation

This maps almost directly into a multiplayer Three.js simulation:

    Terrain
      ↓
    Mechs
      ↓
    Movement
      ↓
    Line of sight
      ↓
    Weapons
      ↓
    Damage
      ↓
    Persistent battlefield

Possible implementation:

    THREE.Terrain
    ├── Mech GLBs
    ├── destructible buildings
    ├── projectiles
    ├── particle weapons
    ├── heat simulation
    └── damage geometry

PeerJS:

    Player
      ↓
    Mech
      ↓
    Squad
      ↓
    Lance
      ↓
    Battlefield

---

## 🌸 Big Eyes, Small Mouth

- 🎲 System: BESM
- 🎨 Style: anime
- 🦸 Trope: exaggerated heroes
- ⚡ Mechanic: powers and abilities
- 🌌 Dimension: highly flexible worlds

### Titles

- 🌸 BESM 4th Edition — Imago

### Three.js Opportunity

Anime-style multiplayer worlds with:

- transformation states
- exaggerated physics
- powers
- companions
- vehicles
- giant robots
- flying
- energy attacks

---

# 2. 🧙 Fantasy Worlds

## 🐉 Dungeons & Dragons 5E

### Related Titles

- 🏰 Vault of Tsathzar Rho
- 🌊 Sailors of the Starless Sea
- 🧭 Northlands Sagas
- 🪄 Flumph's Catalogue of Magical Curiosities
- 🧝 Icons of the Realms: Drow Warband

### Fundamental Game Loop

    Explore
      ↓
    Encounter
      ↓
    Decide
      ↓
    Fight / Negotiate
      ↓
    Loot
      ↓
    Improve
      ↓
    Explore farther

### Three.js Mapping

    Player GLB
      ↓
    Party
      ↓
    Dungeon
      ↓
    World
      ↓
    Campaign

---

## 🐲 Dragonbane

### Titles

- 🪄 Dragonbane: Book of Magic
- 🌊 Arkland: City of Waves and Flames

### Tropes

- exploration
- magic
- monsters
- settlements
- wilderness
- character progression

---

## 🏰 Castles & Crusades

### Titles

- 🗺️ The Marmoreal Tomb Campaign Starter
- 🎒 Adventurer's Backpack
- 🌳 Beneath the Canopy Green
- 🏘️ Engineering Towns

### Interesting Design Dimension

This system highlights something especially useful for simulation design:

**the settlement itself becomes a game system.**

    Wilderness
       ↓
    Settlement
       ↓
    Town
       ↓
    Fortress
       ↓
    Kingdom

That can become procedural Three.js world generation.

---

## 🗡️ Tales of the Valiant

### Titles

- ❄️ Northlands Sagas
- ☠️ Death on the Styx
- 💰 Trade Secrets

### Design Dimensions

- travel
- commerce
- factions
- quests
- mythology
- regional cultures

---

# 3. 🚀 Science Fiction

## 🚀 Traveller

Traveller is particularly useful as a model for large-scale simulation.

### Titles

- 🚚 Cluster Truck
- 🌌 Traveller 2300AD: Invasion Part I
- ⚔️ Traveller 2300AD: Invasion Part II
- 🪖 Armies of the Fifth Frontier War
- 🌌 The Core Expeditions

### Fundamental Loop

    Character
       ↓
    Crew
       ↓
    Ship
       ↓
    Planet
       ↓
    Solar System
       ↓
    Star System
       ↓
    Sector
       ↓
    Galaxy

### Three.js Architecture

    Galaxy
    ├── Sector
    │   ├── Star
    │   │   ├── Planet
    │   │   ├── Moon
    │   │   └── Station
    │   └── Jump Routes
    │
    └── Players
        ├── Ships
        ├── Crews
        └── Factions

This is almost ideal for a hierarchical LOD simulation.

---

## 🌌 The Expanse

### Components

- 🚀 Transport Union
- 🪐 Laconian factions

### Core Tropes

- realistic spaceflight
- political factions
- stations
- ships
- resource competition
- crew survival

### Three.js Opportunity

Physics-oriented multiplayer:

    thrust
    rotation
    inertia
    docking
    EVA
    ship interiors
    stations
    orbital travel

---

# 4. 🌆 Cyberpunk

## 🌃 Cyberpunk RED

### Titles

- 🗺️ Night City 2045
- 🧩 Battle Maps & Tokens

### Core World Model

    Megacity
      ├── Corporations
      ├── Gangs
      ├── Citizens
      ├── Fixers
      ├── Police
      ├── Vehicles
      └── Networks

### Gameplay

    Mission
      ↓
    Travel
      ↓
    Infiltrate
      ↓
    Hack
      ↓
    Combat
      ↓
    Escape
      ↓
    Reputation

### Three.js Translation

Perfect foundation for:

- procedural city blocks
- vehicles
- apartments
- clubs
- corporate towers
- NPC crowds
- hacking overlays
- multiplayer gangs

---

## 🌐 Shadowrun

### Titles

- 🌆 Shadowrun Sixth World — Hong Kong
- 🚀 Explosive Decompression

### Unique Combination

Shadowrun combines:

    Fantasy
       +
    Cyberpunk
       +
    Magic
       +
    Hacking
       +
    Corporations
       +
    Urban exploration

This is an important hybrid-game pattern.

---

# 5. 🕵️ Investigation

## 🐙 Call of Cthulhu

### Titles

- 🏕️ Campfire Tales — Scouts Against Cthulhu
- 🌊 Miskatonic Tales — Journey to Innsmouth
- ⚙️ Pulp Cthulhu — Clockwork & Claws
- 📖 Keeper Companion

### Gameplay Loop

    Mystery
      ↓
    Clue
      ↓
    Investigation
      ↓
    Revelation
      ↓
    Danger
      ↓
    Consequence

### Multiplayer Opportunity

Different players can possess different information.

    Player A → clue A
    Player B → clue B
    Player C → clue C

                ↓

          Shared hypothesis

This produces naturally social multiplayer gameplay.

---

## 🟢 Delta Green

### Titles

- ⚔️ Delta Green: Holy War

### Tropes

- secret organizations
- investigation
- conspiracy
- supernatural threats
- hidden information

---

# 6. 👻 Horror Worlds

## 🌲 Old Gods of Appalachia

### Titles

- 🌊 Come Hell or High Water

### World Structure

    Landscape
       ↓
    Community
       ↓
    Myth
       ↓
    Hidden Force
       ↓
    Discovery

Excellent model for environmental storytelling.

---

## 📼 Magnus Archives

### Titles

- 📜 Make Your Statement
- 😱 Face Your Fears

### Mechanics

- stories as artifacts
- investigations
- interconnected mysteries
- recurring supernatural entities

---

# 7. 🦸 Superheroes

## 🦸 Marvel Multiverse RPG

### Titles

- 🌌 Secret Wars Expansion

### Three.js Design Dimensions

    Hero
    ├── movement
    ├── powers
    ├── transformations
    ├── equipment
    └── relationships

The important design problem is **power asymmetry**.

One player might:

- walk

while another can:

- fly

while another can:

- teleport

while another can:

- destroy buildings

The simulation therefore needs ability-driven physics.

---

# 8. 🐺 Transformation RPGs

## 🐺 Werewolf: The Apocalypse

### Titles

- 🌕 The Coming Destruction
- 🌎 Tribes of Gaia

### Character State

    Human
       ↕
    Hybrid
       ↕
    Werewolf

Each state can alter:

- GLB
- animation
- speed
- strength
- perception
- abilities
- NPC reactions

This maps beautifully to Three.js character-state machines.

---

# 9. ⚔️ Old-School RPG

## 💀 Old-School Essentials

### Titles

- 📖 Reference Booklet
- 👻 Whispers of a Dead God
- 🐎 Against the Horselord
- 🕳️ The Grotesques' Grotto

### Philosophy

    Explore
       ↓
    Risk
       ↓
    Discover
       ↓
    Survive
       ↓
    Reward

The world does not automatically scale to the player.

That creates meaningful exploration.

---

## 🎲 Dungeon Crawl Classics

### Titles

- 🌍 Tome of Adventure — Dying Earth
- 🌊 Sailors of the Starless Sea

### Tropes

- unpredictable magic
- dangerous exploration
- strange worlds
- lethal encounters

---

# 10. 🤡 Satirical RPG

## 🤖 Paranoia

### Titles

- 💧 Water, Water, Everywhere

### Multiplayer Mechanic

Players simultaneously:

- cooperate
- compete
- hide information
- obey authority
- betray each other

This suggests a useful PeerJS mechanic:

    Public State
        +
    Private State
        +
    Secret Objectives

---

# 11. ⚙️ Generic RPG Engines

## 🌐 GURPS

### Titles

- 📚 GURPS Basic Set Fourth Edition Revised

### Important Idea

Separate:

    WORLD

from:

    RULES

from:

    CHARACTER

This is useful for building a reusable Three.js RPG engine.

---

## 🔷 Cypher System

### Titles

- 🧑 Cypher Character Rulebook

### Design Principle

Characters and narrative mechanics can remain independent from world implementation.

---

# 12. 🎭 Character Dimensions

A reusable browser RPG should model characters across multiple dimensions.

    Character
    ├── 🧍 Body
    ├── ❤️ Health
    ├── 🧠 Mind
    ├── ⚡ Energy
    ├── 🎒 Inventory
    ├── 🪄 Abilities
    ├── 📚 Knowledge
    ├── 🤝 Relationships
    ├── 🏴 Faction
    ├── ⭐ Reputation
    ├── 🧭 Goals
    └── 📜 History

---

# 13. 🧠 RPG Trope Matrix

| Emoji | Trope | Three.js Representation |
|---|---|---|
| 🗺️ | Exploration | streamed world |
| ⚔️ | Combat | physics + hitboxes |
| 🧙 | Magic | particles + shaders |
| 🚀 | Spaceflight | 6DOF physics |
| 🤖 | Mechs | GLB vehicles |
| 🏰 | Kingdom | procedural settlements |
| 🧩 | Puzzle | interactive geometry |
| 🕵️ | Investigation | clue graph |
| 💰 | Economy | persistent resources |
| 🤝 | Diplomacy | relationship graph |
| 🌳 | Survival | environment simulation |
| 👻 | Horror | perception manipulation |
| 🦸 | Powers | ability components |
| 🐺 | Transformation | character state machines |
| 🧠 | Knowledge | player-specific state |
| 🏴 | Factions | multiplayer teams |
| 📜 | Quest | event graph |
| 🧭 | Travel | world graph |
| 🏆 | Progression | persistent character state |

---

# 14. 🎮 Universal RPG Loop

Most of these systems can be reduced to:

    EXPLORE
       ↓
    DISCOVER
       ↓
    DECIDE
       ↓
    ACT
       ↓
    CONSEQUENCE
       ↓
    CHANGE WORLD
       ↓
    EXPLORE AGAIN

This should be the heart of the simulation engine.

---

# 15. 🌐 PeerJS Multiplayer Model

PeerJS can synchronize **intent** rather than the entire Three.js scene.

    Browser A
       │
       │ PeerJS
       ▼
    Browser B
       │
       ▼
    Browser C

Transmit:

    playerID
    position
    rotation
    velocity
    animation
    action
    target
    health
    inventory changes
    world events

Avoid transmitting:

    every vertex
    every particle
    every frame

Each browser renders its own Three.js world.

---

# 16. 🧊 Three.js Entity Model

Everything can become an entity.

    Entity
    ├── Transform
    ├── Mesh
    ├── Physics
    ├── Animation
    ├── AI
    ├── Health
    ├── Inventory
    ├── Faction
    ├── Network
    └── Persistence

Example:

    PLAYER
      ↓
    GLB
      ↓
    Entity Components
      ↓
    Local Simulation
      ↓
    PeerJS State
      ↓
    Other Players

---

# 17. 🤖 Agent Players

AI agents can occupy the same abstraction as human players.

    PLAYER
      ├── Human
      └── Agent

Both produce:

    observe()
    think()
    choose()
    move()
    act()
    communicate()

That means the game does not fundamentally care whether a character is controlled by:

- 🧑 human
- 🤖 AI
- 🌐 remote PeerJS player
- 🎮 local bot
- 🧠 LLM agent

---

# 18. 🏗️ Browser RPG Architecture

    index.html

        ↓

    GAME ENGINE

    ├── Three.js Renderer
    ├── World Manager
    ├── Entity System
    ├── Character System
    ├── Physics
    ├── Combat
    ├── Inventory
    ├── Quest Engine
    ├── Agent Engine
    ├── PeerJS Multiplayer
    ├── Audio
    ├── Persistence
    └── UI

Everything can remain deployable as a static HTML/JS application.

---

# 19. 🌌 Hierarchical World Model

A particularly powerful synthesis of these RPG systems is:

    🌌 Universe
        ↓
    🌠 Galaxy
        ↓
    ⭐ Star System
        ↓
    🪐 Planet
        ↓
    🌍 Region
        ↓
    🏙️ City
        ↓
    🏘️ Neighborhood
        ↓
    🏠 Building
        ↓
    🚪 Room
        ↓
    📦 Object

At every scale:

    Players
    Agents
    Factions
    Quests
    Resources
    Events

can exist.

---

# 20. 🌐 RPG Dimensions

Instead of defining games strictly by genre, define them through dimensions.

## 🌍 World Dimension

    Room
    Dungeon
    City
    Region
    Planet
    Solar System
    Galaxy

## 👥 Social Dimension

    Individual
    Party
    Squad
    Guild
    Faction
    Civilization

## ⏱️ Time Dimension

    Seconds
    Battles
    Missions
    Days
    Campaigns
    Generations

## ⚔️ Conflict Dimension

    Puzzle
    Conversation
    Investigation
    Combat
    War
    Civilization

## 🧠 Intelligence Dimension

    Script
    State Machine
    Behavior Tree
    Agent
    LLM Agent
    Multi-Agent Society

---

# 21. 🧬 Genre Composition

Instead of
