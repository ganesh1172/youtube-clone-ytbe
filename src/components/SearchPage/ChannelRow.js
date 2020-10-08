import React from 'react'
import { Avatar } from '@material-ui/core';
import './ChannelRow.css';
import Verified from '@material-ui/icons/CheckCircleOutlineOutlined';

function ChannelRow({ image, channel, verified, subs, noOfVideos, description }) {
    return (
        <div className="channelRow">
            <Avatar className="channelRow_logo" alt={channel} src={image} />
            <div className="channelRow_text">
                <h4>{channel} {verified && <Verified />}</h4>
                <p>{subs} subscribers • {noOfVideos} videos</p>
                <p><b>{channel}</b> {description}</p>
            </div>
        </div>
    )
}

export default ChannelRow
