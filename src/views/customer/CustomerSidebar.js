import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import useStyles from './styles';

const newQuery = gql`
    query {
        customers {
        name
        }
    }
`;

const CustomerSidebar = () => {
    const classes = useStyles();
    const getCustomers = useQuery(newQuery);

    return (
        getCustomers.data ? (
            <div>
                <div className={classes.profilePicDiv}>
                    <img alt="profile-pic" className={classes.profilePic} src="https://scontent.fluh2-1.fna.fbcdn.net/v/t1.0-9/75237562_10221134466853565_5397497156208689152_n.jpg?_nc_cat=101&_nc_oc=AQm2qR6ggZn05BEjWY-BWRUt71bDF_ipAlYSIZ9QOKB-tVCpFJsDsznfbNZNSAKtI4oM6bfIgMG_BPdsTAi1Ldy_&_nc_ht=scontent.fluh2-1.fna&oh=b261a739c9ca4d650ce9d4f15108db46&oe=5E1E549B" />
                </div>
                <h2 className={classes.customerName}>{getCustomers.data.customers[1].name}</h2>
                <div className={classes.customerType}>Supreme</div>
            </div>
        ) : null
    );
};

export default CustomerSidebar;
