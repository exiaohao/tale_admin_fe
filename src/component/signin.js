import React, { Component } from 'react';
import { redirect } from 'utils/url'

class Signin extends Component{
    state = {
        username: '',
        password: ''
    }

    componentDidMount(){
    }

    signin = () => {
        const {
            username,
            password
        } = this.state

        if (!username || !password) {
            return '请输入用户名和密码'
        }

        signin(username, password)
            .then(() => redirect('customers'))
    }

    render(){
        return (
            <o-signin>
                <header>
                    LOGIN
                </header>
                <main>
                    <p>用户名</p>
                    <Input onChange={v => this.setState({username: v})} />
                    <p>密码</p>
                    <Input type='password' onChange={v => this.setState({
            password: v
          })} />
                </main>
                <footer>
                    <button onClick={this.signin}>登录</button>
                </footer>
            </o-signin>
        )
    }
}

export default Signin