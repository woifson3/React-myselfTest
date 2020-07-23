// 应用的根组件
// 其他组件的聚集地，在这里集中好到index中去render输出到页面
import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom'; //路由
import Login from './routers/playSelf/login';
import Admin from './routers/login/admin';
import Accter from './routers/login/accter';
/**
 * 
    admin:投顾信息重写页面
    accter：客户概况的页面间距与字段
    login:是自己写的玩的
 */

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route path='/login' component={Login} ></Route>
                <Route path='/admin' component={Admin}></Route>
                <Route path='/accter' component={Accter}></Route>
            </BrowserRouter>

        )
    }
}

export default App;