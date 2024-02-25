export const dynamicQueryParams = (queryParams, url) => {
    let params = new URLSearchParams(queryParams);

    return `${url}?${params.toString()}`
}