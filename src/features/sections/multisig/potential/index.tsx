import S from "./index.module.scss";
import KeyIcon from "@assets/multisig/key.svg";

export const PotentialSection = () => {
  return (
    <section className={S.body} id="features_section">
      <div className={S.border} />
      <div className={S.wrapper}>
        <div className={S.main}>
          <div className={S.info}>
            <h1>
              <span className="grey base semi-bold">Native Multisig</span>
              <img src={KeyIcon} width={33} height={39} alt="key" />
              <span className="white semi-bold">for Layer1 Bitcoin</span>
            </h1>
            <div className={S.description}>
              <p className="white lg">
                Unlock the power of multisig technology for Layer1 Bitcoin
                transactions, providing you with the ultimate in security and
                reliability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
