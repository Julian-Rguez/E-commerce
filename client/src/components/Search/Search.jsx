import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { setSearch } from '../../Redux/Actions/Actions'

function Search() {
    const dispatch = useDispatch()
    const [foods, setFoods] = useState('')


    function handleFood(e) {
        e.preventDefault();
        setFoods(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(setSearch(foods))
        setLocation('')
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    type='search'
                    value={foods}
                    placeholder='Search foods'
                    onChange={(e) => handleFood(e)}
                />

                <button type='submit'>Search</button>
            </form>
        </div>
    )
}

export default Search;