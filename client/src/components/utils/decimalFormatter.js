const decimalFormatter = (number) => {
  return number.toLocaleString("en-US", { style: "decimal" });
};

export default decimalFormatter;
