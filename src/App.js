import React, {useState, useEffect} from 'react'
import {useFetch} from './useFetch'
import Follower from './Follower'

function App() {
    const {loading, data} = useFetch()
    const [page, setPage] = useState(0)
    const [followers, setFollowers] = useState([])


    useEffect(() => {
        if (loading) return
        setFollowers(data[page])
    }, [page, loading])

    useEffect(() => {
        if (!loading) {
            document.querySelector('.prev-btn').disabled = true
        }
        if (page > 0) {
            document.querySelector('.prev-btn').disabled = false
        }

        if (page === data.length - 1) {
            document.querySelector('.next-btn').disabled = true
        }

        if (page < data.length - 1) {
            document.querySelector('.next-btn').disabled = false
        }
    }, [loading, page])


    const handlePage = (index) => {
        setPage(index)
    }

    const nextPage = () => {
        setPage((oldPage) => {
            let nextPage = oldPage + 1
            return nextPage
        })
    }

    const prevPage = () => {
        setPage((oldPage) => {
            let prevPage = oldPage - 1
            return prevPage
        })
    }


    return (
        <main>
            <div className="section-title">
                <h1>{loading ? 'loading...' : 'pagination'}</h1>
                <div className="underline"></div>
            </div>
            <section className="followers">
                <div className="container">
                    {
                        followers.map(item =>
                            <Follower key={item.id} {...item}/>
                        )
                    }
                </div>
                {
                    !loading &&
                    <div className="btn-container">
                        <button className="prev-btn" onClick={prevPage}>
                            prev
                        </button>
                        {
                            data.map((item, index) =>
                                <button
                                    key={index}
                                    className={`page-btn ${index === page ? 'active-btn' : null}`}
                                    onClick={() => handlePage(index)}>
                                    {index + 1}
                                </button>
                            )
                        }
                        <button className="next-btn" onClick={nextPage}>
                            next
                        </button>
                    </div>
                }
            </section>
        </main>
    )
}

export default App
