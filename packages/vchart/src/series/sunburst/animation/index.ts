import { Factory } from '../../../core/factory';
import { sunburstEnter } from './enter';
import { sunburstExit } from './exit';
import type { ISunburstAnimationParams, SunburstAppearPreset } from './interface';
import { sunburstPresetAnimation } from './preset';

export * from './preset';
export * from './enter';
export * from './exit';
export * from './preset';
export * from './interface';

export const registerSunburstAnimation = () => {
  Factory.registerAnimation('sunburst', (params: ISunburstAnimationParams, preset: SunburstAppearPreset) => ({
    appear: sunburstPresetAnimation(params, preset),
    enter: sunburstEnter(params),
    exit: sunburstExit(params),
    disappear: sunburstExit(params)
  }));
};
