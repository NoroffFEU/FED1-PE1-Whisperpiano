import { deletePost } from "../api/blog/deletePost.mjs";
import { loadFivePosts } from "./adminPanel.mjs";

export function loadDeleteBtn() {
  const deleteButtons = document.querySelectorAll(".delete-btn");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", removePost);
  });
}

async function removePost(event) {
    const dataID = event.target.getAttribute("data-post-id");
    try {
        const deletedPost = await deletePost(dataID);
        await loadFivePosts();
    } catch (error) {
        console.error(error);
    } 
}