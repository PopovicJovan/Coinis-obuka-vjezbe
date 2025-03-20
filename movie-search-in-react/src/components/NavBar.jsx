
const NavBar = () => {
    return (
        <nav id={"nav"}>
            <ul>
                <li><a href={"/login"}><h1>LOGIN</h1></a></li>
                <li><a href={"/register"}><h1>REGISTER</h1></a></li>
            </ul>
        </nav>
    )
}

export default NavBar;