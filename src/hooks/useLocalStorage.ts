import { useState } from "react";

function useLocalStorage<T>(
    key: string, 
    initialValue: T) {
    const [storedvalue, setStoredValue] = useState<T>(() => {
        if (typeof window === undefined) {
            return initialValue;
        }

        const item = localStorage.getItem(key)
        
        return item ? JSON.parse(item) : initialValue;
    })

    const setValue = (value: T): void => {
        setStoredValue(value)
        localStorage.setItem(key, JSON.stringify(value))
    }

    return [storedvalue, setValue] as const;
}

export default useLocalStorage;