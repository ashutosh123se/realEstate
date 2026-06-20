import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { PageContent } from "@/components/layout/PageContent";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with LUXE REALTY — Mumbai, Delhi, Dubai, London, Singapore offices.",
};

const offices = [
  { city: "Mumbai", address: "Level 42, One Indiabulls Centre, Senapati Bapat Marg, Lower Parel", phone: "+91 22 1234 5678", email: "mumbai@luxerealty.com" },
  { city: "Dubai", address: "Level 15, Index Tower, DIFC, Dubai", phone: "+971 4 123 4567", email: "dubai@luxerealty.com" },
  { city: "London", address: "30 Berkeley Square, Mayfair, London W1J 6EX", phone: "+44 20 1234 5678", email: "london@luxerealty.com" },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader label="Contact" title="Get in Touch" description="Our luxury property advisors are available across 6 global offices." />
      <PageContent>
        <div className="content-stack pt-10 md:pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">
            <div className="lg:col-span-3">
              <form className="glass-panel rounded-xl p-6 md:p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="input-label">Name</label>
                    <input type="text" className="input-field" required />
                  </div>
                  <div>
                    <label className="input-label">Email</label>
                    <input type="email" className="input-field" required />
                  </div>
                  <div>
                    <label className="input-label">Phone</label>
                    <input type="tel" className="input-field" />
                  </div>
                  <div>
                    <label className="input-label">Subject</label>
                    <select className="input-field">
                      <option>Buy</option><option>Sell</option><option>Rent</option>
                      <option>Investment</option><option>Commercial</option><option>Press</option><option>Careers</option><option>Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="input-label">Message</label>
                  <textarea rows={5} className="input-field !h-auto py-3 resize-none" />
                </div>
                <label className="flex items-start gap-3 text-sm text-ash cursor-pointer">
                  <input type="checkbox" className="mt-1 accent-gold-true" />
                  I consent to LUXE REALTY processing my data in accordance with the Privacy Policy.
                </label>
                <button type="submit" className="btn-primary w-full">Send Message</button>
              </form>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="glass-panel rounded-xl p-6">
                <h3 className="font-display text-xl text-white mb-4">Headquarters</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex gap-3 text-ash"><MapPin className="w-4 h-4 shrink-0 text-gold-warm mt-0.5" /> Level 42, One Indiabulls Centre, Mumbai 400013</div>
                  <div className="flex gap-3 text-ash"><Phone className="w-4 h-4 shrink-0 text-gold-warm" /> +91 22 1234 5678</div>
                  <div className="flex gap-3 text-ash"><Mail className="w-4 h-4 shrink-0 text-gold-warm" /> hello@luxerealty.com</div>
                  <div className="flex gap-3 text-ash"><Clock className="w-4 h-4 shrink-0 text-gold-warm" /> Mon–Sat, 9:00 AM – 7:00 PM IST</div>
                </div>
              </div>
              <div className="h-48 card-panel flex items-center justify-center">
                <p className="text-smoke text-sm">Mapbox embed</p>
              </div>
            </div>
          </div>

          <section className="page-block">
            <h2 className="font-display text-3xl md:text-4xl text-white mb-8">Office Locations</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {offices.map((office) => (
                <div key={office.city} className="card-panel p-6">
                  <h3 className="font-display text-xl text-white mb-3">{office.city}</h3>
                  <p className="text-sm text-ash mb-4 leading-relaxed">{office.address}</p>
                  <p className="text-sm text-gold-warm">{office.phone}</p>
                  <p className="text-sm text-ash mt-1">{office.email}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </PageContent>
    </>
  );
}
