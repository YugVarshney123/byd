import'./Navbar.css'
const Navbar=()=>{
    return(
    <div className='nav'>
        <div className="nav-log">BYD</div>
        <ul className="nav-menu">
            <li>Home</li>
            <li>Explore</li>
            <li>About</li>
            <li className='nav-contact'>contact</li>
        </ul>
    </div>
    )
}

export default Navbar