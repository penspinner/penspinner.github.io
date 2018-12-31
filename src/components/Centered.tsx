import React from 'react';

interface ICenteredProps {
  children: React.ReactNode;
  heightOffset?: number;
  widthOffset?: number;
}

const Centered = ({ children, heightOffset, widthOffset, ...props }: ICenteredProps) => {
  const ref = React.createRef<HTMLDivElement>();
  const [height, setHeight] = React.useState(0);
  const [width, setWidth] = React.useState(0);

  React.useEffect(
    () => {
      if (ref.current) {
        const { height, width } = ref.current.getBoundingClientRect();
        setHeight(height);
        setWidth(width);
      }
    },
    [width],
  );

  return (
    <div
      {...props}
      ref={ref}
      style={{
        position: 'absolute',
        top: `calc(50% - ${height / 2}px - ${heightOffset}px)`,
        left: `calc(50% - ${width / 2}px - ${widthOffset}px)`,
      }}
    >
      {children}
    </div>
  );
};

Centered.defaultProps = {
  heightOffset: 0,
  widthOffset: 0,
};

export default Centered;
