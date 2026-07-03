const BASE_URL =
  "https://6a3e9fa70443193a1a0c25c2.mockapi.io/challenges";
  

export async function getChallenges() {
  try {
    const response = await fetch(BASE_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch challenges");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getChallengeById(id) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);

    if (!response.ok) {
      throw new Error("Challenge not found");
    }

    return await response.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}