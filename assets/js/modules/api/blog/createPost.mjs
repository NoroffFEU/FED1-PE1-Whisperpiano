import { API_BASE_URL, BLOG_ENDPOINTS } from "../../../utils/constants.mjs";

// Create post
export async function createPost(name, token, title, body, tags, media) {
  const url = `${API_BASE_URL}${BLOG_ENDPOINTS.POSTS_BY_USER(name)}`;

  const data = {
    title: title,
    body: body,
    tags: [tags],
    media: media,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Failed to create post");
    }
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}
