import classes from './SidebarOption.module.css';
const SidebarOption = ({active,text,Icon}) => {
    return (
        <div className={`${classes.sidebarOption} ${active && classes['sidebarOption--active']}`}>
            <div className={classes.icon}>
            <Icon/>
            </div>
            <h2>{text}</h2>
        </div>
    );
}

export default SidebarOption;