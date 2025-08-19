"use client";
import React from "react";
import { Users, FileCheck, Award, Clock, UserCheck } from "lucide-react";

export default function Counter() {
  const stats = [
    {
      icon: <Clock className="w-8 h-8" />,
      number: "2+",
      label: "Years Experience",
      color: "text-blue-600"
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      number: "267",
      label: "IT Tickets Closed",
      color: "text-green-600"
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "70+",
      label: "Bookkeeping & VAT Filed",
      color: "text-purple-600"
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      number: "125+",
      label: "Happy & Loyal Clients",
      color: "text-orange-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "15+",
      label: "Team Members",
      color: "text-indigo-600"
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl p-8 shadow-2xl" style={{ backgroundColor: "#045494" }}>
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="mb-3 flex justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl lg:text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-sm lg:text-base font-medium opacity-90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
