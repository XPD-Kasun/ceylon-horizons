import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Compass, Sun, CreditCard, Shirt, ShieldAlert } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const TravelerGuideFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: 'Do I need a visa to enter Sri Lanka?',
      answer: 'Most international travelers require an Electronic Travel Authorization (ETA) prior to arrival. It is easily obtained through the official Sri Lanka immigration portal (www.eta.gov.lk) and is typically granted within 24 to 48 hours for 30 days of tourism. Our concierge team assists all booked guests with visa documentation.',
      category: 'Entry & Visas'
    },
    {
      question: 'How does the dual monsoon system affect my travel plans?',
      answer: 'Sri Lanka enjoys sunshine year-round thanks to two localized monsoons. From November to April, the South and West coasts (Weligama, Galle, Mirissa, Bentota) and the Cultural Triangle experience dry, glorious sunny weather. From May to October, the East Coast (Arugam Bay, Passikudah, Trincomalee) enjoys dry, sunny conditions with world-class right-hand point break surf. Whenever you visit, our itineraries place you in the perfect seasonal zone.',
      category: 'Weather'
    },
    {
      question: 'What is the dress code for sacred cultural temples?',
      answer: 'When entering sacred Buddhist sites such as the Temple of the Tooth in Kandy, Dambulla Cave Temples, or Anuradhapura, visitors must cover their shoulders and knees. White or light-colored attire is respectful and traditional. Shoes and hats must be removed at temple entrances; we recommend bringing socks as stone courtyards can become warm under the midday sun.',
      category: 'Culture & Etiquette'
    },
    {
      question: 'Is a private chauffeur-guide necessary, or can I rent a car?',
      answer: 'Self-driving in Sri Lanka is not recommended due to dense local traffic, winding mountain roads, and wandering wildlife. With a dedicated private chauffeur-guide from Ceylon Horizons, you travel in modern air-conditioned comfort while gaining an English-speaking local companion, route navigator, wildlife spotter, and cultural interpreter.',
      category: 'Transport'
    },
    {
      question: 'What currency should I bring and are credit cards accepted?',
      answer: 'The local currency is the Sri Lankan Rupee (LKR). Major credit cards (Visa and Mastercard) are widely accepted in boutique hotels, upscale restaurants, and supermarket chains. ATMs are readily available across all towns. For village markets, tips, and street coconuts, small cash notes are helpful; your driver will gladly stop at reliable bank ATMs whenever needed.',
      category: 'Currency'
    },
    {
      question: 'How do you ensure ethical wildlife safaris in Yala National Park?',
      answer: 'We strictly adhere to the Sri Lanka Department of Wildlife Conservation (DWC) code of conduct. Our naturalist drivers maintain a minimum 20-meter perimeter from animals, switch off engines during sightings, never off-road into sensitive scrub, and do not communicate via radios to crowd animals. We believe wildlife observation should never cause stress to wild creatures.',
      category: 'Wildlife'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="max-w-3xl mb-12">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#c4683c] mb-2">
          <span>Island Essentials</span>
          <span aria-hidden="true">·</span>
          <span>Preparation & FAQs</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#164e3f] leading-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-sm sm:text-base text-[#4a5851] mt-3 leading-relaxed">
          Practical guidance for planning your holiday to Sri Lanka, curated by our Colombo team.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Accordion FAQ Column */}
        <div className="lg:col-span-8 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#faf8f5] rounded-xl border border-[#e5dec9] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-[#1a2822]">
                    {faq.question}
                  </span>
                  <div className={`w-7 h-7 rounded-full bg-[#eae4d5] flex items-center justify-center shrink-0 transition-transform ${isOpen ? 'rotate-180 bg-[#164e3f] text-white' : 'text-[#2a3832]'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#4a5851] leading-relaxed border-t border-[#f0eae1]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Island Facts Side Card */}
        <div className="lg:col-span-4 bg-[#f4efe6] rounded-2xl p-6 sm:p-7 border border-[#ded5c5] flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-[#164e3f]">
              Island Quick Facts
            </h3>

            <div className="space-y-3 text-xs text-[#2a3832]">
              <div className="flex items-start gap-2.5">
                <Sun className="w-4 h-4 text-[#c4683c] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#1a2822]">Tropical Temperatures</strong>
                  <span>Coast: 28°C–32°C | Hill Country: 16°C–22°C</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CreditCard className="w-4 h-4 text-[#164e3f] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#1a2822]">Currency & Tipping</strong>
                  <span>LKR (Sri Lankan Rupee). 10% service usually added to dining.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Shirt className="w-4 h-4 text-[#c4683c] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#1a2822]">Packing Essentials</strong>
                  <span>Lightweight linens, temple wrap, surf rashguard, mountain fleece.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <ShieldAlert className="w-4 h-4 text-[#164e3f] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#1a2822]">Safe Bottled Water</strong>
                  <span>Bottled and filtered spring water provided daily in your vehicle.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-[#ded5c5] text-xs text-[#525f57]">
            <span>Have custom inquiries or specific dietary needs?</span>
            <div className="font-semibold text-[#164e3f] mt-1">
              Contact our Colombo concierge: info@ceylonhorizons.com
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
