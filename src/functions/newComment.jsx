export default function newComment(commentText, thisPostId) {
  const nowTime = new Intl.DateTimeFormat('ko', {
    hourCycle: 'h23',
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  return {
    ...commentText,
    createdAt: nowTime.format(new Date()).replace('. ', '/').replace('. ', '/').replace('. ', ' '),
    postId: thisPostId * 1,
  };
}
