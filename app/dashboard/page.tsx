import { SurveyProvider } from "@/lib/context/survey-context";
import { SurveyFlow } from "@/components/survey/survey-flow";
import { SurveyAside } from "@/components/survey/survey-aside";

export default function Page() {
  return (
    <SurveyProvider>
      <div className="grid min-h-dvh grid-cols-1 lg:grid-cols-[var(--container-2xs)_2.5rem_minmax(0,1fr)_2.5rem] xl:grid-cols-[var(--container-2xs)_2.5rem_minmax(0,1fr)_2.5rem] bg-[url('/bg-lights.png')] bg-no-repeat bg-right bg-fixed bg-contain">
        <SurveyAside totalSteps={5} />
        <div className="col-start-2 max-lg:hidden"></div>
        <div className="lg:col-start-3">
          <div className="flex-1 py-4">
            <SurveyFlow />
          </div>
        </div>
      </div>
    </SurveyProvider>
  );
}
