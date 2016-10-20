import { hashHistory as history } from 'react-router'

export const redirect = (pathname, query = {}) => {
    const qs = Object.keys(query).map(key => key + '=' + query[key]).join('&')

    history.push({
        search: qs ? '?' + qs : '',
        pathname
    })
}
