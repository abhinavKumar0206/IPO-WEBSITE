
import { Header } from "@/components/Header";
import { IPOGrid } from "@/components/IPOGrid";
import { FAQSection } from "@/components/FAQSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Upcoming IPO</h1>
          <p className="text-gray-600">Companies that have filed for an IPO with SEBI. Few details might be disclosed by the companies later.</p>
        </div>
        <IPOGrid />
        <FAQSection />
      </main>
    </div>
  );
};

export default Index;
