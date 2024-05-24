import { FC, ReactNode } from "react";
import  './styles.modules.css'

type LinkProps = {
  to: string,
  children: ReactNode,
}


export const Link: FC<LinkProps> = ({ to, children }) => {
  const preventReload = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    window.history.pushState({}, "", to);
    const navigationEvent = new PopStateEvent("navigate");
    window.dispatchEvent(navigationEvent);
  };
  return (
    <a href={to} onClick={preventReload} className={`link ${window.location.pathname === to ? "active": ""}`}>
      {children}
    </a>
  );
};