import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    searchInput: {
        width: '100%',
        fontSize: '1.2em',
        margin: '0',
        border: 'none',
        padding: '10px 10px',
        borderRadius: '2px',
        '&:focus': {
            outline: 'none',
        },
    },
    overlay: {
        display: 'block',
        position: 'absolute',
        margin: '5px 0',
        background: 'white',
        zIndex: '1',
        width: '100%',
        listStyle: 'none',
        textAlign: 'left',
        padding: '0',
        border: '1px solid rgb(180,180,180)',
        '& > li': {
            padding: '10px',
            cursor: 'pointer',
            '&:hover': {
                background: 'rgb(66, 109, 138)',
                color: 'white',
            },
        },
    },
    toggleOverlay: {
        display: 'hidden',
    },
    searchContainer: {
        position: 'relative',
        width: '100%',
        background: 'white',
    },
    searchBox: {
        display: 'flex',
        alignItems: 'center',
        '&:focus-within': {
            outline: 'none',
            border: 'none',
            boxShadow: '0 0 0px 3px rgba(82, 158, 247, 0.4)',
            borderRadius: '2px',
        },
    },
    close: {
        padding: '0px 10px',
        cursor: 'pointer',
    },
});

const Autocomplete = ({ onChange, onClick, query }) => {
    const [inputValue, setInputValue] = useState('');
    const [inputData, setData] = useState({});
    const getData = useQuery(query(inputValue));
    const classes = useStyles();

    useEffect(
        () => window.addEventListener('click', (e) => {
            if (e.target.id !== 'autocomplete' && document.getElementById('overlay')) {
                (document.getElementById('overlay').style.display = 'none');
            }
            return null;
        }),
        [],
    );

    const changeHandler = (e) => {
        if (/^[a-zA-Z0-9-_ ]*$/.test(e.target.value)) {
            setInputValue(e.target.value);
            if (e.target.value.length > 2 && getData.data.customer.length > 0) {
                setData(getData.data);
            } else {
                setData({});
            }
            return onChange ? onChange(e) : null;
        }
        return null;
    };

    const clickHandler = (e) => {
        if (document.getElementById('overlay')) {
            document.getElementById('overlay').style.display = 'block';
        }
    };

    const optionClickHandler = (customer) => {
        setInputValue(customer.name);
        return onClick ? onClick(customer) : null;
    };

    return (
        <div className={classes.searchContainer}>
            <div className={classes.searchBox} tabIndex="0" onClick={(e) => clickHandler(e)}>
                <input
                    type="text"
                    className={`${classes.searchInput}`}
                    placeholder="Search Customer"
                    id="autocomplete"
                    onChange={(e) => changeHandler(e)}
                    value={inputValue}
                    autoComplete="off"
                />
                <span onClick={() => setInputValue('')} className={classes.close}>X</span>
            </div>
            {inputData.customer ? (
                <ul id="overlay" className={classes.overlay}>
                    {inputData.customer.map((cust) => (
                        <li
                            onClick={optionClickHandler.bind(this, cust)}
                            value={cust.name}
                            key={cust.id}
                        >
                            {cust.name}
                        </li>
                    ))}
                </ul>
            ) : null}
        </div>
    );
};

Autocomplete.defaultProps = {
    onChange: null,
    onClick: null,
};

Autocomplete.propTypes = {
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    query: PropTypes.func.isRequired,
};

export default Autocomplete;
