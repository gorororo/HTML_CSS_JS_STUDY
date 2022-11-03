import { Link } from 'react-router-dom';


const Header = () =>{
    return(
        <>
            <header>
                <div className='submedia'>
                    <div className='logo'>영화사이트클론</div>
                    <nav className="navbar">
                        <ul className="mainmenu">
                            <li>
                                <a href='#'>메인메뉴1</a>
                                <ul className='submenu'>
                                    <li className="menutext">메뉴1</li>
                                    <li className="menutext">메뉴2</li>
                                    <li className="menutext">메뉴3</li>
                                </ul>
                            </li>
                            <li>
                                <a href='#'>메인메뉴2</a>
                                <ul className='submenu'>
                                    <li className="menutext">메뉴1</li>
                                    <li className="menutext">메뉴2</li>
                                    <li className="menutext">메뉴3</li>
                                </ul>
                            </li>
                            <li>
                                <a href='#'>메인메뉴3</a>
                                <ul className='submenu'>
                                    <li className="menutext">메뉴1</li>
                                    <li className="menutext">메뉴2</li>
                                    <li className="menutext">메뉴3</li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}


export default Header;