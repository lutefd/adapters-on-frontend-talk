import type { User, UserAlternative } from "./interfaces";

export const adaptUser = (user: UserAlternative): User => ({
  id: user.user_id,
  name: user.full_name,
  email: user.contact,
});
