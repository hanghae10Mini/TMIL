import moment from 'moment';
import 'moment/locale/ko';

moment.locale('ko');

const currentTime = () => {
  const format = 'YYYY-MM-DD HH:mm:ss';
  const date = new Date();
  return moment(date).format(format);
};

const elapsedTime = (date) => {
  return moment(date).fromNow();
};

export { currentTime, elapsedTime };
