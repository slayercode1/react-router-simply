import {useCallback} from 'react';

export function useNavigate() {
  return useCallback((path: string) => {
    window.history.pushState({}, "", path);
    const navigationEvent = new PopStateEvent("navigate");
    window.dispatchEvent(navigationEvent);
  }, []);
}