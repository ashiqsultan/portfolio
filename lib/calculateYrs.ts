const calculateYearsDiff = (inputYear: number): number => {
  try {
    const currentYear = new Date().getFullYear();
    return currentYear - inputYear;
  } catch (error) {
    return 1;
  }
};
export default calculateYearsDiff;
