import axios from 'axios';

const getCommentAuth = async (payload) => {
  const response = await axios
    .post(`https://tmil-server.vercel.app/auth/comments/${payload.id}`, {
      password: payload.password,
    })
    .then((res) => {
      return res.data;
    });
  return response;
};

const getPostAuth = async (payload) => {
  const response = await axios
    .post(`https://tmil-server.vercel.app/auth/posts/${payload.id}`, {
      password: payload.password,
    })
    .then((res) => {
      return res.data;
    });
  return response;
};

export { getCommentAuth, getPostAuth };
