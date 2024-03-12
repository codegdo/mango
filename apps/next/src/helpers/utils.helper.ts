class UtilsHelper {
  getSubdomain() {
    const hostname = window.location.hostname;
    const parts = hostname.split('.');

    // Check if hostname includes 'localhost'
    if (hostname.includes('localhost')) {
      return parts.length >= 2 ? parts[0] : null;
    } else if (parts[0] === 'www') {
      return parts.length >= 3 ? parts[1] : null;
    } else {
      return parts.length > 2 ? parts[0] : null;
    }
  }

  stringifyUrl(url: string, query: Record<string, string | number> = {}) {
    const queryString = Object.entries(query)
      .map(([key, value]) => {
        if (typeof key !== 'string' || (typeof value !== 'string' && typeof value !== 'number')) {
          throw new Error('Invalid query parameter type');
        }
        return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
      })
      .join('&');

    if (queryString) {
      return `${url}?${queryString}`;
    } else {
      return url;
    }
  }
}

export const utils = new UtilsHelper();
