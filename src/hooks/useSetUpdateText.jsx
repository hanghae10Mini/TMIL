import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostById } from '../redux/modules/postSlice';
import { changeTitle, changeName, changeContents } from '../redux/modules/postTextSlice';

export default function useSetUpdateText(postId) {
  const post = useSelector((state) => state.post.post); // db에 담겨있는 post입니다.

  const dispatch = useDispatch();
  useEffect(() => {
    if (postId) {
      dispatch(getPostById(postId));
    }
  }, []);

  useEffect(() => {
    if (postId) {
      dispatch(changeTitle(post.title));
      dispatch(changeName(post.name));
      dispatch(changeContents(post.contents));
    }
  }, [post]);
}
