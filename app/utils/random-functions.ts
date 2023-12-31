export function generateColor(name: string): string {
  // Split the name into an array of words
  const words: string[] = name.split(" ");

  // Initialize RGB values
  let red: number = 0;
  let green: number = 0;
  let blue: number = 0;

  // Calculate RGB values based on each word
  words.forEach((word: string) => {
    const asciiValue: number = word.charCodeAt(0);
    red = (red + asciiValue * 13) % 256;
    green = (green + asciiValue * 17) % 256;
    blue = (blue + asciiValue * 19) % 256;
  });

  // Return the RGB color as a string
  return `rgb(${red}, ${green}, ${blue})`;
}

export function printFirstLetters(name: string): string {
  // Split the name into an array of words
  const words: string[] = name.split(" ");

  // Extract the first letter of each word
  const firstLetters: string[] = words.map((word) => {
    if (word.length > 0) {
      return word[0];
    }
    return "";
  });

  // Concatenate the first letters
  const result: string = firstLetters.join("");

  // Print the result
  return result;
}

export function isValidArray<T>(array: T[]): boolean {
  return Array.isArray(array) && array.length > 0;
}
export function isValidObject(obj) {
  return obj !== null && obj !== undefined && typeof obj === "object";
}
// Function to retrieve data from local storage
const getFromLocalStorage = (key: string) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};
// useLocalStorageList.js
import { useState, useEffect, useCallback } from "react";

const useLocalStorageList = (key) => {
  const [items, setItems] = useState([]);

  const refetchList = useCallback(() => {
    const storedItems = localStorage.getItem(key);
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, [key]);

  useEffect(() => {
    const handleStorageChange = () => {
      refetchList();
    };

    window.addEventListener("storageChange", handleStorageChange);

    refetchList();

    return () => {
      window.removeEventListener("storageChange", handleStorageChange);
    };
  }, [refetchList]);

  const addItem = (item) => {
    setItems((prevItems) => {
      const updatedItems = [...prevItems, item];
      localStorage.setItem(key, JSON.stringify(updatedItems));
      window.dispatchEvent(new Event("storageChange"));
      return updatedItems;
    });
  };

  const removeItem = (index) => {
    setItems((prevItems) => {
      try {
        const updatedItems = prevItems.filter((_, i) => i !== index);

        localStorage.setItem(key, JSON.stringify(updatedItems));
        window.dispatchEvent(new Event("storageChange"));

        return updatedItems;
      } catch (error) {
        console.error("Error removing item:", error);
        return prevItems;
      }
    });
  };

  const updateItem = (index, newItem) => {
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[index] = newItem;
      localStorage.setItem(key, JSON.stringify(updatedItems));
      window.dispatchEvent(new Event("storageChange"));
      return updatedItems;
    });
  };

  return {
    items,
    addItem,
    removeItem,
    updateItem,
    refetchList,
  };
};

export default useLocalStorageList;

export function extractDescriptionsAndPurposes(obj) {
  const descriptions = Object.keys(obj)
    .filter((key) => key.startsWith("description["))
    .map((key) => obj[key]);

  const purposes = Object.keys(obj)
    .filter((key) => key.startsWith("purpose["))
    .map((key) => obj[key]);

  return { descriptions, purposes };
}

export function timeToHoursAndMinutes(timeString) {
  const [hours, minutes, seconds] = timeString.split(":").map(Number);
  const totalMinutes = hours * 60 + minutes + seconds / 60;

  if (totalMinutes >= 60) {
    const hoursPart = Math.floor(totalMinutes / 60);
    return `${hoursPart}h`;
  } else {
    const hoursPart = Math.floor(totalMinutes / 60);

    return `${Math.floor(totalMinutes)}m`;
  }
}
