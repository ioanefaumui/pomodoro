export const sanitizeNumberInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { value } = e.target;
  e.target.value = value.replace(/[^0-9]/g, "").slice(0, 2);
};
