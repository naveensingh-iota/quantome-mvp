import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { OnboardingLayout } from "@/components/common/onboarding/OnboardingLayout";
import { OnboardingFormContainer } from "@/components/common/onboarding/OnboardingFormContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";

const PROFILE_STEPS = [
  { id: 1, title: "Let's get started", desc: "Add information about you and the company you are signing up for" },
  { id: 2, title: "Create your password", desc: "optional" },
  { id: 3, title: "Verify your email", desc: "optional" },
];

export const TalentProfileForm: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "";
  // const talentType = location.state?.type || "solo";

  const [currentStep, setCurrentStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: email,
    firstName: "",
    lastName: "",
    mainSkill: "",
    portfolio: "",
    phoneNumber: "",
    agreedToTerms: false,
    password: "",
    confirmPassword: "",
    verificationCode: "",
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleStep1Next = () => {
    if (!formData.firstName || !formData.lastName || !formData.mainSkill || !formData.agreedToTerms) {
      alert("Please fill in all required fields and agree to terms");
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
    if (!formData.verificationCode || formData.verificationCode.length !== 6) {
      alert("Please enter the 6-digit verification code");
      return;
    }
    // TODO: Submit to API
    console.log("Form submitted:", formData);
    navigate("/talent/dashboard");
  };

  const handleChangeEmail = () => {
    navigate("/talent/login");
  };

  const handleResendCode = () => {
    console.log("Resending verification code to:", formData.email);
    // TODO: Call resend API
  };

  return (
    <OnboardingLayout currentStep={currentStep} steps={PROFILE_STEPS}>
      <OnboardingFormContainer>
        {/* Step 1: Profile Information */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Let's get started</h1>
              <p className="mt-2 text-sm text-gray-600">
                Add information about you and the company <br/>
                you are signing up for
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

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-sm font-medium text-gray-900">
                    First name
                  </Label>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    className="w-full"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-sm font-medium text-gray-900">
                    Last name
                  </Label>
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    className="w-full"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="mainSkill" className="text-sm font-medium text-gray-900">
                  Main Skill
                </Label>
                <Select
                  value={formData.mainSkill}
                  onValueChange={(value) => handleInputChange("mainSkill", value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Pentester" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pentester">Pentester</SelectItem>
                    <SelectItem value="developer">Developer</SelectItem>
                    <SelectItem value="designer">Designer</SelectItem>
                    <SelectItem value="manager">Project Manager</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="portfolio" className="text-sm font-medium text-gray-700">
                  Portfolio <span className="text-gray-400">(Optional)</span>
                </Label>
                <Input
                  id="portfolio"
                  type="url"
                  placeholder="www.example.com"
                  value={formData.portfolio}
                  onChange={(e) => handleInputChange("portfolio", e.target.value)}
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
                  placeholder="example@example.com"
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

            <Button
              onClick={handleStep1Next}
              disabled={!formData.agreedToTerms}
              className="w-full bg-primary hover:bg-primary/90"
            >
              Next
            </Button>
          </div>
        )}

        {/* Step 2: Create Password */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Create your password</h1>
              <button
                onClick={() => setCurrentStep(1)}
                className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 mt-4"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-gray-900">
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="example@example.com"
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    className="w-full pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-900">
                  Confirm password
                </Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="example@example.com"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                    className="w-full pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
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
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Almost there</h1>
              <button
                onClick={() => setCurrentStep(2)}
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mt-4"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
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