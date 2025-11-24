"use client";

import { ReactNode } from "react";

import { ThemeProvider as EmotionProvider } from "@emotion/react";
import lightColors from "./light";

export default function ThemeProvider({ children }: { children: ReactNode }) {
  return <EmotionProvider theme={{ colors: lightColors }}>{children}</EmotionProvider>;
}
