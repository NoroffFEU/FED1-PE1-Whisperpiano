import { BASE_URL, AUTH_ENDPOINTS, BLOG_ENDPOINTS } from "./utils/constants.mjs";
import { registerUser } from "./modules/api/auth/register.mjs";
import { loginUser } from "./modules/api/auth/login.mjs";
import { getPostsByUser } from "./modules/api/blog/getAllPosts.mjs";
import { getPostByID } from "./modules/api/blog/getPostByID.mjs";
import { createPost } from "./modules/api/blog/createPost.mjs";
import { deletePost } from "./modules/api/blog/deletePost.mjs";
import { editPost } from "./modules/api/blog/editPost.mjs";







function main() {
  console.log("Hello world");
  // registerUser();
  loginUser("jesalb53435@stud.noroff.no", "IamTheAdmin");
  getPostsByUser()
  getPostByID("5e377326-5af3-42a8-8f92-ae57f31dae6d")
  editPost('6cd97ebb-a1b0-466e-88c1-f433ccf02282', 'Jesus_AH')
//   createPost("Jesus_AH")
    deletePost('a25b8b77-91c5-4273-a822-a06f6de11c2b', 'Jesus_AH')
  // registerUser('prukjlh1asdfad' , 'dfasfa@stud.noroff.no', 'asesesede');
}

main();

// email: "jesalb53435@stud.noroff.no",
//         password: "IamTheAdmin",