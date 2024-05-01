import { BASE_URL, AUTH_ENDPOINTS } from "../../../utils/constants.mjs";
import { EmailError, PasswordError, APIError } from "../../../utils/errorHandling.mjs";

// Login User
export async function loginUser(email, password) {
  // Handling email errors
  const emailError = new EmailError(
    "The email value must be a valid stud.noroff.no email address."
  );
  if (!email || !emailError.regex.test(email)) {
    throw emailError;
  }

  // Handling password errors
  if (!password || password.length < 8) {
    throw new PasswordError(
      "The password value must be at least 8 characters."
    );
  }

  const url = `${BASE_URL}${AUTH_ENDPOINTS.LOGIN}`;

  const userData = {
    email: `${email}`,
    password: `${password}`,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new APIError("Invalid email or password");
    }
    const json = await response.json();
    const token = json.data.accessToken;
    console.log(token);
    return token;
  } catch (error) {
    console.error(error);
  }
}