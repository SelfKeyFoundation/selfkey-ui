declare module 'react-number-format' {
    class NumberFormat extends React.Component<NumberFormatProps, any> {
      
    }
  
    interface NumberFormatProps extends React.HTMLAttributes<HTMLInputElement> {
      thousandSeparator?: boolean | ',' | '.' | ' '
      decimalSeparator?: boolean | ',' | '.'
      displayType?: 'input' | 'text'
      prefix?: string
      format?: string | Function
      mask?: string
      value?: number | string
    }
  
    export default NumberFormat;
  }