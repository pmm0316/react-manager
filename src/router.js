/*
 * @Author: your name
 * @Date: 2020-11-21 09:39:33
 * @LastEditTime: 2020-11-21 10:20:45
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \react-manager\src\router.js
 */
/**
 * CREATED DATE: 2018/10/8 20:17:42
 * author: Absent Min
 */
import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import App from './App.js'
import Login from './pages/login'
import Admin from './admin'
import Buttons from './pages/ui/buttons'
import NoMatch from './pages/nomatch'
import Modals from './pages/ui/modals'
import Loadings from './pages/ui/loadings'
import Notice from './pages/ui/notice'
import Messages from './pages/ui/messages'
import Tab from './pages/ui/tabs'
import Gallery from './pages/ui/gallery'
import Carousel from './pages/ui/carousel'
import FormLogin from './pages/form/login'
import FormRegister from './pages/form/register'
import BasicTable from './pages/table/basicTable'
import HighTable from './pages/table/highTable'
import Order from './pages/order'
import Common from "./common"
import OrderDetail from './pages/order/detail'
import ModelConfig from './pages/supos/modelConfig'

export default class IRouter extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <App>
          <Route path="/login" component={Login}/>
          <Route path="/supos/modelConfig" component={ModelConfig}/>
          <Route path="/admin" render={()=>
            <Admin>
              <Switch>
                <Route path="/admin/ui/buttons" component={Buttons}/>
                <Route path="/admin/ui/modals" component={Modals}/>
                <Route path="/admin/ui/loadings" component={Loadings}/>
                <Route path="/admin/ui/notification" component={Notice}/>
                <Route path="/admin/ui/messages" component={Messages}/>
                <Route path="/admin/ui/tabs" component={Tab}/>
                <Route path="/admin/ui/gallery" component={Gallery}/>
                <Route path="/admin/ui/carousel" component={Carousel}/>
                <Route path="/admin/form/login" component={FormLogin}/>
                <Route path="/admin/form/reg" component={FormRegister}/>
                <Route path="/admin/table/basic" component={BasicTable}/>
                <Route path="/admin/table/high" component={HighTable}/>
                <Route path="/admin/order" component={Order}/>
                <Route component={NoMatch}/>
              </Switch>
            </Admin>
          }/>
          <Route path="/common" render={() => {
            return (
              <Common>
                <Route path="/common/order/detail/:orderId" component={OrderDetail}/>
              </Common>
            )
          }}/>

        </App>
      </BrowserRouter>
    )
  }
}