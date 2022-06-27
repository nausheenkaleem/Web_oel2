import React from 'react'
import Picture1 from '../../Image/Picture1.jpg'
export default function Home(props) {
	console.log(props)
  return (
	<div class="banner d-flex align-items-center" style={{ backgroundImage: `url(${Picture1})` }} id="home">
		<div class="container">
			<div class="row">
				<div class="col-md-5">
					<div class="banner_content">
						<h1>{props.home[0].title}</h1>
						<p>{props.home[0].slogan}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}
