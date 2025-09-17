// useCategorySelect.js
import { useState } from "react";

export function useCategorySelect(initialIndex = 0) {
  const [selectedIndex, setSelectedIndex] = useState(initialIndex);

  const handleCategorySelect = (i) => {
    setSelectedIndex(i);
    console.log(`Selected category index: ${i}`);
  };

  return { selectedIndex, handleCategorySelect };
}
