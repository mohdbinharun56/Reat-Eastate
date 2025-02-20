// Local Storage get

const getList = ()=>{
    const  getItem = localStorage.getItem("EastateList");
    if(getItem){
        return JSON.parse(getItem);
    }
    return [];
}


// local storage set

const setItem = (id) =>{
    const getItem = getList();
    const exist = getItem.find(itemId=> itemId === id);
    if(!exist){
        getItem.push(id);
        localStorage.setItem("EastateList",JSON.stringify(getItem));
    }else{
        console.log("This eastate already saved in Lists");
    }

}

export {setItem,getList};