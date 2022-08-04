import React from 'react'
import logo from '../../commonResource/images/icons/logo-sm.png'
import search from '../../commonResource/images/icons/search-icon-sm.png'
import cart from '../../commonResource/images/icons/cart-sm.png'
import "./Headerlink"


import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";




function Header() {
  return (
    <div>
        <div className="nav-wrapper fixed">
			<div className="container">
				<nav className="navbar navbar-toggleable-sm navbar-expand-md ">
					<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target=".navbar-collapse">
						☰
					</button>
					<a className="navbar-brand mx-auto" href="/"><img src={logo} alt=""></img></a>

					<div className="navbar-collapse collapse">
						<ul className="navbar-nav nav-justified w-100 nav-fill">
							<li className="nav-item"><a className="nav-link js-scroll-trigger" href="/mac/">Mac</a></li>
							<li className="nav-item"><a className="nav-link js-scroll-trigger" href="/iphone">iphone</a></li>
							<li className="nav-item"><a className="nav-link js-scroll-trigger" href="/ipad">ipad</a></li>
							<li className="nav-item"><a className="nav-link js-scroll-trigger" href="/watch">watch</a></li>
							<li className="nav-item"><a className="nav-link js-scroll-trigger" href="/tv">tv</a></li>
							<li className="nav-item"><a className="nav-link js-scroll-trigger" href="/music">Music</a></li>
							<li className="nav-item"><a className="nav-link js-scroll-trigger" href="/support">Support</a></li>
							<li className="nav-item" ><a className="nav-link js-scroll-trigger" href="/search/"><img src={search} alt="" ></img>
							</a></li>
							<li className="nav-item"><a  className="nav-link js-scroll-trigger" href="/cart/"><img src={cart} alt=""></img></a></li>
						</ul>
					</div>
				</nav>
			</div>
		</div>

    </div>













// 	<div role="navigation">
// <nav className="navbar navbar-expand-lg bg-light">
//   <div className="container-fluid">
//     <a className="navbar-brand" href="#">Navbar</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarNav">
//       <ul className="navbar-nav">
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">Features</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">Pricing</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link disabled">Disabled</a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>
// 	</div>
  )
}

export default Header