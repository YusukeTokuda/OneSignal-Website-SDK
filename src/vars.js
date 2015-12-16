import { isDev } from './utils.js';

export const DEV_HOST = 'https://localhost:3000';
export const PROD_HOST = 'https://onesignal.com';
export const HOST_URL = (isDev() ? DEV_HOST : PROD_HOST) + '/api/v1/';

// ⬸ ⤑