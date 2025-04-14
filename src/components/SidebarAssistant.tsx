import { CopilotSidebar } from "@copilotkit/react-ui";

function SidebarAssistant() {
  return (
    <CopilotSidebar
      defaultOpen={true}
      instructions="You're an expert health assistant AI."
      labels={{
        title: "Healio Assistant",
        placeholder: "Ask me about your health symptoms...",
      }}
    />
  );
}

export default SidebarAssistant;
