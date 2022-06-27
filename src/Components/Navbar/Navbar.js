import React from 'react'

export default function Navbar() {
  return (
    <header class="header">
		<div class="container-fluid">
			<div class="row d-flex justify-content-between">
				{/* <div class="col-md-auto">
					<a href="#" class="logo"><img src="image/Picture1.jpg" alt="logo"></a>
				</div> */}
				<div class="col-md-auto">
					<nav class="main_nav">
						<ul>
							<li><a href="#">Home</a></li>
							<li><a href="#">About us</a></li>
							<li><a href="#">Menu</a></li>
							<li><a href="#">Contact us</a></li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	</header>
  )
}
