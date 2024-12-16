const ROUTES = {
  HOME: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  COMUNITY: "/community",
  COLLECTION: "/collection",
  JOBS: "/find-jobs",
  TAGS: (id: string) => `/tags/${id}`,
  // TAGS: "/tags",
  PROFILE: (id: string) => `/profile/${id}`,
  // PROFILE: "/profile",
  QUESTION: (id: string) => `/question/${id}`,
  ASK_QUESTION: "/ask-a-question",
};

export default ROUTES;
