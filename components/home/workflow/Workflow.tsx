import Accordian from "@/components/ui/accordian/Accordian";
import WorkflowData from "./db";
import "./style.scss";

const Workflow = () => {
  return (
    <section id="workflow">
      <h2>Workflow</h2>
      <Accordian data={WorkflowData} />
    </section>
  );
};

export default Workflow;
