/* eslint-disable @typescript-eslint/no-explicit-any */

/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import informationSheet from './informationSheet.json';

interface InformationSheetProps {
  height?: number;
  group: 'over 16' | 'under 16' | 'parent';
  title: string;
  description?: string;
}

const InformationSheet = ({
  height = 340,
  group = 'over 16',
  title,
  description,
}: InformationSheetProps) => {
  useEffect(() => {
    console.log('informationSheet:', informationSheet['over 16']);
  }, []);
  return (
    <Box>
      <Typography mb={2} variant="h6" align="center">
        {title}
      </Typography>
      <Typography mb={2} variant="body2" align="center">
        {description}
      </Typography>
      <Card
        sx={{ width: '100%', height: { height }, backgroundColor: 'white', overflowY: 'scroll' }}
      >
        <CardContent sx={{ padding: 4 }}>
          {informationSheet[group].map((section, i) => (
            <Box key={i} py={1}>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                {section.title}
              </Typography>
              <Typography>{section.content}</Typography>
            </Box>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
};

export default InformationSheet;
