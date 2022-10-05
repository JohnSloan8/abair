import Box from '@mui/material/Box';
import { blue, green } from '@mui/material/colors';

interface mapInfoModel {
  name: string;
  coordinates: string;
}

interface AbMapProps {
  irelandMapData: mapInfoModel[];
  gaeltachts: string[];
  hoveringCounty: string;
  selectedCounty: string;
  handleMouseEnter: (name: string) => void;
  handleMouseLeave: () => void;
  handleClick: (name: string) => void;
}

const AbMap = ({
  irelandMapData,
  gaeltachts,
  hoveringCounty,
  selectedCounty,
  handleMouseEnter,
  handleMouseLeave,
  handleClick,
}: AbMapProps) => {
  const getMapColor = (c: mapInfoModel) => {
    return gaeltachts.includes(c.name)
      ? c.name === hoveringCounty
        ? [blue[900], blue[900]]
        : c.name === selectedCounty
        ? [blue[800], blue[900]]
        : [blue[200], blue[400]]
      : [green[100], green[400]];
  };

  return (
    <Box>
      <svg viewBox="-60 575 600 500">
        <g transform="scale(1.1)" onMouseLeave={() => handleMouseLeave()}>
          {irelandMapData.map((c, i) => (
            <g
              key={i}
              fill={getMapColor(c)[0]}
              stroke={getMapColor(c)[1]}
              onMouseEnter={() => handleMouseEnter(c.name)}
              onClick={() => {
                handleClick(c.name);
              }}
              style={{ cursor: 'pointer' }}
            >
              <path d={c.coordinates} strokeWidth="1" />
            </g>
          ))}
        </g>
      </svg>
    </Box>
  );
};

export default AbMap;
