function getColorCode(colorCode) {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText)
    {
         return (
             navigator.clipboard.writeText(colorCode) && window.alert(`Copied ${colorCode} to clipboard`)
         )
    }
    return Promise.reject('The Clipboard API is not available.');
}