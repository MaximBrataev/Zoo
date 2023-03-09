const React = require('react');
const ReactDOM = require('react-dom/server');

const colors = ['', '', ''];
const delay = 3500;

function utomatica() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),

      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return React.createElement(
    'div',
    { className: 'utomatica' },
    React.createElement(
      'div',
      {
        className: 'utomaticaSlider',
        style: { transform: `translate3d(${-index * 100}%, 0, 0)` },
      },

      colors.map((backgroundColor, index) =>
        React.createElement('div', {
          className: 'sliderauto',
          key: index,
          style: { backgroundColor },
        })
      )
    ),

    React.createElement(
      'div',
      { className: 'kutomhouga' },
      colors.map((_, idx /*#__PURE__*/) => {
        React.createElement('div', {
          key: idx,
          className: `utomaticaDot${index === idx ? ' active' : ''}`,
          onClick: () => {
            setIndex(idx);
          },
        });
      })
    )
  );
}

ReactDOM.renderToStaticMarkup(
  React.createElement(utomatica, null),
  document.getElementById('avtomak_slaydera')
);
