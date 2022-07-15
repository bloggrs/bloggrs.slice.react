import FeatherIcon from "feather-icons-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SubItem from "./SubItem";

const FakeLink = ({ toggleOpen }) => ({ children, className }) => {
    const onClick = e => {
        e.preventDefault();
        toggleOpen()
    }
    return <a className={className} onClick={onClick} style={{
    }}>{children}</a>
}

export default props => {
    const [ open, setOpen ] = useState(false);
    const toggleOpen = () => setOpen(!open);

    const location = useLocation();
    const { pathname } = location;
    const exact = props.items ? props.to.indexOf(pathname) !== -1 : pathname === props.to;
    const style = {};
    if (exact) style.borderBottom = "1px solid rgb(171 180 213)"

    let subitems = undefined;
    if (props.items && props.items.length) {
        const items = props.items.map(item => <SubItem {...item} />);
        subitems = (
            <ul
                className="nav-second-level mm-collapse mm-show"
                aria-expanded="false"
                style={{}}
            >
                {items}
            </ul>
        )
    }
    const LinkOrFakeLink = !props.items ? Link : FakeLink({ toggleOpen })
    const chevronClass = props.items ? (open ? "mdi-chevron-down" : "mdi-chevron-right") : ""
    console.log({ open })
    return (
        <>
            <li style={style}>
                <LinkOrFakeLink to={props.to}>
                    {" "}
                    <FeatherIcon icon={props.icon}
                        className={props.className || "feather feather-home align-self-center menu-icon"}
                    >
                    </FeatherIcon>
                    <span>{props.label}</span>
                    <span className="menu-arrow">
                    <i className={"mdi " + chevronClass} />
                    </span>
                </LinkOrFakeLink>
            </li>
            { open ? subitems : undefined }
        </>
    )
}