import { NavLink } from "react-router-dom";

export const DropdownList = ({ items, classNameUl, classNameLi }) => {
  return (
    <ul className={classNameUl}>
      {items.map((item) => {
        return (
          <li key={item.id} className={classNameLi}>
            <NavLink to={item.url}>{item.text}</NavLink>
          </li>
        );
      })}
    </ul>
  );
};
