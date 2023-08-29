const screen1 = document.getElementById('screen1');
const screen2 = document.getElementById('screen2');
const screen3 = document.getElementById('screen3');

const homeFooterUl = Array.from(document.getElementById("home-footer").getElementsByTagName("li"));

const weeks = Array.from(document.getElementsByClassName("weeks")[0].getElementsByTagName("li"));

const highlights = Array.from(document.getElementsByClassName("highlights")[0].getElementsByTagName("li"));

window.onload = () => {
    setTimeout(() => {
        screen1.style.top = "-20px";
        setTimeout(() => {
            screen2.style.top = "0";
        }, 100);
        setTimeout(() => {
            screen3.style.top = "20px";
        }, 200);

        setTimeout(() => {
            screen1.style.left = "-200px";
            screen1.style.opacity = "0";
            setTimeout(() => {
                screen2.style.left = "-200px";
                screen2.style.opacity = "0";
                setTimeout(() => {
                    screen3.style.left = "-200px";
                    screen3.style.opacity = "0";
                    setTimeout(() => {
                        document.getElementsByClassName("home")[0].style.left = "50%";
                        document.getElementsByClassName("home")[0].style.opacity = "1";
                        setTimeout(() => {
                            document.getElementById("card1").style.left = "20px";
                            document.getElementById("card1").style.opacity = "0.5";
                            setTimeout(() => {
                                document.getElementById("card2").style.left = "0";
                                document.getElementById("card2").style.opacity = "1";
                                setTimeout(() => {
                                    document.getElementById("card3").style.left = "-20px";
                                    document.getElementById("card3").style.opacity = "0.5";

                                    var interval = 100;
                                    setTimeout(() => {
                                        homeFooterUl.forEach((li, index) => {
                                            var i = interval * index;
                                            if (index == 0) i = 100;
                                            setTimeout(() => {
                                                li.style.left = "0";
                                                if (index == 0 || index == 8)
                                                    li.style.opacity = "0.2";
                                                else if (index == 1 || index == 7)
                                                    li.style.opacity = "0.3";
                                                else if (index == 2 || index == 6)
                                                    li.style.opacity = "0.5";
                                                else if (index == 3 || index == 5)
                                                    li.style.opacity = "0.7";
                                                else li.style.opacity = "1";
                                            }, i);
                                        });
                                    }, 100);

                                }, 100);
                            }, 100);
                        }, 500);
                    }, 500);
                }, 100);
            }, 100);
        }, 2000); //2000
    }, 500);
};

function ShowWeatherPanel() {
    document.getElementsByClassName("home")[0].getElementsByTagName("header")[0].style.left = "-100%";
    document.getElementsByClassName("home")[0].getElementsByTagName("header")[0].style.opacity = "0";

    setTimeout(() => {
        document.getElementById("card1").style.left = "-200px";
        document.getElementById("card1").style.opacity = "0";
        setTimeout(() => {
            document.getElementById("card2").style.left = "-200px";
            document.getElementById("card2").style.opacity = "0";
            setTimeout(() => {
                document.getElementById("card3").style.left = "-200px";
                document.getElementById("card3").style.opacity = "0";

                var interval = 100;
                setTimeout(() => {
                    homeFooterUl.forEach((li, index) => {
                        var i = interval * index;
                        if (index == 0) i = 100;
                        setTimeout(() => {
                            li.style.left = "-200px";
                            li.style.opacity = "0";
                        }, i);
                    });

                    setTimeout(() => {
                        document.getElementsByClassName("weather-panel")[0].style.left = "0";

                        setTimeout(() => {
                            weeks.forEach((week, index) => {
                                var i = interval * index;
                                if (index == 0) i = 1;
                                setTimeout(() => {
                                    week.style.left = "0";
                                    week.style.opacity = "1";
                                }, i);
                            });
                        }, 500);

                        setTimeout(() => {
                            highlights.forEach((highlight, index) => {
                                var i = interval * index;
                                if (index == 0) i = 1;
                                setTimeout(() => {
                                    highlight.style.left = "0";
                                    highlight.style.opacity = "1";
                                }, i);
                            });
                        }, 1000);
                    }, 1000);

                }, 100);

            }, 100);
        }, 100);
    }, 100);
}

function GoBack() {
    var interval = 100;

    const highlightstmp = [...highlights];
    highlightstmp.reverse();

    highlightstmp.forEach((highlight, index) => {
        var i = interval * index;
        if (index == 0) i = 1;
        setTimeout(() => {
            highlight.style.left = "200px";
            highlight.style.opacity = "0";
        }, i);
    });

    const weekstmp = [...weeks];
    weekstmp.reverse();

    weekstmp.forEach((week, index) => {
        var i = interval * index;
        if (index == 0) i = 1;
        setTimeout(() => {
            week.style.left = "200px";
            week.style.opacity = "0";
        }, i);
    });

    setTimeout(() => {
        document.getElementsByClassName("weather-panel")[0].style.left = "100%";

        setTimeout(() => {
            const homeFooterUltmp = [...homeFooterUl];
            homeFooterUltmp.reverse();

            homeFooterUltmp.forEach((li, index) => {
                var i = interval * index;
                if (index == 0) i = 100;
                setTimeout(() => {
                    li.style.left = "0";
                    if (index == 0 || index == 8)
                        li.style.opacity = "0.2";
                    else if (index == 1 || index == 7)
                        li.style.opacity = "0.3";
                    else if (index == 2 || index == 6)
                        li.style.opacity = "0.5";
                    else if (index == 3 || index == 5)
                        li.style.opacity = "0.7";
                    else li.style.opacity = "1";
                }, i);
            });

            setTimeout(() => {
                document.getElementById("card3").style.left = "-20px";
                document.getElementById("card3").style.opacity = "0.5";
                setTimeout(() => {
                    document.getElementById("card2").style.left = "0";
                    document.getElementById("card2").style.opacity = "1";
                    setTimeout(() => {
                        document.getElementById("card1").style.left = "20px";
                        document.getElementById("card1").style.opacity = "0.5";

                        document.getElementsByClassName("home")[0].getElementsByTagName("header")[0].style.left = "0";
                        document.getElementsByClassName("home")[0].getElementsByTagName("header")[0].style.opacity = "1";
                    }, 100);
                }, 100);
            }, 500);

        }, 500);

    }, 800);
}