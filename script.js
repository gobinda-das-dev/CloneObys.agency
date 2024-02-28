const $ = (element) => (document.querySelector(element));
const $$ = element => (document.querySelectorAll(element));

let tl = gsap.timeline();



// Calling functins
loadingAnimatin();




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
