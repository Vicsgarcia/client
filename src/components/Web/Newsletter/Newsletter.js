import React, {useState} from 'react';
import './Newsletter.scss';
import {Form, Button, Input, notification} from 'antd';
import {MailOutlined} from '@ant-design/icons';

import {suscribeNewsletterApi} from '../../../api/newsletter';

export default function Newsletter() {

    const [email, setEmail] = useState("");

    const onSubmit = async e=>{
        e.preventDefault();
        const emailValid = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        const resultValidation= emailValid.test(email)

        if(resultValidation===false){
            notification["error"]({
                message:"Es necesario indicar un email valido"
            })
        } else{
            const result = await suscribeNewsletterApi(email)
            if(result.error){
                notification["error"]({
                    message: result.message
                });
            } else{
                notification["success"]({
                    message: result.message
                });

                setEmail("");
                
            }
        }
    }

    

    return (
        <div className="newsletter">
            <h3>Newsletter</h3>
            <Form onSubmit={onSubmit} >
                <Form.Item>
                    <Input
                        prefix={<MailOutlined />}
                        placeholder="Correo electrónico"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </Form.Item>
                <Form.Item>
                    <Button 
                        onClick={onSubmit}
                        htmlType="submit"
                        className="login-form-button"
                    >
                        Subscribirme
                    </Button>
                </Form.Item>
            </Form>
            
        </div>
    )

    }