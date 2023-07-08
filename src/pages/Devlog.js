import Modal from "../components/Modal"
import supabase from "../config/supabaseClient"
import { useEffect, useState } from 'react'

export default function Devlog() {
    const [fetchError, setFetchError] = useState(null)
    const [devlog, setDevlog] = useState(null)

    useEffect(() => {
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
                console.log("fetched data:", devlog)
                setDevlog(data)
                setFetchError(null)
            }
        }
        fetchDevlog()

    }, [devlog])

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
            </div>

        </div>
    )
}