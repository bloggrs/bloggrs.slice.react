import FeatherIcon from "feather-icons-react";
import { Link, useLocation } from "react-router-dom";

export default props => {
    const location = useLocation();
    const { pathname } = location;
    const exact = pathname === props.to;
    const style = {};
    if (exact) style.borderBottom = "1px solid rgb(171 180 213)"
    return (
        <li style={style}>
            <Link to={props.to}>
                {" "}
                <FeatherIcon icon={props.icon}
                    className={props.className || "feather feather-home align-self-center menu-icon"}
                >
                </FeatherIcon>
                <span>{props.label}</span>
                <span className="menu-arrow">
                <i className="mdi mdi-chevron-right" />
                </span>
            </Link>
        </li>
    )
}