import { API_BASE_URL, AUTH_ENDPOINTS, BASE_URL, URLs } from "../../../utils/constants.mjs";
import {
  EmailError,
  PasswordError,
  APIError,
} from "../../../utils/errorHandling.mjs";
import { redirectToIndexPage } from "../../../utils/redirect.mjs";
import { login } from "../../components/adminBar.mjs";
import { displayError } from "../../components/errorDisplay.mjs";

// Login User
export async function loginUser(email, password) {
  // Handling email errors
  const emailError = new EmailError("The email value must be a valid stud.noroff.no email address.");
  if (!email || !emailError.regex.test(email)) {
    displayError(emailError);
  }

  // Handling password errors
  const passwordError = new PasswordError("The password value must be at least 8 characters.");
  if (!password || password.length < 8) {
    displayError(passwordError);
  }

  const url = `${API_BASE_URL}${AUTH_ENDPOINTS.LOGIN}`;

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

    login(token);
    return token;
  } catch (error) {
    console.error(error);
  }
}
