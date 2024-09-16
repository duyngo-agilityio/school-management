import { createContext } from "react";

export const useSession = () => ({
  data: {
    user: {
      token: "access-token",
      email: "user@gmail.com",
      id: "1",
      name: "User",
    },
    expires: Date.now().toString(),
  },
  status: "authenticated",
  update: async () => null,
});

export type Session = {
  data: {
    user: {
      token: string;
      email: string;
      id: string;
      name: string;
    };
    expires: string;
  };
  status: "loading" | "authenticated" | "unauthenticated";
  update: (data?: Session) => Promise<Session | null>;
};

const INITIAL_SESSION: Session = {
  data: {
    user: {
      token: "access-token",
      email: "user@gmail.com",
      id: "1",
      name: "User",
    },
    expires: Date.now().toString(),
  },
  status: "authenticated",
  update: async () => null,
};

const SessionContext = createContext(INITIAL_SESSION);

export const SessionProvider = ({ children }: React.PropsWithChildren) => {
  <SessionContext.Provider value={INITIAL_SESSION}>
    {children}
  </SessionContext.Provider>;
};
