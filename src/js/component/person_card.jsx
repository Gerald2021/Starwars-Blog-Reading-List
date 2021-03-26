import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const PersonCard = props => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="col-md-3">
				<div className="card">
					<img src="http://via.placeholder.com/640x360" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">{props.name}</h5>
						<div className=" d-flex justify-content-between">
							<Link to={"/person_profile/" + props.uid}>
								<button className="btn btn-outline-secondary">Learn More</button>
							</Link>
							<i
								onClick={() => {
									actions.favoritos(props);
								}}
								className={props.liked ? "far fa-heart select" : "far fa-heart"}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
