"use client";
import React from "react";
import { Shield, Clock, Award, TrendingUp, Server, Calculator, Users, CheckCircle, Monitor, HardDrive, Wrench, Globe, FileText, PieChart, BookOpen } from "lucide-react";

export default function Services() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      {/* Main Services Overview */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Business's Full Back Office
          </h2>
          <p className="text-xl text-blue-600 font-semibold mb-8">
            Unbreakable IT + Compliant Financials in One Partnership
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              We specialize in delivering <span className="font-semibold text-blue-600">24/7 global IT support</span> and 
              comprehensive financial management solutions tailored to your business needs. Our certified engineers provide 
              rapid on-site response (average 2-hour dispatch) to resolve technical issues before they impact your operations.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our financial experts ensure flawless VAT, CIS, payroll, and bookkeeping compliance - 
              <span className="font-semibold text-green-600"> saving clients an average of £3,200 annually</span> in 
              reclaimed taxes and penalty avoidance.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Headquartered in <span className="font-semibold text-blue-600">Mildenhall</span> with over two years of experience serving UK businesses, 
              we combine <span className="font-semibold text-blue-600">Microsoft Gold Partner</span> certified IT expertise with 
              <span className="font-semibold text-green-600"> ACCA qualified</span> professional accountants to deliver complete operational peace of mind.
            </p>
          </div>
          
          <div className="relative">
            {/* Add image here: /public/services/main-overview.jpg */}
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <Clock className="w-12 h-12 mx-auto mb-3" />
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm opacity-90">Support</div>
                </div>
                <div className="text-center">
                  <TrendingUp className="w-12 h-12 mx-auto mb-3" />
                  <div className="text-2xl font-bold">£3,200</div>
                  <div className="text-sm opacity-90">Avg. Savings</div>
                </div>
                <div className="text-center">
                  <Shield className="w-12 h-12 mx-auto mb-3" />
                  <div className="text-2xl font-bold">83%</div>
                  <div className="text-sm opacity-90">Issues Prevented</div>
                </div>
                <div className="text-center">
                  <Award className="w-12 h-12 mx-auto mb-3" />
                  <div className="text-2xl font-bold">2+</div>
                  <div className="text-sm opacity-90">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
            <Server className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="text-base font-semibold mb-2 text-gray-900">Unlimited On-Site Support</h3>
            <p className="text-gray-600 text-sm">HP, Dell, Cisco, and 50+ platforms</p>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
            <Shield className="w-8 h-8 text-green-600 mb-3" />
            <h3 className="text-base font-semibold mb-2 text-gray-900">Proactive Monitoring</h3>
            <p className="text-gray-600 text-sm">Prevents 83% of potential issues</p>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
            <Calculator className="w-8 h-8 text-purple-600 mb-3" />
            <h3 className="text-base font-semibold mb-2 text-gray-900">HMRC-Compliant</h3>
            <p className="text-gray-600 text-sm">Automated CIS returns & bookkeeping</p>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
            <TrendingUp className="w-8 h-8 text-orange-600 mb-3" />
            <h3 className="text-base font-semibold mb-2 text-gray-900">Cost Reduction</h3>
            <p className="text-gray-600 text-sm">30% operational cost savings</p>
          </div>
        </div>

        {/* IT and Financial Services - Side by Side */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* IT Services Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <Server className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">IT Services</h3>
            </div>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              We provide on-demand and managed IT support services around the globe, 24/7. Our highly skilled engineers 
              offer unlimited on-site support with professional advice and services according to industry best practices.
            </p>

            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">Supported Platforms:</h4>
              <div className="flex flex-wrap gap-2">
                {["HP", "IBM", "DELL", "CISCO", "FUJITSU", "NETAPP", "EMC", "Oracle/Sun"].map((platform, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {platform}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Wrench className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">Maintenance Support & IMAC Services</span>
              </div>
              <div className="flex items-center space-x-3">
                <Monitor className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">Desktop, Servers & Storage Solutions</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">Smart Hands Support & Site Survey</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Global Reach:</strong> Head Office in London (UK) with 2+ years of experience serving businesses worldwide.
              </p>
            </div>
          </div>

          {/* Financial Services Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <Calculator className="w-8 h-8 text-green-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Financial Services</h3>
            </div>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Comprehensive financial and accounting services backed by ACCA-certified accountants and Big 4 specialists. 
              We deliver unlimited support for bookkeeping, payroll processing, and tax filing with strategic financial advice.
            </p>

            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">Supported Platforms:</h4>
              <div className="flex flex-wrap gap-2">
                {["QuickBooks", "Xero", "SAP", "Oracle"].map((platform, index) => (
                  <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {platform}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FileText className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">VAT/CIS Filing & Accounts Management</span>
              </div>
              <div className="flex items-center space-x-3">
                <PieChart className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">Financial Reporting & Budgeting</span>
              </div>
              <div className="flex items-center space-x-3">
                <BookOpen className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">Bookkeeping & Audit Preparation</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-green-800">
                <strong>Professional Excellence:</strong> ACCA-certified accountants with Big 4 experience ensuring HMRC compliance and global accounting standards.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business Operations?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Get comprehensive IT support and financial management in one partnership. Experience professional excellence with certified experts.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
}
