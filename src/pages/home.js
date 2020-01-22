import React, { useState } from 'react';

import { Form } from '../components/form';

const Home = () => {

    const [selectedClient, setSelectClient] = useState('');
    const [selectedButler, setSelectButler] = useState('');
    const [selectedHours, setSelectHours] = useState(0);
    const [assignedButler, setAssignedButler] = useState([{ client: 'Joe', butler: 'bot1', hours: 1 }]);

    const clients = [
        { clientId: '1', ClientName: 'Joe' },
        { clientId: '2', ClientName: 'James' },
        { clientId: '3', ClientName: 'Krish' },
        { clientId: '4', ClientName: 'Ruby' },
        { clientId: '5', ClientName: 'Jewns' },
        { clientId: '6', ClientName: 'Martin' },
        { clientId: '7', ClientName: 'Bob' },
        { clientId: '8', ClientName: 'Arthur' },
    ];

    const butlers = [
        { butlerId: '1', butlerName: 'bot1' },
        { butlerId: '2', butlerName: 'bot2' },
        { butlerId: '3', butlerName: 'bot3' },
        { butlerId: '4', butlerName: 'bot4' },
        { butlerId: '5', butlerName: 'bot5' },
        { butlerId: '6', butlerName: 'bot6' },
        { butlerId: '7', butlerName: 'bot7' },
        { butlerId: '8', butlerName: 'bot8' },
    ];

    const hours = [
        { value: 1, label: 1 },
        { value: 2, label: 2 },
        { value: 3, label: 3 },
        { value: 4, label: 4 },
        { value: 5, label: 5 },
        { value: 6, label: 6 },
        { value: 7, label: 7 },
        { value: 8, label: 8 },
    ]

    const onClientSelect = (val) => {

        if (val)
            return val.clientId ? setSelectClient(val.ClientName) :
                val.butlerId ? setSelectButler(val.butlerName) :
                    val.value ? setSelectHours(val.value) : ''
    }

    const allocateAndReport = async (event) => {
        event.preventDefault();

        var holder = {};
        let newButlers = [...assignedButler, { client: selectedClient, butler: selectedButler, hours: selectedHours }];
        await newButlers.forEach((butler) => {

            if (holder.hasOwnProperty(butler.butler)) {
                holder[butler.butler] = holder[butler.butler] + butler.hours;
            }
            else {
                holder[butler.butler] = butler.hours;
            }
        });

        var totalAddedHoursOfButlers = [];

        for (var butler in holder) {
            totalAddedHoursOfButlers.push({ butler: butler, hours: holder[butler] });
        }

        let index = await totalAddedHoursOfButlers.findIndex((assign) => assign.butler === selectedButler && assign.hours > 8);

        if (index < 0) {
            setAssignedButler(oldVal => [...oldVal, { client: selectedClient, butler: selectedButler, hours: selectedHours }])
        }
        else {
            alert('can not assign to a butler more than 8 hours.')
        }
    }

    const RenderAssignButlers = () => (
        assignedButler.map((butler, i) => {
            return (
                <tr key={butler.client + i}>
                    <td>{butler.client}</td>
                    <td>{butler.butler}</td>
                    <td>{butler.hours}</td>
                </tr>)
        })
    )


    return (<>
        <Form
            onClientSelect={onClientSelect}
            selectedButler={selectedButler}
            selectedClient={selectedClient}
            selectedHours={selectedHours}
            clients={clients}
            hours={hours}
            butlers={butlers}
            allocateAndReport={allocateAndReport}
        />

        {assignedButler && <table className="table table-striped">
            <thead>
                <tr>
                    <th>Client Name</th>
                    <th>Assigned To</th>
                    <th>Working Hours</th>
                </tr>
            </thead>
            <tbody>
                <RenderAssignButlers />
            </tbody>
        </table>
        }
    </>)
}


export default Home;