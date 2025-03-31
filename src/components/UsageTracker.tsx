
import React, { useEffect, useState } from 'react';
import { 
  getUsageData, 
  incrementUsageCount, 
  setNeverShowAgain, 
  recordPopupShown,
  shouldShowPopup
} from '@/services/usageService';
import PopupDialog from './PopupDialog';

interface UsageTrackerProps {
  threshold?: number;
  cooldownDays?: number;
}

const UsageTracker: React.FC<UsageTrackerProps> = ({ 
  threshold = 50, 
  cooldownDays = 30 
}) => {
  const [usageCount, setUsageCount] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Initial load of usage data
    const data = getUsageData();
    setUsageCount(data.count);
    
    // Check if we should show the popup
    const shouldShow = shouldShowPopup(threshold, cooldownDays);
    setShowPopup(shouldShow);
    
    if (shouldShow) {
      recordPopupShown();
    }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDismiss = () => {
    setShowPopup(false);
  };

  const handleNeverShow = () => {
    setNeverShowAgain(true);
    setShowPopup(false);
  };

  // For demonstration purposes: increment usage on component mount
  // In a real extension, you'd call this when the user actually uses the extension feature
  useEffect(() => {
    const simulateUsage = () => {
      const newCount = incrementUsageCount();
      setUsageCount(newCount);
    };
    
    // Only for demo/testing: uncomment to simulate usage on component mount
    // simulateUsage();
  }, []);

  return (
    <>
      {showPopup && (
        <PopupDialog 
          usageCount={usageCount}
          threshold={threshold}
          onDismiss={handleDismiss}
          onNeverShow={handleNeverShow}
        />
      )}
    </>
  );
};

export default UsageTracker;
