import * as React from 'react';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>((props, ref) => (
  <label ref={ref} className="text-sm font-medium" {...props} />
));

Label.displayName = 'Label';

export default Label;
