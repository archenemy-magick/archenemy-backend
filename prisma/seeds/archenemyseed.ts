// prisma/seed-data/users.ts
import { PrismaClient } from "@prisma/client";

export async function seedArchenemyCards(prisma: PrismaClient) {
  await prisma.archenemyCard.createMany({
    data: [
      {
        object: "card",
        id: "6fdcf1f6-6cb5-467e-90ed-66d7c51ff485",
        oracle_id: "b4b56a27-3c7c-49b4-9dea-1122853cc0fb",
        multiverse_ids: [212591],
        tcgplayer_id: 37091,
        cardmarket_id: 240533,
        name: "Approach My Molten Realm",
        lang: "en",
        released_at: "2010-06-18",
        uri: "https://api.scryfall.com/cards/6fdcf1f6-6cb5-467e-90ed-66d7c51ff485",
        scryfall_uri:
          "https://scryfall.com/card/oarc/3%E2%98%85/approach-my-molten-realm?utm_source=api",
        layout: "scheme",
        highres_image: true,
        image_status: "highres_scan",
        image_uris: {
          small:
            "https://cards.scryfall.io/small/front/6/f/6fdcf1f6-6cb5-467e-90ed-66d7c51ff485.jpg?1562252563",
          normal:
            "https://cards.scryfall.io/normal/front/6/f/6fdcf1f6-6cb5-467e-90ed-66d7c51ff485.jpg?1562252563",
          large:
            "https://cards.scryfall.io/large/front/6/f/6fdcf1f6-6cb5-467e-90ed-66d7c51ff485.jpg?1562252563",
          png: "https://cards.scryfall.io/png/front/6/f/6fdcf1f6-6cb5-467e-90ed-66d7c51ff485.png?1562252563",
          art_crop:
            "https://cards.scryfall.io/art_crop/front/6/f/6fdcf1f6-6cb5-467e-90ed-66d7c51ff485.jpg?1562252563",
          border_crop:
            "https://cards.scryfall.io/border_crop/front/6/f/6fdcf1f6-6cb5-467e-90ed-66d7c51ff485.jpg?1562252563",
        },
        mana_cost: "",
        cmc: 0,
        type_line: "Scheme",
        oracle_text:
          "When you set this scheme in motion, until your next turn, if a source would deal damage, it deals double that damage instead.",
        colors: [],
        color_identity: [],
        keywords: [],
        legalities: {
          standard: "not_legal",
          future: "not_legal",
          historic: "not_legal",
          timeless: "not_legal",
          gladiator: "not_legal",
          pioneer: "not_legal",
          modern: "not_legal",
          legacy: "not_legal",
          pauper: "not_legal",
          vintage: "not_legal",
          penny: "not_legal",
          commander: "not_legal",
          oathbreaker: "not_legal",
          standardbrawl: "not_legal",
          brawl: "not_legal",
          alchemy: "not_legal",
          paupercommander: "not_legal",
          duel: "not_legal",
          oldschool: "not_legal",
          premodern: "not_legal",
          predh: "not_legal",
        },
        games: ["paper"],
        reserved: false,
        game_changer: false,
        foil: false,
        nonfoil: true,
        finishes: ["nonfoil"],
        oversized: true,
        promo: false,
        reprint: false,
        variation: false,
        set_id: "238beedf-1d4d-475f-a980-527ba2f55dc6",
        set: "oarc",
        set_name: "Archenemy Schemes",
        set_type: "archenemy",
        set_uri:
          "https://api.scryfall.com/sets/238beedf-1d4d-475f-a980-527ba2f55dc6",
        set_search_uri:
          "https://api.scryfall.com/cards/search?order=set&q=e%3Aoarc&unique=prints",
        scryfall_set_uri: "https://scryfall.com/sets/oarc?utm_source=api",
        rulings_uri:
          "https://api.scryfall.com/cards/6fdcf1f6-6cb5-467e-90ed-66d7c51ff485/rulings",
        prints_search_uri:
          "https://api.scryfall.com/cards/search?order=released&q=oracleid%3Ab4b56a27-3c7c-49b4-9dea-1122853cc0fb&unique=prints",
        collector_number: "3★",
        digital: false,
        rarity: "common",
        flavor_text:
          '"It\'s a dragon-infested lavascape of notorious peril. Make yourselves at home."',
        card_back_id: "1b2396d4-9048-439d-96bd-354288518841",
        artist: "Jim Pavelec",
        artist_ids: ["1431bdd4-c187-40ea-847a-e1dcd835598a"],
        illustration_id: "71e3f3c3-fcad-42a8-9650-e4835f6ab531",
        border_color: "black",
        frame: "2003",
        full_art: false,
        textless: false,
        booster: false,
        story_spotlight: false,
        prices: {
          usd: "9.55",
          usd_foil: null,
          usd_etched: null,
          eur: "4.15",
          eur_foil: null,
          tix: null,
        },
        related_uris: {
          gatherer:
            "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=212591&printed=false",
          tcgplayer_infinite_articles:
            "https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api&trafcat=tcgplayer.com%2Fsearch%2Farticles&u=https%3A%2F%2Fwww.tcgplayer.com%2Fsearch%2Farticles%3FproductLineName%3Dmagic%26q%3DApproach%2BMy%2BMolten%2BRealm",
          tcgplayer_infinite_decks:
            "https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api&trafcat=tcgplayer.com%2Fsearch%2Fdecks&u=https%3A%2F%2Fwww.tcgplayer.com%2Fsearch%2Fdecks%3FproductLineName%3Dmagic%26q%3DApproach%2BMy%2BMolten%2BRealm",
          edhrec: "https://edhrec.com/route/?cc=Approach+My+Molten+Realm",
        },
        purchase_uris: {
          tcgplayer:
            "https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api&u=https%3A%2F%2Fwww.tcgplayer.com%2Fproduct%2F37091%3Fpage%3D1",
          cardmarket:
            "https://www.cardmarket.com/en/Magic/Products?idProduct=240533&referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
          cardhoarder:
            "https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=Approach+My+Molten+Realm&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall",
        },
      },
      {
        object: "card",
        id: "ced0976e-b855-4491-ae16-7280be818ab9",
        oracle_id: "3bf0b82f-6333-4083-8e27-e5c191fb3d54",
        multiverse_ids: [675243],
        tcgplayer_id: 579085,
        name: "A Premonition of Your Demise",
        lang: "en",
        released_at: "2024-09-27",
        uri: "https://api.scryfall.com/cards/ced0976e-b855-4491-ae16-7280be818ab9",
        scryfall_uri:
          "https://scryfall.com/card/dsc/353/a-premonition-of-your-demise?utm_source=api",
        layout: "scheme",
        highres_image: true,
        image_status: "highres_scan",
        image_uris: {
          small:
            "https://cards.scryfall.io/small/front/c/e/ced0976e-b855-4491-ae16-7280be818ab9.jpg?1726285741",
          normal:
            "https://cards.scryfall.io/normal/front/c/e/ced0976e-b855-4491-ae16-7280be818ab9.jpg?1726285741",
          large:
            "https://cards.scryfall.io/large/front/c/e/ced0976e-b855-4491-ae16-7280be818ab9.jpg?1726285741",
          png: "https://cards.scryfall.io/png/front/c/e/ced0976e-b855-4491-ae16-7280be818ab9.png?1726285741",
          art_crop:
            "https://cards.scryfall.io/art_crop/front/c/e/ced0976e-b855-4491-ae16-7280be818ab9.jpg?1726285741",
          border_crop:
            "https://cards.scryfall.io/border_crop/front/c/e/ced0976e-b855-4491-ae16-7280be818ab9.jpg?1726285741",
        },
        mana_cost: "",
        cmc: 0,
        type_line: "Scheme",
        oracle_text:
          "When you set this scheme in motion, reveal the top two cards of your library and put them into your hand. When you reveal one or more nonland cards this way, this scheme deals damage equal to their total mana value to any target.",
        colors: [],
        color_identity: [],
        keywords: [],
        legalities: {
          standard: "not_legal",
          future: "not_legal",
          historic: "not_legal",
          timeless: "not_legal",
          gladiator: "not_legal",
          pioneer: "not_legal",
          modern: "not_legal",
          legacy: "not_legal",
          pauper: "not_legal",
          vintage: "not_legal",
          penny: "not_legal",
          commander: "not_legal",
          oathbreaker: "not_legal",
          standardbrawl: "not_legal",
          brawl: "not_legal",
          alchemy: "not_legal",
          paupercommander: "not_legal",
          duel: "not_legal",
          oldschool: "not_legal",
          premodern: "not_legal",
          predh: "not_legal",
        },
        games: ["paper"],
        reserved: false,
        game_changer: false,
        foil: false,
        nonfoil: true,
        finishes: ["nonfoil"],
        oversized: true,
        promo: false,
        reprint: false,
        variation: false,
        set_id: "4c822528-83c3-42c7-8708-dd1d37166819",
        set: "dsc",
        set_name: "Duskmourn: House of Horror Commander",
        set_type: "commander",
        set_uri:
          "https://api.scryfall.com/sets/4c822528-83c3-42c7-8708-dd1d37166819",
        set_search_uri:
          "https://api.scryfall.com/cards/search?order=set&q=e%3Adsc&unique=prints",
        scryfall_set_uri: "https://scryfall.com/sets/dsc?utm_source=api",
        rulings_uri:
          "https://api.scryfall.com/cards/ced0976e-b855-4491-ae16-7280be818ab9/rulings",
        prints_search_uri:
          "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A3bf0b82f-6333-4083-8e27-e5c191fb3d54&unique=prints",
        collector_number: "353",
        digital: false,
        rarity: "common",
        flavor_text: '"I will unravel you piece by piece."',
        card_back_id: "1b2396d4-9048-439d-96bd-354288518841",
        artist: "Jessica Fong",
        artist_ids: ["8c8ef7c7-ea98-4ec9-8ea7-5ed6d0357700"],
        illustration_id: "5dbac828-d5cc-40e6-881a-bf3575b3491a",
        border_color: "black",
        frame: "2015",
        full_art: false,
        textless: false,
        booster: false,
        story_spotlight: false,
        prices: {
          usd: "0.26",
          usd_foil: null,
          usd_etched: null,
          eur: null,
          eur_foil: null,
          tix: null,
        },
        related_uris: {
          gatherer:
            "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=675243&printed=false",
          tcgplayer_infinite_articles:
            "https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api&trafcat=tcgplayer.com%2Fsearch%2Farticles&u=https%3A%2F%2Fwww.tcgplayer.com%2Fsearch%2Farticles%3FproductLineName%3Dmagic%26q%3DA%2BPremonition%2Bof%2BYour%2BDemise",
          tcgplayer_infinite_decks:
            "https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api&trafcat=tcgplayer.com%2Fsearch%2Fdecks&u=https%3A%2F%2Fwww.tcgplayer.com%2Fsearch%2Fdecks%3FproductLineName%3Dmagic%26q%3DA%2BPremonition%2Bof%2BYour%2BDemise",
          edhrec: "https://edhrec.com/route/?cc=A+Premonition+of+Your+Demise",
        },
        purchase_uris: {
          tcgplayer:
            "https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api&u=https%3A%2F%2Fwww.tcgplayer.com%2Fproduct%2F579085%3Fpage%3D1",
          cardmarket:
            "https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall&searchString=A+Premonition+of+Your+Demise&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
          cardhoarder:
            "https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=A+Premonition+of+Your+Demise&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall",
        },
      },
    ],
  });
  console.log("Users seeded.");
}
