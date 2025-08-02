const getStoredReadList = () => {
  const storedListStr = localStorage.getItem("read-list");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const addToStoreReadList = (id) => {
  const storedList = getStoredReadList();
  if (storedList.includes(id)) {
    console.log(id, "already exists");
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("read-list", storedListStr);
  }
};

const getStoredWishlist = () => {
  const storedWishStr = localStorage.getItem("selim");
  if (storedWishStr) {
    const storedWishList = JSON.parse(storedWishStr);
    return storedWishList;
  } else {
    return [];
  }
};
const addToWishlist = (id) => {
  const storedWish = getStoredWishlist();
  if (storedWish.includes(id)) {
    alert(id + " already exists");

  } else {
    storedWish.push(id);
    const storedWishStr = JSON.stringify(storedWish);
    localStorage.setItem("selim", storedWishStr);
  }
};
export { addToStoreReadList };
export { addToWishlist };
export { getStoredReadList };
export { getStoredWishlist };
