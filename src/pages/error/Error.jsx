import './error.scss'
import Header from "../../components/header/Header"
import { Link } from 'react-router-dom'
import React from "react"

export default function Error() {
	return (
		<div className='error'>
			<Header />
			<div className="error_infos">
				<h1 className='error_infos_title'>404</h1>
				<p className='error_infos_content'>Oups ! La page que vous demandez n'existe pas.</p>
			</div>
				<Link className='error_infos_return' to='/'>Retourner sur la page d'accueil</Link>
		</div>
	)
}