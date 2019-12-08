import React from 'react'
import useStyles from './styles'
import Customers from '../../schema'
import gql from 'graphql-tag';
import {useQuery} from '@apollo/react-hooks';

const new_query = gql`
    query {
        customers {
        name
        }
    }
`

const CustomerSidebar = () => {
    const classes = useStyles()
    const customers = Customers()
    const get_customers = useQuery(new_query);
    console.log(get_customers)
    return (
        get_customers.data ? <div>
            <div className={classes.profilePicDiv}>
                <img alt="profile-pic" className={classes.profilePic} src="https://scontent.fluh2-1.fna.fbcdn.net/v/t1.0-9/75237562_10221134466853565_5397497156208689152_n.jpg?_nc_cat=101&_nc_oc=AQm2qR6ggZn05BEjWY-BWRUt71bDF_ipAlYSIZ9QOKB-tVCpFJsDsznfbNZNSAKtI4oM6bfIgMG_BPdsTAi1Ldy_&_nc_ht=scontent.fluh2-1.fna&oh=b261a739c9ca4d650ce9d4f15108db46&oe=5E1E549B" />
            </div>
            <h2 className={classes.customerName}>{get_customers.data.customers[1].name}</h2>
            <div className={classes.customerType}>Supreme</div>
        </div> : null
    )
}

export default CustomerSidebar