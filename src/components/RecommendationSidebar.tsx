import React from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { AlertCircle, CheckCircle, XCircle } from "lucide-react";

interface Recommendation {
  type: "guideline" | "mitigation";
  title: string;
  description: string;
  severity: "high" | "medium" | "low";
  status: "positive" | "negative" | "warning";
}

interface RecommendationSidebarProps {
  recommendations?: Recommendation[];
}

const defaultRecommendations: Recommendation[] = [
  {
    type: "guideline",
    title: "Transparency in Decision Making",
    description:
      "Ensure all stakeholders are informed about the decision process and its potential impacts.",
    severity: "high",
    status: "warning",
  },
  {
    type: "mitigation",
    title: "Stakeholder Engagement Plan",
    description:
      "Develop a comprehensive engagement strategy to address concerns and gather feedback.",
    severity: "medium",
    status: "positive",
  },
  {
    type: "guideline",
    title: "Data Privacy Compliance",
    description:
      "Ensure all data collection and processing meets relevant privacy regulations and standards.",
    severity: "high",
    status: "negative",
  },
  {
    type: "mitigation",
    title: "Environmental Impact Assessment",
    description:
      "Conduct thorough environmental impact studies and implement sustainable practices.",
    severity: "medium",
    status: "warning",
  },
];

const RecommendationSidebar = ({
  recommendations = defaultRecommendations,
}: RecommendationSidebarProps) => {
  const getStatusIcon = (status: Recommendation["status"]) => {
    switch (status) {
      case "positive":
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case "negative":
        return <XCircle className="w-5 h-5 text-red-500" />;
      case "warning":
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
    }
  };

  const getSeverityColor = (severity: Recommendation["severity"]) => {
    switch (severity) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-green-100 text-green-800";
    }
  };

  return (
    <Card className="w-80 h-full bg-white border-l">
      <div className="p-4 border-b">
        <h2 className="text-xl font-semibold">Recommendations</h2>
        <p className="text-sm text-gray-500 mt-1">
          AI-generated guidelines and mitigation strategies
        </p>
      </div>

      <ScrollArea className="h-[calc(100%-80px)]">
        <div className="p-4 space-y-4">
          {recommendations.map((recommendation, index) => (
            <Card key={index} className="p-4 space-y-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-2">
                  {getStatusIcon(recommendation.status)}
                  <span className="font-medium">{recommendation.title}</span>
                </div>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(
                    recommendation.severity,
                  )}`}
                >
                  {recommendation.severity}
                </span>
              </div>
              <p className="text-sm text-gray-600">
                {recommendation.description}
              </p>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" size="sm">
                  Dismiss
                </Button>
                <Button size="sm">Apply</Button>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
};

export default RecommendationSidebar;
