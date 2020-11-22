const mockSFWhiteCard = {
  object: "list",
  totalCards: 3675,
  hasMoreCards: true,
  urlNextPage:
    "https://api.scryfall.com/cards/search?format=json&include_extras=false&include_multilingual=false&order=name&page=2&q=w&unique=cards",
  data: [
    {
      object: "card",
      id: "567dbc64-4d59-4bab-a551-08fc66c085fa",
      oracle_id: "5146ba3f-2c5f-4a86-95d7-a34ce1e842b0",
      multiverse_ids: [],
      mtgo_id: 85312,
      tcgplayer_id: 226989,
      cardmarket_id: 512800,
      name: "Abomination of Llanowar",
      lang: "en",
      released_at: "2020-11-20",
      uri:
        "https://api.scryfall.com/cards/567dbc64-4d59-4bab-a551-08fc66c085fa",
      scryfall_uri:
        "https://scryfall.com/card/cmr/265/abomination-of-llanowar?utm_source=api",
      layout: "normal",
      highres_image: false,
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/5/6/567dbc64-4d59-4bab-a551-08fc66c085fa.jpg?1604537268",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/5/6/567dbc64-4d59-4bab-a551-08fc66c085fa.jpg?1604537268",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/5/6/567dbc64-4d59-4bab-a551-08fc66c085fa.jpg?1604537268",
        png:
          "https://c1.scryfall.com/file/scryfall-cards/png/front/5/6/567dbc64-4d59-4bab-a551-08fc66c085fa.png?1604537268",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/5/6/567dbc64-4d59-4bab-a551-08fc66c085fa.jpg?1604537268",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/5/6/567dbc64-4d59-4bab-a551-08fc66c085fa.jpg?1604537268",
      },
      mana_cost: "{1}{B}{G}",
      cmc: 3.0,
      type_line: "Legendary Creature — Elf Horror",
      oracle_text:
        "Vigilance; menace (This creature can't be blocked except by two or more creatures.)\nAbomination of Llanowar's power and toughness are each equal to the number of Elves you control plus the number of Elf cards in your graveyard.",
      power: "*",
      toughness: "*",
      colors: ["B", "G"],
      color_identity: ["B", "G"],
      keywords: ["Vigilance", "Menace"],
      legalities: {
        standard: "not_legal",
        future: "not_legal",
        historic: "not_legal",
        pioneer: "not_legal",
        modern: "not_legal",
        legacy: "legal",
        pauper: "not_legal",
        vintage: "legal",
        penny: "not_legal",
        commander: "legal",
        brawl: "not_legal",
        duel: "not_legal",
        oldschool: "not_legal",
      },
      games: ["paper", "mtgo"],
      reserved: false,
      foil: true,
      nonfoil: true,
      oversized: false,
      promo: false,
      reprint: false,
      variation: false,
      set: "cmr",
      set_name: "Commander Legends",
      set_type: "draft_innovation",
      set_uri:
        "https://api.scryfall.com/sets/39de6fbf-1f11-48d0-8f04-f0407f6a0732",
      set_search_uri:
        "https://api.scryfall.com/cards/search?order=set&q=e%3Acmr&unique=prints",
      scryfall_set_uri: "https://scryfall.com/sets/cmr?utm_source=api",
      rulings_uri:
        "https://api.scryfall.com/cards/567dbc64-4d59-4bab-a551-08fc66c085fa/rulings",
      prints_search_uri:
        "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A5146ba3f-2c5f-4a86-95d7-a34ce1e842b0&unique=prints",
      collector_number: "265",
      digital: false,
      rarity: "uncommon",
      flavor_text:
        '"Run!" screamed its living mouths. "Come!" cried its dead ones.',
      card_back_id: "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
      artist: "Vincent Proce",
      artist_ids: ["d82b1138-76d3-49f7-9d8c-bc2e2d3e0b0a"],
      illustration_id: "4af5325b-c0bf-427c-a06e-97238316fa7d",
      border_color: "black",
      frame: "2015",
      frame_effects: ["legendary"],
      full_art: false,
      textless: false,
      booster: true,
      story_spotlight: false,
      edhrec_rank: 12813,
      preview: {
        source: "LigaMagic",
        source_uri: "https://www.ligamagic.com.br/?view=artigos/view&aid=3610",
        previewed_at: "2020-11-02",
      },
      prices: {
        usd: "0.12",
        usd_foil: "0.46",
        eur: "0.20",
        eur_foil: "0.76",
        tix: null,
      },
      related_uris: {
        tcgplayer_decks:
          "https://decks.tcgplayer.com/magic/deck/search?contains=Abomination+of+Llanowar&page=1&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
        edhrec: "https://edhrec.com/route/?cc=Abomination+of+Llanowar",
        mtgtop8:
          "https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Abomination+of+Llanowar",
      },
      purchase_uris: {
        tcgplayer:
          "https://shop.tcgplayer.com/product/productsearch?id=226989&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
        cardmarket:
          "https://www.cardmarket.com/en/Magic/Products/Singles/Commander-Legends/Abomination-of-Llanowar?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
        cardhoarder:
          "https://www.cardhoarder.com/cards/85312?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall",
      },
    },
  ],
};

const mockFilteredWhiteCard = {
  totalCards: 3675,
  hasMoreCards: true,
  urlNextPage: "https://api.scryfall.com/cards/search?format=json&include_extras=false&include_multilingual=false&order=name&page=2&q=w&unique=cards",
  cards: [
    {
      cardId: "567dbc64-4d59-4bab-a551-08fc66c085fa",
      name: "Abomination of Llanowar",
      lang: "en",
      image_uris: {
        small:
          "https://c1.scryfall.com/file/scryfall-cards/small/front/5/6/567dbc64-4d59-4bab-a551-08fc66c085fa.jpg?1604537268",
        normal:
          "https://c1.scryfall.com/file/scryfall-cards/normal/front/5/6/567dbc64-4d59-4bab-a551-08fc66c085fa.jpg?1604537268",
        large:
          "https://c1.scryfall.com/file/scryfall-cards/large/front/5/6/567dbc64-4d59-4bab-a551-08fc66c085fa.jpg?1604537268",
        png:
          "https://c1.scryfall.com/file/scryfall-cards/png/front/5/6/567dbc64-4d59-4bab-a551-08fc66c085fa.png?1604537268",
        art_crop:
          "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/5/6/567dbc64-4d59-4bab-a551-08fc66c085fa.jpg?1604537268",
        border_crop:
          "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/5/6/567dbc64-4d59-4bab-a551-08fc66c085fa.jpg?1604537268",
      },
      prices: {
        usd: "0.12",
        usd_foil: "0.46",
        eur: "0.20",
        eur_foil: "0.76",
        tix: null,
      },
    },
  ],
};
const mockPossibleCardsWithAba = {
  object: "catalog",
  total_values: 20,
  data: [
    "Abandon Hope",
    "Abattoir Ghoul",
    "Abandon Reason",
    "Abandoned Outpost",
    "Abandoned Sarcophagus",
    "Amugaba",
    "Ali Baba",
    "Aura Barbs",
    "Anaba Shaman",
    "Anaba Ancestor",
    "Alabaster Wall",
    "Alabaster Mage",
    "Ana Battlemage",
    "Al-abara's Carpet",
    "Alabaster Kirin",
    "Alabaster Leech",
    "Anaba Bodyguard",
    "Araba Mothrider",
    "Alabaster Dragon",
    "Alabaster Potion",
  ],
};

module.exports = {
  mockFilteredWhiteCard,
  mockSFWhiteCard,
  mockPossibleCardsWithAba,
};
