import React from 'react';
import ChannelRow from './ChannelRow';
import '../SearchPage/SearchPage.css';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import VideoRow from './VideoRow';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage_filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />
            <ChannelRow image="//yt3.ggpht.com/a/AATXAJw6qBlNzbAweKz7UlC44hYLoEtdoXGmzN8IJno3mg=s176-c-k-c0x00ffffff-no-rj-mo" channel="Traversy Media" verified subs="1.28M" noOfVideos="831" description="features the best online web development and programming tutorials for all of the latest web technologies..." />
            <hr />

            <VideoRow views="15K" subs="1.28M" description="In this video we will build a simple server-side rendered blog with Next.js and the Ghost CMS for the backend. Codedamn" timestamp="2 days ago" channel="Traversy Media" title="Build a Blog With Next.js &amp; Ghost" image="https://i.ytimg.com/vi/1SYU1GorO6Y/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLBcWhMc61VpUlNQx1SSRxy2ia1Ojg" />

            <VideoRow views="15K" subs="1.28M" description="In this video we will build a simple server-side rendered blog with Next.js and the Ghost CMS for the backend. Codedamn" timestamp="2 days ago" channel="Traversy Media" title="Build a Blog With Next.js &amp; Ghost" image="https://i.ytimg.com/vi/1SYU1GorO6Y/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLBcWhMc61VpUlNQx1SSRxy2ia1Ojg" />

            <VideoRow views="15K" subs="1.28M" description="In this video we will build a simple server-side rendered blog with Next.js and the Ghost CMS for the backend. Codedamn" timestamp="2 days ago" channel="Traversy Media" title="Build a Blog With Next.js &amp; Ghost" image="https://i.ytimg.com/vi/1SYU1GorO6Y/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLBcWhMc61VpUlNQx1SSRxy2ia1Ojg" />

            <VideoRow views="15K" subs="1.28M" description="In this video we will build a simple server-side rendered blog with Next.js and the Ghost CMS for the backend. Codedamn" timestamp="2 days ago" channel="Traversy Media" title="Build a Blog With Next.js &amp; Ghost" image="https://i.ytimg.com/vi/1SYU1GorO6Y/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLBcWhMc61VpUlNQx1SSRxy2ia1Ojg" />

            <VideoRow views="15K" subs="1.28M" description="In this video we will build a simple server-side rendered blog with Next.js and the Ghost CMS for the backend. Codedamn" timestamp="2 days ago" channel="Traversy Media" title="Build a Blog With Next.js &amp; Ghost" image="https://i.ytimg.com/vi/1SYU1GorO6Y/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLBcWhMc61VpUlNQx1SSRxy2ia1Ojg" />

            <VideoRow views="15K" subs="1.28M" description="In this video we will build a simple server-side rendered blog with Next.js and the Ghost CMS for the backend. Codedamn" timestamp="2 days ago" channel="Traversy Media" title="Build a Blog With Next.js &amp; Ghost" image="https://i.ytimg.com/vi/1SYU1GorO6Y/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLBcWhMc61VpUlNQx1SSRxy2ia1Ojg" />
        </div>
    )
}

export default SearchPage
