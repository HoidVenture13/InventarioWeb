import { InjectionToken } from '@angular/core';

export interface AppConfig {
  apiBaseUrl: string;
}

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export const provideAppConfig = () => ({
  provide: APP_CONFIG,
  useValue: {
    apiBaseUrl: 'http://localhost:8080',
  } satisfies AppConfig,
});
