declare module 'react-jss' {
    interface IStyleSheet {
        [className: string]: {
            [attribute: string]: string | number
        }
    }

    function injectSheet(styles: IStyleSheet): Function;

    export = injectSheet;
}