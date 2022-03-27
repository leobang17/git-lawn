// // States
// const lawnSize = lawnSizeCalculator(grassSpan);
// const [lawnHeight, setLawnHeight] = useState(lawnSize.lawnHeight);
// const [lawnWidth, setLawnWidth] = useState(lawnSize.lawnWidth);
// const [commitRows, setCommitRows] = useState(commitContext.commitRows);
// const [isLoaded, setIsLoaded] = useState(false);

// // Effects
// useEffect(() => {
//   const daysToFill = getDaysToFill(commitRows);
//   const unvisibleRows = getUnvisibleRows(daysToFill);
//   setCommitRows((prev) => [...unvisibleRows, ...prev]);
//   setIsLoaded(true);
// }, []);

// useEffect(() => {
//   if (isLoaded) {
//     const lawnWidthCount = lawnWidthCountCalculator(commitRows);
//     const lawnSize = lawnSizeCalculator(grassSpan, lawnWidthCount);
//     setLawnHeight(lawnSize.lawnHeight);
//     setLawnWidth(lawnSize.lawnWidth);
//   }
// }, [isLoaded]);
