import { useCopilotAction } from "@copilotkit/react-core";

function HealthAdviceComponent() {
  useCopilotAction({
    name: "giveHealthAdvice",
    description: "Provide health tips based on user symptoms.",
    parameters: [
      {
        name: "symptom",
        type: "string",
        description: "The health symptom described by the user.",
      },
    ],
    handler: async ({ symptom }) => {
      // Your API call or AI logic here
      console.log(`User reported symptom: ${symptom}`);
    },
  });

  return <div>Health AI Advice Ready.</div>;
}
