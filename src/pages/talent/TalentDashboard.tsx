import React from "react";
import { DashboardLayout } from "@/components/dashboard/talent/DashboardLayout";
import { Button } from "@/components/ui/button";
import { ChevronRight, Play, ChevronDown } from "lucide-react";
import videoPreview from "@/assets/preview-image.png";

export const TalentDashboard: React.FC = () => {
  return (
    <DashboardLayout
      userRole="talent"
      userName="Mariana"
      notificationCount={3}
    >
      <div className="flex">
        {/* Main Content */}
        <div className="flex-1 p-6 space-y-6">
          {/* Next Step Card */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-base font-semibold text-gray-900 mb-4">Next step</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <input
                  type="checkbox"
                  checked
                  readOnly
                  className="w-5 h-5 rounded border-gray-300"
                />
                <span className="text-sm text-gray-700">
                  Connect your product (don't in 3 days before)
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded border-gray-300"
                />
                <span className="text-sm text-gray-700">
                  Set up your product (don't in 6 days before)
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded border-gray-300"
                />
                <span className="text-sm text-gray-700">
                  Connect your product (don't in 3 days before)
                </span>
              </div>
            </div>
          </div>

          {/* Introducing Team Inboxes */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                    NEW FEATURE
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Introducing team inboxes
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Provide world-class support, right from the start. Manage all your team's conversations in one place with our new shared inbox feature. Try it out by inviting your team.
                </p>
                <Button variant="link" className="text-blue-600 p-0 h-auto font-medium text-sm">
                  Learn more about the new updates
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
              <button className="ml-4 flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
                <Play className="w-4 h-4" />
                <span>Show team inboxes</span>
              </button>
            </div>

            {/* Video Placeholder */}
            <div className="relative bg-gray-900 rounded-lg overflow-hidden aspect-video">
              <img
                src={videoPreview}
                alt="Video thumbnail"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg">
                  <Play className="w-6 h-6 text-gray-900 ml-1" />
                </button>
              </div>
            </div>
          </div>

          {/* FAQs Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">FAQs</h3>
            <div className="space-y-2">
              {[
                "Is there a free trial available?",
                "Can I change my plan later?",
                "What is your cancellation policy?",
                "Can other info be added to an invoice?",
                "How does billing work?",
                "How do I change my account email?",
              ].map((question, index) => (
                <button
                  key={index}
                  className="w-full flex items-center justify-between p-3 text-left hover:bg-gray-50 rounded-lg transition-colors group"
                >
                  <span className="text-sm text-gray-700">{question}</span>
                  <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 bg-white border-l border-gray-200 p-6 space-y-6">
          {/* Your Progress */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Your progress</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Profile setup</span>
                  <span className="text-sm font-semibold text-gray-900">100%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: "100%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Experience level</span>
                  <span className="text-sm font-semibold text-gray-900">0%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: "0%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Get hired</span>
                  <button className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: "0%" }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Next Step Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Next step</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-semibold shrink-0">
                  1
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 mb-2">
                    Verify your identity
                  </p>
                  <Button
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700 text-xs h-7 w-full"
                  >
                    GET VERIFIED
                  </Button>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 text-sm font-semibold shrink-0">
                  2
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-600">
                    Submit your documents
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 text-sm font-semibold shrink-0">
                  3
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-600">Get hired</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};