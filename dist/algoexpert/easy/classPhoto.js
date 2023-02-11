"use strict";
const classPhotos = (redShirtHeights, blueShirtHeights) => {
    redShirtHeights.sort((a, b) => a - b);
    blueShirtHeights.sort((a, b) => a - b);
    let validRedInBack = true;
    let validBlueInBack = true;
    let i = 0;
    while (i < redShirtHeights.length && (validBlueInBack || validRedInBack)) {
        if (!validRedInBack && !validBlueInBack)
            break;
        if (redShirtHeights[i] <= blueShirtHeights[i])
            validRedInBack = false;
        if (redShirtHeights[i] >= blueShirtHeights[i])
            validBlueInBack = false;
        i++;
    }
    return validRedInBack || validBlueInBack;
};
