import React, { Component } from 'react';
import {
    Row,
    Col,
    Menu,
    Icon
} from 'antd';

import logo from './headerImage/logo.png'

import '../../compontsCss/header.css'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Header extends Component {
    state = {
        current: 'mail',
    }
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }
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
                            <Menu
                                onClick={this.handleClick}
                                selectedKeys={[this.state.current]}
                                mode="horizontal"
                            >
                                <Menu.Item key="mail">
                                    <Icon type="mail" />Navigation One
                                </Menu.Item>
                            </Menu>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Header;