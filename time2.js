var recursive = function () {
    setTimeout(recursive, 1000);
    console.log('Thank God for making me understand');
};
recursive();