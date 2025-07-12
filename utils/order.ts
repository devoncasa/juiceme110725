// utils/order.ts
export const generateOrderNumber = (): string => {
  const now = new Date();
  
  // Format date and time parts
  const dd = String(now.getDate()).padStart(2, '0');
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const yy = String(now.getFullYear()).slice(-2);
  const hh = String(now.getHours()).padStart(2, '0');
  const min = String(now.getMinutes()).padStart(2, '0');
  const datePart = `${dd}${mm}${yy}`;
  const timePart = `${hh}${min}`;
  const todayStr = now.toISOString().split('T')[0]; // YYYY-MM-DD format for comparison

  // Handle running number with daily reset
  let counter = 1;
  const storageKey = 'dailyOrderCounter';
  try {
    const storedData = localStorage.getItem(storageKey);
    if (storedData) {
      const { date, value } = JSON.parse(storedData);
      if (date === todayStr) {
        counter = value + 1;
      }
    }
    localStorage.setItem(storageKey, JSON.stringify({ date: todayStr, value: counter }));
  } catch (e) {
    console.warn("Could not access localStorage for order number:", e);
  }

  const runningNumberPart = String(counter).padStart(3, '0');

  return `${datePart}-${timePart}-${runningNumberPart}`;
};
