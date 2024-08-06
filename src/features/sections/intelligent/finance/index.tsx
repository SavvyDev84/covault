import clsx from "clsx";
import S from "./index.module.scss";


export const FinanceSection = () => {
 

  return (
    <>
      <section id="waitlist_section" className={S.body}>

        <div className={S.wrapper}>
          <div className={S.content}>

            <div className={S.subTitle}>
              <h3 className="black xxl">
                Collaborative <span className="semi-bold">Finance</span>
                <br></br>
                <span className="semi-bold">with</span>Syndicate Vault
              </h3>
            </div>

            <div className={S.features}>

              <div className={clsx(S.card, S.active)}>
                <div>1</div>
                <p className="base sm">
                  Syndicate Vaults are designed for groups and organizations needing shared control over digital assets.
                </p>
              </div>

              <div className={clsx(S.card)}>
                <div>2</div>
                <p className="base sm">

                  Our solution ensures secure, transparent, and efficient collective asset management, eliminating the risk of individual mismanagement.

                </p>
              </div>

              <div className={clsx(S.card)}>
                <div>3</div>
                <p className="base sm">

                  Achieve seamless colaboration, reduce risk, and enhanced security for your assets. To go far, go together.
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
