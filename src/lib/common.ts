const APP_NAME = "?"

import dayjs from "dayjs"

export function updatePageTitle(title: string | undefined) {
  if (title) {
    document.title = `${APP_NAME} | ${title}`
  } else {
    document.title = APP_NAME
  }
}

export function getFormattedDate(pattern: string, date: Date): string {
  const formatted = dayjs(date).format(pattern)
  return formatted
}

export const MS_IN_SEC = 1000;
export function getFormattedTimeDuration(duration: number, conversion: number, formatter: (num: number, dec: number) => string) {
  const num = (duration / conversion) | 0
  const dec = duration % conversion

  return formatter(num, dec)
}

const UUID_LENGTH = 36;
export function getSafeUuids(extractUuids: string | null): string[] {
  if (!extractUuids) return []
  const rawUuids = extractUuids.split(',')

  const uuidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/;
  return rawUuids.filter((uuid) => {
    if (uuid.length !== UUID_LENGTH) return false
    return uuidRegex.test(uuid)
  })
}

export function generateHexColor(seed: number, hueRange: [number, number]): string {
  // Helper function to generate a pseudo-random number based on seed
  const seededRandom = (seed: number) => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  };

  // Generate hue within the specified range
  const hue = Math.floor(
    seededRandom(seed) * (hueRange[1] - hueRange[0]) + hueRange[0]
  );

  // Fixed saturation and lightness for consistent colors
  const saturation = 70; // percentage
  const lightness = 50; // percentage

  // Convert HSL to RGB
  const hslToHex = (h: number, s: number, l: number): string => {
    s /= 100;
    l /= 100;

    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = l - c / 2;

    let r = 0, g = 0, b = 0;

    if (h >= 0 && h < 60) {
      r = c; g = x; b = 0;
    } else if (h >= 60 && h < 120) {
      r = x; g = c; b = 0;
    } else if (h >= 120 && h < 180) {
      r = 0; g = c; b = x;
    } else if (h >= 180 && h < 240) {
      r = 0; g = x; b = c;
    } else if (h >= 240 && h < 300) {
      r = x; g = 0; b = c;
    } else if (h >= 300 && h < 360) {
      r = c; g = 0; b = x;
    }

    // Convert to hex format
    const toHex = (value: number): string =>
      Math.round((value + m) * 255)
        .toString(16)
        .padStart(2, "0");

    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  };

  return hslToHex(hue, saturation, lightness);
}
