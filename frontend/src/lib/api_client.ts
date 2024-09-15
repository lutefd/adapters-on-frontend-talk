import type { User, UserAlternative } from "./interfaces";

const API_BASE_URL = "http://localhost:23940";

export const getUsersV1 = async (): Promise<User[]> => {
  const response = await fetch(`${API_BASE_URL}/api/v1/users`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

export const getUsersV2 = async (): Promise<UserAlternative[]> => {
  const response = await fetch(`${API_BASE_URL}/api/v2/users`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};
