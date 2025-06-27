import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Menu,
  X,
  CheckCircle,
  Star,
  Users,
  Zap,
  Target,
  Shield,
  Clock,
  TrendingUp,
  Play,
  Award,
  BarChart3,
} from "lucide-react";

const AzentWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    companySize: "",
    industry: "",
    currentChallenges: "",
    interestedServices: [],
    budget: "",
    timeline: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        interestedServices: checked
          ? [...prev.interestedServices, value]
          : prev.interestedServices.filter((service) => service !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          companyName: "",
          contactName: "",
          email: "",
          phone: "",
          companySize: "",
          industry: "",
          currentChallenges: "",
          interestedServices: [],
          budget: "",
          timeline: "",
          message: "",
        });
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => setSubmitStatus(""), 6000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  // Logo component matching the design
  const AzentLogo = ({ className = "w-10 h-10" }) => (
    <div className={`${className} relative`}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <linearGradient
            id="metalGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#e5e7eb" />
            <stop offset="30%" stopColor="#f9fafb" />
            <stop offset="60%" stopColor="#d1d5db" />
            <stop offset="100%" stopColor="#9ca3af" />
          </linearGradient>
        </defs>
        <circle
          cx="25"
          cy="25"
          r="20"
          fill="url(#metalGradient)"
          opacity="0.9"
        />
        <circle
          cx="50"
          cy="40"
          r="22"
          fill="url(#metalGradient)"
          opacity="0.8"
        />
        <circle
          cx="70"
          cy="30"
          r="18"
          fill="url(#metalGradient)"
          opacity="0.85"
        />
      </svg>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              {/* <AzentLogo className="w-12 h-12" /> */}
              <div className="h-10">
                <img src="/assets/logo2.png" className="h-10" alt="logo" />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#services"
                className="text-slate-700 hover:text-slate-900 font-medium transition-colors"
              >
                Services
              </a>
              <a
                href="#process"
                className="text-slate-700 hover:text-slate-900 font-medium transition-colors"
              >
                Process
              </a>
              <a
                href="#results"
                className="text-slate-700 hover:text-slate-900 font-medium transition-colors"
              >
                Results
              </a>
              <a
                href="#contact"
                className="bg-slate-900 text-white px-6 py-2.5 rounded-lg hover:bg-slate-800 transition-all font-medium shadow-md hover:shadow-lg"
              >
                Start Project
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-slate-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </nav>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-200 shadow-lg">
              <div className="px-6 py-4 space-y-4">
                <a
                  href="#services"
                  className="block text-slate-700 font-medium"
                >
                  Services
                </a>
                <a href="#process" className="block text-slate-700 font-medium">
                  Process
                </a>
                <a href="#results" className="block text-slate-700 font-medium">
                  Results
                </a>
                <a
                  href="#contact"
                  className="block bg-slate-900 text-white px-6 py-2.5 rounded-lg text-center font-medium"
                >
                  Start Project
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6 bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium border border-slate-200">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  Now accepting new projects
                </div>

                <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  We build AI agents that actually
                  <span className="bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text text-transparent">
                    {" "}
                    work for your business
                  </span>
                </h1>

                <p className="text-xl text-slate-600 leading-relaxed">
                  Skip the hype. Our team creates practical AI automation that
                  reduces your workload, cuts operational costs, and scales with
                  your growth—without the complexity.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center bg-slate-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl"
                >
                  Get Free Strategy Call
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="#process"
                  className="inline-flex items-center justify-center border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-xl font-semibold hover:border-slate-400 hover:text-slate-900 transition-all"
                >
                  <Play className="mr-2 w-5 h-5" />
                  See How It Works
                </a>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900">60%</div>
                  <div className="text-sm text-slate-500 font-medium">
                    Avg. Cost Reduction
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900">3-5x</div>
                  <div className="text-sm text-slate-500 font-medium">
                    Faster Processes
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900">24/7</div>
                  <div className="text-sm text-slate-500 font-medium">
                    Automated Ops
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Hero Image */}
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
                <div className="bg-gradient-to-br from-slate-100 to-slate-200 p-8">
                  {/* Mock Dashboard */}
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-slate-900 text-lg">
                        AI Automation Dashboard
                      </h3>
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mb-2">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        </div>
                        <div className="text-sm font-semibold text-slate-900">
                          1,247
                        </div>
                        <div className="text-xs text-slate-500">
                          Tasks Automated
                        </div>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                          <BarChart3 className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="text-sm font-semibold text-slate-900">
                          89%
                        </div>
                        <div className="text-xs text-slate-500">
                          Efficiency Gain
                        </div>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
                        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mb-2">
                          <TrendingUp className="w-5 h-5 text-purple-600" />
                        </div>
                        <div className="text-sm font-semibold text-slate-900">
                          $47K
                        </div>
                        <div className="text-xs text-slate-500">
                          Monthly Savings
                        </div>
                      </div>
                    </div>

                    {/* Process Flow */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                      <h4 className="font-semibold text-slate-900 mb-4">
                        Active Processes
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-sm text-slate-700">
                              Email Processing
                            </span>
                          </div>
                          <span className="text-sm font-medium text-green-600">
                            Active
                          </span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div
                            className="bg-slate-600 h-2 rounded-full"
                            style={{ width: "87%" }}
                          ></div>
                        </div>
                        <div className="text-xs text-slate-500">
                          Processing 1,247 emails/hour
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-slate-300 to-slate-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-slate-400 to-slate-500 rounded-full opacity-15"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              The AI automation services that actually move the needle
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We focus on three core areas where AI delivers immediate,
              measurable results for growing businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-200">
              <div className="w-16 h-16 bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl flex items-center justify-center mb-6 group-hover:from-slate-300 group-hover:to-slate-400 transition-all">
                <Zap className="w-8 h-8 text-slate-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Smart Process Automation
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                We identify your most time-consuming manual tasks and build AI
                agents that handle them automatically—from data entry to
                customer communications.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-slate-500 mr-3" />
                  Email & document processing
                </div>
                <div className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-slate-500 mr-3" />
                  Customer inquiry routing
                </div>
                <div className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-slate-500 mr-3" />
                  Data entry & validation
                </div>
              </div>
            </div>

            <div className="group bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-200">
              <div className="w-16 h-16 bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl flex items-center justify-center mb-6 group-hover:from-slate-300 group-hover:to-slate-400 transition-all">
                <Target className="w-8 h-8 text-slate-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Intelligent Decision Systems
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Custom AI that analyzes your business data and makes smart
                decisions in real-time—like dynamic pricing, inventory
                management, or lead scoring.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-slate-500 mr-3" />
                  Predictive analytics
                </div>
                <div className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-slate-500 mr-3" />
                  Dynamic pricing optimization
                </div>
                <div className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-slate-500 mr-3" />
                  Risk assessment automation
                </div>
              </div>
            </div>

            <div className="group bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-200">
              <div className="w-16 h-16 bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl flex items-center justify-center mb-6 group-hover:from-slate-300 group-hover:to-slate-400 transition-all">
                <Shield className="w-8 h-8 text-slate-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Seamless System Integration
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                We connect your existing tools with AI capabilities, so
                everything works together without disrupting your current
                workflows or requiring staff retraining.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-slate-500 mr-3" />
                  CRM & ERP integration
                </div>
                <div className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-slate-500 mr-3" />
                  API development & management
                </div>
                <div className="flex items-center text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-slate-500 mr-3" />
                  Legacy system modernization
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Our proven process for AI implementation
            </h2>
            <p className="text-xl text-slate-600">
              We've refined this approach over dozens of successful projects
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-slate-900 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 font-bold text-2xl group-hover:bg-slate-800 transition-all shadow-lg">
                1
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Discovery & Analysis
              </h3>
              <p className="text-slate-600 leading-relaxed">
                We audit your current processes to identify the highest-impact
                automation opportunities.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-slate-700 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 font-bold text-2xl group-hover:bg-slate-600 transition-all shadow-lg">
                2
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Custom AI Development
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Our team builds and trains AI agents specifically for your
                business needs and data.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-slate-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 font-bold text-2xl group-hover:bg-slate-500 transition-all shadow-lg">
                3
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Gradual Implementation
              </h3>
              <p className="text-slate-600 leading-relaxed">
                We deploy in phases, ensuring smooth integration with your
                existing systems and workflows.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-slate-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 font-bold text-2xl group-hover:bg-slate-400 transition-all shadow-lg">
                4
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Optimization & Scale
              </h3>
              <p className="text-slate-600 leading-relaxed">
                We monitor performance and continuously improve the system as
                your business grows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Real results from real businesses
            </h2>
            <p className="text-xl text-slate-600">
              Here's what happens when you implement the right AI automation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Testimonials */}
            <div className="space-y-8">
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-slate-200 to-slate-300 rounded-xl flex items-center justify-center mr-4">
                    <span className="font-bold text-slate-700 text-lg">TM</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">
                      TechFlow Marketing
                    </h4>
                    <p className="text-slate-600 text-sm">
                      Marketing Agency • 25 employees
                    </p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1 mr-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-slate-400 text-slate-400"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-slate-700">
                    Saved 15 hours/week
                  </span>
                </div>
                <p className="text-slate-700 italic mb-4 leading-relaxed">
                  "The AI system Azent built for us handles all our client
                  reporting automatically. What used to take our team 15 hours
                  every week now happens in the background. ROI was obvious
                  within the first month."
                </p>
                <div className="text-sm text-slate-600">
                  <strong>Result:</strong> 60% reduction in manual reporting
                  time
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-slate-200 to-slate-300 rounded-xl flex items-center justify-center mr-4">
                    <span className="font-bold text-slate-700 text-lg">RS</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">RetailScope</h4>
                    <p className="text-slate-600 text-sm">
                      E-commerce • 50 employees
                    </p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1 mr-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-slate-400 text-slate-400"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-slate-700">
                    2x faster fulfillment
                  </span>
                </div>
                <p className="text-slate-700 italic mb-4 leading-relaxed">
                  "Their inventory management AI has been game-changing. We went
                  from constantly running out of stock to having perfect
                  inventory levels. Customer satisfaction is at an all-time
                  high."
                </p>
                <div className="text-sm text-slate-600">
                  <strong>Result:</strong> 40% reduction in stockouts, 25% cost
                  savings
                </div>
              </div>
            </div>

            {/* Results Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl p-8 border border-slate-200">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 mb-6">
                  <h3 className="font-bold text-slate-900 mb-4 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-slate-600" />
                    Performance Metrics
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-slate-50 rounded-lg">
                      <div className="text-2xl font-bold text-slate-900">
                        89%
                      </div>
                      <div className="text-sm text-slate-600">
                        Avg. Efficiency Gain
                      </div>
                    </div>
                    <div className="text-center p-4 bg-slate-50 rounded-lg">
                      <div className="text-2xl font-bold text-slate-900">
                        $50K
                      </div>
                      <div className="text-sm text-slate-600">
                        Monthly Savings
                      </div>
                    </div>
                    <div className="text-center p-4 bg-slate-50 rounded-lg">
                      <div className="text-2xl font-bold text-slate-900">
                        24/7
                      </div>
                      <div className="text-sm text-slate-600">Uptime</div>
                    </div>
                    <div className="text-center p-4 bg-slate-50 rounded-lg">
                      <div className="text-2xl font-bold text-slate-900">
                        4.8★
                      </div>
                      <div className="text-sm text-slate-600">
                        Client Rating
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                  <h4 className="font-semibold text-slate-900 mb-4">
                    ROI Timeline
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">Month 1</span>
                      <span className="text-sm font-medium text-slate-900">
                        Setup & Training
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">Month 2</span>
                      <span className="text-sm font-medium text-green-600">
                        Break Even
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">Month 3+</span>
                      <span className="text-sm font-medium text-green-600">
                        200%+ ROI
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Ready to automate your business operations?
            </h2>
            <p className="text-xl text-slate-600">
              Tell us about your biggest operational challenges. We'll show you
              exactly how AI can solve them.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all bg-white"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all bg-white"
                    placeholder="Your full name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all bg-white"
                    placeholder="your@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all bg-white"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Company Size
                  </label>
                  <select
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all bg-white"
                  >
                    <option value="">Select team size</option>
                    <option value="1-10">1-10 people</option>
                    <option value="11-50">11-50 people</option>
                    <option value="51-200">51-200 people</option>
                    <option value="201-1000">201-1000 people</option>
                    <option value="1000+">1000+ people</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Industry
                  </label>
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all bg-white"
                  >
                    <option value="">Select your industry</option>
                    <option value="technology">Technology</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="finance">Financial Services</option>
                    <option value="retail">Retail & E-commerce</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="consulting">Professional Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  What's your biggest operational challenge?
                </label>
                <textarea
                  name="currentChallenges"
                  value={formData.currentChallenges}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all bg-white"
                  placeholder="e.g., Spending too much time on manual data entry, customer service overload, inventory management..."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">
                  Which areas interest you most? (Select all that apply)
                </label>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Smart Process Automation",
                    "Intelligent Decision Systems",
                    "System Integration",
                    "Customer Service AI",
                    "Data Analysis & Reporting",
                    "Just exploring options",
                  ].map((service) => (
                    <label
                      key={service}
                      className="flex items-center space-x-3 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        name="interestedServices"
                        value={service}
                        checked={formData.interestedServices.includes(service)}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-slate-600 border-slate-300 rounded focus:ring-slate-500"
                      />
                      <span className="text-slate-700">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Project Budget
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all bg-white"
                  >
                    <option value="">Select budget range</option>
                    <option value="<10k">Under $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k+">$100,000+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Timeline
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all bg-white"
                  >
                    <option value="">When do you need this?</option>
                    <option value="asap">ASAP (within 1 month)</option>
                    <option value="1-3months">1-3 months</option>
                    <option value="3-6months">3-6 months</option>
                    <option value="6months+">6+ months</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Anything else you'd like us to know?
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all bg-white"
                  placeholder="Tell us more about your specific goals, current tools, or any questions you have..."
                />
              </div>

              <div className="pt-4">
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-slate-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending your request...
                    </div>
                  ) : (
                    "Get Your Free Strategy Session"
                  )}
                </button>

                <p className="text-center text-sm text-slate-500 mt-3">
                  We'll respond within 2 hours during business days
                </p>
              </div>

              {submitStatus === "success" && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-lg">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    <div>
                      <p className="font-semibold">
                        Thank you! We've received your request.
                      </p>
                      <p className="text-sm">
                        Our team will reach out within 2 hours to schedule your
                        strategy session.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-6 py-4 rounded-lg">
                  <p className="font-semibold">
                    Something went wrong. Please try again or email us directly
                    at ai.azent.agency@gmail.com
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-slate-900 mb-8">
              Trusted by growing businesses across industries
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-200 to-slate-300 rounded-xl mx-auto mb-3 flex items-center justify-center group-hover:from-slate-300 group-hover:to-slate-400 transition-all">
                  <span className="font-bold text-slate-700">TF</span>
                </div>
                <p className="text-sm text-slate-600 font-medium">TechFlow</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-200 to-slate-300 rounded-xl mx-auto mb-3 flex items-center justify-center group-hover:from-slate-300 group-hover:to-slate-400 transition-all">
                  <span className="font-bold text-slate-700">RS</span>
                </div>
                <p className="text-sm text-slate-600 font-medium">
                  RetailScope
                </p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-200 to-slate-300 rounded-xl mx-auto mb-3 flex items-center justify-center group-hover:from-slate-300 group-hover:to-slate-400 transition-all">
                  <span className="font-bold text-slate-700">DM</span>
                </div>
                <p className="text-sm text-slate-600 font-medium">DataMax</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-200 to-slate-300 rounded-xl mx-auto mb-3 flex items-center justify-center group-hover:from-slate-300 group-hover:to-slate-400 transition-all">
                  <span className="font-bold text-slate-700">AI</span>
                </div>
                <p className="text-sm text-slate-600 font-medium">AutoFlow</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-6 md:mb-0">
              <div>
                <div className="h-10">
                  <img src="/assets/logo.png" className="h-10" alt="logo" />
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-8 text-sm text-slate-400">
              <span className="hover:text-white transition-colors">
                ai.azent.agency@gmail.com
              </span>
              <span className="hover:text-white transition-colors">
                +91 7621083656
              </span>
              <span>© 2025 Azent.ai</span>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-800 text-center">
            <p className="text-slate-400 leading-relaxed">
              Practical AI automation that works for real businesses. No hype,
              just results.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AzentWebsite;

// export default AzentLanding;
