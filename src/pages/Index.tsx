import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { 
  Copy, 
  Keyboard, 
  MousePointer, 
  ExternalLink, 
  Users, 
  Code, 
  ShoppingBag, 
  Rocket, 
  Star,
  Clock,
  Globe,
  Clipboard,
  Settings,
  Lock,
  ArrowRight
} from "lucide-react";

const Index = () => {
  // Define the Chrome store URL as a constant to avoid repetition
  const chromeStoreUrl = "https://chromewebstore.google.com/detail/quick-url-navigator/jnbfbkiegbghcfbmpdongghpcjidmljn";
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-16 pb-12 md:pt-24 md:pb-20 text-center">
        <div className="flex flex-col items-center max-w-4xl mx-auto">
          <div className="flex items-center mb-6">
            <img 
              src="/lovable-uploads/cab5fd88-b94b-45cf-b131-985fadef0d0f.png" 
              alt="ClipKey Logo" 
              className="h-14 w-14"
            />
            <h1 className="text-3xl md:text-4xl font-bold ml-3 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              ClipKey
            </h1>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Smart URL Navigator for Efficient Workflows
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl">
            Transform copied text into instant URL navigation. Perfect for customer service, 
            developers, sales teams, and anyone who uses repeated URL patterns.
          </p>
          
          <div className="animate-float bg-white shadow-xl rounded-2xl p-6 mb-10 w-full max-w-3xl border border-blue-100">
            <img 
              src="/lovable-uploads/e8d2eb63-f19e-4610-a2a1-760b65a704a8.png" 
              alt="ClipKey Interface" 
              className="rounded-lg w-full"
            />
          </div>
          
          <Button 
            className="bg-blue-500 hover:bg-blue-600 text-white text-lg py-6 px-8 hover:scale-105 transition-all duration-300 animate-pulse-gentle"
            size="lg"
            onClick={() => window.open(chromeStoreUrl, "_blank")}
          >
            <ExternalLink className="mr-2 h-5 w-5" />
            Add to Chrome - Free
          </Button>
          
          <div className="flex items-center mt-4 text-sm text-gray-500">
            <Lock className="h-4 w-4 mr-1" />
            <span>No data tracking, only local storage</span>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            How It Works <span className="text-blue-500">- Effortless Navigation</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center p-6 rounded-xl border border-blue-100 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <Copy className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">1. Setup URL Template</h3>
              <p className="text-gray-600">
                Set up your custom URL template with <code className="bg-gray-100 px-1 rounded">[[placeholder]]</code> where the reference value should go.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-xl border border-blue-100 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <MousePointer className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">2. Copy Reference</h3>
              <p className="text-gray-600">
                Copy the reference number you want to use or highlight it with your mouse.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-xl border border-blue-100 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <Keyboard className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">3. Navigate Instantly</h3>
              <p className="text-gray-600">
                Press the keyboard shortcut or use right-click menu to navigate to your custom URL.
              </p>
            </div>
          </div>
          
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200 shadow-md overflow-hidden">
              <div className="bg-blue-600 text-white py-3 px-6">
                <h3 className="font-semibold text-lg">How ClipKey Works - Example</h3>
              </div>
              
              <div className="p-6">
                <div className="hidden md:flex items-center justify-between space-x-4">
                  <div className="bg-white p-5 rounded-lg border border-blue-200 shadow-sm w-1/3">
                    <div className="flex items-center mb-3">
                      <div className="bg-blue-100 w-7 h-7 rounded-full flex items-center justify-center text-blue-700 font-bold mr-2">1</div>
                      <h4 className="font-semibold text-gray-800">Set Template</h4>
                    </div>
                    <code className="bg-gray-50 px-3 py-2 rounded border border-gray-200 text-sm text-blue-600 block overflow-x-auto">
                      https://yoursite.com/order/[[placeholder]]
                    </code>
                  </div>
                  
                  <div className="flex-shrink-0 text-blue-400">
                    <ArrowRight className="h-8 w-8" />
                  </div>
                  
                  <div className="bg-white p-5 rounded-lg border border-blue-200 shadow-sm w-1/3">
                    <div className="flex items-center mb-3">
                      <div className="bg-blue-100 w-7 h-7 rounded-full flex items-center justify-center text-blue-700 font-bold mr-2">2</div>
                      <h4 className="font-semibold text-gray-800">Copy ID</h4>
                    </div>
                    <div className="bg-gray-50 px-3 py-2 rounded border border-gray-200 text-sm flex justify-center">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded font-mono">ORDER123</span>
                    </div>
                  </div>
                  
                  <div className="flex-shrink-0 text-blue-400">
                    <ArrowRight className="h-8 w-8" />
                  </div>
                  
                  <div className="bg-white p-5 rounded-lg border border-blue-200 shadow-sm w-1/3">
                    <div className="flex items-center mb-3">
                      <div className="bg-blue-100 w-7 h-7 rounded-full flex items-center justify-center text-blue-700 font-bold mr-2">3</div>
                      <h4 className="font-semibold text-gray-800">Navigate</h4>
                    </div>
                    <div className="bg-green-50 px-3 py-2 rounded border border-green-200 text-sm text-green-800">
                      <span className="block text-center">Opens:</span>
                      <code className="font-mono block text-center overflow-x-auto">
                        yoursite.com/order/ORDER123
                      </code>
                    </div>
                  </div>
                </div>
                
                <div className="md:hidden space-y-6">
                  <div className="bg-white p-4 rounded-lg border border-blue-200 shadow-sm">
                    <div className="flex items-center mb-2">
                      <div className="bg-blue-100 w-6 h-6 rounded-full flex items-center justify-center text-blue-700 font-bold mr-2">1</div>
                      <h4 className="font-semibold text-gray-800">Set Template</h4>
                    </div>
                    <code className="bg-gray-50 px-3 py-2 rounded border border-gray-200 text-sm text-blue-600 block overflow-x-auto">
                      https://yoursite.com/order/[[placeholder]]
                    </code>
                  </div>
                  
                  <div className="flex justify-center">
                    <svg className="w-6 h-6 text-blue-400 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-blue-200 shadow-sm">
                    <div className="flex items-center mb-2">
                      <div className="bg-blue-100 w-6 h-6 rounded-full flex items-center justify-center text-blue-700 font-bold mr-2">2</div>
                      <h4 className="font-semibold text-gray-800">Copy ID</h4>
                    </div>
                    <div className="bg-gray-50 px-3 py-2 rounded border border-gray-200 text-sm flex justify-center">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded font-mono">ORDER123</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <svg className="w-6 h-6 text-blue-400 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-blue-200 shadow-sm">
                    <div className="flex items-center mb-2">
                      <div className="bg-blue-100 w-6 h-6 rounded-full flex items-center justify-center text-blue-700 font-bold mr-2">3</div>
                      <h4 className="font-semibold text-gray-800">Navigate</h4>
                    </div>
                    <div className="bg-green-50 px-3 py-2 rounded border border-green-200 text-sm text-green-800">
                      <span className="block text-center">Opens:</span>
                      <code className="font-mono block text-center overflow-x-auto">
                        yoursite.com/order/ORDER123
                      </code>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-blue-50 p-4 rounded-md border border-blue-100">
                  <p className="text-blue-700 text-sm flex items-center justify-center">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="font-medium">Time saved:</span>
                    <span className="ml-2">No more copying, opening tabs, and pasting references manually</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Who Can Benefit Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Who Can Benefit
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            ClipKey is designed for professionals who need quick access to information across different systems
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="border-blue-100 hover:shadow-md transition-shadow">
              <CardContent className="flex items-start p-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Customer Support Teams</h3>
                  <p className="text-gray-600">
                    Instantly access order history, support tickets, and client details without manual URL entry.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-blue-100 hover:shadow-md transition-shadow">
              <CardContent className="flex items-start p-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Code className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Developers & IT Teams</h3>
                  <p className="text-gray-600">
                    Quickly navigate to logs, dashboards, or API responses with just a copied reference ID.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-blue-100 hover:shadow-md transition-shadow">
              <CardContent className="flex items-start p-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <ShoppingBag className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">E-Commerce & Sales Teams</h3>
                  <p className="text-gray-600">
                    Open customer profiles and transaction details in seconds with minimal effort.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-blue-100 hover:shadow-md transition-shadow">
              <CardContent className="flex items-start p-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Globe className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Anyone Using Repeated URL Patterns</h3>
                  <p className="text-gray-600">
                    If you frequently navigate to similarly structured URLs with different IDs, ClipKey saves you time.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Why You'll Love <span className="text-blue-500">ClipKey</span>
          </h2>
          
          <Tabs defaultValue="features" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="features">Key Features</TabsTrigger>
              <TabsTrigger value="future">Coming Soon</TabsTrigger>
            </TabsList>
            
            <TabsContent value="features" className="border border-blue-100 rounded-xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <Clock className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Instant Access</h3>
                    <p className="text-gray-600">Just copy, press the shortcut, and navigate effortlessly!</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <Globe className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Universal Compatibility</h3>
                    <p className="text-gray-600">Works seamlessly with any internal or external URL pattern.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <Clipboard className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Clipboard-Based</h3>
                    <p className="text-gray-600">Uses the ID/reference you copy without extra steps.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <Settings className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Customizable</h3>
                    <p className="text-gray-600">Multiple URL templates to fit all your workflow needs.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <Lock className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Fully Private</h3>
                    <p className="text-gray-600">No data tracking, only local storage on your device.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <MousePointer className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Multiple Access Methods</h3>
                    <p className="text-gray-600">Use keyboard shortcuts or right-click contextual menu.</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="future" className="border border-blue-100 rounded-xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <Keyboard className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Customizable Shortcuts</h3>
                    <p className="text-gray-600">Choose your own keyboard shortcuts for even faster navigation.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <Rocket className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Your Suggestions</h3>
                    <p className="text-gray-600">
                      Have an idea? Let us know at{" "}
                      <a href="mailto:juanramoncano.tech@gmail.com" className="text-blue-500 hover:underline">
                        juanramoncano.tech@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Testimonials/Usage Section */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-md text-center">
            <div className="flex justify-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-8 w-8 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-4">
              Join thousands of users saving time with ClipKey
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Our users have saved countless hours by eliminating manual URL navigation.
              Try it today and experience the difference!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                className="bg-blue-500 hover:bg-blue-600 hover:scale-105 transition-all duration-300"
                onClick={() => window.open(chromeStoreUrl, "_blank")}
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                Add to Chrome
              </Button>
              <Button 
                variant="outline" 
                className="border-blue-500 text-blue-500 hover:bg-blue-50"
                onClick={() => window.open(chromeStoreUrl, "_blank")}
              >
                <Star className="mr-2 h-5 w-5" />
                Rate Extension
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer Section */}
      <footer className="bg-gray-50 py-8 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <img 
              src="/lovable-uploads/cab5fd88-b94b-45cf-b131-985fadef0d0f.png" 
              alt="ClipKey Logo" 
              className="h-8 w-8"
            />
            <h3 className="text-xl font-bold ml-2">ClipKey</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Smart URL Navigator for Efficient Workflows
          </p>
          <div className="text-sm text-gray-500">
            <p>© {new Date().getFullYear()} ClipKey. All rights reserved.</p>
            <p className="mt-2">
              Contact:{" "}
              <a href="mailto:juanramoncano.tech@gmail.com" className="text-blue-500 hover:underline">
                juanramoncano.tech@gmail.com
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
