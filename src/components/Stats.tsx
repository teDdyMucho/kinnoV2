import React from 'react';
import { TrendingUp, DollarSign, Activity, Users } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "$2.4B+",
      label: "Total Volume Traded",
      change: "+23% this month"
    },
    {
      icon: DollarSign,
      value: "94.7%",
      label: "Success Rate",
      change: "Above market average"
    },
    {
      icon: Activity,
      value: "0.03s",
      label: "Average Execution Time",
      change: "Lightning fast"
    },
    {
      icon: Users,
      value: "15,847",
      label: "Active Traders",
      change: "+1,200 this week"
    }
  ];

  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-blue-950/20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Performance</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Speaks Volumes
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real numbers from real traders. Our AI consistently outperforms traditional trading methods.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 p-3 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  {stat.value}
                </div>
                
                <div className="text-gray-400 font-medium mb-2">
                  {stat.label}
                </div>
                
                <div className="text-sm text-green-400">
                  {stat.change}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Live Trading Chart Preview */}
        <div className="relative p-8 rounded-3xl bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm border border-gray-700/50">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-white">Live Trading Performance</h3>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-medium">LIVE</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="h-64 bg-gradient-to-br from-blue-950/50 to-gray-900/50 rounded-xl border border-blue-500/20 p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 animate-pulse"></div>
                <div className="relative z-10">
                  <h4 className="text-lg font-semibold text-blue-300 mb-4">Portfolio Growth</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">24h Change</span>
                      <span className="text-green-400 font-bold">+$12,847</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Win Rate</span>
                      <span className="text-blue-400 font-bold">94.7%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Active Trades</span>
                      <span className="text-cyan-400 font-bold">23</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="h-64 bg-gradient-to-br from-purple-950/50 to-gray-900/50 rounded-xl border border-purple-500/20 p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 animate-pulse"></div>
                <div className="relative z-10">
                  <h4 className="text-lg font-semibold text-purple-300 mb-4">Recent Trades</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                      <span className="text-white font-medium">BTC/USDT</span>
                      <span className="text-green-400">+2.4%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                      <span className="text-white font-medium">ETH/USDT</span>
                      <span className="text-green-400">+1.8%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                      <span className="text-white font-medium">SOL/USDT</span>
                      <span className="text-green-400">+3.2%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;