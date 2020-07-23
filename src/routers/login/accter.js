import React, { Component, Fragment } from 'react';
import { Card, Row, Col, Tabs } from 'antd';
import styles from '../style/login.less';
// import './accter.css';
// import Jbxx from '../../components/jbxx';
class Accter extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Fragment>
                <div style={{paddingLetop: '15px'  }}>
                    <Row type="flex" justify="start"  >
                        <Col sm={24} md={2} lg={1} xl={3} xxl={3} style={{paddingLeft: '10px'  }}>
                            <div>客户状态</div> <div>1242134</div>
                        </Col>
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Col sm={24} md={24} lg={12} xl={5} xxl={5} style={{paddingLeft: '20px'  }}>
                            <div ><span className="gray" >正常</span></div>
                        </Col>
                    </Row>
                </div>
            </Fragment>
            /* <Card className="m-card myCard default ant-card-wider-padding ant-card-padding-transitionm-card" style={{ width: '80%', height: '28rem' }}>
            <Tabs
                // className="m-tabs-underline m-tabs-underline-small"
                className={styles.Accter}
                animated={false}
                style={{ borderBottom: 0 }}
                defaultActiveKey="Customerbasic"
                tabBarGutter="20px"
            >
                <Tabs.TabPane tab={<div >基本信息</div>} key="Customerbasic">
                    <div style={{ padding: '1rem' }}>
                        <div type="flex" justify="start" align="left" style={{ marginBottom: '1rem', paddingright: '.6rem' }}>
                                <span className={styles.fff}>客户状态123：</span>
                            <div  style={{paddingLeft: '.5rem'}}>
                                <div className={styles.fff}><span className="gray" >正常</span></div>



                            </div>                             
                                <div style={{ }}>会员ID：</div>                               
                            <div  style={{paddingLeft: '.5rem'}}>
                                <div className="m-overall-info"><span className="gray" >90909090909</span></div>
                            </div>
                        </div>
                        <Row type="flex" justify="start" align="middle" style={{ marginBottom: '1rem', paddingLeft: '.4rem' }}>
                            <Col sm={24} md={24} lg={12} xl={1} xxl={1}>
                                <div className="m-overall-info">客户号：</div>
                            </Col>
                            <Col sm={24} md={24} lg={12} xl={5} xxl={5} >
                                <div className="m-overall-info"><span className="gray" >0000000000</span></div>
                            </Col>
                            <Col sm={24} md={24} lg={12} xl={2} xxl={2}>
                                <div className="m-overall-info">资金账号：</div>
                            </Col>
                            <Col sm={24} md={24} lg={12} xl={5} xxl={5}>
                                <div className="m-overall-info"><span className="gray" >99999999999999</span></div>
                            </Col>
                        </Row>
                        <Row type="flex" justify="start" align="middle" style={{ marginBottom: '1rem', paddingLeft: '1rem' }}>
                            <Col sm={24} md={24} lg={12} xl={9} xxl={9}>
                                <div className="m-overall-info">合并考核营业部：</div>
                            </Col>
                            <Col sm={24} md={24} lg={12} xl={5} xxl={5} >
                                <div className="m-overall-info"><span className="gray" >8888888888</span></div>
                            </Col>
                            <Col sm={24} md={24} lg={12} xl={7} xxl={7}>
                                <div className="m-overall-info">开户营业部：</div>
                            </Col>
                            <Col sm={24} md={24} lg={12} xl={5} xxl={5}>
                                <div className="m-overall-info"><span className="gray" >7777777777777</span></div>
                            </Col>
                        </Row>
                        <Row type="flex" justify="start" align="middle" style={{ marginBottom: '1rem', paddingLeft: '1rem' }}>
                            <Col sm={24} md={24} lg={12} xl={7} xxl={7}>
                                <div className="m-overall-info">经营营业部：</div>
                            </Col>
                            <Col sm={24} md={24} lg={12} xl={5} xxl={5}>
                                <div className="m-overall-info"><span className="gray" >6666666666</span></div>
                            </Col>
                            <Col sm={24} md={24} lg={12} xl={7} xxl={7}>
                                <div className="m-overall-info">客户生日：</div>
                            </Col>
                            <Col sm={24} md={24} lg={12} xl={5} xxl={5}>
                                <div className="m-overall-info"><span className="gray" >55555555</span></div>
                            </Col>
                        </Row>
                        <Row type="flex" justify="start" align="middle" style={{ marginBottom: '1rem', paddingLeft: '1rem' }}>
                            <Col sm={24} md={24} lg={12} xl={7} xxl={7}>
                                <div className="m-overall-info">开户日期：</div>
                            </Col>
                            <Col sm={24} md={24} lg={12} xl={5} xxl={5}>
                                <div className="m-overall-info"><span className="gray" >44444444</span></div>
                            </Col>
                            <Col sm={24} md={24} lg={12} xl={7} xxl={7}>
                                <div className="m-overall-info">普通户开户银行：</div>
                            </Col>
                            <Col sm={24} md={24} lg={12} xl={5} xxl={5}>
                                <div className="m-overall-info"><span className="gray" >3333333</span></div>
                            </Col>
                        </Row>
                        <Row type="flex" justify="start" align="middle" style={{ marginBottom: '1rem', paddingLeft: '1rem' }}>
                            <Col sm={24} md={24} lg={12} xl={7} xxl={7}>
                                <div className="m-overall-info">财富客户日期：</div>
                            </Col>
                            <Col sm={24} md={24} lg={12} xl={5} xxl={5}>
                                <div className="m-overall-info"><span className="gray" >1111111</span></div>
                            </Col>
                            <Col sm={24} md={24} lg={12} xl={7} xxl={7}>
                                <div className="m-overall-info">首次定投日期：</div>
                            </Col>
                            <Col sm={24} md={24} lg={12} xl={5} xxl={5}>
                                <div className="m-overall-info"><span className="gray" >2222222</span></div>
                            </Col>
                        </Row>
                    </div>
                </Tabs.TabPane>
            </Tabs>
        </Card> */
        )
    }
}

export default Accter;