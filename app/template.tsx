import TemplateContainer from "@/components/template/Template";

export default function Template({ children }: { children: React.ReactNode }) {
  return <TemplateContainer>{children}</TemplateContainer>;
}
