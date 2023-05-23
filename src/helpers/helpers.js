export const localGetStorage = (key, defaultValue) =>
  JSON.parse(localStorage.getItem(key)) || defaultValue;

export const getFiltredUsers = (filter, followers) => {
  switch (filter) {
    case 'follow':
      return followers.filter(
        user => JSON.parse(localStorage.getItem(`key${user.id}`)) !== true
      );
    case 'following':
      return followers.filter(
        user => JSON.parse(localStorage.getItem(`key${user.id}`)) === true
      );
    case 'showAll':
      return followers;
    default:
      break;
  }
};
