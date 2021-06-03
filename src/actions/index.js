import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash'

export const fetchPostAndUser = () => async (dispatch, getState) => {
 await dispatch(fetchPosts());
 const userId = _.uniq(_.map(getState().posts,'userId'))
 userId.forEach(id=>dispatch(fetchUser(id)));
}

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = (id) => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({type: 'FETCH_USER', payload: response.data})
};

// export const fetchUser = id => dispatch => _fetchUser(id,dispatch);
// const _fetchUser = _.memoize(async (id,dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({ type: 'FETCH_USER', payload: response.data })
// });


// BAD APPROACH
// export const fetchPosts = async () => {
//     const response = await jsonPlaceholder.get('/posts')
//     return {
//         type: 'FETCH_POSTS',
//         payload: response
//     };
// };