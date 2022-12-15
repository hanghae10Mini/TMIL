import axios from 'axios';

const getCommentAuth = async (payload) => {
  const response = await axios
    .post(`http://localhost:3001/auth/comments/${payload.id}`, {
      password: payload.password,
    })
    .then((res) => {
      return res.data;
    });
  return response;
};

const getPostAuth = async (payload) => {
  const response = await axios
    .post(`http://localhost:3001/auth/posts/${payload.id}`, {
      password: payload.password,
    })
    .then((res) => {
      console.log(res);
      // return res.data;
    });
  return response;
};

export { getCommentAuth, getPostAuth };
