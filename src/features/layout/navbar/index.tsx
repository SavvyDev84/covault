import { FC, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import S from "./index.module.scss";
import { Button } from "@features/ui";

const links = [
  { title: "About us", path: "#about_section" },
  { title: "Waitlist", path: "#waitlist_section" },
  { title: "Features", path: "#features_section" },
  { title: "FAQ", path: "#faq_section" },
];

interface IProps {
  close: () => void;
}

const HamburgerMenu: FC<IProps> = ({ close }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();
  const onNavbarFunc = (item: string) => {
    navigate(item);
  };
  const handleClick = () => {};

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        close();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={S.body}>
      <div className={S.wrapper} ref={modalRef}>
        <div className={S.links}>
          {links.map((data, index) => (
            <div
              key={index}
              className={S.link}
              onClick={() => onNavbarFunc(data.path)}
            >
              {data.title}
            </div>
          ))}
          <Button
            title="Contact"
            type="secondary"
            mode="dark"
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
