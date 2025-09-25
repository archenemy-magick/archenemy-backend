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
} as const;
