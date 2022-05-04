import React from 'react'
import Logo from '../Components/logo'
import s from './css/ins.module.css'

const Pageinscription = () => {
    return(
            <div className={s.parent}>
                <div className={s.enfant}>
                    <div className={s.head_ins}>
                        <div>Already have an account ? 
                            <svg class={s.svg_class} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <title>Chevron Forward Circle</title>
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="52" d="M230 382l96-125-96-125"/>
                            </svg>
                        </div>
                    </div>
                    <div className={s.foot}>
                        <div className={s.logo_adjust}><Logo/> <br/>
                            <p>test</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Pageinscription

/*-
    <center><Logo/></center>
    <label for="id_pseudo">Your pseudo_</label> <br/>
    <input type="text" id="id_pseudo" placeholder='Pseudo'/> <br/>

    <label for="id_email">Your email_</label> <br/>
    <input type="text" id="id_email" placeholder='email@email/com'/> <br/>

    <label for="id_psw">Your password_</label> <br/>
    <input type="text" id="id_psw" placeholder='****'/> <br/>

    <label for="id_psw2">Password confirmation_</label> <br/>
    <input type="text" id="id_psw2" placeholder='****'/> <br/>
-*/