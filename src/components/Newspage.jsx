import React, { useEffect, useState } from 'react'
import Newscard from './Newscard'

function Newspage({ category }) {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=bfe35961c9814731982dbaea8404e51b`;
        fetch(url).then((response) => response.json()).then((data) => setArticles(data.articles));
    }, [category])
    return (
        <div>
            <h1 className='heading text-center'>Trending <span>News</span></h1>
            {articles && articles.map((news, index) => {
                return <Newscard key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
            })}
        </div>
    )
}

export default Newspage


//GET https://newsapi.org/v2/top-headlines?country=us&apiKey=bfe35961c9814731982dbaea8404e51b
