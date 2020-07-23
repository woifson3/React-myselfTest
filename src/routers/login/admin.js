import React, { Fragment } from 'react';
import { Row, Col, Input, Button, message } from 'antd';
// import { Icon, DownloadOutlined } from '@ant-design/compatible';
// import { fetchwmkeep, fetchwm } from '../../../../../../services/basicservices';

export default class NoticesDrop extends React.Component {
    state = {
        // body: {},
        // channel: 'cfyj',
        // requestId: new Date().getTime(),

    }
    // componentDidMount() {
    // this.bianjiwm();
    // }
    // onClickOk = () => {
    //     const { closeRoleModal } = this.props;
    //     const { body, channel, requestId } = this.state;
    //     const parmss = {
    //         channel,
    //         body,
    //         requestId,
    //     };
    //     fetchwmkeep(parmss).then((response = {}) => {
    //         const { status = '', note = '', code = 0 } = response;
    //         if (status === '200' || code === 1 || note === 'success') {
    //             closeRoleModal();
    //         }
    //     }).catch((error) => {
    //         message.error(!error.succes ? error.message : error.note);
    //     });
    // }
    // onGroupNameChange = (e) => {
    //     const { value } = e.target;
    //     this.state.body = {
    //         ...this.state.body,
    //         introduce: value,
    //     };
    // }
    // onGroupNameChange1 = (e) => {
    //     const { value } = e.target;
    //     this.state.body = {
    //         ...this.state.body,
    //         resume: value,
    //     };
    // }
    // onGroupNameChange2 = (e) => {
    //     const { value } = e.target;
    //     this.state.body = {
    //         ...this.state.body,
    //         skill: value,
    //     };
    // }
    // getBase64 = (img, callback) => {
    //     const reader = new FileReader();
    //     reader.addEventListener('load', () => callback(reader.result));
    //     reader.readAsDataURL(img);
    // }

    // bianjiwm = () => {
    //     const { channel, body, requestId } = this.state;
    //     const parms = {
    //         channel,
    //         body,
    //         requestId,
    //     };
    //     fetchwm(parms).then((ret = {}) => {
    //         let { results = {} } = ret;
    //         if (results === null) results = {};
    //         this.setState({
    //             body: results,
    //         });
    //     }).catch((error) => {
    //         message.error(!error.succes ? error.message : error.note);
    //     });
    // }

    // constuctStates = (payload) => {
    //     this.setState({
    //         body: {
    //             ...this.state.body,
    //             ...payload,
    //         },
    //     });
    // }

    // handleFileChange = () => {
    //     const { files = [] } = document.getElementById('avatorFile') || {};
    //     if (files.length === 0) {
    //         message.error('图片不能为空！');
    //         return;
    //     }
    //     this.getBase64(files[0], (imageUrl) => {
    //         this.constuctStates({
    //             photoStream: imageUrl,
    //         });
    //     });
    // }


    render() {
        // const { closeRoleModal } = this.props;
        // let { body = {} } = this.state;
        // if (body === null) body = {};
        return (
            <React.Fragment>
                <div style={{ paddingLeft: '300px', paddingRight: '300px' }}>
                    <div style={{ padding: '10px', flex: 'auto'}}>
{/* 下面一行去掉了个marginbottom：'15px' */}
                        <div style={{ display: 'flex', flexDirection: 'row',  }}>
                            {/* 左侧 */}
                            <div style={{ height: '100%', width: '65%', }}>
                                <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'row' }}>
                                    <div style={{ fontSize: '18px', width: '150px' }}>
                                        员工姓名
                                 </div>
                                    <div style={{ marginLeft: '1rem' }}>
                                        <div>
                                            214324
                                        {/* {body.submitter || ''} */}
                                        </div>
                                    </div>
                                </div>
                                <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'row' }}>
                                    <div style={{ fontSize: '18px', width: '150px' }}>
                                        投顾UM
                                 </div>
                                    <div >
                                        <div style={{ marginLeft: '1rem' }}>
                                            12234
                                        {/* {body.adviserId || ''} */}
                                        </div>
                                    </div>
                                </div>
                                <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'row' }}>
                                    <div style={{ fontSize: '18px', width: '150px' }}>
                                        投资咨询执业证书
                                 </div>
                                    <div style={{ marginLeft: '1rem' }}>
                                        <div>
                                            124234
                                        {/* {body.certificateNo || ''} */}
                                        </div>
                                    </div>
                                </div>
{/*去 marginBottom: '1rem' ,把marginBottom=1去掉，全部改成top=2*/}
                                <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'row',  }}>
                                    <div style={{ fontSize: '18px', width: '150px' }}>
                                        个人介绍
                                    </div>
                                    <div style={{ marginLeft: '1rem', height: 100, width: '70%' }}>
                                        <Input.TextArea
                                            // defaultValue={body.introduce}
                                            onChange={this.onGroupNameChange}
                                            style={{ height: '100%', resize: 'none', width: '100%' }}
                                            placeholder="最多可以输入200字"
                                            maxLength="200"

                                        // autoSize= false
                                        //  resize去掉可对input进行拉伸，autoSize对input拉伸做范围限制
                                        />
                                    </div>
                                </div>
                            </div>


                            {/* 右侧 */}
                            <div style={{ height: '25%', width: '30%', marginTop: '2rem' }}>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <div style={{ fontSize: '18px', width: '50px' }} >
                                        头像
                                </div>

                                    <div style={{ display: 'flex', flexDirection: 'column' }} >
                                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                            <div style={{ width: '150px', height: '150px', background: '#cccccc' }} />
                                        </div>
                                        <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                            <span type="primary" style={{ textAlign: 'center', backgroundColor: '#DDDDDD', color: 'black', padding: '8px 20px', fontSize: '13px', borderRadius: '4px' }}>
                                                <div style={{ fontWeight: 'bold ' }}>上传文件</div>
                                            </span>
                                            <input
                                                type="file"
                                                id="avatorFile"
                                                accept=".bmp,.jpg,.png"
                                                // onChange={this.handleFileChange}
                                                style={{ position: 'absolute', left: 0, opacity: 0, width: '10rem' }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* magrin修改间距    加lheigth以及heigth的百分比*/}
                        <div style={{ display: 'flex', flexDirection: 'row', marginTop: '2rem'}}>
                            <div style={{ fontSize: '18px', width: '150px' }}>
                                履历
                                </div>
                            <div style={{ marginLeft: '1rem', width: '70%', height: 100 }}>
                                <Input.TextArea
                                    // defaultValue={body.resume}
                                    onChange={this.onGroupNameChange1}
                                    style={{ height: "100%", width: '95%', resize: 'none' }}
                                    placeholder="最多可以输入200字"
                                    maxLength="200"
                                // autoSize={{ minRows: 15, maxRows: 15, minColumns: 20 }}
                                />
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'row', marginTop: '2rem'}}>
                            <div style={{ fontSize: '18px', width: '150px' }}>
                                擅长
                            </div>
                            <div style={{ marginLeft: '1rem',height:100 , width: '70%',}}>
                                <Input.TextArea
                                    // defaultValue={body.skill}
                                    onChange={this.onGroupNameChange2}
                                    style={{ height: '100%', width: '95%', resize: 'none' }}
                                    placeholder="最多可以输入200字"
                                    maxLength="200"
                                // autoSize={{ minRows: 15, maxRows: 15, minColumns: 20 }}
                                // resize去掉可对input进行拉伸，autoSize对input拉伸做范围限制
                                />
                            </div>
                        </div>

                    </div>
                </div>
                <Row style={{ marginBottom: '2rem',marginTop:'2rem' }}>
                    <Col span={24} style={{ marginBottom: 10, textAlign: 'center' }}>
                        <span style={{ marginRight: 8, border: '1px solid #888888', color: 'gray', padding: '15px 50px', fontSize: '16px', marginBottom: '2px', borderRadius: '4px' }} className="m-btn-radius m-btn-headColor" onClick={this.onClickOk}  > 保存 </span>
                        <span style={{ marginLeft: 8, border: '1px solid #ff9900', color: '#ff9900', padding: '15px 50px', fontSize: '16px', marginBottom: '2px', borderRadius: '4px' }} className="m-btn-radius"  > 退出 </span>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}
