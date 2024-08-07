import { Button } from "@features/ui/button";
import S from "./index.module.scss";
import Asset from "@assets/intelligent/asset.png";

export const StreamlineSection = () => {
  function handleContact(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <section id="waitlist_section" className={S.body}>
        <div className={S.wrapper}>
          <div className={S.position}>
            <div>

              <div className={S.border}>
                <div className={S.main}>
                  <div className={S.image}>
                    <img src={Asset} alt="Asset" />
                  </div>

                  <div className={S.content}>

                    <div className={S.title}>
                      <h1>
                        <span className="white xxl semi-bold">Streamline</span>{" "}
                        <span className="grey xxl base semi-bold">your rewards</span>
                        <br></br>
                        <span className="grey xxl base semi-bold"> with</span>{" "}
                        <span className="white xxl semi-bold">Airdrop Vault</span>
                      </h1>
                    </div>

                    <div className={S.description}>
                      <p className="grey">
                        Distributing rewards can be time-consuming. Covaults Airdrop Vault simplifies
                        this with batch send and claim options, engaing your community easily. It
                        addresses inefficienties, saving time and resources, while ensuring quick and
                        secure reward distribution.
                      </p>
                    </div>
                  </div>


                </div>
              </div>

              <div className={S.border} >

                <div className={S.main1}>

                  <div className={S.title} style={{ marginLeft: "16px" }}>
                    <h1>
                      <span className="white xxl semi-bold">Intelligent Yield</span>{" "}
                      <span className="grey xxl base semi-bold">generation</span>
                      <br></br>
                      <span className="grey xxl base semi-bold"> with</span>{" "}
                      <span className="white xxl semi-bold">Yield Vaults</span>
                    </h1>
                  </div>

                  <div className={S.content}>
                    <div className={S.description}>
                      <p className="grey">
                        Traditional yields options fall short. Covault's Yield Vaults
                        offer intelligent, non-custodial solutions for advanced DeFi
                        workflows. Tap into high yield opportunites and maximize returns securely,
                        ensuring investment growth without compromising safety.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
            <div style={{ display: "flex", marginLeft: "16px", marginTop: "70px", justifyContent: "center", alignItems: "center" }}>
              <Button
                onClick={handleContact}
                title="Optimize Rewards & yields"
                mode="dark"
                type="primary"
                className={S.btn}
              />


            </div>
          </div>
        </div>
      </section>
    </>
  );
};
