import { NavLink } from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { StarBorder } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  listItemIcon: {
    minWidth: "42px !important",
    color: "#4d6575 !important"
  },
  listItemClass: {
    textDecoration: "none",
    color: "inherit",
    fontWeight :"bolder",
    textTransform: "capitalize"
  },
  nested: {
    paddingLeft: "",
    background: " rgba(0,0,0,0.2)"
  },
  links: {
    color: "#4d6575 !important",
    margin: " auto",
    opacity: "0.7 !important",
    fontWeight :"bolder",
    display: "block",
    textDecoration: "none"
  },
  active: {
    backgroundColor: "#d7e0ea !important",
    color: "#136acd !important",
    display: "block",
    opacity: "1 !important",
    fontWeight :"bolder",
    borderRadius: " 8px",
  }
}));

interface SidebarLinkPropTypes {
  icon?: React.ReactNode;
  text: string;
  to: string;
}

const SidebarLink: React.FC<SidebarLinkPropTypes> = ({
  icon = <StarBorder />,
  text,
  to,
}) => {
  const classes = useStyles();
  return (
    <NavLink
      className={({ isActive }) =>
        classes.links + " " + (isActive ? classes.active : "")
      }
      to={to}
    >
      <ListItem button>
        <ListItemIcon className={classes.listItemIcon}>
          {icon}
        </ListItemIcon>
        <ListItemText primary={text} className={classes.listItemClass} />
      </ListItem>
    </NavLink>
  );
};

export default SidebarLink;
