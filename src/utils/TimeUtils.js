

export function formatTimeToMin(time) {
    if (time <= 60) {
        return '00:' + time;
    } else {
        let minu = Math.floor(time / 60);
        let sec = time % 60;
        if (minu < 10) {
            minu = '0' + minu
        }
        if (sec < 10) {
            sec = '0' + sec
        }
        return minu + ':' + sec;
    }

}