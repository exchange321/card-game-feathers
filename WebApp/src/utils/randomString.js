/**
 * Created by Wayuki on 02-Mar-17.
 */
const s = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const slen = s.length;

export default len => {
  Array.apply(null, new Array(len)).map(() => s.charAt(Math.floor(Math.random() * slen))).join('');
};
