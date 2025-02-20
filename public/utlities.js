// Local Storage get

const getList = () => {
    const getItem = localStorage.getItem("EastateList");
    if (getItem) {
        return JSON.parse(getItem);
    }
    return [];
}


// local storage set

const setItem = (id) => {
    const getItem = getList();
    const exist = getItem.find(itemId => itemId === id);
    if (!exist) {
        getItem.push(id);
        localStorage.setItem("EastateList", JSON.stringify(getItem));
        return true;
    } else {
        console.log("This eastate already saved in My Lists");
        return false;
    }

}

// delete specific item and set rest of the item

const deleteItem = (id) => {
    const getItem = getList();
    console.log(getItem); // [2,3]

    if (getItem.includes(id)) {
        console.log("Delete item from MY lists");
        const restItems = getItem.filter(item => item !== id);
        // console.log(restItem);
        localStorage.removeItem("EastateList");
        restItems.map(restItem => {
            console.log(restItem);
            setItem(restItem);
        });
        return true;

    } else {
        console.log("This Item is not set into MY lists");
        return false;
    }
}

export { setItem, getList, deleteItem };