import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Row,Col } from 'antd';
import PCMenu from './pc_menu/pc_menu.jsx'
class PCIndex extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={4}>
                        <PCMenu></PCMenu>
                    </Col>
                    <Col span={16}>content</Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        );
    }
}

export default PCIndex;