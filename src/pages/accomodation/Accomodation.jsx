import './accomodation.scss'
import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import datas from '../../data'
import Header from "../../components/header/Header";
import Slider from "../../components/carousel/Carousel"
import Footer from "../../components/footer/Footer";
import Collapse from '../../components/collaspe/Collapse';
import greyStar from '../../assets/grey_star.png';
import redStar from '../../assets/red_star.png';


export default function Accomodation() {
	const idAccomodation = useParams('id').id;
	const [accomodation, setAccomodation] = useState(null);
	let navigate = useNavigate();

	useEffect(() => {
		const resultats = datas.filter(data => data.id === idAccomodation)[0];
		console.log("Maison actuelle :", resultats);
		if (resultats === undefined){
			navigate("/page404")
		}
		else {setAccomodation(resultats)};
	}, [idAccomodation]);

	if (accomodation == null) {
		return <div>Pas de résultat</div>;
	}

	return (
		<>
			<Header/>
			<Slider imageSlider={accomodation.pictures}/>
			<main className="accomodation">
				<div className="accomodation_content">
					<div className="accomodation_content_infos">
						<h1>{accomodation.title}</h1>
						<p>{accomodation.location}</p>
						<div>
							{accomodation.tags.map((tag, index) => {
								return (
									<button key={index}>{tag}</button>
								)
							})}
						</div>
					</div>
					<div className="accomodation_content_host">
						<div>
							<div className='accomodation_content_host_name'>
								<span>{accomodation.host.name.split(' ')[0]}</span>
								<span>{accomodation.host.name.split(' ')[1]}</span>
							</div>
							<img src={accomodation.host.picture} alt="host of this accomodation" />
						</div>
							
						<div className="accomodation_content_host_stars">
							{[...Array(5)].map((star, index) => {
								const ratingValue = index + 1;
								return (
									<img key={index} src={ratingValue <= accomodation.rating ? redStar : greyStar} alt="star" />
								)
							})}
						</div>
					</div>
				</div>
				<div className="accomodation_collapse">
					<div className="accomodation_collapse_item">
						<Collapse title={'Description'} content={accomodation.description} />	
					</div>
					<div className="accomodation_collapse_item">
						<Collapse title={'Équipements'} content={accomodation.equipments}/>
					</div>	
				</div>
			</main>
			<Footer/>
		</>
	)
}