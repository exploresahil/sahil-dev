import Accordian from "@/components/ui/accordian/Accordian";
import WorkflowData from "./db";
import "./style.scss";
import Image from "next/image";
import ImageSize from "@/app/utils/image-utils";

const retro =
  "https://images.unsplash.com/photo-1639395241103-9c855f93a90c?q=80&w=1896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const Workflow = () => {
  return (
    <section id="workflow">
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
        <h2>Workflow</h2>
        <Accordian data={WorkflowData} />
      </div>
    </section>
  );
};

export default Workflow;
