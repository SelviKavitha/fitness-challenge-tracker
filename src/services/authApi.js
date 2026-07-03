const USER_API =
  "https://6a3e9fa70443193a1a0c25c2.mockapi.io/users";

export async function getUsers() {
  const response = await fetch(USER_API);
  return await response.json();
}

export async function registerUser(user) {
  const response = await fetch(USER_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  return await response.json();
}

export async function loginUser(email, password) {
  const users = await getUsers();

  return users.find(
    (user) =>
      user.email === email &&
      user.password === password
  );
}