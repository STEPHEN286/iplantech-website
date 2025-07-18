"use client"
// export const metadata = {
//   title: "iPlant Tech Pricing | Smart Plant Subscription Plans",
//   description: "Compare Free and Pro subscription plans for the iPlant Tech mobile app. Choose the best smart plant care features for your needs.",
// };
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Smartphone, UserPlus } from "lucide-react";
import { useInView } from "react-intersection-observer";
import "animate.css";

const plans = [
  {
    id: "free",
    name: "Free",
    priceLabel: "Free",
    description: "All the basics for smart plant care, free forever.",
    features: [
      { label: "Soil Moisture Monitoring", included: true },
      { label: "Light Level Monitoring", included: true },
      { label: "Temperature Tracking", included: true },
      { label: "Plant Health Alerts (2 alerts per day)", included: true },
      { label: "Nutrient Level Tracking", included: true },
      { label: "Limited AI-Powered Suggestion", included: true },
      { label: "Automated Smart Reminders", included: true },
      { label: "Mobile App Access", included: true },
      { label: "Limited Access to Plant Library", included: true },
      { label: "Live Chat Access", included: true },
    ],
  },
  {
    id: "pro",
    name: "Pro",
    priceLabel: "$4.99/mo",
    description: "Unlock advanced AI, unlimited plant library, and more.",
    features: [
      { label: "Everything in Free", included: true },
      { label: "Advanced AI-Powered Diagnosis & Suggestions", included: true },
      { label: "Custom Plant Recommendations", included: true },
      { label: "Growth History Reports", included: true },
      { label: "In-app Expert Tips", included: true },
      { label: "Priority Support", included: true },
      { label: "Unlimited Access to Plant Library", included: true },
      { label: "Multiple Plant Profiles (Up to 5)", included: true },
    ],
  },
];

export default function PricingPage() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleCTAClick = (plan) => {
    setSelectedPlan(plan);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPlan(null);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-16 px-2">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Pricing & Plans</h1>
          <p className="text-xl text-gray-600 mb-4">App subscription plans.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
          {plans.map((plan, idx) => {
            const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
            return (
              <Card
                key={plan.id}
                ref={ref}
                className={`flex-1 w-full max-w-full sm:max-w-xs md:max-w-sm mx-auto md:mx-0 border-2 ${plan.id === 'pro' ? 'border-green-600 shadow-2xl scale-105' : 'border-gray-200'} bg-white transition-all duration-500 animate__animated ${inView ? 'animate__fadeInUp' : ''}`}
              >
                <CardContent className="p-4 sm:p-6 md:p-8 flex flex-col items-center">
                  <Badge className={`mb-3 sm:mb-4 ${plan.id === 'pro' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'} text-sm sm:text-base`}>{plan.name}</Badge>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-1 sm:mb-2 text-green-700">{plan.priceLabel}</div>
                  <div className="mb-1 sm:mb-2 text-gray-500 text-xs sm:text-sm text-center">{plan.description}</div>
                  <div className="mb-3 sm:mb-4 text-gray-500 text-xs text-center">{plan.id === 'pro' ? 'Billed monthly. Cancel anytime.' : 'No credit card required.'}</div>
                  <ul className="w-full mb-5 sm:mb-8 space-y-2 sm:space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature.label} className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                        <span className="text-gray-800">{feature.label}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full py-2.5 sm:py-3 text-base sm:text-lg font-semibold rounded-lg shadow ${plan.id === 'pro' ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-200 text-gray-700 hover:bg-green-100'}`}
                    onClick={() => handleCTAClick(plan)}
                  >
                    {plan.id === 'pro' ? 'Subscribe' : 'Get Started'}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        {/* Modal for app download/signup */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full relative animate__animated animate__fadeInUp">
              <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl" onClick={closeModal}>&times;</button>
              <h2 className="text-2xl font-bold mb-4 text-center">Get the iPlant Tech App</h2>
              <p className="mb-6 text-gray-600 text-center">To use the {selectedPlan?.name} plan, download our mobile app or sign up via web.</p>
              <div className="flex flex-col gap-4">
                <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button className="w-full bg-green-600 hover:bg-green-700 flex items-center gap-2 justify-center">
                    <Smartphone className="w-5 h-5" /> Download for Android
                  </Button>
                </a>
                <a href="https://apps.apple.com/" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button className="w-full bg-green-600 hover:bg-green-700 flex items-center gap-2 justify-center">
                    <Smartphone className="w-5 h-5" /> Download for iOS
                  </Button>
                </a>
                <Button className="w-full bg-gray-200 text-gray-700 hover:bg-green-100 flex items-center gap-2 justify-center" onClick={() => alert('Web signup coming soon!')}>
                  <UserPlus className="w-5 h-5" /> Sign Up via Web
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
