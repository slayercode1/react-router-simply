
export function useParams(segmentIndex = 1) {
  const segments = window.location.pathname.split('/').filter(Boolean);
  return segments[segmentIndex - 1] || null;
}