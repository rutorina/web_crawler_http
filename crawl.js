function normalizeUrl(url) {
    const urlObj = new URL(url);
    const hostPath = urlObj.hostname + urlObj.pathname;
    if(hostPath.length > 0 && hostPath.slice(-1) === '/') {
        return hostPath.slice(0, -1).toLowerCase();
    }
    return hostPath.toLowerCase();
}

module.exports = {
    normalizeUrl
}