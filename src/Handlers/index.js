import moment from 'moment';
import {Image, } from 'react-native';
import React from 'react';

export const TimeDifference = (date) => {
    let timeDifference = moment.utc(moment(new Date()).diff(moment(new Date(date))));
    let hours = timeDifference.hour();
    let minutes = timeDifference.minute();
    let seconds = timeDifference.seconds();
    if (hours > 0 && hours >= 24 && hours <= 48) {
        return "Yesturday"
    } else if (hours > 0 && hours <= 24) {
        return hours + "h"
    } else if (hours === 0 && minutes > 0) {
        return minutes + "min"
    } else if (hours === 0 && minutes === 0 && seconds > 0) {
        return seconds + "sec"
    } else {
        return new Date(date).toDateString();
    }
}

export const getCoverImage = (coverPicture, logo) => {
    if (coverPicture == "none" || coverPicture == "" || coverPicture == "null" || coverPicture == null) {
        return <Image source={require('../Assets/netwrokicon1.png')} style={logo} />
    } else {
        return <Image source={{ uri: coverPicture }} style={logo} />
    }
}