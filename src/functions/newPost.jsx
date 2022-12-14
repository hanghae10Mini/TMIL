export default function newPost(postText) {
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
    ...postText,
    views: 0,
    createdAt: nowTime.format(new Date()).replace('. ', '/').replace('. ', '/').replace('. ', ' '),
  };
}
