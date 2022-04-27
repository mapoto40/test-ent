import React from 'react'
import Logo from '../Components/logo'
import s from './css/ins.module.css'

const Pageinscription = () => {
    return( <div className={s.firstdiv}>
                <div className={s.form}>
                    <center><Logo/></center>
                    <label for="id_pseudo">Your pseudo_</label> <br/>
                    <input type="text" id="id_pseudo" placeholder='Pseudo'/> <br/>

                    <label for="id_email">Your email_</label> <br/>
                    <input type="text" id="id_email" placeholder='email@email/com'/> <br/>

                    <label for="id_psw">Your password_</label> <br/>
                    <input type="text" id="id_psw" placeholder='****'/> <br/>

                    <label for="id_psw2">Password confirmation_</label> <br/>
                    <input type="text" id="id_psw2" placeholder='****'/> <br/>
                </div>
            </div>
    )
}

export default Pageinscription