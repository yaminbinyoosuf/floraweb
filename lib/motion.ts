export const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1];
export const softEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const springMedium = {
  type: "spring" as const,
  stiffness: 120,
  damping: 22,
  mass: 0.9,
};

export const springGentle = {
  type: "spring" as const,
  stiffness: 80,
  damping: 20,
  mass: 1,
};
