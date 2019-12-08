import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks'


const GET_CUSTOMERS = gql`
{
    customers {
        id
        name
    }
}
`

function Customers() {
    const {loading, error, data} = useQuery(GET_CUSTOMERS)

    if(loading) return 'loading...'
    if(error) return `${error.message}`

    return (
        data
    )
}

export default Customers