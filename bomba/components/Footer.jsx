import React from "react";
import ReactDOM from 'react-dom';


export class Footer extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div id = 'Footer'>
                <div className = 'Footer-cl-left'>
                    <div className = 'Footer-cl-left-title'>Контакты</div>
                    <div className = 'Footer-cl-left-contact'>
                        <div className = 'Footer-cl-left-contact'>
                        <span>Телефон:</span>
                        <a href = 'tel:+380507086028'>+380507086028</a>
                    </div>
                        <div className = 'Footer-cl-left-contact'>
                    <span>Email:</span>
                    <a href = 'mailto:super-pavel_kapustin@ukr.net'>super-pavel_kapustin@ukr.net</a>
                </div>
                        <div className = 'Footer-cl-left-contact'>
                        <span>Инстаграм:</span>
                        <a target = '_blank' rel="noreferrer" href = 'https://www.instagram.com/kapustin_records/'>@kapustin_records</a>
                    </div>
                    </div>
                    <div className = 'Footer-social'>
                        <a href = 'https://www.instagram.com/kapustin_records/' target = '_blank' rel="noreferrer"><img className = 'Footer-social-inst' src = '/instagram.svg' alt = 'instagram' /></a>
                        <a href = 'https://www.youtube.com/user/pashtethsxeyjdcrbq' target = '_blank' rel="noreferrer"><img className = 'Footer-social-youtube' src = '/youtube.svg' alt = 'youtube' /></a>
                    </div>
                </div>
                <div className = 'Footer-cl-right'>
                    <div className = 'Footer-cl-right-title'>Как нас найти?</div>
                    <iframe className = 'Footer-cl-right-map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5171.731495321833!2d34.51706681491167!3d49.6002811112108!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf0ecd2043d9d8f59!2z0KHRgtGD0LTQuNGPINC30LLRg9C60L7Qt9Cw0L_QuNGB0Lgg0J_QsNCy0LvQsCDQmtCw0L_Rg9GB0YLQuNC90LA!5e0!3m2!1sru!2sua!4v1628704623210!5m2!1sru!2sua" width={"500"} height={"350"} style={{border: "0"}}></iframe>
                </div>
            </div>
        )
    }
}