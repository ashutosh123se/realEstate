"use client";

import { PageHeader } from "@/components/ui/PageHeader";
import { PageContent } from "@/components/layout/PageContent";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useState } from "react";
import { formatPrice } from "@/lib/utils";

function calculateEMI(principal: number, rate: number, years: number) {
  const monthlyRate = rate / 12 / 100;
  const months = years * 12;
  const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
  const total = emi * months;
  return { emi: Math.round(emi), totalInterest: Math.round(total - principal), totalPayable: Math.round(total) };
}

const banks = [
  { name: "HDFC Bank", rate: 8.5, fee: "0.5%", tenure: 30 },
  { name: "SBI", rate: 8.4, fee: "0.35%", tenure: 30 },
  { name: "ICICI Bank", rate: 8.75, fee: "0.5%", tenure: 30 },
  { name: "Axis Bank", rate: 8.6, fee: "1%", tenure: 30 },
  { name: "Kotak Mahindra", rate: 8.7, fee: "0.5%", tenure: 20 },
];

export default function HomeLoansPage() {
  const [loanAmount, setLoanAmount] = useState(50000000);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);
  const { emi, totalInterest, totalPayable } = calculateEMI(loanAmount, rate, tenure);

  return (
    <>
      <PageHeader
        label="Finance"
        title="Home Loans & Finance"
        description="Compare rates, calculate EMI, and connect with India's leading banks and NBFCs."
      />
      <PageContent>
        <div className="content-stack pt-10 md:pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="glass-panel rounded-xl p-6 md:p-8">
              <SectionHeading title="EMI Calculator" className="mb-6" />
              <div className="space-y-8">
                <div>
                  <label className="input-label">Loan Amount — {formatPrice(loanAmount)}</label>
                  <input type="range" min={1000000} max={100000000} step={100000} value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value))} className="w-full accent-gold-true mt-2" />
                </div>
                <div>
                  <label className="input-label">Interest Rate — {rate}%</label>
                  <input type="range" min={6.5} max={12} step={0.1} value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full accent-gold-true mt-2" />
                </div>
                <div>
                  <label className="input-label">Tenure — {tenure} years</label>
                  <input type="range" min={5} max={30} step={1} value={tenure} onChange={(e) => setTenure(Number(e.target.value))} className="w-full accent-gold-true mt-2" />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="card-panel p-8 border-gold-alpha40">
                <p className="text-xs text-gold-warm uppercase tracking-wider mb-2">Monthly EMI</p>
                <p className="font-display text-4xl md:text-5xl text-white mb-6">{formatPrice(emi)}</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div><p className="text-smoke">Total Interest</p><p className="text-pearl font-mono mt-1">{formatPrice(totalInterest)}</p></div>
                  <div><p className="text-smoke">Total Payable</p><p className="text-pearl font-mono mt-1">{formatPrice(totalPayable)}</p></div>
                </div>
              </div>
            </div>
          </div>

          <section className="page-block">
            <SectionHeading title="Compare Banks" className="mb-8" />
            <div className="overflow-x-auto -mx-2 px-2">
              <table className="w-full min-w-[640px] text-sm">
                <thead>
                  <tr className="border-b border-iron text-ash uppercase tracking-wider text-xs">
                    <th className="text-left py-4 px-4">Bank</th>
                    <th className="text-left py-4 px-4">Rate</th>
                    <th className="text-left py-4 px-4">Processing Fee</th>
                    <th className="text-left py-4 px-4">Max Tenure</th>
                    <th className="py-4 px-4" />
                  </tr>
                </thead>
                <tbody>
                  {banks.map((bank) => (
                    <tr key={bank.name} className="border-b border-iron/50 hover:bg-graphite/50">
                      <td className="py-4 px-4 text-pearl font-medium">{bank.name}</td>
                      <td className="py-4 px-4 text-gold-warm font-mono">{bank.rate}%</td>
                      <td className="py-4 px-4 text-ash">{bank.fee}</td>
                      <td className="py-4 px-4 text-ash">{bank.tenure} yrs</td>
                      <td className="py-4 px-4"><button type="button" className="btn-secondary !py-2 !px-4 text-[10px]">Apply</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </PageContent>
    </>
  );
}
