import React from "react";
import pic from "/src/assets/valve.png";
import "/src/styles/Footer.css";

function Footer() {
  return (
    <>
      <div id="background">
        <hr></hr>
        <p id="rights">
          © 2023 Valve Corporation. All rights reserved. All trademarks are
          property of their respective owners in the US and other countries.
        </p>
        <div>
          <div>
            <p id="VAT">
              {" "}
              VAT included in all prices where applicable.
              <a href="" id="privacy">
                &nbsp;Privacy Policy{" "}
              </a>
              &nbsp;
              <> | </>&nbsp;
              <a href="" id="privacy">
                &nbsp;Legal
              </a>
              &nbsp;
              <> | </>&nbsp;
              <a href="" id="privacy">
                &nbsp;Steam Subscriber Agreement
              </a>
              &nbsp;
              <> | </>&nbsp;
              <a href="" id="privacy">
                Refunds
              </a>
              &nbsp;
              <> | </>&nbsp;
              <a href="" id="privacy">
                Cookies
              </a>
              &nbsp;
            </p>
          </div>
        </div>
        <hr id="bottom-line"></hr>
        <div>
          <a id="about" href="">
            About Valve
          </a>{" "}
          <> | </>
          <a id="about" href="">
            Jobs
          </a>{" "}
          <> | </>
          <a id="about" href="">
            Steamworks
          </a>{" "}
          <> | </>
          <a id="about" href="">
            Steam distribution
          </a>{" "}
          <> | </>
          <a id="about" href="">
            Support
          </a>{" "}
          <> | </>
          <a id="about" href="">
            Recycling
          </a>{" "}
          <> | </>
          <a id="about" href="">
            Gift Cards
          </a>{" "}
          <> | </>
          <a id="about" href="">
            FaceBewk
          </a>{" "}
          <> | </>
          <a id="about" href="">
            Twizzer
          </a>{" "}
        </div>
        <div />
      </div>
    </>
  );
}

export default Footer;
