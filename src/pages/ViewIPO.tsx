import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Download, Building, Calendar, DollarSign, TrendingUp, FileText } from "lucide-react";

interface IPOData {
  id: string;
  company: string;
  priceRange: string;
  openDate: string;
  closeDate: string;
  issueSize: string;
  issueType: string;
  listingDate: string;
  status: "Ongoing" | "Comming" | "New Listed";
  ipoPrice?: string;
  listingPrice?: string;
  listingGain?: string;
  cmp?: string;
  currentReturn?: string;
  rhpUrl?: string;
  drhpUrl?: string;
}

const mockIPOData: IPOData[] = [
  {
    id: "1",
    company: "Adani Power",
    priceRange: "₹ 329 - 386",
    openDate: "2023-06-03",
    closeDate: "2024-06-05",
    issueSize: "45530.15 Cr.",
    issueType: "Book Built",
    listingDate: "2023-06-10",
    status: "Ongoing",
    rhpUrl: "https://www.sebi.gov.in/filings/public-issues/jan-2024/adani-power-limited/1703745836722.pdf",
    drhpUrl: "https://www.sebi.gov.in/filings/public-issues/dec-2023/adani-power-limited/1703145836722.pdf"
  },
  {
    id: "2",
    company: "VBL LTD",
    priceRange: "₹ 229 - 286",
    openDate: "2024-06-03",
    closeDate: "2024-06-05",
    issueSize: "1350.15 Cr.",
    issueType: "Book Built",
    listingDate: "2018-06-10",
    status: "Comming",
    rhpUrl: "https://www.sebi.gov.in/filings/public-issues/jun-2024/vbl-limited/1717745836722.pdf",
    drhpUrl: "https://www.sebi.gov.in/filings/public-issues/may-2024/vbl-limited/1716145836722.pdf"
  },
  {
    id: "3",
    company: "Tata Motors",
    priceRange: "₹ 340 - 385",
    openDate: "2024-06-03",
    closeDate: "2024-06-05",
    issueSize: "1340.15 Cr.",
    issueType: "Book Built",
    listingDate: "2016-06-10",
    status: "New Listed",
    ipoPrice: "₹ 383",
    listingPrice: "₹ 435",
    listingGain: "13.58%",
    cmp: "₹ 410",
    currentReturn: "7.05%",
    rhpUrl: "https://www.sebi.gov.in/filings/public-issues/jun-2024/tata-motors/1717845836722.pdf",
    drhpUrl: "https://www.sebi.gov.in/filings/public-issues/may-2024/tata-motors/1716245836722.pdf"
  }
];

const getStatusBadge = (status: IPOData["status"]) => {
  switch (status) {
    case "Ongoing":
      return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Ongoing</Badge>;
    case "Comming":
      return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Coming Soon</Badge>;
    case "New Listed":
      return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">New Listed</Badge>;
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
};

const ViewIPO = () => {
  const { id } = useParams<{ id: string }>();
  const [ipoData, setIpoData] = useState<IPOData | null>(null);

  useEffect(() => {
    const ipo = mockIPOData.find(ipo => ipo.id === id);
    setIpoData(ipo || null);
  }, [id]);

  const handleDocumentDownload = (url: string, fileName: string) => {
    // Create a temporary link element for download
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!ipoData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">IPO Not Found</h2>
          <p className="text-gray-600 mb-6">The requested IPO details could not be found.</p>
          <Link to="/manage-ipo">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Manage IPO
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center space-x-4">
              <Link to="/manage-ipo">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
              </Link>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">{ipoData.company}</h1>
                  <p className="text-gray-600">IPO Details</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {getStatusBadge(ipoData.status)}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Core IPO Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <span>IPO Application Details</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Price Band</label>
                    <p className="text-lg font-semibold text-gray-900">{ipoData.priceRange}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Issue Type</label>
                    <p className="text-lg font-semibold text-gray-900">{ipoData.issueType}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Open Date</label>
                    <p className="text-lg font-semibold text-gray-900">{ipoData.openDate}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Close Date</label>
                    <p className="text-lg font-semibold text-gray-900">{ipoData.closeDate}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Issue Size</label>
                    <p className="text-lg font-semibold text-gray-900">{ipoData.issueSize}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Listing Date</label>
                    <p className="text-lg font-semibold text-gray-900">{ipoData.listingDate}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Document Downloads */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  <span>Documents</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => handleDocumentDownload(ipoData.rhpUrl || '#', `${ipoData.company}_RHP.pdf`)}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download RHP (Red Herring Prospectus)
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => handleDocumentDownload(ipoData.drhpUrl || '#', `${ipoData.company}_DRHP.pdf`)}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download DRHP (Draft Red Herring Prospectus)
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Financial Details */}
          <div className="space-y-6">
            {ipoData.status === "New Listed" && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    <span>Listing Performance</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-500">IPO Price</label>
                      <p className="text-lg font-semibold text-gray-900">{ipoData.ipoPrice}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Listing Price</label>
                      <p className="text-lg font-semibold text-gray-900">{ipoData.listingPrice}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-500">Listing Gain</label>
                      <p className="text-lg font-semibold text-green-600">{ipoData.listingGain}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Current Market Price</label>
                      <p className="text-lg font-semibold text-gray-900">{ipoData.cmp}</p>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-500">Current Return</label>
                    <p className="text-2xl font-bold text-green-600">{ipoData.currentReturn}</p>
                  </div>
                </CardContent>
              </Card>
            )}

            {ipoData.status !== "New Listed" && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <DollarSign className="w-5 h-5 text-blue-600" />
                    <span>IPO Status</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    {getStatusBadge(ipoData.status)}
                    <p className="text-gray-600 mt-4">
                      {ipoData.status === "Ongoing" 
                        ? "This IPO is currently accepting applications."
                        : "This IPO is scheduled to open soon."
                      }
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Additional Info Card */}
            <Card>
              <CardHeader>
                <CardTitle>Additional Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-gray-600">
                  <p>• This information is for reference purposes only</p>
                  <p>• Please consult financial advisors before making investment decisions</p>
                  <p>• Download the official prospectus documents for complete details</p>
                  <p>• Market prices are subject to real-time fluctuations</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewIPO;
