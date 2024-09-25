const rightEye = document.querySelector('#right-eye');
const leftEye = document.querySelector('#left-eye');
let animating = false;
let delayTime = 2000;

const lookRight = () => {
    rightEye.classList.add('look-right');
    leftEye.classList.add('look-right');
    animating = true;
    setTimeout(() => {
        rightEye.classList.remove('look-right');
        leftEye.classList.remove('look-right');
        animating = false;
    }, delayTime);
}

const lookLeft = () => {
    rightEye.classList.add('look-left');
    leftEye.classList.add('look-left');
    animating = true;
    setTimeout(() => {
        rightEye.classList.remove('look-left');
        leftEye.classList.remove('look-left');
        animating = false;
    }, delayTime);
}

const lookSad = () => {
    rightEye.classList.add('look-sad-right');
    leftEye.classList.add('look-sad-left');
    animating = true;
    setTimeout(() => {
        rightEye.classList.remove('look-sad-right');
        leftEye.classList.remove('look-sad-left');
        animating = false;
    }, delayTime);
}

const lookCurious = () => {
    rightEye.classList.add('small-eye');
    // leftEye.classList.add('look-sad');
    animating = true;
    setTimeout(() => {
        rightEye.classList.remove('small-eye');
        // leftEye.classList.remove('look-sad');
        animating = false;
    }, delayTime);
}

const lookAngry = () => {
    rightEye.classList.add('look-angry-right');
    leftEye.classList.add('look-angry-left');
    animating = true;
    setTimeout(() => {
        rightEye.classList.remove('look-angry-right');
        leftEye.classList.remove('look-angry-left');
        animating = false;
    }, delayTime);
}

const wink = () => {
    rightEye.classList.add('winking');
    animating = true;
    setTimeout(() => {
        rightEye.classList.remove('winking');
        animating = false;
    }, delayTime);
}

const smallEyes = () => {
    rightEye.classList.add('small-eye');
    leftEye.classList.add('small-eye');
    animating = true;
    setTimeout(() => {
        rightEye.classList.remove('small-eye');
        leftEye.classList.remove('small-eye');
        animating = false;
    }, delayTime);
}

const faces = (faceNumber) => {
    rightEye.classList.add(`face${faceNumber}`);
    leftEye.classList.add(`face${faceNumber}`);
    animating = true;
    setTimeout(() => {
        rightEye.classList.remove(`face${faceNumber}`);
        leftEye.classList.remove(`face${faceNumber}`);
        animating = false;
    }, delayTime);
}

const blinking = () => {
    setInterval(() => {
        if ( ! animating ) {
            rightEye.classList.add('blinking');
            leftEye.classList.add('blinking');
            setTimeout(() => {
                rightEye.classList.remove('blinking');
                leftEye.classList.remove('blinking');
            }, 1000);
        }
    }, 6000);
}

blinking();

let prevAction = null;

setInterval(() => {
    fetch('action.json').then(response => {
        return response.json();
    }).then(json => {
        if ( json.action != prevAction ) {
            let theAction = json.action;
            prevAction = theAction;
            if ( theAction == 'wink' ) { wink(); }
            if ( theAction == 'curious' ) { lookCurious(); }
            if ( theAction == 'look-right' ) { lookRight(); }
            if ( theAction == 'look-left' ) { lookLeft(); }
            if ( theAction == 'angry' ) { lookAngry(); }
            if ( theAction == 'sad' ) { lookSad(); }
            if ( theAction == 'angry' ) { lookAngry(); }
            if ( theAction == 'small-eyes' ) { smallEyes(); }
            if ( theAction == 'face1' ) { faces(1); }
        }
        
    });
}, 1000);
