import { useState } from "react";
import { Modal } from "@features/ui";

import S from "./index.module.scss";
import { Button } from "@features/ui";
import diamond from "@assets/intelligent/hero.png";

import diamond1 from "@assets/intelligent/hero1.png";
import { HiOutlineArrowLongDown } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {

   const navigate=useNavigate(); 
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [verificationCodeInput, setVerificationCodeInput] = useState(""); // For the input
  const [active, setActive] = useState<boolean>(false)


  const close = () => {
    setOpenModal(false);
  };

  const handleContact = () => {
    setActive(!active)
  };

  function handleVerifyCode(): void {
    throw new Error("Function not implemented.");
  }

  const handleClick=()=>{
    navigate("covault-protocol");
  }
  return (
    <section id="about_section" className={S.body}>
      <div className={S.wrapper}>
        <div className={S.main}>

          <div className={S.heroTwo}>
            <div className={S.info}>
              <h1>
                Secure your <span>Bitcoin</span>{" "}
                native assets with{" "}
                <span>Intelligent Cusotody</span>
              </h1>
              <p>
                Master the power of
                <span> Bitcoin Layer 1 with Covault's advanced vault solutions.</span> Experience enhanced security with our Intelligent Custody Framework, featuring <span>Taproot Multisig.</span>
              </p>
              <Button
                onClick={handleContact}
                title="Scroll down"
                mode="dark"
                type="secondary"
                className={S.btn}
                icon={<HiOutlineArrowLongDown />}
              />
            </div>
            <div className={S.diamond}>
              <img src={diamond} alt="diamond" />
            </div>
          </div>

          <div className={S.hero} >

            <div className={S.diamond}>
              <img src={diamond1} alt="diamond1" />
            </div>

            <div className={S.info}  >
              <h1 style={{ direction: "rtl" }}>
                Transforming <br></br>Intellectual<br></br><span>Property Markets</span>
              </h1>
              <p style={{ direction: "rtl" }}>
                Discover how Covault's custody tools are revolutionizing IP management and paving the way for new RWA markets on Bitcoin Layer 1.
              </p>
              <div style={{ direction: "rtl" }}>
                <Button
                  onClick={handleClick}
                  title="Learn More About RWA"
                  mode="dark"
                  type="primary"
                />
              </div>
            </div>

          </div>

          <div className={S.infos} style={{ gap: "20px" }}>
            <Button
              onClick={handleContact}
              title="Native Tools"
              mode={active ? 'dark' : 'light'}
              type="secondary"
              className={S.contact}
            />

            <Button
              onClick={handleContact}
              title="Covault Protocol"
              mode={active ? 'light' : 'dark'}
              type="secondary"
              className={S.contact}
            />

            <input type="checkbox" id="change_mode" checked={active} className={S.changeMode} />

          </div>
        </div>
      </div>
      {openModal && <Modal close={close} type="first"
        verificationCode={verificationCodeInput}
        setVerificationCode={setVerificationCodeInput}
        onVerifyCode={handleVerifyCode}
      />}
    </section>
  );
};
