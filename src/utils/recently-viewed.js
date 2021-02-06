export const addRecentlyViewedItem = (recentItems, recentIitemToAdd) => {
  const existingCartItem = recentItems.find(
    (item) => item.id === recentIitemToAdd.id
  );

  if (existingCartItem) {
    return recentItems;
  }

  return [...recentItems, recentIitemToAdd];
};
