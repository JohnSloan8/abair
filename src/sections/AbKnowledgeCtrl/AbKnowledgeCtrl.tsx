import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';

import AbPublication from '@/components/AbPublication';
import { publicationModel } from '@/models/publication';
import { getPublications } from '@/services/supabase/publications';
import { usePublications } from '@/store/publications';

const AbKnowledgeCtrl = () => {
  const [loading, setLoading] = useState(false);
  const { publications, setPublications } = usePublications();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getPublications().then((res: any) => {
      setPublications(res);
      setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDownload = (filepath: string) => {
    // using Java Script method to get PDF file
    fetch(filepath).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        const alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'SamplePDF.pdf';
        alink.click();
      });
    });
  };

  return loading ? (
    <p>loading...</p>
  ) : (
    <Box>
      {publications.map((p: publicationModel, i: number) => (
        <AbPublication
          key={i}
          title={p.title}
          year_published={p.year_published}
          abstract={p.abstract}
          authors={p.authors}
          handleDownload={() => {
            handleDownload(p.pdf_url);
          }}
        />
      ))}
    </Box>
  );
};

export default AbKnowledgeCtrl;
