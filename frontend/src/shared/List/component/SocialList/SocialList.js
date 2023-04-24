import { socialLinks } from "utils/constants/footer/footer.constants.js";

export const SocialList = () => {
  return (
    <ul className="social-list">
    {socialLinks.map((link) => {
      const { id, icon, label, url } = link;
      return (
        <li key={id} aria-label={label}>
          <a href={url} rel="noreferrer" target="_blank" className="icons">
            {icon}
          </a>
        </li>
      );
    })}
  </ul>
  )
}


