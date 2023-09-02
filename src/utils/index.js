export const sliceArray = (arr, limit) => {
    return arr.slice(0, limit)
}

export const toBase64 = str =>
    typeof window === 'undefined'
        ? Buffer.from(str).toString('base64')
        : window.btoa(str)