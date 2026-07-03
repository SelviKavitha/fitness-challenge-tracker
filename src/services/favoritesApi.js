import axios from "axios";

const USER_API =
  "https://6a3e9fa70443193a1a0c25c2.mockapi.io/users";

export const updateFavorites = async (
  userId,
  favorites
) => {
  const response = await axios.put(
    `${USER_API}/${userId}`,
    {
      favorites,
    }
  );

  return response.data;
};