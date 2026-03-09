function getLoaderApi() {
    return window.__nwLoader || null;
}

export function beginLoading() {
    getLoaderApi()?.begin?.();
}

export function endLoading() {
    getLoaderApi()?.end?.();
}

export async function withLoading(task) {
    const api = getLoaderApi();
    if (!api?.wrap) return await task();
    return await api.wrap(task);
}

