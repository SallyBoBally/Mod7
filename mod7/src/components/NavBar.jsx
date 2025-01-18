export default function NavBar() {
    const {theme} = useContext(MyThemeContext);
    
    return (
        <nav className="NavBar"
style={{backgroundColor: theme.background, color: theme.foreground}}>
            <ul className="menu">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/dash">Dashboard</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul>
        </nav>
    )
}