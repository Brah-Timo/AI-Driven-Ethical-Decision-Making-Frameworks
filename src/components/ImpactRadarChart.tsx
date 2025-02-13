import React from "react";
import { Card } from "./ui/card";

interface ImpactRadarChartProps {
  data?: {
    category: string;
    value: number;
  }[];
}

const ImpactRadarChart = ({
  data = [
    { category: "Environmental", value: 0.8 },
    { category: "Social", value: 0.6 },
    { category: "Economic", value: 0.7 },
    { category: "Governance", value: 0.5 },
    { category: "Ethical", value: 0.9 },
  ],
}: ImpactRadarChartProps) => {
  const size = 400;
  const centerX = size / 2;
  const centerY = size / 2;
  const radius = size * 0.4;

  // Calculate points for the radar chart
  const points = data.map((item, index) => {
    const angle = (Math.PI * 2 * index) / data.length - Math.PI / 2;
    const x = centerX + radius * Math.cos(angle) * item.value;
    const y = centerY + radius * Math.sin(angle) * item.value;
    return { x, y, ...item };
  });

  // Create the polygon points string
  const polygonPoints = points
    .map((point) => `${point.x},${point.y}`)
    .join(" ");

  // Create axis lines and labels
  const axes = data.map((item, index) => {
    const angle = (Math.PI * 2 * index) / data.length - Math.PI / 2;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    const labelX = centerX + (radius + 30) * Math.cos(angle);
    const labelY = centerY + (radius + 30) * Math.sin(angle);

    return {
      line: { x1: centerX, y1: centerY, x2: x, y2: y },
      label: { x: labelX, y: labelY, text: item.category },
    };
  });

  return (
    <Card className="p-6 bg-white w-[400px] h-[400px]">
      <svg width={size} height={size}>
        {/* Background circles */}
        {[0.2, 0.4, 0.6, 0.8, 1].map((scale, i) => (
          <circle
            key={i}
            cx={centerX}
            cy={centerY}
            r={radius * scale}
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="1"
          />
        ))}

        {/* Axis lines */}
        {axes.map((axis, i) => (
          <line
            key={i}
            x1={axis.line.x1}
            y1={axis.line.y1}
            x2={axis.line.x2}
            y2={axis.line.y2}
            stroke="#e5e7eb"
            strokeWidth="1"
          />
        ))}

        {/* Data polygon */}
        <polygon
          points={polygonPoints}
          fill="rgba(59, 130, 246, 0.5)"
          stroke="#3b82f6"
          strokeWidth="2"
        />

        {/* Category labels */}
        {axes.map((axis, i) => (
          <text
            key={i}
            x={axis.label.x}
            y={axis.label.y}
            textAnchor="middle"
            dominantBaseline="middle"
            className="text-xs fill-gray-600"
          >
            {axis.label.text}
          </text>
        ))}

        {/* Data points */}
        {points.map((point, i) => (
          <circle key={i} cx={point.x} cy={point.y} r="4" fill="#3b82f6" />
        ))}
      </svg>
    </Card>
  );
};

export default ImpactRadarChart;
