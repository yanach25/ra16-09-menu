import {NavLink} from "react-router-dom";

function Menu() {
    const links = [
        {link: '/', name: 'Главная'},
        {link: '/drift', name: 'Drift-такси'},
        {link: '/timeattack', name: 'Time attack'},
        {link: '/forza', name: 'Forza Carting'},
    ];

    const linkEls = links.map((item) => (
        <NavLink key={item.link} to={item.link} className={({ isActive }) => `menu__item ${isActive ? 'menu__item-active' : ''}`}>{item.name}</NavLink>
    ))
    return (
        <nav className="menu">
            {linkEls}
        </nav>
    );
}

export default Menu;
