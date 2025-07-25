export type User = {
  
  username: string;
  avtar?: string; 
  
} | null;

export type LoginResponse = {
  token: string;
  user: User;
};

export type AuthContextType = {
  user: User;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  adminLogin: (email: string, password: string) => Promise<void>;
  AdminSignUp: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isvalidate: boolean;
};

export const defaultAuthContext: AuthContextType = {
  user: null,
  login: async () => {},
  signup: async () => {},
  adminLogin: async () => {},
  AdminSignUp: async () => {},
  logout: () => {},
  isvalidate: false,
};
