export const getFormattedDate = (date: Date) => `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`

export const getDateMinusDays = (date: Date, days: number) =>
   new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);