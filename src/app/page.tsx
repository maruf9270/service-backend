import Hero from "@/components/homepage/Hero";
import { Col, Row } from "antd";
import Image from "next/image";
import heroImage from "../assets/heroMan.png";
import Service from "@/components/homepage/Service";

export default function Home() {
  return (
    <>
      <div
        style={{
          background: "#f2efe8",
          height: "100%",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Hero></Hero>
        <div style={{ position: "relative" }}>
          <Row justify={"space-between"} align={"bottom"}>
            <Col span={12}></Col>
            <Col span={12}>
              <Image
                src={heroImage}
                height={750}
                alt="THis is a "
                style={{ zIndex: "1" }}
              ></Image>
            </Col>
          </Row>
        </div>
      </div>
      <div>
        <Service></Service>
      </div>
    </>
  );
}
