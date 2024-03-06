class UtilsHelper {
  getSubdomain() {
    const hostname = window.location.hostname;
    const parts = hostname.split('.');

    // Check if hostname includes 'localhost'
    if (hostname.includes('localhost')) {
      return parts.length >= 2 ? parts[0] : null;
    }

    return parts.length > 2 ? parts[0] : null;
  }
}

export const utils = new UtilsHelper();
