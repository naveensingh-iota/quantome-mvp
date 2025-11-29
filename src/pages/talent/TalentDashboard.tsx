import React, { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/talent/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Play, CirclePlus, Lock, ChevronDown, Sparkles, MessageSquare, CircleMinus, Search, CircleArrowRight } from "lucide-react";
import videoPreview from "@/assets/preview-image.png";
import playBtn from "@/assets/play-btn.svg";
import { Input } from "@/components/ui/input";

export const TalentDashboard: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "Is there a free trial available?",
      answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
    },
    {
      question: "Can I change my plan later?",
      answer: "Yes, you can change your plan at any time. You can upgrade or downgrade your plan from your account settings."
    },
    {
      question: "What is your cancellation policy?",
      answer: "You can cancel your subscription at any time. Your cancellation will take effect at the end of your current billing period."
    },
    {
      question: "Can other info be added to an invoice?",
      answer: "Yes, you can add additional information to your invoices such as tax ID, company details, and custom notes."
    },
    {
      question: "How does billing work?",
      answer: "We offer monthly and annual billing options. You'll be charged automatically based on your chosen plan."
    },
    {
      question: "How do I change my account email?",
      answer: "You can change your account email from your profile settings. We'll send a verification email to your new address."
    }
  ];

  return (
    <DashboardLayout
      userRole="talent"
      userName="Mariana"
      notificationCount={3}
    >
      <div className="p-6 space-y-6">
        {/* Top Section with Right Sidebar */}
        <div className="flex gap-6">
          {/* Next Step Card */}
          <div className="flex-1 bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Next step:</h3>
            <div className="space-y-3">
              {[
                { text: "Estimate your project cost in a few minutes.", checked: true },
                { text: "Estimate your project cost in a few minutes.", checked: false },
                { text: "Estimate your project cost in a few minutes.", checked: false }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-3">
                    {item.checked ? (
                      <div>
                        <CircleArrowRight />
                      </div>
                    ) : (
                      <Lock className="w-5 h-5 text-gray-400" />
                    )}
                    <span className={`text-sm ${item.checked ? "text-gray-900" : "text-gray-400"}`}>
                      {item.text}
                    </span>
                  </div>
                  <Button
                    size="sm"
                    className={`text-xs h-9 px-5 rounded-md ${
                      item.checked
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-blue-100 text-blue-300 hover:bg-blue-100 cursor-not-allowed"
                    }`}
                    disabled={!item.checked}
                  >
                    Try it now
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar - Your Progress */}
          <div className="w-80 bg-white rounded-lg border border-gray-200 p-6">
            {/* Search */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search"
                className="pl-10 bg-white border-gray-300"
              />
            </div>

            {/* Your Progress */}
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-4">Your progress</h3>
              <div className="space-y-6">
                <div>
                  <button className="w-full flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-900 font-medium">Basic information</span>
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  </button>
                  <div className="w-full bg-blue-100 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full transition-all" style={{ width: "60%" }}></div>
                  </div>
                </div>
                <div>
                  <button className="w-full flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-900 font-medium">Extra information</span>
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  </button>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full transition-all" style={{ width: "0%" }}></div>
                  </div>
                </div>
                <div>
                  <button className="w-full flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-900 font-medium">Get hired</span>
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  </button>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full transition-all" style={{ width: "0%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full Width - Introducing Team Inboxes */}
        <div className="bg-white rounded-lg border border-gray-200 p-12">
          <div className="max-w-6xl mx-auto">
            {/* Text Content */}
            <div className="flex gap-12 mb-16">
              {/* Left Content */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-semibold text-blue-600 uppercase">
                    New feature
                  </span>
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-5">
                  Introducing team inboxes
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
                </p>
              </div>

              {/* Right Features List */}
              <div className="flex-1 space-y-10">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg border border-gray-200 flex items-center justify-center shrink-0">
                    <Sparkles className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Share team inboxes</h4>
                    <p className="text-base text-gray-600 leading-relaxed">
                      Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg border border-gray-200 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Deliver instant answers</h4>
                    <p className="text-base text-gray-600 leading-relaxed">
                      An all-in-one customer service platform that helps you balance everything your customers need to be happy.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Placeholder */}
            <div className="relative bg-gray-900 overflow-hidden aspect-video max-w-[800px] mx-auto">
              <img
                src={videoPreview}
                alt="Video thumbnail"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <img src={playBtn} alt="Play" />
                </button>
              </div>
              {/* Video Controls */}
              <div className="absolute bottom-0 left-0 right-0 px-6 py-4 bg-linear-to-t from-black/60 to-transparent">
                <div className="flex items-center gap-4 mb-2">
                  <Play className="w-4 h-4 text-white fill-white" />
                  <div className="flex-1 h-1 bg-white/30 rounded-full">
                    <div className="h-full w-0 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-white text-sm">
                  <span>0:00</span>
                  <span>8:24</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full Width - FAQs Section */}
        <div className="bg-white rounded-lg border border-gray-200 p-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-12 gap-20">
              {/* Left Side */}
              <div className="col-span-4">
                <span className="text-sm font-semibold text-blue-600 mb-4 block">Support</span>
                <h3 className="text-4xl font-bold text-gray-900 mb-6">FAQs</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Everything you need to know about the product and billing. Can't find the answer you're looking for? Please{" "}
                  <a href="#" className="text-blue-600 hover:underline font-medium">chat to our friendly team</a>.
                </p>
              </div>

              {/* Right Side - Questions */}
              <div className="col-span-8">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 last:border-0">
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      className="w-full flex items-start justify-between py-6 text-left group"
                    >
                      <span className="text-lg text-gray-900 font-medium pr-8">{faq.question}</span>
                      {expandedFaq === index ? (
                        <CircleMinus className="w-6 h-6 text-gray-400 group-hover:text-gray-600 shrink-0 mt-1" />
                      ) : (
                        <CirclePlus className="w-6 h-6 text-gray-400 group-hover:text-gray-600 shrink-0 mt-1" />
                      )}
                    </button>
                    {expandedFaq === index && (
                      <div className="pb-6 pr-12">
                        <p className="text-base text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};