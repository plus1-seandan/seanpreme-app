export const removeFavoriteItem = (favItems, favItemToRemove) => {
  return favItems.filter((favItem) => favItem.id !== favItemToRemove.id);
};
