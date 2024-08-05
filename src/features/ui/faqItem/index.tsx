import { FC, useState } from "react";
import S from "./index.module.scss";
import { IFaqType } from "@utils/typeUtils";
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi";

export const FAQItem: FC<IFaqType> = ({ title, content }) => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className={S.body}>
      <label className="black" htmlFor="faq" onClick={handleChange}>
        {title}
        {checked ? (
          <HiOutlineMinus size={24} color="var(--black)" />
        ) : (
          <HiOutlinePlus size={24} color="var(--black)" />
        )}
        <input
          type="checkbox"
          name="faq"
          id="faq"
          checked={checked}
          onChange={handleChange}
        />
      </label>
      <p className="grey">{content}</p>
    </div>
  );
};
