import { InjectionToken } from '@angular/core';

export interface AppConfig {
  apiBaseUrl: string;
}

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export const provideAppConfig = () => ({
  provide: APP_CONFIG,
  useValue: {
    apiBaseUrl: 'https://inventarioweb-4jg5.onrender.com',
  } satisfies AppConfig,
});
