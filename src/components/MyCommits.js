import { useEffect, useState } from 'react'
import axios from 'axios'

function MyCommits() {

    const [repos, setRepos] = useState([]);

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://api.github.com/users/jonathanmelitski/events/public',
        })
        .then(async (response) => {
            const uniquePromises = Array.from(new Set(response.data.filter((el) => {
                return el.type === "PushEvent"
            }).map((el) => {
                return el.payload.repository_id
             }))).map(async (el) => {
                var data = null;
                await axios({
                    method: 'get',
                    url: 'https://api.github.com/repositories/' + el
                })
                .then((repo) => {
                    data = repo.data
                })
                return data;
             })
             const repos = (await Promise.all(uniquePromises)).slice(0,3)
             console.log(repos)
             setRepos(repos)
        })
    }, [])


    return (
        repos.length !== 0 ?
            <div className='grid grid-row-2 align-items-center text-white font-mono text-center px-2'>
                Recent Activity
                <ul className='border-white border-2 rounded-lg text-left px-2 divide-y-2'>
                    {repos.map((el, i) => {                        
                        return (
                            <li key={el.id}>
                                <a href={el.html_url}>
                                    <div className='py-4 hover:underline underline-offset-2'>
                                        <div className="font-bold  ">
                                            {(i+1) + ". " + el.full_name}
                                        </div>
                                        <div className="text-sm">
                                            {el.description}
                                        </div>
                                        
                                    </div>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        : <div></div>
    )
}

export default MyCommits;