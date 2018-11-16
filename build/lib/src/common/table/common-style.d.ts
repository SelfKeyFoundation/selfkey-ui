declare const CommonStyle: {
    fontFamily: string;
    header: {
        height: string;
        backgroundColor: string;
        boxShadow: string;
        '&& th': {
            border: string;
            color: string;
            fontFamily: string;
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
            textTransform: string;
        };
    };
    body: {
        '&& tr > td': {
            color: string;
            border: string;
            fontFamily: string;
            fontSize: string;
            lineHeight: string;
        };
        '&& tr:nth-child(odd)': {
            backgroundColor: string;
        };
        '&& tr:nth-child(even)': {
            backgroundColor: string;
        };
    };
};
export default CommonStyle;
