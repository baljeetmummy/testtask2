import React from 'react';
import Select from 'react-select'

export const Form = ({ onClientSelect, selectedButler, selectedClient, selectedHours, clients, hours, butlers, allocateAndReport }) => (

    <form onSubmit={(event) => allocateAndReport(event)} className="pt-4">
        <div className="row align-items-end">
            <div className="col-md-3 col-sm-6">
                <div className="form-group">
                    <label >Select Client Name - </label>
                    <Select
                        onChange={(val) => onClientSelect(val)}
                        defaultValue={selectedClient}
                        options={clients}
                        getOptionLabel={(client) => client.ClientName}
                        getOptionValue={(client) => client.clientId}
                        className="select"
                    />
                </div>
            </div>
            <div className="col-md-3 col-sm-6">
                <div className="form-group">
                    <label >Select Butler - </label>
                    <Select
                        onChange={(val) => onClientSelect(val)}
                        defaultValue={selectedButler}
                        options={butlers}
                        getOptionLabel={(butler) => butler.butlerName}
                        getOptionValue={(butler) => butler.butlerId}
                        className="select"
                    />
                </div>
            </div>
            <div className="col-md-3 col-sm-6">
                <div className="form-group">
                    <label >Select Hours - </label>
                    <Select
                        onChange={(val) => onClientSelect(val)}
                        defaultValue={selectedHours}
                        options={hours}
                        className="select"
                    />
                </div>
            </div>
            <div className="col-md-3 col-sm-6">
                <div className="form-group">
                    <button disabled={!selectedButler || !selectedClient || !selectedHours}
                        type="submit" value="Assign" className="btn btn-primary">Assign</button>
                </div>
            </div>
        </div>






    </form>
)