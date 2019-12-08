import React, { useState } from 'react'
import commonStyle from '../../commonStyle';

const initialState = {
    name: '',
    address: '',
    phone_number: '',
};


const Customer = () => {
    const [field, setField] = useState(initialState)
    const classes = commonStyle();
    return (
        <div>
            <form>
                <label className={classes.inputField}>
                    Name: 
                    <input type="text" className={classes.textInput} value={field.name} onChange={(e) => setField({...field, name: e.target.value})} />
                </label>
                <label className={classes.inputField}>
                    Address: 
                    <input type="text" className={classes.textInput} value={field.address} onChange={(e) => setField({...field, address: e.target.value})} />
                </label>
                <label className={classes.inputField}>
                    Phone Number: 
                    <input type="text" className={classes.textInput} value={field.phone_number} onChange={(e) => setField({...field, phone_number: e.target.value})} />
                </label>
            </form>
        </div>
    )
}

export default Customer;