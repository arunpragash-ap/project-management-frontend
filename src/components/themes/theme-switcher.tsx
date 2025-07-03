"use client";

import * as React from "react";
import { useColorTheme } from "@/contexts/theme-context/color-theme-provider";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ThemeSwitcher() {
  const { colorTheme, setColorTheme } = useColorTheme();

  const themes = [
    { label: "Orange", value: "orange-theme" },
    { label: "Blue", value: "blue-theme" },
    { label: "Red", value: "red-theme" },
    { label: "Violet", value: "violet-theme" },
    { label: "Green", value: "green-theme" },
    { label: "Rose", value: "rose-theme" },
    { label: "Yellow", value: "yellow-theme" },
    { label: "Default", value: "default-theme" },
  ];

  return (
    <Select value={colorTheme} onValueChange={setColorTheme}>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {themes.map((t) => (
            <SelectItem key={t.value} value={t.value}>
              {t.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
