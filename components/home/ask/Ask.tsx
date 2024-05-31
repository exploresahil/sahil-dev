import Image from "next/image";
import "./style.scss";
import ImageSize from "@/utils/image-utils";
import Accordian from "@/components/ui/accordian/Accordian";
import askData from "./db";

const retro =
  "https://images.unsplash.com/photo-1516975426901-140825b3cf8b?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const Ask = () => {
  return (
    <section id="ask">
      <div className="left">
        <div className="img-cont">
          <Image
            src={retro}
            alt="Sahil Satpute image"
            fill
            sizes={ImageSize.bannerSizes}
          />
        </div>
      </div>
      <div className="right">
        <h2>Let's untangle your questions together!</h2>
        <Accordian data={askData} />
      </div>
    </section>
  );
};

export default Ask;
