import { Component } from 'react'
import './Navbar.css'
class  Navbar extends Component {
    state = {clicked: false};
    handleClick = () => {
        this.setState({clicked : !this.state.clicked})
    }

    render (){
    return (
        <nav className='flex'>
            <div className='logo flex'>
               <div> <img src="http://focal-x.com/assets/img/home/logo.svg" alt="logo" /></div>
                <h1>Digital Marketing Agency</h1>
            </div>

                <ul id='nav-items' 
                className={this.state.clicked ? "#nav-items nav-active" : "#nav-items"}>
                    <li><a className='active' href="#">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">portfolio</a></li>
                    <li><a href="#">clients & partners</a></li>
                    <li><a href="#">X academy</a></li>
                    <li><a href="#">about us</a></li>
                    <li><a href="#">let's talk</a></li>
                </ul>
            
            <div className='for-responsive' onClick={this.handleClick}>
                <i id='bars' className={this.state.clicked ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
            </div>
        </nav>
    )
}
}
export default Navbar;