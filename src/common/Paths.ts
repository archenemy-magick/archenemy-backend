export default {
  Base: "/api",
  Cards: {
    Base: "/cards",
    GetAllArchenemyCards: "/archenemy",
  },
  User: {
    Base: "/user",
    CheckIfEmailExists: "/check-email",
  },
  Decks: {
    Base: "/decks",
    GetAllDecks: "/all",
    GetDeckById: "/:deckId",
    GetByUserId: "/user/:userId",
  },
} as const;
