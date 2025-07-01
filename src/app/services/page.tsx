"use client";

import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";
import services from "../data/services";

export default function ServicesPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 space-y-20">
      <SectionTitle title="Our Services" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, i) => (
          <ServiceCard key={service.title} {...service} index={i} />
        ))}
      </div>
    </section>
  );
}