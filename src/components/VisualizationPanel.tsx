import React from "react";
import { Card } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import ImpactRadarChart from "./ImpactRadarChart";
import ImpactHeatMap from "./ImpactHeatMap";

interface VisualizationPanelProps {
  radarData?: {
    category: string;
    value: number;
  }[];
  heatMapData?: {
    stakeholder: string;
    impact: number;
    category: string;
  }[];
}

const VisualizationPanel = ({
  radarData,
  heatMapData,
}: VisualizationPanelProps) => {
  return (
    <Card className="p-6 bg-white w-full h-full max-w-[800px] max-h-[600px]">
      <h2 className="text-2xl font-semibold mb-6">Impact Analysis</h2>

      <Tabs defaultValue="radar" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="radar">Radar Chart</TabsTrigger>
          <TabsTrigger value="heatmap">Heat Map</TabsTrigger>
        </TabsList>

        <TabsContent value="radar" className="flex justify-center items-center">
          <ImpactRadarChart data={radarData} />
        </TabsContent>

        <TabsContent
          value="heatmap"
          className="flex justify-center items-center"
        >
          <ImpactHeatMap data={heatMapData} />
        </TabsContent>
      </Tabs>

      <div className="mt-6 text-sm text-gray-500">
        <p>
          This visualization shows the impact analysis across different
          dimensions and stakeholder groups.
        </p>
      </div>
    </Card>
  );
};

export default VisualizationPanel;
