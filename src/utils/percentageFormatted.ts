export default function percentageFormatted(percentage: number | null ) {
  const isPercentage = percentage === null || 0 ? 0 : percentage;
  return isPercentage.toFixed(0) + '%';
}