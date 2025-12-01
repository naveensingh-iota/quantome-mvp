// src/pages/talent/settings/NotificationSettings.tsx
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const NotificationSettings: React.FC = () => {
  const [settings, setSettings] = useState({
    desktop: "Important notifications only",
    mobile: "All notifications",
    emailFrequency: "All activity",
    emailTiming: "Once a day",
    otherEmails: "Important notifications only",
  });

  const [importantActivity, setImportantActivity] = useState({
    reportPublished: false,
    interviewScheduled: false,
    offerAccepted: false,
    offerDeclined: false,
    interviewCanceled: false,
    offerMessages: false,
    hireIsMade: false,
    contractBegan: false,
    contractEnded: false,
    contractRenewed: false,
    newSubmission: false,
    teamWorkspace: false,
    monthlyBilling: false,
    otherContract: false,
    rejectedSample: false,
  });

  const [miscellaneous, setMiscellaneous] = useState({
    reportPublished: false,
    interviewScheduled: false,
    offerAccepted: false,
  });

  const handleSettingChange = (key: string, value: string) => {
    setSettings({ ...settings, [key]: value });
  };

  return (
    <div className="max-w-4xl">
      {/* General Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-1">General</h2>
          <p className="text-sm text-gray-600">
            Update your photo and personal details here.
          </p>
        </div>

        {/* Desktop */}
        <div className="flex items-start gap-4 py-5 border-b border-gray-200">
          <Label className="text-sm font-medium text-gray-700 w-32 pt-2">
            Desktop
          </Label>
          <div className="flex-1">
            <Select
              value={settings.desktop}
              onValueChange={(value) => handleSettingChange("desktop", value)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Important notifications only">
                  Important notifications only
                </SelectItem>
                <SelectItem value="All notifications">All notifications</SelectItem>
                <SelectItem value="None">None</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-gray-500 mt-2">Never lost</p>
          </div>
        </div>

        {/* Mobile */}
        <div className="flex items-start gap-4 py-5">
          <Label className="text-sm font-medium text-gray-700 w-32 pt-2">
            Mobile
          </Label>
          <div className="flex-1">
            <Select
              value={settings.mobile}
              onValueChange={(value) => handleSettingChange("mobile", value)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All notifications">All notifications</SelectItem>
                <SelectItem value="Important notifications only">
                  Important notifications only
                </SelectItem>
                <SelectItem value="None">None</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-gray-500 mt-2">Never lost</p>
          </div>
        </div>
      </div>

      {/* Email Notifications Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-1">
            Email notifications
          </h2>
          <p className="text-sm text-gray-600">
            Sending to a**********s@yngroup.com
          </p>
        </div>

        {/* Activity Settings */}
        <div className="flex items-start gap-4 py-5">
          <Label className="text-sm font-medium text-gray-700 w-48">
            Send an email with recent activity for
          </Label>
          <div className="flex-1 flex gap-3">
            <Select
              value={settings.emailFrequency}
              onValueChange={(value) => handleSettingChange("emailFrequency", value)}
            >
              <SelectTrigger className="flex-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All activity">All activity</SelectItem>
                <SelectItem value="Important activity">Important activity</SelectItem>
                <SelectItem value="None">None</SelectItem>
              </SelectContent>
            </Select>
            <Select
              value={settings.emailTiming}
              onValueChange={(value) => handleSettingChange("emailTiming", value)}
            >
              <SelectTrigger className="flex-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Once a day">Once a day</SelectItem>
                <SelectItem value="Once a week">Once a week</SelectItem>
                <SelectItem value="Real-time">Real-time</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Other Emails Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-1">
            Other emails
          </h2>
          <p className="text-sm text-gray-600">
            Update your photo and personal details here.
          </p>
        </div>

        {/* Other Email Settings */}
        <div className="flex items-start gap-4 py-5 border-b border-gray-200">
          <Label className="text-sm font-medium text-gray-700 w-48">
            Send an email with recent activity for
          </Label>
          <div className="flex-1">
            <Select
              value={settings.otherEmails}
              onValueChange={(value) => handleSettingChange("otherEmails", value)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Important notifications only">
                  Important notifications only
                </SelectItem>
                <SelectItem value="All notifications">All notifications</SelectItem>
                <SelectItem value="None">None</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Important Activity */}
        <div className="py-5 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">
            Important activity
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Checkbox
                id="reportPublished"
                checked={importantActivity.reportPublished}
                onCheckedChange={(checked) =>
                  setImportantActivity({
                    ...importantActivity,
                    reportPublished: checked as boolean,
                  })
                }
              />
              <label htmlFor="reportPublished" className="text-sm text-gray-700 cursor-pointer">
                A report is published
              </label>
            </div>
            <div className="flex items-center gap-3">
              <Checkbox
                id="interviewScheduled"
                checked={importantActivity.interviewScheduled}
                onCheckedChange={(checked) =>
                  setImportantActivity({
                    ...importantActivity,
                    interviewScheduled: checked as boolean,
                  })
                }
              />
              <label htmlFor="interviewScheduled" className="text-sm text-gray-700 cursor-pointer">
                An interview is scheduled
              </label>
            </div>
            <div className="flex items-center gap-3">
              <Checkbox
                id="offerAccepted"
                checked={importantActivity.offerAccepted}
                onCheckedChange={(checked) =>
                  setImportantActivity({
                    ...importantActivity,
                    offerAccepted: checked as boolean,
                  })
                }
              />
              <label htmlFor="offerAccepted" className="text-sm text-gray-700 cursor-pointer">
                An offer is accepted
              </label>
            </div>
            <div className="flex items-center gap-3">
              <Checkbox
                id="offerDeclined"
                checked={importantActivity.offerDeclined}
                onCheckedChange={(checked) =>
                  setImportantActivity({
                    ...importantActivity,
                    offerDeclined: checked as boolean,
                  })
                }
              />
              <label htmlFor="offerDeclined" className="text-sm text-gray-700 cursor-pointer">
                Offer is declined
              </label>
            </div>
            <div className="flex items-center gap-3">
              <Checkbox
                id="interviewCanceled"
                checked={importantActivity.interviewCanceled}
                onCheckedChange={(checked) =>
                  setImportantActivity({
                    ...importantActivity,
                    interviewCanceled: checked as boolean,
                  })
                }
              />
              <label htmlFor="interviewCanceled" className="text-sm text-gray-700 cursor-pointer">
                An interview or offer is canceled or withdrawn
              </label>
            </div>
            <div className="flex items-center gap-3">
              <Checkbox
                id="offerMessages"
                checked={importantActivity.offerMessages}
                onCheckedChange={(checked) =>
                  setImportantActivity({
                    ...importantActivity,
                    offerMessages: checked as boolean,
                  })
                }
              />
              <label htmlFor="offerMessages" className="text-sm text-gray-700 cursor-pointer">
                Offer messages
              </label>
            </div>
            <div className="flex items-center gap-3">
              <Checkbox
                id="hireIsMade"
                checked={importantActivity.hireIsMade}
                onCheckedChange={(checked) =>
                  setImportantActivity({
                    ...importantActivity,
                    hireIsMade: checked as boolean,
                  })
                }
              />
              <label htmlFor="hireIsMade" className="text-sm text-gray-700 cursor-pointer">
                A hire is made
              </label>
            </div>
            <div className="flex items-center gap-3">
              <Checkbox
                id="contractBegan"
                checked={importantActivity.contractBegan}
                onCheckedChange={(checked) =>
                  setImportantActivity({
                    ...importantActivity,
                    contractBegan: checked as boolean,
                  })
                }
              />
              <label htmlFor="contractBegan" className="text-sm text-gray-700 cursor-pointer">
                Contract began
              </label>
            </div>
            <div className="flex items-center gap-3">
              <Checkbox
                id="contractEnded"
                checked={importantActivity.contractEnded}
                onCheckedChange={(checked) =>
                  setImportantActivity({
                    ...importantActivity,
                    contractEnded: checked as boolean,
                  })
                }
              />
              <label htmlFor="contractEnded" className="text-sm text-gray-700 cursor-pointer">
                Contract terms are modified
              </label>
            </div>
            <div className="flex items-center gap-3">
              <Checkbox
                id="contractRenewed"
                checked={importantActivity.contractRenewed}
                onCheckedChange={(checked) =>
                  setImportantActivity({
                    ...importantActivity,
                    contractRenewed: checked as boolean,
                  })
                }
              />
              <label htmlFor="contractRenewed" className="text-sm text-gray-700 cursor-pointer">
                A contract ends
              </label>
            </div>
            <div className="flex items-center gap-3">
              <Checkbox
                id="newSubmission"
                checked={importantActivity.newSubmission}
                onCheckedChange={(checked) =>
                  setImportantActivity({
                    ...importantActivity,
                    newSubmission: checked as boolean,
                  })
                }
              />
              <label htmlFor="newSubmission" className="text-sm text-gray-700 cursor-pointer">
                A new submission is ready for review
              </label>
            </div>
            <div className="flex items-center gap-3">
              <Checkbox
                id="teamWorkspace"
                checked={importantActivity.teamWorkspace}
                onCheckedChange={(checked) =>
                  setImportantActivity({
                    ...importantActivity,
                    teamWorkspace: checked as boolean,
                  })
                }
              />
              <label htmlFor="teamWorkspace" className="text-sm text-gray-700 cursor-pointer">
                Team/Workspace submitted (500 lined of text)
              </label>
            </div>
            <div className="flex items-center gap-3">
              <Checkbox
                id="monthlyBilling"
                checked={importantActivity.monthlyBilling}
                onCheckedChange={(checked) =>
                  setImportantActivity({
                    ...importantActivity,
                    monthlyBilling: checked as boolean,
                  })
                }
              />
              <label htmlFor="monthlyBilling" className="text-sm text-gray-700 cursor-pointer">
                Monthly billing report
              </label>
            </div>
            <div className="flex items-center gap-3">
              <Checkbox
                id="otherContract"
                checked={importantActivity.otherContract}
                onCheckedChange={(checked) =>
                  setImportantActivity({
                    ...importantActivity,
                    otherContract: checked as boolean,
                  })
                }
              />
              <label htmlFor="otherContract" className="text-sm text-gray-700 cursor-pointer">
                Other contract-related messages
              </label>
            </div>
            <div className="flex items-center gap-3">
              <Checkbox
                id="rejectedSample"
                checked={importantActivity.rejectedSample}
                onCheckedChange={(checked) =>
                  setImportantActivity({
                    ...importantActivity,
                    rejectedSample: checked as boolean,
                  })
                }
              />
              <label htmlFor="rejectedSample" className="text-sm text-gray-700 cursor-pointer">
                Rejected sample and other financial-related emails
              </label>
            </div>
          </div>
        </div>

        {/* Miscellaneous */}
        <div className="py-5">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">
            Miscellaneous
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Checkbox
                id="misc1"
                checked={miscellaneous.reportPublished}
                onCheckedChange={(checked) =>
                  setMiscellaneous({
                    ...miscellaneous,
                    reportPublished: checked as boolean,
                  })
                }
              />
              <label htmlFor="misc1" className="text-sm text-gray-700 cursor-pointer">
                A report is published
              </label>
            </div>
            <div className="flex items-center gap-3">
              <Checkbox
                id="misc2"
                checked={miscellaneous.interviewScheduled}
                onCheckedChange={(checked) =>
                  setMiscellaneous({
                    ...miscellaneous,
                    interviewScheduled: checked as boolean,
                  })
                }
              />
              <label htmlFor="misc2" className="text-sm text-gray-700 cursor-pointer">
                An interview is scheduled
              </label>
            </div>
            <div className="flex items-center gap-3">
              <Checkbox
                id="misc3"
                checked={miscellaneous.offerAccepted}
                onCheckedChange={(checked) =>
                  setMiscellaneous({
                    ...miscellaneous,
                    offerAccepted: checked as boolean,
                  })
                }
              />
              <label htmlFor="misc3" className="text-sm text-gray-700 cursor-pointer">
                An offer is accepted
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-3">
        <Button variant="outline">Cancel</Button>
        <Button className="bg-blue-600 hover:bg-blue-700">Save</Button>
      </div>
    </div>
  );
};