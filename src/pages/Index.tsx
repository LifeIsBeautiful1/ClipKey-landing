
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import UsageTracker from '@/components/UsageTracker';
import { incrementUsageCount, getUsageData, resetUsageStats } from '@/services/usageService';
import { ArrowRight, RotateCw } from 'lucide-react';

const Index = () => {
  const { toast } = useToast();
  const [usageCount, setUsageCount] = useState(0);
  const [url, setUrl] = useState('');
  const [showThreshold, setShowThreshold] = useState(5); // Lower for demo purposes

  useEffect(() => {
    // Load initial usage count
    const data = getUsageData();
    setUsageCount(data.count);
  }, []);

  const handleSimulateUsage = () => {
    const newCount = incrementUsageCount();
    setUsageCount(newCount);
    
    toast({
      title: "Usage count increased",
      description: `You've now used the extension ${newCount} times.`,
    });
  };

  const handleResetStats = () => {
    resetUsageStats();
    setUsageCount(0);
    
    toast({
      title: "Stats reset",
      description: "Usage statistics have been reset to zero.",
      variant: "destructive",
    });
  };

  const handleSimulateNavigation = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!url) {
      toast({
        title: "Error",
        description: "Please enter a URL to navigate to.",
        variant: "destructive",
      });
      return;
    }
    
    // Simulate the extension being used
    handleSimulateUsage();
    
    toast({
      title: "URL Navigation",
      description: `Simulated navigation to: ${url}`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4 md:p-8">
      {/* Include the usage tracker which will show popup at the threshold */}
      <UsageTracker threshold={showThreshold} cooldownDays={0} />
      
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary">Quick URL Navigator</h1>
          <p className="text-muted-foreground mt-2">Navigate URLs efficiently with our Chrome extension</p>
        </div>
        
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>URL Navigation Demo</CardTitle>
            <CardDescription>
              This simulates using the extension to navigate to a URL
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSimulateNavigation} className="flex gap-2">
              <Input 
                type="text" 
                placeholder="Enter a URL to navigate to..." 
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="flex-1"
              />
              <Button type="submit">
                <ArrowRight className="mr-2 h-4 w-4" />
                Navigate
              </Button>
            </form>
          </CardContent>
        </Card>
        
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Usage Stats</CardTitle>
            <CardDescription>
              Current extension usage statistics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center p-4">
              <p className="text-4xl font-bold text-primary">{usageCount}</p>
              <p className="text-sm text-muted-foreground mt-1">Times Used</p>
              <p className="mt-4 text-sm">
                The popup will appear when you reach <span className="font-semibold">{showThreshold}</span> uses
                {usageCount >= showThreshold && " (threshold reached)"}
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between gap-4">
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={handleSimulateUsage}
            >
              Simulate Usage
            </Button>
            <Button 
              variant="destructive" 
              className="flex-1"
              onClick={handleResetStats}
            >
              <RotateCw className="mr-2 h-4 w-4" />
              Reset Stats
            </Button>
          </CardFooter>
        </Card>
        
        <div className="text-center text-sm text-muted-foreground">
          <p>This is a demo of the rating/sharing popup for the Quick URL Navigator Chrome extension.</p>
          <p>For testing purposes, the popup threshold is set to {showThreshold} instead of 50.</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
