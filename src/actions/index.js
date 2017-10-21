export const updateUser = (k, v) => {
  return {
    type: 'update_user',
    key: k,
    value: v
  };
};
