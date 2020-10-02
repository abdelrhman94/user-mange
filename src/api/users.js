import { DOC_ROOT } from '../constants';

export const getUsers = async (page = 1) => {
  const endPoint = `${DOC_ROOT}/users?page=${page}`;
  let users = await fetch(endPoint, { method: 'GET' });
  return users;
};

export const addUser = async (state) => {
  const endPoint = `${DOC_ROOT}/users`;
  let user = fetch(endPoint, {
    method: 'POST',
    body: JSON.stringify({
      ...state,
    }),
  });

  return user;
};
