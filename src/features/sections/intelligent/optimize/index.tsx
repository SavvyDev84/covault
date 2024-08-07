import { Button } from "@features/ui";
import S from "./index.module.scss";
import Door from "@assets/intelligent/door.png";
import { clsx } from "clsx";

export const OptimizeSection = () => {
  function handleContact(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <section id="waitlist_section" className={S.body}>
        <div className={S.wrapper}>
          <div className={S.position}>
            <div className={S.border} >

              <div className={S.main}>

                <div className={S.content}>

                  <div className={S.title}>
                    <h1>
                      <span className="black xxl semi-bold">Optimize</span>{" "}
                      <span className="grey xxl base ">your staking rewards with</span> 
                      <span className="black xxl semi-bold">{" "} Intelligent Custody</span>
                    </h1>
                  </div>

                  <div className={S.description}>
                    <p className="grey">
                      Staking should be both rewarding and secure. Covault's Staking Vault
                      offers non-custodial staking solutions that enchance asset potential and
                      mitigate risks associated with custodial options. Enperience consistent
                      rewards and peace of mind with our optimized staking framework,
                      designed to meet the needs of serious investors.
                    </p>
                  </div>

                  <Button
                    onClick={handleContact}
                    title="Staking Vaults Coming Soon"
                    mode="dark"
                    type="secondary"
                    className={S.btn}
                  />

                </div>
                
              </div>

              <div className={S.image}>
                <img src={Door} alt="Door" />
              </div>

            </div>
          </div>
          <div className={S.position}>
            <div className={S.border} >

              <div className={S.image}>
                <div className={S.title}>
                  <h1>
                    <span className="black xxl semi-bold">Secure</span>
                    <span className="grey xxl base semi-bold">{" "}transactions
                      <br></br>with</span>
                    <span className="black xxl semi-bold">{" "}Escrow Vaults</span>
                  </h1>
                  <div style={{ paddingTop: "24px" }}>
                    <p className="grey" style={{ fontSize: "20px" }}>
                      Ensure your digital asset transactoins are safe and transparent.<br></br>
                      Covault's Escrow Vault provides a trustless system that eliminates<br></br>
                      thrid-party risks and guarantees protection for all parties involved.
                    </p>
                  </div>
                </div>

              </div>
              <div className={S.main}>
                <div className={S.content}>
                  <div className={S.description} >
                    <div style={{overflowY:"auto", scrollbarWidth:"none", height:"150px"}}>
                      <div className={clsx(S.card, S.active)} style={{padding:"15px",marginBottom:"20px" ,border:"1px grey solid", borderRadius:"2%"}}>
                        <div className="bold"style={{fontSize:"24px"}}>1</div>
                        <p className="base sm" style={{fontSize:"20px"}}>
                          <span className="base sm bold" style={{fontSize:"20px"}}>protect Your Transactions</span>
                          <br />
                          <span className="sm" style={{fontSize:"20px"}}>
                            Connect with a network of investors and stakeholders eager
                            to pool resources and share opportunities.
                          </span>
                        </p>
                      </div>
                      <div className={clsx(S.card, S.active)} style={{padding:"15px",border:"1px grey solid", borderRadius:"2%",}}>
                        <div className="bold" style={{fontSize:"24px"}}>2</div>
                        <p className="base sm">
                          <span className="base sm bold" style={{fontSize:"20px"}}>Eliminate Third-party Risks</span>
                          <br />
                          <span className="sm" style={{fontSize:"20px"}}>
                            Connect with a network of investors and stakeholders eager
                            to pool resources and share opportunities.
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};