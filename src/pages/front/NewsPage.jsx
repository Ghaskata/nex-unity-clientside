import './css/NewsPage.css';
import React, { useState, useEffect } from 'react';

const NewsPage = () => {
    const [Jobs, setJobs] = useState([]);

    useEffect(() => {
        // Fetch job data from the API
        fetch('https://newsapi.org/v2/everything?q=apple&from=2024-03-11&to=2024-03-11&sortBy=popularity&apiKey=b06331be019b4d71b76b9795d6a30fe9')
            .then(response => response.json())
            .then(data => {
                setJobs(data.articles);
            })
            .catch(error => console.error('Error fetching job data:', error));
          }, []); 
          
          console.log(Jobs);
    return (
        <section className='recentNews'>
            <div className='container '>
                <h2 class="news-title !text-textPrimary">Recent News</h2>
                <div class="grid grid-cols-1 lg:grid-cols-2 3xl:grid-cols-3">
                {Jobs.map( article => (
                    <div class="ct-blog">
                        <div class="inner !bg-backgroundv2">
                            <div class="fauxcrop">
                                {/* <img alt="News Entry" src="../../assets/images/about/businessman-pointing.jpg" /> */}
                                <img alt="News Entry" src={article.urlToImage} />

                            </div>
                            <div class="ct-blog-content !bg-backgroundv2">
                                <div class="ct-blog-date !text-textPrimary">
                                <span>{new Date(article.publishedAt).getDate()}</span>
                                        <strong>{new Date(article.publishedAt).toLocaleString('default', { month: 'long' })}</strong>
                                </div>
                                <div class="ct-blog-header  !text-textPrimary">
                                    {article.title}
                                    <p class="ct-blog-description  !text-textPrimary">
                                          {article.description}
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
                   
                </div>
            </div>
        </section>
    )
}

export default NewsPage