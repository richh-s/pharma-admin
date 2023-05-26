import {useQuery, gql} from '@apollo/client';

export const GET_ORDERS = gql`
query GET_ORDERS {
  orders(order_by: {created_at: asc}, where: {pharmacy_id: {_eq: 10}}) {
    created_at
    id
    distance
    user {
      full_name
    }
    prescription_paper_image {
      url
    }
  }
}`;

  