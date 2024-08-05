import { useState } from "react";
import { Modal } from "@features/ui";

import S from "./index.module.scss";
import { Button } from "@features/ui";
import diamond from "@assets/intelligent/hero.png";

export const HeroSection = () => {

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [verificationCodeInput, setVerificationCodeInput] = useState(""); // For the input


  const close = () => {
    setOpenModal(false);
  };

  const handleContact = () => {
    setOpenModal(true)
  };

  function handleVerifyCode(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <section id="about_section" className={S.body}>
      <div className={S.wrapper}>
        <div className={S.main}>
          <div className={S.hero}>
            <div className={S.info}>
              <h1>
                Secure your <span>Bitcoin</span>{" "}
                native assets with{" "}
                <span>Intelligent Cusotody</span>
              </h1>
              <p>
                Master the power of
                <span> Bitcoin Layer 1</span> with
                <br></br> Covault's <span>advanced vault solutions</span>

              </p>
              <Button
                onClick={handleContact}
                title="Get Stated"
                mode="dark"
                type="primary"
                className={S.btn}
              />
            </div>
            <div className={S.diamond}>
              <img src={diamond} alt="diamond" />
            </div>
          </div>
          <div className={S.infos}>
            <div className={S.info}>
              <span>MULTISIG VAULT</span>
              <p>
                For <span>all Bitcoin</span> native assets
              </p>
            </div>
            <div className={S.border} />
            <div className={S.info}>
              <span>AIRDROP VAULTS</span>
              <p>
                Receive <span>ecosystem specific</span> airdrops
              </p>
            </div>
            <div className={S.border} />
            <div className={S.info}>
              <span>SYNDICATE VAULTS</span>
              <p>
                Onchain <span>Investment Collective</span>
              </p>
            </div>
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
