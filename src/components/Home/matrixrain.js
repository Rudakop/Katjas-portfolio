import React, { useEffect, useRef, useState } from 'react';
import useInterval from '@use-it/interval';
import './matrixrain.scss';

// Constants
const VALID_CHARS = `KatjaKozliakovaFrontendDeveloper0123456789$+-*/=%"'#&_(),.;:?!\\|{}<>[]^~`;
const STREAM_MUTATION_ODDS = 0.02;
const MIN_STREAM_SIZE = 15;
const MAX_STREAM_SIZE = 50;
const MIN_INTERVAL_DELAY = 50;
const MAX_INTERVAL_DELAY = 100;
const MIN_DELAY_BETWEEN_STREAMS = 0;
const MAX_DELAY_BETWEEN_STREAMS = 8000;
const CHAR_HEIGHT = 44;

const getRandInRange = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const getRandChar = () => VALID_CHARS.charAt(Math.floor(Math.random() * VALID_CHARS.length));

const getRandStream = () =>
  new Array(getRandInRange(MIN_STREAM_SIZE, MAX_STREAM_SIZE))
    .fill()
    .map(_ => getRandChar());

const getMutatedStream = stream =>
  stream.map(char => (Math.random() < STREAM_MUTATION_ODDS ? getRandChar() : char));

const getDynamicStyles = topPadding => ({
  fontFamily: 'matrixFont',
  color: '#14C38E',
  writingMode: 'vertical-rl',
  textOrientation: 'upright',
  userSelect: 'none',
  whiteSpace: 'nowrap',
  marginTop: topPadding,
  marginLeft: -15,
  marginRight: -15,
  textShadow: '0px 0px 8px rgba(32, 194, 14, 0.8)',
  fontSize: 33,
});

const RainStream = ({ height }) => {
  const [stream, setStream] = useState(getRandStream());
  const [topPadding, setTopPadding] = useState(stream.length * -CHAR_HEIGHT);
  const [intervalDelay, setIntervalDelay] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setIntervalDelay(getRandInRange(MIN_INTERVAL_DELAY, MAX_INTERVAL_DELAY));
    }, getRandInRange(MIN_DELAY_BETWEEN_STREAMS, MAX_DELAY_BETWEEN_STREAMS));
  }, []);

  useInterval(() => {
    if (!height || !intervalDelay) return;

    if (topPadding > height) {
      setStream(prevStream => {
        const newStream = getRandStream();
        setTopPadding(newStream.length * -CHAR_HEIGHT);
        setIntervalDelay(null);
        setTimeout(() => setIntervalDelay(getRandInRange(MIN_INTERVAL_DELAY, MAX_INTERVAL_DELAY)),
          getRandInRange(MIN_DELAY_BETWEEN_STREAMS, MAX_DELAY_BETWEEN_STREAMS));
        return newStream;
      });
    } else {
      setTopPadding(prevTopPadding => prevTopPadding + CHAR_HEIGHT);
    }
    setStream(prevStream => getMutatedStream(prevStream));
  }, intervalDelay);

  return (
    <div className='matrix-stream' style={getDynamicStyles(topPadding)}>
      {stream.map((char, index) => (
        <span
          key={index}
          style={{
            marginTop: -12,
            opacity: index < 6 ? 0.1 + index * 0.15 : 1,
            color: index === stream.length - 1 ? '#fff' : undefined,
            textShadow: index === stream.length - 1 ? '0px 0px 20px rgba(255, 255, 255, 1)' : undefined,
          }}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

const MatrixRain = () => {
  const containerRef = useRef(null);
  const [containerSize, setContainerSize] = useState(null);

  useEffect(() => {
    const boundingClientRect = containerRef.current.getBoundingClientRect();
    setContainerSize({
      width: boundingClientRect.width,
      height: boundingClientRect.height,
    });
  }, []);

  const streamCount = containerSize ? Math.floor(containerSize.width / 26) : 0;

  return (
    <div className='matrix-container' ref={containerRef}>
      {new Array(streamCount).fill().map((_, index) => (
        <RainStream key={index} height={containerSize?.height} />
      ))}
    </div>
  );
};

export default MatrixRain;