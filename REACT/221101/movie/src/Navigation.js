import "./Navigation.css";
import { Link } from "react-router-dom";

const Navigation = ()=>{
    return (
        <nav className="mainnav">
            <ul>
                <h2>메뉴</h2>
                <li><Link to={'/'}>홈으로</Link></li>
                <li>인기영화</li>
                <li>영화</li>
                <li>방송프로그램</li>
                <li>이달의영화</li>
                <li>검색</li>
            </ul>
        </nav>
    )
};

export default Navigation;
