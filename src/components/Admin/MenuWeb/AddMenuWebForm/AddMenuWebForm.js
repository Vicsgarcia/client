import React, {useState} from 'react';
import {Input, Select, Button, Form, notification} from 'antd';
import {FontSizeOutlined} from '@ant-design/icons';

import './AddMenuWebForm.scss';

export default function AddMenuWebForm(props){
    return(
        <div className="add-menu-web-form">
            <AddForm/>
        </div>
    );
};


function AddForm(props){
    const {Option} = Select;
    const selectBefore = (
        <Select
        defaultValue="http://"
        style={{width:90}}
        
        >
            <Option value="http://">http://</Option>
            <Option value="https://">https://</Option>
        </Select>
    )

    return (
        <Form className="form-add">
            <Form.Item>
                <Input 
                prefix={<FontSizeOutlined />} 
                placeholder="Título"
                
                />
            </Form.Item>
            <Form.Item>
                <Input 
                addonBefore ={selectBefore}
                placeholder="URL"
                
                
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" className="btn-submit">
                    Crear página
                </Button>
            </Form.Item>
        </Form>
    )
}