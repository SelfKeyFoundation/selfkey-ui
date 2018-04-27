export type StyleSheet = {
    [className: string]: {
        [attribute: string]: string | number
    }
}

export interface StyledComponentProps {
    classes: {
        [className: string]: string
    }
}
