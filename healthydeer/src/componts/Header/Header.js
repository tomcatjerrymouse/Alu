import React, { Component } from 'react';
import {
    Row,
    Col,
} from 'antd';

import logo from './headerImage/logo.png'

import '../../compontsCss/header.css'

class Header extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={12}>
                        <div className="heackBG">
                            <div className="headerImg">
                                <img src={logo} alt="logo"/>
                            </div>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className="heackBG">
                            <ul className='ul'>
                                <li className='li active'>首页
                                <div>123</div>
                                </li>
                                <li className='li'>阿鹿服务</li>
                                <li className='li'>在线预约</li>
                                <li className='li'>媒体报道</li>
                                <li className='li'>关于我们</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Header;