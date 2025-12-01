import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Pencil } from "lucide-react";

export const SecuritySettings: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "olivia.rhye@untitledui.com",
    password: "••••••••",
    twoFactor: false,
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="max-w-4xl">
      {/* Security Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
        {/* Personal email address */}
        <div className="flex items-center justify-between py-5 border-b border-gray-200">
          <Label className="text-sm font-medium text-gray-700">
            Personal email address
          </Label>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-900">{formData.email}</span>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Pencil className="h-4 w-4 text-gray-400" />
            </Button>
          </div>
        </div>

        {/* Password */}
        <div className="flex items-center justify-between py-5 border-b border-gray-200">
          <Label className="text-sm font-medium text-gray-700">
            Password
          </Label>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-900">{formData.password}</span>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Pencil className="h-4 w-4 text-gray-400" />
            </Button>
          </div>
        </div>

        {/* 2-Step Verification */}
        <div className="flex items-center justify-between py-5 border-b border-gray-200">
          <div>
            <Label className="text-sm font-medium text-gray-900 block mb-1">
              2-Step Verification
            </Label>
            <p className="text-sm text-gray-600">
              Secure your account with 2-step login steps.
            </p>
          </div>
          <Switch
            checked={formData.twoFactor}
            onCheckedChange={(checked) =>
              handleInputChange("twoFactor", checked)
            }
          />
        </div>

        {/* Danger Zone */}
        <div className="pt-5">
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-900 mb-1">
              Danger zone
            </h3>
            <p className="text-sm text-gray-600">
              To use your name or corporation option keep.
            </p>
          </div>
          <Button
            variant="outline"
            className="text-red-600 border-red-300 hover:bg-red-50 hover:text-red-700"
          >
            Delete my account
          </Button>
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