import "./navbar.css"

function NavBar() {
    return (
        <>
            <nav className="navbar">
                <div className="logo">LojaTech</div>

                <ul className="nav-links">
                    <li><a href="#">Produtos</a></li>
                    <li><a href="#">Ofertas</a></li>
                    <li><a href="#">Contato</a></li>

                </ul>
            </nav>
        </>
    )
}


export default NavBar;