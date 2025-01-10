import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  try {
    return {
      messages: (await import(`@/messages/${locale}.json`)).default,
      timeZone: 'Asia/Shanghai',
      locale: locale
    };
  } catch (error) {
    return {
      messages: {},
      timeZone: 'Asia/Shanghai',
      locale: locale
    };
  }
}); 