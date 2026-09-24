/**
 * English month names used as the canonical range format for duration math.
 * Displayed dates come from message catalogs; ranges passed here stay English.
 */
const monthNames: { [key: string]: number } = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  November: 10,
  December: 11,
}

export type DurationLabels = {
  month: string
  months: string
  year: string
  years: string
}

/** Parse an English date range like `December 2021 - Present` and format duration. */
export function calculateDuration(
  dateRange: string,
  labels: DurationLabels
): string {
  const isPresent = dateRange.includes('Present')
  const parts = dateRange.split(' - ')

  if (parts.length !== 2) return ''

  const startStr = parts[0].trim()
  const endStr = parts[1].trim()

  const startMatch = startStr.match(/(\w+)\s+(\d{4})/)
  if (!startMatch) return ''

  const startMonth = monthNames[startMatch[1]]
  const startYear = parseInt(startMatch[2])

  let endMonth: number
  let endYear: number

  if (isPresent) {
    const now = new Date()
    endMonth = now.getMonth()
    endYear = now.getFullYear()
  } else {
    const endMatch = endStr.match(/(\w+)\s+(\d{4})/)
    if (!endMatch) return ''
    endMonth = monthNames[endMatch[1]]
    endYear = parseInt(endMatch[2])
  }

  let years = endYear - startYear
  let months = endMonth - startMonth + 1

  if (months < 0) {
    years--
    months += 12
  }

  if (months >= 12) {
    years += Math.floor(months / 12)
    months = months % 12
  }

  if (years === 0) {
    return `( ~ ${months} ${months === 1 ? labels.month : labels.months})`
  } else if (months === 0) {
    return `( ~ ${years} ${years === 1 ? labels.year : labels.years})`
  } else {
    return `( ~ ${years} ${years === 1 ? labels.year : labels.years} ${months} ${
      months === 1 ? labels.month : labels.months
    })`
  }
}

/** Canonical English ranges for duration calculation (not for display). */
export const experienceRanges = {
  banpu: 'December 2021 - Present',
  artisan: 'May 2020 - December 2021',
  aware: 'December 2017 - May 2020',
  tradition: 'June 2016 - November 2017',
  intsia: 'June 2015 - September 2015',
  true: 'March 2013 - May 2013',
} as const
