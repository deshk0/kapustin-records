import React from "react";
import ReactDOM from 'react-dom';


export class HomePage extends React.Component{
    constructor(){
        super()

        this.state = {
            view: [
                [                
                    <Popup />,
                    <Block_1 />,
                    <Block_2 />,
                    <Block_3 />,
                    <Block_4 />
                ],
                [
                    <Popup />,
                    <Block_1_mobile />,
                    <Block_2 />,
                    <Block_3_mobile />,
                    <Block_4_mobile />
                ]
            ],
            index: 0
        }
    }

    componentDidMount(){
        if(document.body.clientWidth < 1100){
            this.setState({
                index: 1
            })
        }else{
            this.setState({
                index: 0
            })
        }
        window.addEventListener('resize', () => {
            console.log('its working')
            if(document.body.clientWidth < 800){
                this.setState({
                    index: 1
                })
            }else{
                this.setState({
                    index: 0
                })
            }
        })
    }

    render(){
        return(
            <>
                {this.state.view[this.state.index]}
            </>
        )
    }

}



class Block_1 extends React.Component {
    constructor(){
        super()
    }


    render(){
        return(
            <div id = 'AboutUs' style ={{height:'90vh', padding:'0'}} className = 'Block'>
                <div className = 'Block-1-photo'>
                    <a className = 'Block-1-photo-button' href = '#Services'>Посмотреть услуги</a>
                </div>
                <div className = 'Block-1-r'>
                    <div>
                        <h1 className = 'Site-title'>Студия звкукозаписи Полтава</h1>
                        <h2 className = 'Site-subtitle'>Kapustin records</h2>

                        <p className = 'Site-p'>
                            Студия звукозаписи Павла Капустина в городе Полтава – это бюджетная студия звукозаписи с десятилетним опытом работы, предоставляющая услуги записи, обработки и сведения музыкального материала, как начинающим музыкантам, так и профессионалам, которым нужно получить качественный продукт за адекватную стоимость и имеющийся для этого бюджет!
                        </p>

                    </div>
                </div>
            </div>
        )
    }
}
class Block_1_mobile extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div id = 'AboutUs' className = 'Block-1-mob'>
                <h1 className = 'Site-title'>Студия звкукозаписи <b>Полтава</b></h1>
                <p className = 'Site-p'>
                    Студия звукозаписи Павла Капустина в городе Полтава – это бюджетная студия звукозаписи с десятилетним опытом работы!
                </p>
                <a className = 'Block-1-photo-button' href = '#Services'>Посмотреть услуги</a>

            </div>
        )
    }
}
class Popup extends React.Component {
    constructor(){
        super()
        
        this.state = {
            name: "",
            number: "",

            validMessage1: '',
            validMessage2: '',
        }
    }
    onChange1(event){

        const value = event.target.value
        console.log(value);
        this.setState({
            name: value
        })
        
    }
    onChange2(event){

        const value = event.target.value
        console.log(value);
        this.setState({
            number: value
        })
        
    }
    Submit(e){
        e.preventDefault()
        if(this.state.name.length >= 2 && this.state.number.length >= 10 ){
            {/*https://api.telegram.org/bot1910405582:AAHNPFjnaYVWxjkgf8AqcOWUIkKO0i_zwzA/getUpdates*/}
            let name = this.state.name
            let phone = this.state.number
    
            let message = 
            `
            Имя: ${name}
            Номер: ${phone}
            `
            
            const token = '1910405582:AAHNPFjnaYVWxjkgf8AqcOWUIkKO0i_zwzA'
            const id = '-528104122'
            let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${id}&parse_mode=html&text=`
    
            let xhttp = new XMLHttpRequest()
            xhttp.open("GET", url + message, true)
            xhttp.send()

            this.setState({
                validMessage1: 'Готово ваша заявка отправлена!',
                validMessage2: 'Готово ваша заявка отправлена!'
            })
    

            const Popup = document.getElementById('Popup')
            Popup.style.display = 'none'

            alert('Ваша заявка отправлена')

        }else{

            if(this.state.name.length < 2){
                this.setState({
                    validMessage1: 'Пожалуйста правильно укажите Ваше имя',
                })
            }else{
                this.setState({
                    validMessage1: '',
                })
            }

            if(this.state.number.length < 10){
                this.setState({
                    validMessage2: 'Пожалуйста правильно укажите Ваш номер телефона',
                })
            }else{
                this.setState({
                    validMessage2: '',
                })
            }

        }
    }

    close(e){
        e.preventDefault()
        console.log('Da')

        const Popup = document.getElementById('Popup')
        Popup.style.display = 'none'
    }

    onFocus1(){
        const text = document.getElementsByClassName('Popup-form-box-name')

        text[0].style.color = 'var(--blue)'
    }
    onBlur1(){
        const text = document.getElementsByClassName('Popup-form-box-name')

        text[0].style.color = 'black'
    }

    onFocus2(){
        const text = document.getElementsByClassName('Popup-form-box-name')

        text[1].style.color = 'var(--blue)'
    }
    onBlur2(){
        const text = document.getElementsByClassName('Popup-form-box-name')

        text[1].style.color = 'black'
    }

    render(){
        return(
            <div id = 'Popup'>
                <div id = 'Popup-form'>
                    <a onClick = {this.close = this.close.bind(this)} href = '/' className = 'Popup-form-close'>×</a>
                    <div className ='Popup-form-box'>
                        <div className ='Popup-form-box-name'>Имя</div>
                        <input onBlur = {this.onBlur1 = this.onBlur1.bind(this)} onFocus = {this.onFocus1 = this.onFocus1.bind(this)} className = 'Popup-form-input' onChange={this.onChange1 = this.onChange1.bind(this)} placeholder = 'Ваня' type="text"></input>
                        <div className ='Popup-form-box-text'>{this.state.validMessage1}</div>

                    </div>
                    <div className ='Popup-form-box'>
                        <div className ='Popup-form-box-name'>Номер телефона</div>
                        <input onBlur = {this.onBlur2 = this.onBlur2.bind(this)} onFocus = {this.onFocus2 = this.onFocus2.bind(this)} className = 'Popup-form-input' onChange={this.onChange2 = this.onChange2.bind(this)} placeholder = '+380507522333' type="text"></input>
                        <div className ='Popup-form-box-text'>{this.state.validMessage2}</div>

                    </div>
                    <a onClick = {this.Submit = this.Submit.bind(this)} href ='/' className = 'Popup-form-button' >Отправить форму!</a>
                </div>
            </div>
        )
    }
}

class Block_3_mobile extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div id = 'OurStudio' className = 'Block-3-mob'>
                <div className = 'Site-title'>Наша студия</div>
                <div className = 'Block-3-mob-box'>
                    <div style = {{backgroundSize: 'cover', backgroundImage: 'url(https://db3pap003files.storage.live.com/y4mXFjP9dSbhPAgNSxthmjUD9T1EuDDQ1x38KStNLphxowMoNRCRxzdfqiucJ1kVVQ58iJApKP1abaaM49Him24aACzWsI96XH1Oa7q2jn5JAWz0bHaqZnb5RdE0jFtzjxge6NL4xd30xP7wDX0yogXx6NLzrqDz-vQQThOyYjRMLp66UXf1tSnDndTJF9b6ucl?width=4032&height=3024&cropmode=none)'}} className = 'Block-3-mob-box-img'></div>
                    <div className = 'Site-title'>Команда</div>
                    <p className = 'Block-3-mob-box-p'>В нашей творческой команде - только профессионалы своего дела с многолетним опытом работы, зарекомендовавшие себя успешными специалистами в своей сфере: музыканты, педагоги по вокалу, аранжировщики и студийные звукорежиссеры, видео операторы, и фотографы.Обращаясь к нам – вы доверяете свой материал настоящим специалистам и можете не переживать о качестве готового продукта и изготовления его в указанные сроки!</p>
                </div>
                <div className = 'Block-3-mob-box'>
                    <div style = {{backgroundSize: 'cover', backgroundImage: 'url(https://db3pap003files.storage.live.com/y4mFMs31kyBOkNUWJGaJNuQFoNE8itNJtoui7rnq_aThkPtbr_foNtk5qSwEpKDW75KIMgQrS7VzE6yISBl7CjgTtjYADiVSJspNq46A__DB2D7028rVPQYe-t1JeCmNMuCfHMJjS9luFKErnbFJU18YJhgACq7Wg_R9Qd0RP-Ugdd1Oy42Zxs30G-X-a6qTyjz?width=3520&height=1980&cropmode=none)'}} className = 'Block-3-mob-box-img'></div>
                    <div className = 'Site-title'>Клиенты</div>
                    <p className = 'Block-3-mob-box-p'>Наши клиенты – это учащиеся всех школ, лицеев и вузов, работники бюджетных, коммерческих организаций и государственных учреждений. Папы, мамы, женихи и невесты, родители учеников, директора и подчиненные, а также все желающие – играющие, поющие и не очень!</p>
                </div>
                <div className = 'Block-3-mob-box'>
                    <div style = {{backgroundSize: 'cover', backgroundImage: 'url(https://db3pap003files.storage.live.com/y4mSwsPu6qB4-Qk4owKClT7lpzkvzQyFFmqoMfAf4hdOMbeRtlkDnO3Ziqi3mupGCWjYy5h2dgGHRsn-UopH1EcbPHMcyrQP_p14MvHvIU_7VWjlhm7gYQZ8UFEZ_vMgpvVelL00dUhAcDBvCqTekUZdaJPMzFFvvDNV5aJtYhH4yzBlkx_3o_CZt4NecbE7_ac?width=4032&height=3024&cropmode=none)'}} className = 'Block-3-mob-box-img'></div>
                    <div className = 'Site-title'>Оборудование</div>
                    <p className = 'Block-3-mob-box-p'>Наше студийное оборудование и программное обеспечение постоянно меняется и усовершенствуется согласно современных звукозаписывающих норм, поэтому детально перечислять его не имеет смысла).</p>
                </div>
                <div className = 'Block-3-mob-box'>
                    <div style = {{backgroundSize: 'cover', backgroundImage: 'url(https://db3pap003files.storage.live.com/y4mZgOZz-mgO5ECjsOeDcCvPDp7TL34sTN9DX-kRcC5F6OiQphRU9WZMsTcwOt5NxZ1nZn5EEhkVtsJ5_IvCIctb30AI3pPS5sH8JJ1W61oHue4VLrZTeG4WSr_1iAA5eF5pSYvSJm7jeKofXAgWNxpqBWI6J5OuyzfraBqO1biLxcydnBd0H6m63b4lzIGs0QW?width=4032&height=3024&cropmode=none)'}} className = 'Block-3-mob-box-img'></div>
                    <div className = 'Site-title'>Важно</div>
                    <p className = 'Block-3-mob-box-p'>Наша студия не является репетиционной базой рэп команд, рок групп, а также крупных хоровых коллективов. Также мы не записываем живые барабаны и не изготавливаем аранжировки в жанре рэп-музыки!</p>
                </div>
            </div>
        )
    }
}
class Block_3 extends React.Component{
    constructor(){
        super()

        this.state = {
            blocks: [
                <Block_3_l 
                    title = 'Команда' 
                    desc1 = 'В нашей творческой команде - только профессионалы своего дела с многолетним опытом работы, зарекомендовавшие себя успешными специалистами в своей сфере: музыканты, педагоги по вокалу, аранжировщики и студийные звукорежиссеры, видео операторы, и фотографы.Обращаясь к нам – вы доверяете свой материал настоящим специалистам и можете не переживать о качестве готового продукта и изготовления его в указанные сроки!'
                    desc2 = 'Преимущественно мы работаем с разно-жанровыми сольными исполнителями: (дикторами и вокалистами, пианистами, акустическими гитаристами, саксофонистами, баянистами, аккордионистами, дуэтами, трио, квартетами, небольшими инструментальными и хоровыми коллективами и т.д)'
                    desc3 = 'Мы работаем только днем - не раньше 12.00 и не позже 18.00 по адресу: г. Полтава, ул. М.Бирюзова 26/1, остановка Демитекс (первая после остановки Зыгина в сторону района Браилки)'
                />, 
                <Block_3_l 
                    title = 'Клиенты' 
                    desc1 = 'Наши клиенты – это учащиеся всех школ, лицеев и вузов, работники бюджетных, коммерческих организаций и государственных  учреждений. Папы, мамы, женихи и невесты, родители учеников, директора и подчиненные, а также все желающие – играющие, поющие и не очень!'
                    desc2 = 'У нас можно записать музыкальный материал – от начитки текста голосом под музыку, песни в подарок на свадьбу, день рождение, юбилей, корпоратив - до создания авторской песни под ключ с последующим снятием клипа. С подробным перечнем предоставляемых услуг можно ознакомиться в нашем прайсе.'
                    desc3 = ''
                />, 
                <Block_3_l 
                    title = 'Оборудование' 
                    desc1 = 'Наше студийное оборудование и программное обеспечение постоянно меняется и усовершенствуется согласно современных звукозаписывающих норм, поэтому детально перечислять его не имеет смысла).'
                    desc2 = ''
                    desc3 = ''
                />, 
                <Block_3_l 
                    title = 'Важно' 
                    desc1 = 'Наша студия не является репетиционной базой рэп команд, рок групп, а также крупных хоровых коллективов. Также мы не записываем живые барабаны и не изготавливаем аранжировки в жанре рэп-музыки!'
                    desc2 = 'Мы не трудоустраиваем и не проводим обучающих курсов, тренингов и семинаров.'
                    desc3 = 'Внешний вид студии представлен на фото и дополнительные фото в мессенжеры по запросу не высылаются. У нас не курят, не пьют крепкие алкогольные напитки и не записываются в состоянии алкогольного опьянения. Группа поддержки не должна превышать больше двух человек!'
                />
            ],
            photos: [
                'https://db3pap003files.storage.live.com/y4mXFjP9dSbhPAgNSxthmjUD9T1EuDDQ1x38KStNLphxowMoNRCRxzdfqiucJ1kVVQ58iJApKP1abaaM49Him24aACzWsI96XH1Oa7q2jn5JAWz0bHaqZnb5RdE0jFtzjxge6NL4xd30xP7wDX0yogXx6NLzrqDz-vQQThOyYjRMLp66UXf1tSnDndTJF9b6ucl?width=4032&height=3024&cropmode=none',
                'https://db3pap003files.storage.live.com/y4mFMs31kyBOkNUWJGaJNuQFoNE8itNJtoui7rnq_aThkPtbr_foNtk5qSwEpKDW75KIMgQrS7VzE6yISBl7CjgTtjYADiVSJspNq46A__DB2D7028rVPQYe-t1JeCmNMuCfHMJjS9luFKErnbFJU18YJhgACq7Wg_R9Qd0RP-Ugdd1Oy42Zxs30G-X-a6qTyjz?width=3520&height=1980&cropmode=none',
                'https://db3pap003files.storage.live.com/y4mSwsPu6qB4-Qk4owKClT7lpzkvzQyFFmqoMfAf4hdOMbeRtlkDnO3Ziqi3mupGCWjYy5h2dgGHRsn-UopH1EcbPHMcyrQP_p14MvHvIU_7VWjlhm7gYQZ8UFEZ_vMgpvVelL00dUhAcDBvCqTekUZdaJPMzFFvvDNV5aJtYhH4yzBlkx_3o_CZt4NecbE7_ac?width=4032&height=3024&cropmode=none',
                'https://db3pap003files.storage.live.com/y4mZgOZz-mgO5ECjsOeDcCvPDp7TL34sTN9DX-kRcC5F6OiQphRU9WZMsTcwOt5NxZ1nZn5EEhkVtsJ5_IvCIctb30AI3pPS5sH8JJ1W61oHue4VLrZTeG4WSr_1iAA5eF5pSYvSJm7jeKofXAgWNxpqBWI6J5OuyzfraBqO1biLxcydnBd0H6m63b4lzIGs0QW?width=4032&height=3024&cropmode=none'
            ],
            index: 0,
            currentPhoto: 0
        }
    }

    Switch1(e){
        e.preventDefault()
        this.setState({
            index: 0,
            currentPhoto: 0
        })
        const photo = document.getElementsByClassName('Block-3-container-r-container-box')
        photo[0].classList.add('Block-3-container-r-container-box_pick')
        photo[1].classList.remove('Block-3-container-r-container-box_pick')
        photo[2].classList.remove('Block-3-container-r-container-box_pick')
        photo[3].classList.remove('Block-3-container-r-container-box_pick')        
    }
    Switch2(e){
        e.preventDefault()
        this.setState({
            index: 1,
            currentPhoto: 1
        })
        const photo = document.getElementsByClassName('Block-3-container-r-container-box')
        photo[1].classList.add('Block-3-container-r-container-box_pick')
        photo[0].classList.remove('Block-3-container-r-container-box_pick')
        photo[2].classList.remove('Block-3-container-r-container-box_pick')
        photo[3].classList.remove('Block-3-container-r-container-box_pick')
    }
    Switch3(e){
        e.preventDefault()
        this.setState({
            index: 2,
            currentPhoto: 2
        })
        const photo = document.getElementsByClassName('Block-3-container-r-container-box')
        photo[2].classList.add('Block-3-container-r-container-box_pick')
        photo[0].classList.remove('Block-3-container-r-container-box_pick')
        photo[1].classList.remove('Block-3-container-r-container-box_pick')
        photo[3].classList.remove('Block-3-container-r-container-box_pick')
    }
    Switch4(e){
        e.preventDefault()
        this.setState({
            index: 3,
            currentPhoto: 3
        })
        const photo = document.getElementsByClassName('Block-3-container-r-container-box')
        photo[3].classList.add('Block-3-container-r-container-box_pick')
        photo[0].classList.remove('Block-3-container-r-container-box_pick')
        photo[1].classList.remove('Block-3-container-r-container-box_pick')
        photo[2].classList.remove('Block-3-container-r-container-box_pick')
    }

    render(){
        return(
            <div id = "OurStudio" className = 'Block'>
                <div className = 'Wrapper'>
                    <div style ={{textAlign:'end'}} className = 'Site-title'>Наша студия</div>
                    <div className = 'Block-3-container'>
                        {this.state.blocks[this.state.index]}
                        <div className = 'Block-3-container-r'>
                            <div className = 'Block-3-container-r-current' style = {{backgroundImage: `url(${this.state.photos[this.state.currentPhoto]})`}}></div>
                            <div className = 'Block-3-container-r-container'>
                                <a href = '/' onClick ={this.Switch1 = this.Switch1.bind(this)} style = {{backgroundImage: `url(${this.state.photos[0]})`}} className = 'Block-3-container-r-container-box Block-3-container-r-container-box_pick'></a>
                                <a href = '/' onClick ={this.Switch2 = this.Switch2.bind(this)} style = {{backgroundImage: `url(${this.state.photos[1]})`}} className = 'Block-3-container-r-container-box'></a>
                                <a href = '/' onClick ={this.Switch3 = this.Switch3.bind(this)} style = {{backgroundImage: `url(${this.state.photos[2]})`}} className = 'Block-3-container-r-container-box'></a>
                                <a href = '/' onClick ={this.Switch4 = this.Switch4.bind(this)} style = {{backgroundImage: `url(${this.state.photos[3]})`}} className = 'Block-3-container-r-container-box'></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
class Block_3_l extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className = 'Block-3-container-l'>
                <div className = 'Site-title'>{this.props.title}</div>
                <p>
                    {this.props.desc1}
                </p>
                <p>
                    {this.props.desc2}
                </p>
                <p>
                    {this.props.desc3}
                </p>
            </div>
        )
    }
}
class Block_4_mobile extends React.Component{
    constructor(){
        super()
        this.state = {
            current: 1,

            works: [
                <Block_4_item 
                    href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley' 
                    song = '"Моя королева"' 
                    author = 'Владимир Песня' 
                    desc = 'Аранжировка запись вокала' 
                />,
                <Block_4_item 
                    href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley' 
                    song = '"Моя королева 2"' 
                    author = 'Владимир Песня' 
                    desc = 'Аранжировка запись вокала' 
                />,
                <Block_4_item 
                    href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley' 
                    song = '"Моя королева 3"' 
                    author = 'Владимир Песня' 
                    desc = 'Аранжировка запись вокала' 
                />,
            ] 

        }
    }
    next(e){
        e.preventDefault()
        console.log('yes')
        if( this.state.current < 2 ){
            this.setState({
                current: this.state.current + 1
            })
        }
    }
    prev(e){
        e.preventDefault()
        console.log('yes')
        if( this.state.current > 1 ){
            this.setState({
                current: this.state.current - 1
            })
        }
    }

    render(){
        return(
            <div id = 'OurWorks' className = 'Block-4-mob'>
                <div className = 'Site-title'>Наши работы</div>
                <div className = 'Block-4-container'>
                    {this.state.works[this.state.current]}
                </div>
                <div className = 'Block-4-buttons'>
                    <a onClick = {this.prev = this.prev.bind(this)} href = '/' className = 'Block-4-buttons-prev'>{'<Назад'}</a>
                    <div className = 'Block-4-buttons-current'>{this.state.current}</div>
                    <a onClick = {this.next = this.next.bind(this)} href = '/' className = 'Block-4-buttons-next'>{'Дальше>'}</a>
                </div>
            </div>
        )
    }
}
class Block_4 extends React.Component{
    constructor(){
        super()

        this.state = {
            current: 1,

            sets: 
            [
                [],
                [
                    <Block_4_item 
                        href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley' 
                        song = '"Моя королева"' 
                        author = 'Владимир Песня' 
                        desc = 'Аранжировка запись вокала' 
                    />,
                    <Block_4_item 
                        href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley' 
                        song = '"Моя королева"' 
                        author = 'Владимир Песня' 
                        desc = 'Аранжировка запись вокала' 
                    />,
                    <Block_4_item 
                        href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley' 
                        song = '"Моя королева"' 
                        author = 'Владимир Песня' 
                        desc = 'Аранжировка запись вокала' 
                    />,
                    <Block_4_item 
                        href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley' 
                        song = '"Моя королева"' 
                        author = 'Владимир Песня' 
                        desc = 'Аранжировка запись вокала' 
                    />
                ],
                [
                    <Block_4_item 
                        href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley' 
                        song = '"Моя королева"' 
                        author = 'Владимир Песня' 
                        desc = 'Аранжировка' 
                    />,
                    <Block_4_item 
                        href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley' 
                        song = '"Моя королева"' 
                        author = 'Владимир Песня' 
                        desc = 'Аранжировка' 
                    />,
                    <Block_4_item 
                        href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley' 
                        song = '"Моя королева"' 
                        author = 'Владимир Песня' 
                        desc = 'Аранжировка' 
                    />,
                    <Block_4_item 
                        href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley' 
                        song = '"Моя королева"' 
                        author = 'Владимир Песня' 
                        desc = 'Аранжировка' 
                    />
                ],
            
            ],
        }
    }

    next(e){
        e.preventDefault()
        console.log('yes')
        if( this.state.current < 2 ){
            this.setState({
                current: this.state.current + 1
            })
        }
    }
    prev(e){
        e.preventDefault()
        console.log('yes')
        if( this.state.current > 1 ){
            this.setState({
                current: this.state.current - 1
            })
        }
    }

    render(){
        return(
            <div id = 'OurWorks' className = 'Block'>
                <div className = 'Wrapper'>
                    <div className = 'Site-title'>Наши работы</div>
                    <div className = 'Block-4-container'>
                        {this.state.sets[this.state.current]}
                    </div>
                    <div className = 'Block-4-buttons'>
                        <a onClick = {this.prev = this.prev.bind(this)} href = '/' className = 'Block-4-buttons-prev'>{'<Назад'}</a>
                        <div className = 'Block-4-buttons-current'>{this.state.current}</div>
                        <a onClick = {this.next = this.next.bind(this)} href = '/' className = 'Block-4-buttons-next'>{'Дальше>'}</a>
                    </div>
                </div>
            </div>
        )
    }
}
class Block_4_item extends React.Component{
    constructor(){
        super()
    }


    render(){
        return(
            <div className = 'Block-4-container-box'>
                <div className = 'Block-4-container-box-up'>
                    <div className = 'Block-4-container-box-up-title'>
                        <div className = 'Block-4-container-box-up-title-song'>{this.props.song}</div>
                        <div className = 'Block-4-container-box-up-title-author'>{this.props.author}</div>
                    </div>
                    
                    <a href = {this.props.href} className = 'Block-4-container-box-up-button-box'>
                        <span className = 'Block-4-container-box-up-button-box-triangle'></span>
                        <span className = 'Block-4-container-box-up-button-box-href'>Слушать на YouTube</span>
                    </a>
                </div>
                <div className = 'Block-4-container-box-down'>
                    <div className = 'Block-4-container-box-down-title'>Наше участие</div>
                    <div className = 'Block-4-container-box-down-desc'>
                        {this.props.desc}
                    </div>
                </div>
            </div>
        )
    }
}
class Block_2_item extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className = 'Block-2-container-cl-item'>
                <div className = 'Block-2-container-cl-item-number'>
                    {this.props.number}
                </div>
                <div className = 'Block-2-container-cl-item-box'>
                    <div className = 'Block-2-container-cl-item-box-name'>{this.props.name}</div>
                    <div className = 'Block-2-container-cl-item-box-price'>{this.props.price}</div>
                </div>
            </div>
        )
    }
}

class Block_2 extends React.Component {
    constructor(){
        super()
    }

    onClick(e){
        e.preventDefault()
        console.log('Da')

        const Popup = document.getElementById('Popup')
        Popup.style.display = 'flex'
    }

    render(){
        return(
            <div style = {{height:''}} id = 'Services' className = 'Block'>
                <div className = 'Wrapper'>
                    <div className = 'Site-title'>Цены и услуги</div>
                    <div className = 'Site-subtitle'>Кликайте на нужную вам услугу</div>

                    <div className = 'Block-2-container'>
                        <a onClick = {this.onClick = this.onClick.bind(this)} href = '/'>
                            <Block_2_item number = '1'  name = 'Запись вокала/голоса' price = 'от 150 грн. (30 мин)'/>
                        </a>
                        <a onClick = {this.onClick = this.onClick.bind(this)} href = '/'>
                            <Block_2_item number = '2'  name = 'Коррекция вокала' price = 'от 250 грн. (1 голос)'/
                        ></a>
                        <a onClick = {this.onClick = this.onClick.bind(this)} href = '/'>
                            <Block_2_item number = '3'  name = 'Запись песни в подарок' price = 'от 500 грн.'/>
                        </a>
                        <a onClick = {this.onClick = this.onClick.bind(this)} href = '/'>
                            <Block_2_item number = '4'  name = 'Профессиональная запись вокала' price = 'от 1000 грн.'/>
                        </a>
                        <a onClick = {this.onClick = this.onClick.bind(this)} href = '/'>
                            <Block_2_item number = '5'  name = 'Гармонизация мелодии' price = 'от 500 грн. '/>
                        </a>
                        <a onClick = {this.onClick = this.onClick.bind(this)} href = '/'>
                            <Block_2_item number = '6'  name = 'Изготовление Demo-песен ' price = 'от 2800 грн. (с вокалом)'/>
                        </a>
                        <a onClick = {this.onClick = this.onClick.bind(this)} href = '/'>
                            <Block_2_item number = '7'  name = 'Аранжировка' price = 'от 3500 грн. '/>
                        </a>
                        <a onClick = {this.onClick = this.onClick.bind(this)} href = '/'>
                            <Block_2_item number = '8'  name = 'Сведение/мастеринг' price = '500/1500 грн.'/>
                        </a>
                        <a onClick = {this.onClick = this.onClick.bind(this)} href = '/'>
                            <Block_2_item number = '9'  name = 'Песня "под ключ"' price = 'от 5600 грн. (с вокалом)'/>
                        </a>
                        <a onClick = {this.onClick = this.onClick.bind(this)} href = '/' className = 'Block-2-container-cl-item'>
                            <div className = 'Block-2-container-cl-item-number-10'>
                                10
                            </div>
                            <div className = 'Block-2-container-cl-item-box'>
                                <div className = 'Block-2-container-cl-item-box-name'>Редактирование, оцифровка аудио</div>
                                <div className = 'Block-2-container-cl-item-box-price'>от 150 грн.</div>
                            </div>
                        </a>

                    </div>
                </div>
            </div>
        )
    }
}


