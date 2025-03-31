
// Service to track the extension usage

// Constants
const USAGE_COUNT_KEY = 'quick_url_navigator_usage_count';
const NEVER_SHOW_AGAIN_KEY = 'quick_url_navigator_never_show_again';
const LAST_POPUP_SHOWN_KEY = 'quick_url_navigator_last_popup_shown';

// Interface for usage data
export interface UsageData {
  count: number;
  neverShowAgain: boolean;
  lastPopupShown: number | null;
}

// Get current usage data
export const getUsageData = (): UsageData => {
  try {
    const countStr = localStorage.getItem(USAGE_COUNT_KEY);
    const neverShowAgainStr = localStorage.getItem(NEVER_SHOW_AGAIN_KEY);
    const lastPopupShownStr = localStorage.getItem(LAST_POPUP_SHOWN_KEY);

    return {
      count: countStr ? parseInt(countStr, 10) : 0,
      neverShowAgain: neverShowAgainStr === 'true',
      lastPopupShown: lastPopupShownStr ? parseInt(lastPopupShownStr, 10) : null
    };
  } catch (error) {
    console.error('Error retrieving usage data:', error);
    return { count: 0, neverShowAgain: false, lastPopupShown: null };
  }
};

// Increment usage count
export const incrementUsageCount = (): number => {
  try {
    const currentData = getUsageData();
    const newCount = currentData.count + 1;
    localStorage.setItem(USAGE_COUNT_KEY, newCount.toString());
    return newCount;
  } catch (error) {
    console.error('Error incrementing usage count:', error);
    return 0;
  }
};

// Set the never show again preference
export const setNeverShowAgain = (value: boolean = true): void => {
  try {
    localStorage.setItem(NEVER_SHOW_AGAIN_KEY, value.toString());
  } catch (error) {
    console.error('Error setting never show again preference:', error);
  }
};

// Record when the popup was last shown
export const recordPopupShown = (): void => {
  try {
    const now = Date.now();
    localStorage.setItem(LAST_POPUP_SHOWN_KEY, now.toString());
  } catch (error) {
    console.error('Error recording popup shown timestamp:', error);
  }
};

// Check if we should show the popup
export const shouldShowPopup = (threshold: number, cooldownDays: number = 30): boolean => {
  const data = getUsageData();
  
  // Don't show if user opted out
  if (data.neverShowAgain) {
    return false;
  }
  
  // Don't show if usage count is below threshold
  if (data.count < threshold) {
    return false;
  }
  
  // Don't show if we've shown it recently
  if (data.lastPopupShown) {
    const daysSinceLastShown = (Date.now() - data.lastPopupShown) / (1000 * 60 * 60 * 24);
    if (daysSinceLastShown < cooldownDays) {
      return false;
    }
  }
  
  return true;
};

// Reset usage statistics (mainly for testing)
export const resetUsageStats = (): void => {
  try {
    localStorage.removeItem(USAGE_COUNT_KEY);
    localStorage.removeItem(NEVER_SHOW_AGAIN_KEY);
    localStorage.removeItem(LAST_POPUP_SHOWN_KEY);
  } catch (error) {
    console.error('Error resetting usage stats:', error);
  }
};
