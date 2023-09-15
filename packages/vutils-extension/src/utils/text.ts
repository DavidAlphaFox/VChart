import type { ITextMeasureOption } from '@visactor/vutils';
// eslint-disable-next-line no-duplicate-imports
import { TextMeasure } from '@visactor/vutils';
import { ITextGraphicAttribute } from '@visactor/vrender';
import { getTextBounds } from '@visactor/vrender';

export const initTextMeasure = (
  textSpec?: Partial<ITextGraphicAttribute>,
  option?: Partial<ITextMeasureOption>,
  useNaiveCanvas?: boolean,
  defaultFontParams?: Partial<ITextGraphicAttribute>
): TextMeasure<ITextGraphicAttribute> => {
  return new TextMeasure<ITextGraphicAttribute>(
    {
      defaultFontParams: {
        fontFamily:
          // eslint-disable-next-line max-len
          'PingFang SC,Helvetica Neue,Microsoft Yahei,system-ui,-apple-system,segoe ui,Roboto,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol',
        fontSize: 14,
        ...defaultFontParams
      },
      getTextBounds: useNaiveCanvas ? undefined : getTextBounds,
      specialCharSet: '-/: .,@%\'"~' + TextMeasure.ALPHABET_CHAR_SET + TextMeasure.ALPHABET_CHAR_SET.toUpperCase(),
      ...(option ?? {})
    },
    textSpec
  );
};
