import React, { useState } from 'react';
import useStyles from './styles';
import commonStyles from '../../commonStyle';

const initialState = {
    name: '',
    address: '',
    phone_number: '',
};

const CreateCustomer = ({ setExisiting }) => {
    const [field, setField] = useState(initialState);
    const classes = useStyles();
    const commonClasses = commonStyles();

    return (
        <div>
            <div className={classes.buttonWrapper}>
                <button onClick={() => setExisiting(true)} className={classes.button}>
                    <span className={`${commonClasses.arrow} ${commonClasses.up}`} />
                    <h3 className={classes.buttonText}>Exisiting Customer</h3>
                </button>
            </div>
            <div>
                <form>
                    <label className={commonClasses.inputField}>
            Name:
                        <input
                            type="text"
                            className={commonClasses.textInput}
                            value={field.name}
                            onChange={(e) => setField({ ...field, name: e.target.value })}
                        />
                    </label>
                    <label className={commonClasses.inputField}>
            Address:
                        <input
                            type="text"
                            className={commonClasses.textInput}
                            value={field.address}
                            onChange={(e) => setField({ ...field, address: e.target.value })}
                        />
                    </label>
                    <label className={commonClasses.inputField}>
            Phone Number:
                        <input
                            type="text"
                            className={commonClasses.textInput}
                            value={field.phone_number}
                            onChange={(e) => setField({ ...field, phone_number: e.target.value })}
                        />
                    </label>
                </form>
            </div>
        </div>
    );
};

export default CreateCustomer;
