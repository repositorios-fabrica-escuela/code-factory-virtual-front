import { Token } from "@/types/graphql"


export function isTokenValid(token: Token): boolean {
    const currentTime = Math.floor(Date.now() / 1000);
    console.log(currentTime)
    return token.exp > currentTime ;//&& token.iat <= currentTime;
}

export function validateAndRemoveToken(): Token | null {
    if (typeof window === 'undefined') {
        return null;
    }

    const storedToken = localStorage.getItem('userToken');
    if (!storedToken) {
        return null;
    }

    try {
        const token: Token = JSON.parse(storedToken);
        if (!isTokenValid(token)) {
            localStorage.removeItem('userToken');
            return null;
        }
        return token;
    } catch (error) {
        console.error('Failed to parse token:', error);
        localStorage.removeItem('userToken');
        return null;
    }
}

export function getFromLocalStorage<T>(key: string, defaultValue: T): T {
    if (typeof window === 'undefined') {
      return defaultValue;
    }
  
    try {
      const item = window.localStorage.getItem(key);
      return item as unknown as T;
    } catch (error) {
      console.error('Error accessing localStorage:', error);
      return defaultValue;
    }
  }