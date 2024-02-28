const $ = (element) => (document.querySelector(element));
const $$ = element => (document.querySelectorAll(element));

let tl = gsap.timeline();



// Calling functins
loadingAnimatin();
mouseFollower();
test();




// Creating functions
function loadingAnimatin() {
    tl
        .from('#loader h1 span', {
            top: "110%",
            duration: .6,
            stagger: .1,
            onComplete: () => {
                count = 0;
                const id = setInterval(() => {
                    if (count < 100) {
                        document.querySelector('#loader h1:first-child>span pre p').innerHTML = `${++count}`;
                    } else {
                        count = 100;
                        clearInterval(id);

                        tl
                            .to("#loader h1 span, .loader-container>p", {
                                opacity: 0,
                                stagger: .05,
                                delay: .5
                            })

                            .to("#loader", {
                                top: "-100%",
                                duration: 1,
                                ease: Expo.easeInOut,
                                onComplete: () => {
                                    $("#loader").remove();
                                }
                            });
                    }
                }, 30);
                $("#loader h1:last-child>span span:last-child").style["-webkit-animation"] = "now-anime 1.5s infinite linear";
                $("#loader h1:last-child>span span:last-child").style.animation = "now-anime 1.5s infinite linear";
            }
        })
        .from("#loader h1:first-child>span pre", {
            opacity: 0,
            duration: .6,
            delay: -.5
        })
        .from(".loader-container>p", {
            opacity: 0,
            duration: 1,
            delay: -.5
        })
}

function mouseFollower() {
    const bigCircleElement = $('.big-circle');
    const smallCircleElement = $('.small-circle');

    const mouse = { x: 0, y: 0 },
          bigCircle = { x: 0, y: 0 },
          smallCircle = { x: 0, y: 0 };

    window.onmousemove = e => {
        mouse.x = e.x;
        mouse.y = e.y;
    }

    const smallCircleSpeed = 0.5;
    const bigCircleSpeed = 0.15;

    const tick = () => {
    // Move big circle
    bigCircle.x += (mouse.x - bigCircle.x) * bigCircleSpeed;
    bigCircle.y += (mouse.y - bigCircle.y) * bigCircleSpeed;
    bigCircleElement.style.transform = `translate(${bigCircle.x}px, ${bigCircle.y}px)`;

    // Move small circle
    smallCircle.x += (mouse.x - smallCircle.x) * smallCircleSpeed;
    smallCircle.y += (mouse.y - smallCircle.y) * smallCircleSpeed;
    smallCircleElement.style.transform = `translate(${smallCircle.x}px, ${smallCircle.y}px)`;

    window.requestAnimationFrame(tick);
    }

    tick();
}


function test() {
    gsap.set("#loader", { display: "none" })
}