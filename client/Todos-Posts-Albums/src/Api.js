import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/",
});

// const handleError = (error) => {
//   console.error('API request error:', error);
//   throw error;
// };

// export const getAllData = async (url) => {
//   try {
//     const response = await api.get(url);
//     return response.data;
//   } catch (error) {
//     return handleError(error);
//   }
// };

// export const addItem = async (url, newItem) => {
//   try {

//     const response = await api.post(url, newItem);
//     return response.data;
//   } catch (error) {
//     return handleError(error);
//   }
// };

// export const deleteItem = async (itemType,itemId) => {
//   try {
//     await api.delete(`/${itemType}/${itemId}`);
//     console.log(`Deleted ${itemType} with ID ${itemId}`);
//   } catch (error) {
//     return handleError(error);
//   }
// };

// export const updatePost = async (postId, updatedBody) => {
//   try {
//     await api.patch(`/posts/${postId}`, { body: updatedBody });
//     console.log(`Updated post with ID ${postId}`);
//   } catch (error) {
//     return handleError(error);
//   }
// };
export default api;
