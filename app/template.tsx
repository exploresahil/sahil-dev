import TemplateContainer from "@/components/template/Template";
import CustomCursor from "@/components/ui/customCursor/CustomCursor";
import { CursorProvider } from "@/context/CursorContext";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <TemplateContainer>
      <CursorProvider>
        <CustomCursor />
        {children}
      </CursorProvider>
    </TemplateContainer>
  );
}
