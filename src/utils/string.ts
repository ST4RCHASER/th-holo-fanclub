export const addPrefix = (prefix: string | undefined, str: string) => {
    return prefix ? `${prefix}-${str}` : str;
}