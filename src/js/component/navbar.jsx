import React, { useContext } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { FaTrashAlt } from "react-icons/fa";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const { favorites } = store;

	return (
		<nav className="navbar mb-3 barraNav p-3">
			<Link className="barraNav" to="/">
				<span className="navbar-brand mb-0 h1">
					<img src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-0.png" width={"75px"} alt="Star Wars Logo" />
				</span>
			</Link>
			<div className="ml-auto">
				<div className="dropstart">
					<button type="button" className="btn p-0" data-bs-toggle="dropdown" aria-expanded="false">
					<img src="https://png.pngtree.com/png-vector/20230814/ourmid/pngtree-star-wars-stormtrooper-sticker-vector-png-image_6896914.png" width={"48px"} /> 
					<img src="https://fontmeme.com/permalink/241219/76281dd64817668294ee72968a37523a.png" alt="fuente-de-star-wars" border="0"/>
					<img src="https://png.pngtree.com/png-clipart/20230913/original/pngtree-bb8-clipart-cartoon-star-wars-bb-vector-png-image_11054353.png" width={"48px"} /> 
					</button>
					<ul className="dropdown-menu p-2" style={{ minWidth: "250px" }}>

						<h6 className="dropdown-header">Personajes</h6>
						{favorites.characters.length > 0 ? (
							favorites.characters.map((item, index) => (
								<Link key={item.name + '-' + item.uid} className="estilo" to={`/single/characters/${item.uid}`} >
								<li className="dropdown-item d-flex justify-content-between">
								<ul >{item.name}</ul>
									<button
										className="btn btn-sm btn-outline-danger"
										onClick={(e) =>{ e.preventDefault(); actions.removeFromFavorites(item, "characters")}}
									>
										<FaTrashAlt />
									</button>
								</li></Link>
							))
						) : (
							<li className="dropdown-item text-muted">No hay personajes</li>
						)}

						<h6 className="dropdown-header">Planetas</h6>
						{favorites.planets.length > 0 ? (
							favorites.planets.map((item, index) => (
								<Link key={item.name + '-' + item.uid} className="estilo" to={`/single/planets/${item.uid}`} >
								<li key={index} className="dropdown-item d-flex justify-content-between">
								<ul >{item.name}</ul>
									<button
										className="btn btn-sm btn-outline-danger"
										onClick={(e) => {e.preventDefault(); actions.removeFromFavorites(item, "planets")}}
									>
										<FaTrashAlt />
									</button>
								</li></Link>
							))
						) : (
							<li className="dropdown-item text-muted">No hay planetas</li>
						)}

						<h6 className="dropdown-header">Especies</h6>
						{favorites.species.length > 0 ? (
							favorites.species.map((item, index) => (
								<Link key={item.name + '-' + item.uid} className="estilo" to={`/single/species/${item.uid}`} >
								<li key={index} className="dropdown-item d-flex justify-content-between">
									<ul>{item.name}</ul>
									<button
										className="btn btn-sm btn-outline-danger"
										onClick={(e) => {e.preventDefault(); actions.removeFromFavorites(item, "species")}}
									>
										<FaTrashAlt />
									</button>
								</li></Link>
							))
						) : (
							<li className="dropdown-item text-muted">No hay especies</li>
						)}

						<h6 className="dropdown-header">Naves</h6>
						{favorites.starships.length > 0 ? (
							favorites.starships.map((item, index) => (
								<Link key={item.name + '-' + item.uid} className="estilo" to={`/single/starships/${item.uid}`} >
								<li key={index} className="dropdown-item d-flex justify-content-between">
								<ul >{item.name}</ul>
									<button
										className="btn btn-sm btn-outline-danger"
										onClick={(e) => {e.preventDefault(); actions.removeFromFavorites(item, "starships")}}
									>
										<FaTrashAlt />
									</button>
								</li></Link>
							))
						) : (
							<li className="dropdown-item text-muted">No hay naves</li>
						)}

						<h6 className="dropdown-header">Vehiculos</h6>
						{favorites.vehicles.length > 0 ? (
							favorites.vehicles.map((item,index) => (
								<Link key={item.name + '-' + item.uid} className="estilo" to={`/single/vehicles/${item.uid}`} >
								<li key={index} className="dropdown-item d-flex justify-content-between">
								<ul >{item.name}</ul>
									<button
										className="btn btn-sm btn-outline-danger"
										onClick={(e) => {e.preventDefault(); actions.removeFromFavorites(item, "vehicles")}}
									>
										<FaTrashAlt />
									</button>
								</li></Link>
							))
						) : (
							<li className="dropdown-item text-muted">No hay vehiculos</li>
						)}
						
						<h6 className="dropdown-header">Peliculas</h6>
						{favorites.films.length > 0 ? (
							favorites.films.map((item, index) => (
								<Link key={item.title + '-' + item.uid} className="estilo" to={`/single/films/${item.uid}`} >
								<li className="dropdown-item d-flex justify-content-between">
								<ul >{item.properties.title}</ul>
									<button
										className="btn btn-sm btn-outline-danger"
										onClick={(e) => {e.preventDefault(); actions.removeFromFavorites(item, "films")}}
									>
										<FaTrashAlt />
									</button>
								</li></Link>
							))
						) : (
							<li className="dropdown-item text-muted">No hay peliculas</li>
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};