// src/app/page.tsx

import React from 'react';
import HeroSection from "@/components/HeroSection"
import ToolboxSection from '@/components/ToolboxSection';
import FeaturedProductSection from '@/components/FeaturedProductSection';
import InnovationSection from '@/components/InnovationSection';
import CtaSection from '@/components/CtaSection';
import LiderExpertoOffer from '@/components/LiderExpertoOffer';

export default function HomePage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
            <HeroSection />
            <LiderExpertoOffer />
            <ToolboxSection />
            <FeaturedProductSection />
            <InnovationSection />
            <CtaSection />
        </main>
    );
}
