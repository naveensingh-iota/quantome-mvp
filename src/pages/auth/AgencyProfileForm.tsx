import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { OnboardingLayout } from "@/components/common/onboarding/OnboardingLayout";
import { OnboardingFormContainer } from "@/components/common/onboarding/OnboardingFormContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, X } from "lucide-react";

const AGENCY_STEPS = [
  { id: 1, title: "Let's get started", desc: "Add information about your agency" },
  { id: 2, title: "Create your password", desc: "optional" },
  { id: 3, title: "Verify your email", desc: "optional" },
];

export const AgencyProfileForm: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "";

  const [currentStep, setCurrentStep] = useState(1);
  const [showTermsAlert, setShowTermsAlert] = useState(false);

  const [formData, setFormData] = useState({
    email: email,
    agencyName: "",
    contactPerson: "",
    mainService: "",
    website: "",
    phoneNumber: "",
    agreedToTerms: false,
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));

    // Hide alert when user checks the terms checkbox
    if (field === "agreedToTerms" && value === true) {
      setShowTermsAlert(false);
    }
  };

  const handleStep1Next = () => {
    if (!formData.agencyName || !formData.contactPerson || !formData.mainService) {
      alert("Please fill in all required fields");
      return;
    }

    if (!formData.agreedToTerms) {
      setShowTermsAlert(true);
      return;
    }

    setCurrentStep(2);
  };

  const handleStep2Next = () => {
    if (!formData.password || !formData.confirmPassword) {
      alert("Please enter both passwords");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    setCurrentStep(3);
  };

  const handleStep3Submit = () => {
    console.log("Agency form submitted:", formData);
    navigate("/talent/dashboard");
  };

  const handleChangeEmail = () => {
    navigate("/talent/login");
  };

  const handleResendCode = () => {
    console.log("Resending verification code to:", formData.email);
  };

  return (
    <OnboardingLayout currentStep={currentStep} steps={AGENCY_STEPS}>
      <OnboardingFormContainer>
        {/* Step 1: Agency Information */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Let's get started</h1>
              <p className="mt-2 text-sm text-gray-600">
                Add information about your agency
              </p>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-700">{formData.email}</span>
              </div>
              <button
                onClick={handleChangeEmail}
                className="text-sm text-primary hover:underline font-medium"
              >
                Change email
              </button>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-900">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  disabled
                  className="w-full bg-gray-50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="agencyName" className="text-sm font-medium text-gray-900">
                  Agency Name
                </Label>
                <Input
                  id="agencyName"
                  type="text"
                  placeholder="Enter agency name"
                  value={formData.agencyName}
                  onChange={(e) => handleInputChange("agencyName", e.target.value)}
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contactPerson" className="text-sm font-medium text-gray-900">
                  Contact Person
                </Label>
                <Input
                  id="contactPerson"
                  type="text"
                  placeholder="Full name"
                  value={formData.contactPerson}
                  onChange={(e) => handleInputChange("contactPerson", e.target.value)}
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mainService" className="text-sm font-medium text-gray-900">
                  Main Service
                </Label>
                <Select
                  value={formData.mainService}
                  onValueChange={(value) => handleInputChange("mainService", value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="security">Security Services</SelectItem>
                    <SelectItem value="development">Development</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="consulting">Consulting</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="website" className="text-sm font-medium text-gray-700">
                  Website <span className="text-gray-400">(Optional)</span>
                </Label>
                <Input
                  id="website"
                  type="url"
                  placeholder="www.example.com"
                  value={formData.website}
                  onChange={(e) => handleInputChange("website", e.target.value)}
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phoneNumber" className="text-sm font-medium text-gray-700">
                  Phone number <span className="text-gray-400">(Optional)</span>
                </Label>
                <Input
                  id="phoneNumber"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                  className="w-full"
                />
              </div>

              <div className="flex items-start gap-2 pt-2">
                <Checkbox
                  id="terms"
                  checked={formData.agreedToTerms}
                  onCheckedChange={(checked) => handleInputChange("agreedToTerms", checked as boolean)}
                  className="mt-0.5"
                />
                <label htmlFor="terms" className="text-sm text-gray-600 leading-tight">
                  By signing up I agree with the{" "}
                  <a href="/terms" className="text-primary hover:underline">
                    Terms
                  </a>{" "}
                  and{" "}
                  <a href="/conditions" className="text-primary hover:underline">
                    Conditions
                  </a>
                </label>
              </div>
            </div>


            {/* Terms Alert */}
            {showTermsAlert && (
              <div className="relative p-4 bg-orange-50 border border-yellow-400 rounded-lg">
                {/* <button
                  onClick={() => setShowTermsAlert(false)}
                  className="absolute top-3 right-3 text-orange-600 hover:text-orange-800"
                >
                  <X className="w-4 h-4" />
                </button> */}
                <div className="pr-6">
                  <h3 className="text-base font-bold text-[#B54708]">
                    Seems like you are forgot one important thing
                  </h3>
                  <p className="text-sm text-[#B54708] mt-2">
                    In order to continue registering on our platform, you must agree with the{" "}
                    <a href="/terms" className="font-bold underline hover:no-underline">
                      Terms
                    </a>{" "}
                    and{" "}
                    <a href="/conditions" className="font-bold underline hover:no-underline">
                      Conditions
                    </a>
                    .
                  </p>
                </div>
              </div>
            )}

            <Button
              onClick={handleStep1Next}
              className="w-full bg-primary hover:bg-primary/90"
            >
              Next
            </Button>
          </div>
        )}

        {/* Step 2: Create Password */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <button
              onClick={() => setCurrentStep(1)}
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 -ml-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>

            <div>
              <h1 className="text-2xl font-bold text-gray-900">Create your password</h1>
              <p className="mt-2 text-sm text-gray-600">
                Optional
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-gray-900">
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type="password"
                    placeholder="example@example.com"
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    className="w-full pr-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-900">
                  Confirm password
                </Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="example@example.com"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                    className="w-full pr-10"
                  />
                </div>
              </div>
            </div>

            <Button
              onClick={handleStep2Next}
              className="w-full bg-primary hover:bg-primary/90"
            >
              Next
            </Button>
          </div>
        )}

        {/* Step 3: Email Verification */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <button
              onClick={() => setCurrentStep(2)}
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 -ml-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>

            <div>
              <h1 className="text-2xl font-bold text-gray-900">Almost there</h1>
            </div>

            <div className="max-w-md mx-auto">
              <div className="space-y-4">
                <p className="text-sm text-gray-600 leading-relaxed">
                  As an extra security measure, we sent you an email at{" "}
                  <span className="font-semibold text-gray-900">{formData.email}</span> to verify this
                  address belongs to you.
                </p>

                <p className="text-sm text-gray-600 leading-relaxed">
                  Just click on the link in this email to access your account.
                </p>

                <div className="pt-2">
                  <p className="text-sm text-gray-600 mb-3">
                    Can't find the email in your inbox or spam folder?
                  </p>
                  <Button
                    onClick={handleResendCode}
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50"
                  >
                    Resend email
                  </Button>
                </div>

                <p className="text-sm text-gray-600">
                  Wrong email address? Change your email{" "}
                  <button
                    onClick={handleChangeEmail}
                    className="text-blue-600 hover:underline font-medium"
                  >
                    here
                  </button>
                </p>
              </div>

              <Button
                onClick={handleStep3Submit}
                className="w-full bg-primary hover:bg-primary/90 mt-6"
              >
                Back to Login
              </Button>
            </div>
          </div>
        )}
      </OnboardingFormContainer>
    </OnboardingLayout>
  );
};