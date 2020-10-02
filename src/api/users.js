import { DOC_ROOT } from '../constants';

export const getUsers = async () => {
  const endPoint = `${DOC_ROOT}/users`;
  let users = await fetch(endPoint, { method: 'GET' });
  return users;
};
