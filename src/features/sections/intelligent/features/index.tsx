import S from "./index.module.scss";
import KeyIcon from "@assets/intelligent/key.svg";
import UnionIcon from "@assets/intelligent/union.svg"
import Asset from "@assets/syndicate/asset.png";
import { Button } from "@features/ui/button";

export const FeatureSection = () => {
  function handleContact(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <section id="waitlist_section" className={S.body}>
        <div className={S.wrapper} style={{ backgroundColor: "black" }}>
          <div className={S.position} >
            <div className={S.border}>
              <div className={S.main}>
                <div className={S.content}>
                  <div className={S.title}>

                    <h1>
                      <img src={KeyIcon} width={33} height={39} alt="key" />{" "}
                      <span className="white xxl semi-bold">Unleash intelligent</span>{" "}
                      <span className="grey xxl base semi-bold">custody</span>
                      <br></br>
                      <span className="grey xxl base semi-bold">with</span>{" "}

                      <img src={UnionIcon} width={33} height={39} alt="union" />{" "}
                     
                      <span className="white xxl semi-bold">Taproot Multisig</span>

                    </h1>
                  </div>
                  <div className={S.description}>
                    <p className="grey">
                      <span className="white">Covault's Intelligent Custody Framework</span> uses Taproot on Bitcoin Layer 1.
                      Our advanced multisig technology provides <span className="white">robust security</span>, eliminating single points of failure and simplifying protocols.
                      Enjoy unparalleled protection and peace of mind, knowing your <span className="white">Bitcoin native assets are safe</span>.

                    </p>

                  </div>
                  <Button
                    onClick={handleContact}
                    title="Secure Your Assets"
                    mode="dark"
                    type="primary"
                    className={S.btn}
                  />
                </div>
                <div className={S.image}>
                  <img src={Asset} alt="Asset" />
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </section>
    </>
  );
};
