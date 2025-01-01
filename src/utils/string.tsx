export const addPrefix = (prefix: string | undefined, str: string) => {
    return prefix ? `${prefix}-${str}` : str;
}
export const stringToTextNewLine = (text: string) => {
    return text.split('\n').map((str, index) => {
        return (
            <div key={index} className='break-all' >
                {str}
            </div>
        )
    })
}
export function numberWithCommas(x: number) {
    if (!x) return '-'
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}