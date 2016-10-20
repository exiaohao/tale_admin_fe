import { request } from './base'

export function searchquery(query) {
    return request
        .post('/customer_or_lead_query')
        .send({
            query
        })
        .json()
}