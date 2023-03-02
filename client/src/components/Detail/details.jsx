import React, { useEffect } from "react";
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { getDetail, getAllFoods } from '../../Redux/Actions/Actions'



function Details() {
    let { id } = useParams();
    const dispatch = useDispatch()
    const details = useSelector(state => state.details)


    const handleDispatch = () => {
        dispatch(getAllFoods())
    }

    useEffect(() => {
        dispatch(getDetail(id))
    }, [dispatch])


    return (
        <div className="background">
            <div className="details">
                <Link className="ul-nav-home" to='/home' onClick={() => handleDispatch()}>Home</Link>
                <h3>Details:</h3>
                <p>Name: {details.name}</p>
                <p>Price: {details.price}</p>
                <p>Discount: {details.discount}</p>
                <p>Review: {details.review}</p>
                <p>Type: {details.type}</p>
                <p>Fat: {details.fat}</p>
                <p>Sodium:{details.sodium}</p>
                <p>Sugar: {details.sugar}</p>
                <p>Description: {details.description}</p>
                <p></p>
                <p></p>
            </div>
        </div>
    )



}



export default Details;