
import Fetch from 'fetch.io'

export const request = new Fetch({
    prefix: '/api/v1',

    beforeRequest(url, body) {
        //
    },
    afterResponse() {
        // loading('sub')
    },
    afterJSON(json) {
        if (json.msg === 'login first') {
            return 'login required'
        }
        // if (json.status !== 0) {
        //     // 某些 API 如 检测客户 等, 成功也会返回 status: 1, msg: xxx
        //     warn(json.desc || json.msg)
        //     throwError(json.msg, json.desc)
        // }
    }
})