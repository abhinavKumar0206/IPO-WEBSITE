import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import axios from "axios";
import { ArrowLeft, Building, Calendar, DollarSign, Download, FileText, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

interface IPOData {
  ipo_id: number;
  company_name: string;
  company_logo: string;
  price_band: string;
  open_date: string;
  close_date: string;
  issue_size: string;
  issue_type: string;
  listing_date: string;
  status: string;
  ipo_price?: string;
  listing_price?: string;
  listing_gain?: string;
  current_market_price?: string;
  current_return?: string;
  documents?: {
    rhp_pdf?: string;
    drhp_pdf?: string;
  }[];
}

const getStatusBadge = (status: string) => {
  switch (status) {
    case "Open":
      return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Ongoing</Badge>;
    case "Upcoming":
      return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Coming Soon</Badge>;
    case "Listed":
      return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">New Listed</Badge>;
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
};

const ViewIPO = () => {
  const { id } = useParams<{ id: string }>();
  const [ipoData, setIpoData] = useState<IPOData | null>(null);

  useEffect(() => {
    if (!id) return;
    axios.get(`http://localhost:5000/api/ipo/${id}`)
      .then(res => setIpoData(res.data))
      .catch(() => setIpoData(null));
  }, [id]);

  const handleDownload = (url?: string, filename?: string) => {
    if (!url) return;
    const link = document.createElement('a');
    link.href = url;
    link.download = filename || 'document.pdf';
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
          <Link to="/ipos">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to IPOs
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center space-x-4">
              <Link to="/ipos">
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
                  <h1 className="text-2xl font-bold text-gray-900">{ipoData.company_name}</h1>
                  <p className="text-gray-600">IPO Details</p>
                </div>
              </div>
            </div>
            <div>{getStatusBadge(ipoData.status)}</div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-6">
          <Card>
            <CardHeader><CardTitle><Calendar className="w-5 h-5 mr-2 inline" /> IPO Application Details</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div><p className="text-sm text-gray-500">Price Band</p><p className="font-semibold">{ipoData.price_band}</p></div>
                <div><p className="text-sm text-gray-500">Issue Type</p><p className="font-semibold">{ipoData.issue_type}</p></div>
                <div><p className="text-sm text-gray-500">Open Date</p><p className="font-semibold">{ipoData.open_date}</p></div>
                <div><p className="text-sm text-gray-500">Close Date</p><p className="font-semibold">{ipoData.close_date}</p></div>
                <div><p className="text-sm text-gray-500">Issue Size</p><p className="font-semibold">{ipoData.issue_size}</p></div>
                <div><p className="text-sm text-gray-500">Listing Date</p><p className="font-semibold">{ipoData.listing_date}</p></div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle><FileText className="w-5 h-5 mr-2 inline" /> Documents</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" onClick={() => handleDownload(ipoData.documents?.[0]?.rhp_pdf, `${ipoData.company_name}_RHP.pdf`)}>
                <Download className="w-4 h-4 mr-2" /> Download RHP
              </Button>
              <Button variant="outline" onClick={() => handleDownload(ipoData.documents?.[0]?.drhp_pdf, `${ipoData.company_name}_DRHP.pdf`)}>
                <Download className="w-4 h-4 mr-2" /> Download DRHP
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {ipoData.status === "Listed" ? (
            <Card>
              <CardHeader><CardTitle><TrendingUp className="w-5 h-5 mr-2 inline" /> Listing Performance</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                <p><span className="text-sm text-gray-500">IPO Price:</span> <span className="font-semibold">{ipoData.ipo_price}</span></p>
                <p><span className="text-sm text-gray-500">Listing Price:</span> <span className="font-semibold">{ipoData.listing_price}</span></p>
                <p><span className="text-sm text-gray-500">Listing Gain:</span> <span className="font-semibold text-green-600">{ipoData.listing_gain}</span></p>
                <p><span className="text-sm text-gray-500">CMP:</span> <span className="font-semibold">{ipoData.current_market_price}</span></p>
                <p><span className="text-sm text-gray-500">Current Return:</span> <span className="text-2xl font-bold text-green-600">{ipoData.current_return}</span></p>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader><CardTitle><DollarSign className="w-5 h-5 mr-2 inline" /> IPO Status</CardTitle></CardHeader>
              <CardContent>
                <div className="text-center py-6">
                  {getStatusBadge(ipoData.status)}
                  <p className="text-gray-600 mt-4">
                    {ipoData.status === "Open"
                      ? "This IPO is currently accepting applications."
                      : "This IPO is scheduled to open soon."}
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewIPO;
