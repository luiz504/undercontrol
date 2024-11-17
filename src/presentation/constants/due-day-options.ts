export const generateDayOptions = () => {
  return Array.from({ length: 28 }, (_, index) => ({
    value: (index + 1).toString().padStart(2, '0'),
    label: `${index + 1}º`,
  }))
}
export const DAY_OPTIONS = generateDayOptions()
