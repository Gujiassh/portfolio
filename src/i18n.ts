import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ requestLocale }) => {
  const resolvedLocale = await requestLocale;
  try {
    return {
      locale: resolvedLocale,
      messages: (await import(`@/messages/${resolvedLocale}.json`)).default,
    };
  } catch (error) {
    return {
      locale: resolvedLocale,
      messages: {},
    };
  }
}); 