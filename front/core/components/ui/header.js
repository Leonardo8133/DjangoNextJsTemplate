import Link from 'next/link'


function Header(){

    return (
        <div className="container-fluid mx-auto">
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <ul className="navbar-nav p">
                <li className="nav-item active">
                    <a className="nav-link" href="#"></a>
                </li>
                <li className="nav-item active">
                    <Link href='/users'>
                    <a className="nav-link">My Account</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                </li>
            </ul>
            </nav>
        </div>
    )
}

export default Header;