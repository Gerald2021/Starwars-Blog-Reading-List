import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-white">
			<Link to="/">
				<a className="navbar-brand">
					<img
						src="https://www.freepnglogos.com/uploads/star-wars-logo-31.png"
						width="120"
						height="120"
						className="d-inline-block align-top"
						alt=""
					/>
				</a>
			</Link>

			<div className="dropdown">
				<button
					className="btn btn-secondary dropdown-toggle bg-secondary"
					style={{ fontSize: "25px" }}
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Favorites
				</button>
				<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					{store.favoritos.map((item, index) => {
						let path = null;
						if (item.url.includes("people")) {
							path = `/person_profile/${item.uid}`;
						} else if (item.url.includes("planets")) {
							path = `/planet_profile/${item.uid}`;
						} else if (item.url.includes("starships")) {
							path = `/vehicle_profile/${item.uid}`;
						}

						return (
							<div className="d-flex justify-content-center align-items-center" key={index}>
								<Link to={path} className="dropdown-item">
									{item.name}
								</Link>
								<i
									onClick={() => {
										actions.eliminar(item);
									}}
									className="fas fa-trash mr-2"
								/>
							</div>
						);
					})}
				</div>
			</div>
		</nav>
	);
};
