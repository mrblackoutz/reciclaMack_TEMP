import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Grid from '@mui/material/Grid';
import CustomTypography from '../../components/CustomTypography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const faqs = [
  {
    question: 'Como posso reciclar corretamente?',
    answer:
      'Para reciclar corretamente, você deve separar os recicláveis pelo tipo de material e limpar antes de descartar.',
  },
  {
    question: 'Onde estão localizados os pontos de coleta?',
    answer:
      'Os pontos de coleta estão espalhados por toda a cidade. Visite nosso site para encontrar o ponto mais próximo de você.',
  },
  // Outras perguntas e respostas...
];

const FAQ = () => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded((prevExpanded) => ({
        ...prevExpanded,
        [panel]: isExpanded,
      }));
    };

  return (
    <Grid
      container
      sx={{
        color: 'black',
        bgcolor: '#f7f7f7',
        px: { xs: 2, sm: 4, md: 6 },
        py: { xs: 6, md: 3 },
        height: { xs: 'auto' },
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Grid item xs={12} sx={{ mb: 2 }}>
        <CustomTypography variant="h4" fontWeight="bold">
          FAQ
        </CustomTypography>
      </Grid>
      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          expanded={expanded[`panel${index}`] || false}
          onChange={handleChange(`panel${index}`)}
          sx={{
            bgcolor: 'white',
            boxShadow: expanded[`panel${index}`]
              ? '0px 2px 2px rgba(0, 0, 0, 0.1)'
              : 'none',
            borderRadius: '10px',
            mb: 2,
            p: 1,
            width: '100%',
            '&:before': {
              display: 'none',
            },
            '&:hover': !expanded[`panel${index}`]
              ? {
                  boxShadow: '0px 8px 8px rgba(0, 0, 0, 0.15)',
                  transform: 'translateY(-2px)',
                  transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                }
              : {},
            '&.Mui-expanded': {
              boxShadow: '0px 8px 8px rgba(0, 0, 0, 0.15)',
              transform: 'translateY(-2px)',
              transition: 'box-shadow 0.3s ease, transform 0.3s ease',
            },
          }}
        >
          <AccordionSummary
            expandIcon={
              expanded[`panel${index}`] ? <RemoveIcon /> : <AddIcon />
            }
            aria-controls={`panel${index}bh-content`}
            id={`panel${index}bh-header`}
          >
            <CustomTypography>{faq.question}</CustomTypography>
          </AccordionSummary>
          <AccordionDetails>
            <CustomTypography>{faq.answer}</CustomTypography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Grid>
  );
};

export default FAQ;
