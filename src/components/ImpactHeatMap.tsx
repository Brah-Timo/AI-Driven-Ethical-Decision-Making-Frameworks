import React from "react";
import { Card } from "./ui/card";

interface ImpactData {
  stakeholder: string;
  impact: number;
  category: string;
}

interface ImpactHeatMapProps {
  data?: ImpactData[];
  width?: number;
  height?: number;
}

const defaultData: ImpactData[] = [
  { stakeholder: "Employees", impact: 0.8, category: "Social" },
  { stakeholder: "Community", impact: 0.6, category: "Social" },
  { stakeholder: "Environment", impact: 0.9, category: "Environmental" },
  { stakeholder: "Shareholders", impact: 0.4, category: "Economic" },
  { stakeholder: "Customers", impact: 0.7, category: "Social" },
];

const ImpactHeatMap = ({
  data = defaultData,
  width = 400,
  height = 400,
}: ImpactHeatMapProps) => {
  const getColorIntensity = (impact: number) => {
    // Convert impact value to a color scale from green to red
    const hue = ((1 - impact) * 120).toString(10);
    return `hsl(${hue}, 70%, 50%)`;
  };

  const cellSize = Math.min(width, height) / Math.ceil(Math.sqrt(data.length));

  return (
    <Card className="p-6 bg-white">
      <h3 className="text-lg font-semibold mb-4">Impact Heat Map</h3>
      <div
        className="grid gap-2"
        style={{
          width: `${width}px`,
          height: `${height}px`,
          gridTemplateColumns: `repeat(${Math.ceil(Math.sqrt(data.length))}, 1fr)`,
        }}
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="relative flex items-center justify-center p-2 rounded-lg transition-colors"
            style={{
              backgroundColor: getColorIntensity(item.impact),
              width: `${cellSize}px`,
              height: `${cellSize}px`,
            }}
          >
            <div className="text-center">
              <div className="text-white text-sm font-medium">
                {item.stakeholder}
              </div>
              <div className="text-white text-xs">
                {Math.round(item.impact * 100)}%
              </div>
              <div className="text-white text-xs">{item.category}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-between items-center px-2">
        <div className="text-sm text-gray-500">Low Impact</div>
        <div
          className="h-2 w-32 rounded-full"
          style={{
            background:
              "linear-gradient(to right, hsl(120, 70%, 50%), hsl(0, 70%, 50%)",
          }}
        />
        <div className="text-sm text-gray-500">High Impact</div>
      </div>
    </Card>
  );
};

export default ImpactHeatMap;
