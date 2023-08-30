import { useState, useEffect } from 'react';
import {  Typography, Container, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import getAllRequests from '../services/requests'
import ReactJson from 'react18-json-view'

const Requests = () => {

  const [requests, setRequests] = useState([]);
  
  useEffect(() => {
    getAllRequests().then(response => {
      
      setRequests(response)
    })
  }, [])

  return (
    <Container maxWidth="md" sx={{ padding: "40px"}}>
      {requests.map(request => {
        const type = request.requestType;
        const bin = request.path;
          return (
              <Accordion key={request.id}>
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>{type}</Typography>
                  <Typography sx={{ width: '33%', color: 'text.secondary' }}><strong>Bin: </strong>{bin}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: "#c9c5c5"}}>
                  <ReactJson src={request} />
                </AccordionDetails>
              </Accordion>
          )
      })}
      </Container>
  )
}

export default Requests