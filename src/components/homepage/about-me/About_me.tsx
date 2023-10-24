import Image from "next/image";
import React from "react";
import HeroMan from "../../../assets/hero-about.png";

const About_me = () => {
  return (
    <div className="grid grid-cols-12 ">
      <div className="col-span-6">
        <div>— About Me</div>
        <div
          style={{
            fontSize: "5rem",
            fontFamily: "cursive",
          }}
        >
          Hello Nice To meet you
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur optio deleniti non accusantium molestias consequatur
            iste blanditiis ad natus itaque!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            molestiae debitis distinctio, consequuntur culpa dolorem animi ea
            ducimus alias tenetur, fugiat ex suscipit corporis amet, aperiam rem
            a ipsum pariatur?
          </p>
          <p
            style={{
              fontFamily: "'Lovers Quarrel', cursive",
            }}
          >
            Maruf Ahmed
          </p>
        </div>
      </div>
      <div className="col-span-5 justify-self-end">
        <Image
          src={HeroMan}
          height={400}
          width={400}
          style={{
            borderRadius: "50% 0% 50% 50%",
            boxShadow: "49px -41px 0px 0px #ECECEC",
            backgroundColor: "#e3e3e3",
            zIndex: 2,
          }}
          alt="Heroman ime"
        ></Image>
        <div
          style={{
            margin: "-90px 0px 0px 120px",
            padding: "27px 27px 27px 27px",
            backgroundColor: "#121313",
            borderRadius: "82px 82px 82px 0px",
            boxShadow: "-14px 14px 0px 0px #323232",
            zIndex: 10,
            display: "inline-block",
          }}
        >
          <span
            style={{
              color: "white",
              fontFamily: "monospace",
              fontSize: "30px",
              textAlign: "center",
            }}
          >
            16 <br />
          </span>
          <span
            style={{
              fontFamily: "sans-serif",
              fontSize: "1rem",
              color: "white",
              textAlign: "center",
            }}
          >
            Years of <br />
            Exprience
          </span>
        </div>
      </div>
    </div>
  );
};

export default About_me;
