import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail } from '../../Redux/Actions/Actions';
import NavBar from '../Nav/NavBar';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';
import './details.css';

function Details() {
	let { id } = useParams();
	const dispatch = useDispatch();
	const details = useSelector((state) => state.details);

	// const handleDispatch = () => {
	//     dispatch(getAllFoods())
	// }

	useEffect(() => {
		dispatch(getDetail(id));
	}, [dispatch]);

	return (
		<>
			<NavBar />
			
				<div className="container1">
					{details ? (
						<div className="details">
							<div className="row1">
								<img
									src={details[0].image}
									alt={details[0].name}
									height="300px"
								/>
								<div className="row1colum2">
									<div>
										<h2 className="food_name">{details[0].name}</h2>
									</div>
									<div className="row1colum21">
										<div className="row1colum211">
											<div className="feature">
												<h6 className="title">Price: </h6>
												<p className="description">${details[0].price} usd </p>
											</div>
											<div className="feature">
												<h6 className="title">Discount: </h6>
												<p className="description">${details[0].discount}% </p>
											</div>
											<div className="feature">
												<h6 className="title">Type: </h6>
												<p className="description">{details[0].type}</p>
											</div>
											<div className="feature">
												<h6 className="title">Fat: </h6>
												<p className="description">{details[0].Fat}</p>
											</div>
										</div>

										<div className="row1colum212">
											<div className="feature">
												<h6 className="title">Sodium: </h6>
												<p className="description">{details[0].Sodium}</p>
											</div>
											<div className="feature">
												<h6 className="title">Sugar: </h6>
												<p className="description">{details[0].Sugar}</p>
											</div>
											<div className="feature">
												<h6 className="title">Description: </h6>
												<p className="description">{details[0].description}</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='details-button'>
								<Link to={`/home`} className="link">
									<button className='btn btn-success details-button'> Go back </button>
								</Link>
							</div>
						</div>
					) : (
						<NotFound />
					)}
				</div>
				<Footer />
			
		</>
	);
}

export default Details;
