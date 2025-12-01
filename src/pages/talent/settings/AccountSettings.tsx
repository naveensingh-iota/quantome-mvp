// src/pages/talent/settings/AccountSettings.tsx
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const AccountSettings: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "Jacques",
    lastName: "Nack",
    email: "giacoues23",
    name: "Jacques",
    lastName2: "Nack",
    companyEmail: "contact@yngroup.com",
    companyPhone: "0032 000 0000",
    bio: "Regular",
    bioText: "",
    companyName: "",
    companyEmailAddress: "contact@yngroup.com",
    companyPhone2: "",
    employees: "1 to 200",
    location: "",
    website: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-4xl">
      {/* Basic Info Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-1">
            Basic info
          </h2>
          <p className="text-sm text-gray-600">
            Update your photo and personal details here.
          </p>
        </div>

        {/* Profile Photo */}
        <div className="flex items-center gap-6 pb-6 border-b border-gray-200">
          <div className="flex items-start gap-4 flex-1">
            <div className="w-32">
              <span className="text-sm font-medium text-gray-700">
                Your photo
              </span>
              <p className="text-xs text-gray-500 mt-1">
                This will be displayed on your profile.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden">
                <img
                  src="https://via.placeholder.com/64"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="text-xs h-8">
                  Remove
                </Button>
                <Button variant="outline" size="sm" className="text-xs h-8">
                  Change
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Full Name */}
        <div className="flex items-start gap-4 py-6 border-b border-gray-200">
          <Label className="text-sm font-medium text-gray-700 w-32 pt-2">
            Full Name
          </Label>
          <div className="flex-1 flex gap-3">
            <Input
              placeholder="First name"
              value={formData.firstName}
              onChange={(e) =>
                handleInputChange("firstName", e.target.value)
              }
            />
            <Input
              placeholder="Last name"
              value={formData.lastName}
              onChange={(e) =>
                handleInputChange("lastName", e.target.value)
              }
            />
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-4 py-6">
          <Label className="text-sm font-medium text-gray-700 w-32 pt-2">
            Email
          </Label>
          <div className="flex-1">
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Extra Info Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-1">
            Extra info
          </h2>
          <p className="text-sm text-gray-600">
            Update your photo and personal details here.
          </p>
        </div>

        {/* Name */}
        <div className="flex items-start gap-4 py-6 border-b border-gray-200">
          <Label className="text-sm font-medium text-gray-700 w-32 pt-2">
            Name
          </Label>
          <div className="flex-1 flex gap-3">
            <Input
              placeholder="First name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
            />
            <Input
              placeholder="Last name"
              value={formData.lastName2}
              onChange={(e) =>
                handleInputChange("lastName2", e.target.value)
              }
            />
          </div>
        </div>

        {/* Company Email */}
        <div className="flex items-start gap-4 py-6 border-b border-gray-200">
          <Label className="text-sm font-medium text-gray-700 w-32 pt-2">
            Company email address
          </Label>
          <div className="flex-1">
            <Input
              type="email"
              value={formData.companyEmail}
              onChange={(e) =>
                handleInputChange("companyEmail", e.target.value)
              }
            />
          </div>
        </div>

        {/* Company Phone */}
        <div className="flex items-start gap-4 py-6 border-b border-gray-200">
          <Label className="text-sm font-medium text-gray-700 w-32 pt-2">
            Company phone number
          </Label>
          <div className="flex-1">
            <Input
              type="tel"
              value={formData.companyPhone}
              onChange={(e) =>
                handleInputChange("companyPhone", e.target.value)
              }
            />
          </div>
        </div>

        {/* Bio */}
        <div className="flex items-start gap-4 py-6 border-b border-gray-200">
          <div className="w-32">
            <Label className="text-sm font-medium text-gray-700">
              Your bio
            </Label>
            <p className="text-xs text-gray-500 mt-1">
              Write a short introduction.
            </p>
          </div>
          <div className="flex-1">
            <div className="mb-2 flex items-center gap-2">
              <Select value={formData.bio} onValueChange={(value) => handleInputChange("bio", value)}>
                <SelectTrigger className="w-32 h-9">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Regular">Regular</SelectItem>
                  <SelectItem value="Bold">Bold</SelectItem>
                  <SelectItem value="Italic">Italic</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex gap-1">
                <Button variant="outline" size="icon" className="h-9 w-9 text-xs">
                  <span className="font-bold">B</span>
                </Button>
                <Button variant="outline" size="icon" className="h-9 w-9 text-xs">
                  <span className="italic">I</span>
                </Button>
                <Button variant="outline" size="icon" className="h-9 w-9 text-xs">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </Button>
                <Button variant="outline" size="icon" className="h-9 w-9 text-xs">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8M4 18h4" />
                  </svg>
                </Button>
              </div>
            </div>
            <Textarea
              placeholder="About the company here"
              className="min-h-[120px] resize-none"
              value={formData.bioText}
              onChange={(e) => handleInputChange("bioText", e.target.value)}
            />
            <p className="text-xs text-gray-500 mt-2">
              275 characters left
            </p>
          </div>
        </div>

        {/* Company Name */}
        <div className="flex items-start gap-4 py-6 border-b border-gray-200">
          <Label className="text-sm font-medium text-gray-700 w-32 pt-2">
            Company name
          </Label>
          <div className="flex-1">
            <Input
              placeholder="Company name here"
              value={formData.companyName}
              onChange={(e) =>
                handleInputChange("companyName", e.target.value)
              }
            />
          </div>
        </div>

        {/* Company Email Address */}
        <div className="flex items-start gap-4 py-6 border-b border-gray-200">
          <Label className="text-sm font-medium text-gray-700 w-32 pt-2">
            Company email address
          </Label>
          <div className="flex-1">
            <Input
              type="email"
              value={formData.companyEmailAddress}
              onChange={(e) =>
                handleInputChange("companyEmailAddress", e.target.value)
              }
            />
          </div>
        </div>

        {/* Company Phone Number */}
        <div className="flex items-start gap-4 py-6 border-b border-gray-200">
          <Label className="text-sm font-medium text-gray-700 w-32 pt-2">
            Company phone number
          </Label>
          <div className="flex-1">
            <Input
              placeholder="Company name here"
              value={formData.companyPhone2}
              onChange={(e) =>
                handleInputChange("companyPhone2", e.target.value)
              }
            />
          </div>
        </div>

        {/* Number of Employees */}
        <div className="flex items-start gap-4 py-6 border-b border-gray-200">
          <Label className="text-sm font-medium text-gray-700 w-32 pt-2">
            Number of employees
          </Label>
          <div className="flex-1">
            <Select value={formData.employees} onValueChange={(value) => handleInputChange("employees", value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1 to 200">1 to 200</SelectItem>
                <SelectItem value="201 to 500">201 to 500</SelectItem>
                <SelectItem value="500+">500+</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-start gap-4 py-6 border-b border-gray-200">
          <Label className="text-sm font-medium text-gray-700 w-32 pt-2">
            Location
          </Label>
          <div className="flex-1">
            <Input
              placeholder="Company name here"
              value={formData.location}
              onChange={(e) =>
                handleInputChange("location", e.target.value)
              }
            />
          </div>
        </div>

        {/* Company Website */}
        <div className="flex items-start gap-4 py-6">
          <Label className="text-sm font-medium text-gray-700 w-32 pt-2">
            Company website
          </Label>
          <div className="flex-1">
            <Input
              placeholder="Company name here"
              value={formData.website}
              onChange={(e) => handleInputChange("website", e.target.value)}
            />
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