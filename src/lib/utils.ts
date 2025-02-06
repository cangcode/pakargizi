import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const distributeCalories = (calories: number) => {
    const sarapan = parseFloat((calories * 0.25).toFixed(0))
    const makanSiang = parseFloat((calories * 0.35).toFixed(0))
    const makanMalam = parseFloat((calories * 0.30).toFixed(0))
    const cemilan = parseFloat((calories * 0.10).toFixed(0))
    return {
      sarapan,
      makanSiang,
      makanMalam,
      cemilan
    }
  }
  