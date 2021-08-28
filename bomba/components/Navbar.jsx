import React from "react";
import ReactDOM from 'react-dom';


export class Navbar extends React.Component{
    constructor(){
        super()
    }

    onFocus(){
        const menu = document.getElementsByClassName('Mobile-menu') 
        menu[0].classList.toggle('Mobile-menu_active')
    }

    onBlur(){
        const menu = document.getElementsByClassName('Mobile-menu') 
        menu[0].classList.remove('Mobile-menu_active')
    }

    render(){
        return(
            <div id = 'Navbar'>
                <a className = 'Navbar-href' href = "#AboutUs">О нас</a>
                <a className = 'Navbar-href' href = "#OurStudio">Вокальная студия</a>
                <img className = 'Navbar-logo' alt = 'logo' src='/full-w.svg' />
                <a className = 'Navbar-href' href = "#Services">Цены и услуги</a>
                <a className = 'Navbar-href' href = "#OurWorks">Наша работа</a>

                <button onClick = {this.onFocus = this.onFocus.bind(this)} onBlur = {this.onBlur = this.onBlur.bind(this)}   className = 'Navbar-mobile-button'>Меню</button>
                <div className = 'Mobile-menu'>
                    <a onClick = {this.onFocus = this.onFocus.bind(this)} className = 'Navbar-href-mob' href = "#AboutUs">О нас</a>
                    <a onClick = {this.onFocus = this.onFocus.bind(this)} className = 'Navbar-href-mob' href = "#OurStudio">Вокальная студия</a>
                    <a onClick = {this.onFocus = this.onFocus.bind(this)} className = 'Navbar-href-mob' href = "#Services">Цены и услуги</a>
                    <a onClick = {this.onFocus = this.onFocus.bind(this)} className = 'Navbar-href-mob' href = "#OurWorks">Наша работа</a>
                </div>
            </div>
        )
    }
}