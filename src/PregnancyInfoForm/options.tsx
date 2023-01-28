const weekOptions: string[] = [];
export const weeks = () => {
    if (weekOptions.length === 0) {
        weekOptions.push(...range(40, (index) => `Week ${index + 1}`))
    }

    return weekOptions
}

const dayOptions: number[] = []

export const days = () => {
    if (dayOptions.length === 0) {
        dayOptions.push(...range(7, (index) => index + 1))
    }

    return dayOptions
}

function range<T>(size: number, namePattern: (index: number) => T): T[] {
    return [...Array(size).keys()].map(i => namePattern(i));
}