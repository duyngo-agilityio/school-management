// With next-auth: 5.0.0-beta.18 current yet support for testing with jest when import

import { MOCK_USER_SESSION } from "../../src/mocks";

const NextAuth = () => ({
  signIn: () => {},
  signOut: () => {},
  auth: async () => ({ user: MOCK_USER_SESSION }),
  handlers: () => {},
});

export default NextAuth;
