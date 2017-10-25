import React, { Component } from 'react';
import {
    Row,
    Col,
} from 'antd';

import '../../compontsCss/footer.css'

class Footer extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col className="footerBG" span={7}></Col>
                    <Col className="footerBG" span={2}>
                        <div><span>阿鹿服务</span></div>
                    </Col>
                    <Col className="footerBG" span={2}>col-2</Col>
                    <Col className="footerBG" span={2}>col-2</Col>
                    <Col className="footerBG" span={2}>col-2</Col>
                    <Col className="footerBG" span={2}>col-2</Col>
                    <Col className="footerBG" span={7}>7</Col>
                </Row>
            </div>
        );
    }
}

export default Footer;