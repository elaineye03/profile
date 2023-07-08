import Modal from "../components/Modal"
import supabase from "../config/supabaseClient"
import { useEffect, useState } from 'react'

export default function Devlog() {
    console.log(supabase)
    const [fetchError, setFetchError] = useState(null)
    const [devlog, setDevlog] = useState(null)
    console.log("are you in")

    useEffect(() => {
        console.log("are you in", devlog)
        const fetchDevlog = async () => {
            const { data, error } = await supabase
                .from('devlog')
                .select()

            if (error) {
                setFetchError('could not fetch the devlog')
                setDevlog(null)
                console.log(error)
            }
            if (data) {
                console.log("are you in data", data)
                setDevlog(data)
                setFetchError(null)
            }
        }
        fetchDevlog()

    }, [])

    return (
        <div class="bg-fill bg-hero-pattern">
                <div class="main-article">
                    <div class="absolute top-16 main-article__content">
                        <h1 class="main-article__header text-white font-bold">Devlog</h1>
                        <h1 class="main-article__paragraph">A place to jot down new discoveries.</h1>
                    </div>


                </div>
                <div class="absolute left-20 right-20 bottom-20 top-72 grid flex flex-col items-center gap-20 lg:grid-cols-4 sm:grid-cols-2 overflow-auto">
                    {fetchError && (<p>{fetchError}</p>)}
                    {devlog && devlog.map(devlog => (
                        <Modal date={devlog.name} description={devlog.description} />
                    ))}
                    {/* <Modal date='04.03.23' description='this is fucking woieoiwefioew' />
    <Modal date='04.03.23' description='this is fucking woieoiwefioew' />
    <Modal date='04.03.23' description='this is fucking woieoiwefioew' />
    <Modal date='04.03.23' description='this is fucking woieoiwefioew' />
    <Modal date='04.03.23' description='this is fucking woieoiwefioew' />
    <Modal date='04.03.23' description='this is fucking woieoiwefioew' />
    <Modal date='04.03.23' description='this is fucking woieoiwefioew' />

    
    <Modal date='12.03.23' description='The information contained<br/><br/><br/><br/><br/> in this e-mail is confidential and/or proprietary to Capital One and/or its affiliates and may only be used solely in performance of work or services for Capital One. <br/>
    The information transmitted herewith is intended only for use by the individual or entity to which it is addressed. If the reader of this message is not the intended recipient, you are hereby notified that any review, retransmission, dissemination, distribution, copying or other use of, or taking of any action in reliance upon this information is strictly prohibited. If you have received this communication in error, please contact the sender and delete the material from your computer.
    The information contained in this e-mail is confidential and/or proprietary to Capital One and/or its affiliates and may only be used solely in performance of work or services for Capital One. The information transmitted herewith is intended only for use by the individual or entity to which it is addressed. If the reader of this message is not the intended recipient, you are hereby notified that any review, retransmission, dissemination, distribution, copying or other use of, or taking of any action in reliance upon this information is strictly prohibited. If you have received this communication in error, please contact the sender and delete the material from your computer.
    The information contained in this e-mail is confidential and/or proprietary to Capital One and/or its affiliates and may only be used solely in performance of work or services for Capital One. The information transmitted herewith is intended only for use by the individual or entity to which it is addressed. If the reader of this message is not the intended recipient, you are hereby notified that any review, retransmission, dissemination, distribution, copying or other use of, or taking of any action in reliance upon this information is strictly prohibited. If you have received this communication in error, please contact the sender and delete the material from your computer.
    The information contained in this e-mail is confidential and/or proprietary to Capital One and/or its affiliates and may only be used solely in performance of work or services for Capital One. The information transmitted herewith is intended only for use by the individual or entity to which it is addressed. If the reader of this message is not the intended recipient, you are hereby notified that any review, retransmission, dissemination, distribution, copying or other use of, or taking of any action in reliance upon this information is strictly prohibited. If you have received this communication in error, please contact the sender and delete the material from your computer.
    The information contained in this e-mail is confidential and/or proprietary to Capital One and/or its affiliates and may only be used solely in performance of work or services for Capital One. The information transmitted herewith is intended only for use by the individual or entity to which it is addressed. If the reader of this message is not the intended recipient, you are hereby notified that any review, retransmission, dissemination, distribution, copying or other use of, or taking of any action in reliance upon this information is strictly prohibited. If you have received this communication in error, please contact the sender and delete the material from your computer.
    The information contained in this e-mail is confidential and/or proprietary to Capital One and/or its affiliates and may only be used solely in performance of work or services for Capital One. The information transmitted herewith is intended only for use by the individual or entity to which it is addressed. If the reader of this message is not the intended recipient, you are hereby notified that any review, retransmission, dissemination, distribution, copying or other use of, or taking of any action in reliance upon this information is strictly prohibited. If you have received this communication in error, please contact the sender and delete the material from your computer.' /> */}

                </div>

            </div>



    )
}