export class AccessibilityConstants {

    static readonly OPTIONS = {
        KEYBOARD_NAVIGATION: {
            label: 'keyboard Keyboard Navigation'

        },
        DISABLE_ANIMATIONS: {
            label: 'visibility_off Disable'
        },
        CONTRAST: {
            label: 'nights_stay Contrast'
        },
        INCREASE_TEXT: {
            label: 'format_size Increase Text'
        },
        DECREASE_TEXT: {
            label: 'text_fields Decrease Text'
        },
        READABLE_FONT: {
            label: 'font_download Readable Font'
        },
        MARK_TITLES: {
            label: 'title Mark Titles'
        },
        HIGHLIGHT: {
            label: 'link Highlight Links & Buttons',
            className: 'acwp-underline'
        }
    } as const;
}