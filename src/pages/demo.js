import React, { useState, useCallback } from 'react';

import { Form } from '../components/form';

const Home = () => {

    const [selectedClient, setSelectClient] = useState('');
    const [selectedButler, setSelectButler] = useState('');
    const [selectedHours, setSelectHours] = useState(0);
    const [assigned, setAssigned] = useState(false);
    const [assignedButler, setAssignedButler] = useState([
        { client: 'Joe', butler: 'bot1', hours: 1 }
    ]);

    const exampleRequests = [
        {
            clientId: 1,
            requestId: 'abc',
            hours: 6
        },
        {
            clientId: 2,
            requestId: 'ghi',
            hours: 1
        },
        {
            clientId: 1,
            requestId: 'def',
            hours: 4
        },
        {
            clientId: 1,
            requestId: 'zzz',
            hours: 2
        }
    ]

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


    const allocateAndReport = (requests) => {
        // Code here
    }
    const onClientSelect = (val) => {

        if(val && val.clientId ) return setSelectClient(val.ClientName);
    

        if(val && val.butlerId){
            console.log(selectedHours)
            butlers.map(butler => {
                let but = '';
                butler.butlerId === val.butlerId && (but = butler);
                console.log(but);
            })
            return setSelectButler(val.butlerName);
        }

        if(val && val.value) return setSelectHours(val.value)


    }

    const assignButler = async (event) => {
        console.log(selectedClient,selectedButler)
        event.preventDefault();

        var holder = {};

        await assignedButler.forEach(function (d) {

            if (holder.hasOwnProperty(d.butler)) {
                holder[d.butler] = holder[d.butler] + d.hours;
                console.log('holder[d.butler]', holder[d.butler])
            } 
            else {
                holder[d.butler] = d.hours;
            }

        });

        var obj2 = [];

        for (var prop in holder) {
            obj2.push({ butler: prop, hours: holder[prop] });

        } 

        console.log(obj2)
        let index = await obj2.findIndex((assign) => assign.butler === selectedButler && assign.hours > 8);
        console.log(index)
        if (index < 0) {
            setAssigned(true);
            setAssignedButler(oldValue => [...oldValue, { client: selectedClient, butler: selectedButler, hours: selectedHours }])
            console.log(assignedButler)
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
            assignButler={assignButler}
        />

        {assignedButler && <table className="table table-striped">
            <thead>
                <tr>
                    <th>Butler Name</th>
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