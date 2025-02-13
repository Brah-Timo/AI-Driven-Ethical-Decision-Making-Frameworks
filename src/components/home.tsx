import React from "react";
import DecisionInputForm from "./DecisionInputForm";
import VisualizationPanel from "./VisualizationPanel";
import RecommendationSidebar from "./RecommendationSidebar";

interface HomeProps {
  initialData?: {
    radarData?: {
      category: string;
      value: number;
    }[];
    heatMapData?: {
      stakeholder: string;
      impact: number;
      category: string;
    }[];
  };
}

const Home = ({ initialData }: HomeProps = {}) => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <div className="flex-1 p-6 space-y-6">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Ethics Decision Analyzer
          </h1>
          <p className="text-gray-500 mt-2">
            Analyze and evaluate the ethical implications of business decisions
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <DecisionInputForm
              onSubmit={(data) => {
                console.log("Form submitted:", data);
              }}
            />
          </div>
          <div>
            <VisualizationPanel
              radarData={initialData?.radarData}
              heatMapData={initialData?.heatMapData}
            />
          </div>
        </div>
      </div>

      <RecommendationSidebar />
    </div>
  );
};

export { Home };
