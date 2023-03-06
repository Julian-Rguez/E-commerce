import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getfilterFoods } from "../../Redux/Actions/Actions";

export default function Search({offilter}) {
    let [search,setsearch] = useState("")

    const allfoods = useSelector ((state) => state.allFoods);
    const dispatch = useDispatch();
    function close(e){
        e.preventDefault();
        setsearch ("")  
    }
    function searchch(e) {
        offilter();
        e.preventDefault();
        setsearch (e.target.value)          
        let data =[]
        if (e.target.value !== ""){  
            allfoods.map((food)=>{
                if (food.name.toLowerCase().includes (e.target.value.toLowerCase()))   data.push(food);
            })
        }
        else{
            data=[]
            data = allfoods;
        }        
        dispatch(getfilterFoods(data))
    }
    return (
        <div>            
            <div className="filteTittle">Search</div>
            <input type="text" className="filteSubTitletxt" value={search} onBlur ={(e)=>close(e)} onChange={(e)=>searchch(e)}/> <br />
        </div>
    )
}