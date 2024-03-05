import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import competetionss from '../api/competitions.json';
import Competition from './Competition';

function Competitions() {

    const [competitions, setCompetitions] = useState([]);

    useEffect(() => {
        setCompetitions(competetionss); 
      
        // Clear timer on component unmount
        return ;
    }, []); 

    return (
        <div>
          
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Fees</th>
                        <th>Date</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {competitions.map((competition, index) => (
                        <Competition 
                            key={competition.id}
                            id={competition.id}
                            name={competition.name}
                            fees={competition.fees}
                            date={competition.date}
                        />
                    ))}
                </tbody>
            </Table>
        </div>
    );
}
export default Competitions;
