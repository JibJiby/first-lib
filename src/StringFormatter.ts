/**
 * 설명:
 * 문자 포멧팅 기능 제공.
 *
 *
 */

export class StringFormatter {
    /**
     * 숫자에 1000 단위씩 구분자 추가해서 문자열로 출력
     */
    public NumberWithDelimiter(
        value: number | string,
        delimiter = ',',
    ): string {
        let stringValue = '';
        let fraction = '';
        if (typeof value === 'number') {
            stringValue = value.toString();
        }
        if (typeof value === 'string') {
            stringValue = value;
        }
        if (stringValue.indexOf('.') >= 0) {
            const splittedValue = stringValue.split('.');

            if (splittedValue.length > 1) {
                stringValue = splittedValue[0];
                fraction = splittedValue[1];
            }
        }

        stringValue = stringValue.replace(/\B(?=(\d{3})+(?!\d))/g, delimiter);

        return `${stringValue}${fraction ? `.${fraction}` : ''}`;
    }
}
