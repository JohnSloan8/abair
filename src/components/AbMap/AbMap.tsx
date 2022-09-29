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
  synthesisMapFilter: string;
  handleMouseEnter: (name: string) => void;
  handleMouseLeave: () => void;
  handleClick: (name: string) => void;
}

const AbMap = ({
  irelandMapData,
  gaeltachts,
  hoveringCounty,
  selectedCounty,
  synthesisMapFilter,
  handleMouseEnter,
  handleMouseLeave,
  handleClick,
}: AbMapProps) => {
  return (
    <Box m={{ xs: 4, sm: 1 }} my={{ xs: 0 }}>
      <svg viewBox="-100 0 800 800">
        <g onMouseLeave={() => handleMouseLeave()}>
          {irelandMapData.map((c, i) => (
            <g
              key={i}
              fill={
                gaeltachts.includes(c.name)
                  ? c.name === hoveringCounty
                    ? blue[900]
                    : c.name === selectedCounty
                    ? blue[800]
                    : synthesisMapFilter === c.name
                    ? blue[700]
                    : blue[400]
                  : green[400]
              }
              stroke={!gaeltachts.includes(c.name) ? green[400] : blue[400]}
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
