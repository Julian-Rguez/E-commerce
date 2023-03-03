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
            <div className="details">detail
                <Link className="ul-nav-home" to='/home' onClick={() => handleDispatch()}>Home</Link>
                <h3>Details:</h3>
                <p>Name: {details[0].name}</p>
                <p>Price: {details[0].price}</p>
                <p>Discount: {details[0].discount}</p>
                <p>Review: {details[0].review}</p>
                <p>Type: {details[0].type}</p>
                <p>Fat: {details[0].fat}</p>
                <p>Sodium:{details[0].sodium}</p>
                <p>Sugar: {details[0].sugar}</p>
                <p>Description: {details[0].description}</p>
                <p></p>
                <p></p>
            </div>
        </div>
    )



}
 


export default Details;