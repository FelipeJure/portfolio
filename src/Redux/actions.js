export const LANGUAGE = 'LANGUAGE';
export const COLOR = 'COLOR'

export function changeLanguage (lang) {
    return {
        type: LANGUAGE,
        payload: lang
    }
}

export function changeColor (color) {
    return {
        type: COLOR,
        payload: color
    }
}