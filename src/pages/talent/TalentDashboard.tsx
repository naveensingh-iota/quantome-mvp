import { useState } from "react";
import { Search, Home, Inbox, Users, BarChart3, Settings, HelpCircle, ChevronDown, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function TalentDashboard() {
  const [activeSection, setActiveSection] = useState("home");
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const nextSteps = [
    { id: 1, text: "Enrolare your project over in a few minutes.", completed: false },
    { id: 2, text: "Enrolare your project over in a few minutes.", completed: false },
    { id: 3, text: "Enrolare your project over in a few minutes.", completed: false },
  ];

  const progressSections = [
    { title: "Basic Information", status: "incomplete" },
    { title: "Extras/Information", status: "incomplete" },
    { title: "Get Rated", status: "incomplete" },
  ];

  const faqs = [
    { id: 1, question: "Is there a free trial available?", answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible." },
    { id: 2, question: "Can I change my plan later?", answer: "Yes, you can upgrade or downgrade your plan at any time." },
    { id: 3, question: "What is your cancellation policy?", answer: "You can cancel your subscription at any time with no penalties." },
    { id: 4, question: "Can other info be added to an invoice?", answer: "Yes, you can add custom information to your invoices." },
    { id: 5, question: "How does billing work?", answer: "We bill monthly or annually depending on your chosen plan." },
    { id: 6, question: "How do I change my account email?", answer: "You can change your email in account settings." },
  ];

  const sidebarItems = [
    { icon: Home, label: "Home", id: "home" },
    { icon: Inbox, label: "Inbox", id: "inbox" },
    { icon: Users, label: "Team", id: "team" },
    { icon: BarChart3, label: "Analytics", id: "analytics" },
  ];

  const toggleVideo = () => {
    setIsVideoPlaying(!isVideoPlaying);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Sticky Sidebar */}
      <div className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="font-semibold text-gray-900">Skyphus</span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="px-4 py-4 border-b border-gray-200">
          <div className="flex gap-2">
            <button className="px-4 py-2 text-sm font-medium text-gray-900 border-b-2 border-blue-600">
              Home
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-900">
              Recommendation
            </button>
          </div>
        </div>

        {/* Sidebar Navigation */}
        <div className="flex-1 py-4 px-3 overflow-y-auto">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg mb-1 transition-colors ${activeSection === item.id
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-600 hover:bg-gray-50"
                }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="p-3 border-t border-gray-200">
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50">
            <Settings className="w-5 h-5" />
            <span className="text-sm font-medium">Settings</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="ml-64 flex-1 flex flex-col">
        {/* Top Header */}
        <div className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between sticky top-0 z-10">
          <h1 className="text-xl font-semibold text-gray-900">Welcome, Mariana.</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input placeholder="Search" className="pl-9 w-64" />
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-300"></div>
              <ChevronDown className="w-4 h-4 text-gray-600" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex">
          {/* Left Content */}
          <div className="flex-1 p-8">
            {/* Next Steps */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Next step:</h2>
              <div className="space-y-3">
                {nextSteps.map((step) => (
                  <div key={step.id} className="flex items-start gap-3 bg-white p-4 rounded-lg border border-gray-200">
                    <div className="w-5 h-5 rounded border-2 border-gray-300 mt-0.5"></div>
                    <span className="text-sm text-gray-700">{step.text}</span>
                    <Button size="sm" className="ml-auto bg-blue-600 hover:bg-blue-700">
                      Try it now
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Video Section */}
            <div className="mb-8 bg-white rounded-lg border border-gray-200 p-6">
              <div className="mb-4">
                <span className="text-xs font-medium text-blue-600 uppercase">How to/Intro</span>
                <h3 className="text-xl font-semibold text-gray-900 mt-1">
                  Introducing team inboxes
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  Our latest self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
                </p>
              </div>

              <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden cursor-pointer" onClick={toggleVideo}>
                {/* Placeholder for video - replace with actual video source */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full bg-linear-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    {/* Simulated video thumbnail */}
                    <div className="absolute inset-0 opacity-50">
                      <img
                        src="/api/placeholder/800/450"
                        alt="Video thumbnail"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <button
                      className="relative z-10 w-16 h-16 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-all"
                    >
                      {isVideoPlaying ? (
                        <Pause className="w-6 h-6 text-gray-900" />
                      ) : (
                        <Play className="w-6 h-6 text-gray-900 ml-1" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Video Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
                  <div className="h-full bg-white w-0" style={{ width: isVideoPlaying ? "50%" : "0%" }}></div>
                </div>
              </div>

              {/* Share and Answer Sections */}
              <div className="grid grid-cols-2 gap-6 mt-6">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Share team inboxes</h4>
                    <p className="text-xs text-gray-600 mt-1">
                      Whether you're a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                    <Inbox className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Deliver instant answers</h4>
                    <p className="text-xs text-gray-600 mt-1">
                      An all-in-one customer service platform that helps you balance everything your customers need to be happy.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQs */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="mb-4">
                <span className="text-xs font-medium text-blue-600 uppercase">Support</span>
                <h3 className="text-xl font-semibold text-gray-900 mt-1">FAQs</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Everything you need to know about the product and billing. Can't find the answer you're looking for? Please{" "}
                  <a href="#" className="text-blue-600 hover:underline">chat to our friendly team</a>.
                </p>
              </div>

              <div className="space-y-3">
                {faqs.map((faq) => (
                  <div key={faq.id} className="border-b border-gray-200 last:border-0">
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                      className="w-full flex items-center justify-between py-3 text-left"
                    >
                      <span className="font-medium text-gray-900 text-sm">{faq.question}</span>
                      <HelpCircle className={`w-5 h-5 text-gray-400 transition-transform ${expandedFaq === faq.id ? "rotate-180" : ""}`} />
                    </button>
                    {expandedFaq === faq.id && (
                      <div className="pb-3 text-sm text-gray-600">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-80 bg-white border-l border-gray-200 p-6">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Your progress</h3>

            {progressSections.map((section, index) => (
              <div key={index} className="mb-4">
                <button className="w-full text-left">
                  <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50">
                    <span className="text-sm text-gray-700">{section.title}</span>
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  </div>
                </button>
              </div>
            ))}

            <div className="mt-6 pt-6 border-t border-gray-200">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">Extras/Information</h4>
              <div className="space-y-2">
                <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-50 text-sm text-gray-700">
                  Extra info item
                </button>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">Get Rated</h4>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-600">Complete your profile to get rated by clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}