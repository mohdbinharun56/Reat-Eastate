// Local Storage get

import { toast } from "react-toastify";

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
        toast.success("Successfully saved into My Lists");
    }else{
        console.log("This eastate already saved in My Lists");
        toast.error("Already saved in My Lists");
    }

}

export {setItem,getList};