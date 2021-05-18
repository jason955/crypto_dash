import React from 'react';

/**
* Rotate right
* rotation - degrees rotated right (can override defaults)
* timing - how fast it does the effect
*/
export const RotateRight = ({ rotation = 20, timing = 200, children }) => {
  const [isBooped, setIsBooped] = React.useState(false);
  const style = {
    display: 'inline-block',
    backfaceVisibility: 'hidden',
    transform: isBooped
      ? `rotate(${rotation}deg)`
      : `rotate(0deg)`,
    transition: `transform ${timing}ms`,
    color:'black',
  };
  React.useEffect(() => {
    if (!isBooped) {
      return;
    }
    const timeoutId = window.setTimeout(() => {
      setIsBooped(false);
    }, timing);
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isBooped, timing]);
  const trigger = () => {
    setIsBooped(true);
  };
  return (
    <span onMouseEnter={trigger} style={style}>
      {children}
    </span>
  );
};


/**
* Rotate right
* opacity - 0 - 100
* timing - how fast it does the effect
*/
export const FadeInOut = ({ opacity = 100, timing = 500, children }) => {
  const [isBooped, setIsBooped] = React.useState(false);
  const style = {
    display: 'inline-block',
    backfaceVisibility: 'hidden',
    opacity: isBooped
      ? `${opacity/100}`
      : `.5`,
    transition: `transform ${timing}ms`,
    color:'black',
  };
  React.useEffect(() => {
    if (!isBooped) {
      return;
    }
    const timeoutId = window.setTimeout(() => {
      setIsBooped(false);
    }, timing);
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isBooped, timing]);
  const trigger = () => {
    setIsBooped(true);
  };
  return (
    <span onMouseEnter={trigger} style={style}>
      {children}
    </span>
  );
};
