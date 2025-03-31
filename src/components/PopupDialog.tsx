
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ThumbsUp, Share2, Star, X } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

interface PopupDialogProps {
  usageCount: number;
  threshold: number;
  onDismiss: () => void;
  onNeverShow: () => void;
}

const PopupDialog = ({ usageCount, threshold, onDismiss, onNeverShow }: PopupDialogProps) => {
  const [open, setOpen] = useState(false);
  const [confetti, setConfetti] = useState<Array<{ id: number; top: number; left: number; delay: number; color: string }>>([]); 

  useEffect(() => {
    if (usageCount >= threshold) {
      setOpen(true);
      generateConfetti();
    }
  }, [usageCount, threshold]);

  const generateConfetti = () => {
    const colors = ['#4285f4', '#34a853', '#fbbc05', '#ea4335'];
    const newConfetti = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      top: Math.random() * 40,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));
    setConfetti(newConfetti);
  };

  const handleDismiss = () => {
    setOpen(false);
    onDismiss();
  };

  const handleNeverShow = () => {
    setOpen(false);
    onNeverShow();
    toast({
      title: "Preference saved",
      description: "You won't see this message again",
    });
  };

  const handleRate = () => {
    window.open("https://chromewebstore.google.com/detail/quick-url-navigator/jnbfbkiegbghcfbmpdongghpcjidmljn?authuser=0&hl=en-GB", "_blank");
    setOpen(false);
    onDismiss();
    toast({
      title: "Thank you!",
      description: "Your support is greatly appreciated",
      variant: "default",
    });
  };

  const handleShare = () => {
    navigator.share({
      title: 'Quick URL Navigator',
      text: 'Check out this useful Chrome extension for navigating URLs!',
      url: 'https://chromewebstore.google.com/detail/quick-url-navigator/jnbfbkiegbghcfbmpdongghpcjidmljn?authuser=0&hl=en-GB',
    }).catch((error) => console.log('Error sharing', error));
    
    setOpen(false);
    onDismiss();
    toast({
      title: "Thanks for sharing!",
      description: "You're helping the community grow",
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md relative overflow-hidden">
        {confetti.map((item) => (
          <div
            key={item.id}
            className="confetti absolute"
            style={{
              top: `${item.top}%`,
              left: `${item.left}%`,
              backgroundColor: item.color,
              animationDelay: `${item.delay}s`,
            }}
          />
        ))}
        
        <DialogHeader>
          <div className="flex justify-between items-center">
            <DialogTitle className="text-2xl font-bold text-primary">Milestone Reached! 🎉</DialogTitle>
            <Button variant="ghost" size="icon" onClick={handleDismiss} className="h-8 w-8 p-0">
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex justify-center my-4">
            <div className="bg-primary/10 rounded-full p-5 animate-float">
              <ThumbsUp className="h-16 w-16 text-primary animate-pulse-gentle" />
            </div>
          </div>
        </DialogHeader>
        
        <DialogDescription className="text-center">
          <p className="text-lg font-medium">
            You've used Quick URL Navigator <span className="font-bold text-primary">{usageCount} times</span>!
          </p>
          <p className="mt-2 text-muted-foreground">
            If you're finding it useful, would you mind sharing some love? Your support helps keep this extension free and improving!
          </p>
        </DialogDescription>
        
        <DialogFooter className="flex flex-col sm:flex-row gap-2 mt-4">
          <Button variant="outline" className="flex-1" onClick={handleShare}>
            <Share2 className="mr-2 h-4 w-4" />
            Share with friends
          </Button>
          <Button className="flex-1" onClick={handleRate}>
            <Star className="mr-2 h-4 w-4" />
            Rate on Chrome Store
          </Button>
        </DialogFooter>
        
        <div className="mt-4 text-center">
          <button 
            onClick={handleNeverShow}
            className="text-xs text-muted-foreground hover:text-foreground"
          >
            Don't show again
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PopupDialog;
