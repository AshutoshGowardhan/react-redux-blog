import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};


// BAD APPROACH
// export const fetchPosts = async () => {
//     const response = await jsonPlaceholder.get('/posts')
//     return {
//         type: 'FETCH_POSTS',
//         payload: response
//     };
// };