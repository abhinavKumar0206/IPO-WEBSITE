
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Header } from "@/components/Header";
import { InvestorsGrid } from "@/components/InvestorsGrid";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const sampleInvestors = [
  {
    id: "1",
    name: "Dolly Rajeev Khanna",
    description: "He starting investment in the 90's. His investment strategy focuses on long-term value creation and identifying undervalued companies with strong fundamentals.",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: "2",
    name: "Hemendra Kothari",
    description: "A veteran investor with over 30 years of experience in the Indian stock market. Known for his disciplined approach to value investing and risk management.",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: "3",
    name: "Nemish Shah",
    description: "Specializes in small and mid-cap investments with a focus on emerging sectors. His portfolio reflects a balanced approach to growth and value investing.",
    imageUrl: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: "4",
    name: "Porinju Veliyath",
    description: "Known for his contrarian investment style and ability to identify turnaround stories. He has a track record of investing in undervalued companies.",
    imageUrl: "https://images.unsplash.com/photo-1501286353178-1ec881214838?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: "5",
    name: "Radhakishan Damani",
    description: "One of India's most successful investors, known for his long-term investment philosophy and focus on quality businesses with sustainable competitive advantages.",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: "6",
    name: "Rakesh Jhunjhunwala",
    description: "The legendary investor known as the 'Warren Buffett of India'. His investment philosophy combines value investing with growth potential analysis.",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: "7",
    name: "Vijay Kedia",
    description: "Known for his SMILE investment philosophy - Small in size, Medium in experience, Large in aspiration, Extra large in market potential.",
    imageUrl: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: "8",
    name: "Ashish Kacholia",
    description: "A successful portfolio manager and investor with expertise in identifying multi-bagger stocks across various sectors of the Indian economy.",
    imageUrl: "https://images.unsplash.com/photo-1501286353178-1ec881214838?w=400&h=400&fit=crop&crop=face"
  }
];

const SharkInvestors = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Shark Investor</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div className="mb-4 lg:mb-0">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Shark Investors</h1>
            <p className="text-gray-600 max-w-2xl">
              Look into the portfolio of these Super Investors to find out their favourite stocks.
            </p>
          </div>
          
          {/* Search */}
          <div className="relative w-full lg:w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              type="text"
              placeholder="eg. Damani"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Investors Grid */}
        <InvestorsGrid investors={sampleInvestors} searchTerm={searchTerm} />
      </div>
    </div>
  );
};

export default SharkInvestors;
