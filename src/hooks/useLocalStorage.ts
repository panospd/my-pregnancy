import { useState } from "react";

function useLocalStorage<T>(
    key: string, 
    initialValue: T | undefined,
    parse?: (item: string) => T,
    stringify?: (value: T) => string) {
    const [storedvalue, setStoredValue] = useState<T | undefined>(() => {
        if (typeof window === undefined) {
            return initialValue;
        }

        const item = localStorage.getItem(key)

        if(!item) return initialValue;

        return parse ? parse(item) : JSON.parse(item) as T;
    })

    const setValue = (value: T): void => {
        setStoredValue(value)
        localStorage.setItem(key, stringify ? stringify(value) : JSON.stringify(value))
    }

    return [storedvalue, setValue] as const;
}

export default useLocalStorage;