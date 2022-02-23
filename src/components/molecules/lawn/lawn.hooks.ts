export const lawnSizeCalculator = (grassSpan: number) => {
  const lawnHeight = grassSpan * 7;
  const lawnWidth = grassSpan * 14;
  return { lawnHeight, lawnWidth };
};
