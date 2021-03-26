import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

import { PersonCard } from "../component/person_card.jsx";
import { PlanetCard } from "../component/planet_card.jsx";
import { VehiclesCard } from "../component/vehicles_card.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid">
			<br />
			{/* Personajes */}
			<div className="row">
				<div className="col-md-12">
					<h1 className="text-muted">Characters</h1>
				</div>
			</div>
			<div className="row">
				<div className="col-md-12">
					<div className="card-deck">
						{!!store.peoples &&
							store.peoples.results.map((item, index) => {
								let liked = false;
								store.favoritos.forEach(element => {
									if (element.uid === item.uid) {
										liked = true;
									}
								});
								return <PersonCard liked={liked} key={index} {...item} />;
							})}
					</div>
				</div>
			</div>

			{/* Boton */}
			<div className="row btnSlide">
				<div className="col-md-6">
					<button
						onClick={() => {
							actions.getPeople(store.peoples.previous);
						}}
						type="button"
						className="btn btn-light btn-right">
						Previous
					</button>
				</div>
				<div className="col-md-6">
					<button
						onClick={() => {
							actions.getPeople(store.peoples.next);
						}}
						type="button"
						className="btn btn-light">
						Next
					</button>
				</div>
			</div>
			<br />
			{/* Planetas */}
			<br />
			<div className="row">
				<div className="col-md-12">
					<h1 className="text-muted">Planets</h1>
				</div>
			</div>
			<div className="row">
				<div className="col-md-12">
					<div className="card-deck">
						{!!store.planets &&
							store.planets.results.map((item, index) => {
								let liked = false;
								store.favoritos.forEach(element => {
									if (element.uid === item.uid) {
										liked = true;
									}
								});
								return <PlanetCard liked={liked} key={index} {...item} />;
							})}
					</div>
				</div>
			</div>

			<div className="row btnSlide">
				<div className="col-md-6">
					<button
						onClick={() => {
							actions.getPlanets(store.planets.previous);
						}}
						type="button"
						className="btn btn-light btn-right">
						Previous
					</button>
				</div>
				<div className="col-md-6">
					<button
						onClick={() => {
							actions.getPlanets(store.planets.next);
						}}
						type="button"
						className="btn btn-light">
						Next
					</button>
				</div>
			</div>
			<br />

			{/* Vehiculos */}
			<br />
			<div className="row">
				<div className="col-md-12">
					<h1 className="text-muted">Vehicles</h1>
				</div>
			</div>
			<div className="row">
				<div className="col-md-12">
					<div className="card-deck">
						{!!store.vehicles &&
							store.vehicles.results.map((item, index) => {
								let liked = false;
								store.favoritos.forEach(element => {
									if (element.uid === item.uid) {
										liked = true;
									}
								});

								return <VehiclesCard liked={liked} key={index} {...item} />;
							})}
					</div>
				</div>
			</div>
			<div className="row btnSlide">
				<div className="col-md-12 d-flex justify-content-center">
					<button
						onClick={() => {
							actions.getVehicles(store.vehicles.previous);
						}}
						type="button"
						className="btn btn-light mr-4">
						Previous
					</button>
					<button
						onClick={() => {
							actions.getVehicles(store.vehicles.next);
						}}
						type="button"
						className="btn btn-light mf-4">
						Next
					</button>
				</div>
			</div>
			<br />
		</div>
	);
};
