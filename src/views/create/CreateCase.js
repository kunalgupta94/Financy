import React, { useState, useRef } from 'react';
import gql from 'graphql-tag';
import useStyles from './styles';
import commonStyles from '../../commonStyle';
import Autocomplete from './Autocomplete';

const query = (value) => gql`
query {
  customer(name: "${value}") {
    id
    name
    cases {
      id
      amount
      createdOn
      fileCharges
      interest
      status
    }
    type
    phoneNumber
    address
    documentSubmitted
  }
}
`;

const CreateCase = ({ setExisiting }) => {
    const classes = useStyles();
    const commonClasses = commonStyles();
    const [customerData, setCustomerData] = useState({});
    const name = useRef();
    const address = useRef();
    const documentSubmitted = useRef();
    const phoneNumber = useRef();

    const optionClickHandler = (data) => {
        setCustomerData(data);
        name.current.value = data.name;
        address.current.value = data.address;
        documentSubmitted.current.checked = data.documentSubmitted;
        phoneNumber.current.value = data.phoneNumber;
    };

    console.log(customerData);
    return (
        <div>
            <Autocomplete query={query} onClick={optionClickHandler} data={customerData} />
            {customerData ? (
                <div>
                    <div className={classes.customerDetails}>
                  Name:
                        <input className={commonClasses.textInput} type="text" disabled ref={name} />
                    </div>
                    <div className={classes.customerDetails}>
                  Address:
                        <input className={commonClasses.textInput} disabled ref={address} />
                    </div>
                    <div className={classes.customerDetails}>
                  Document Submitted:
                        <input type="checkbox" disabled ref={documentSubmitted} />
                    </div>
                    <div className={classes.customerDetails}>
                  Phone Number:
                        <input className={commonClasses.textInput} type="text" disabled ref={phoneNumber} />
                    </div>
                    {customerData.cases ? (
                        <table>
                            <tr>
                                <th>Id</th>
                                <th>Amount1</th>
                                <th>Created</th>
                            </tr>
                            {customerData.cases.map((caseData) => (
                                <tr>
                                    <td>{caseData.id}</td>
                                    <td>{caseData.amount}</td>
                                    <td>{caseData.createdOn}</td>
                                </tr>
                            ))}
                        </table>
                    ) : null }
                </div>
            ) : null}
            <div className={classes.buttonWrapper}>
                <button type="button" onClick={() => setExisiting(false)} className={classes.button}>
                    <h3 className={classes.buttonText}>New Customer</h3>
                    <span
                        className={`${commonClasses.arrow} ${commonClasses.down}`}
                    />
                </button>
            </div>
        </div>
    );
};

export default CreateCase;
