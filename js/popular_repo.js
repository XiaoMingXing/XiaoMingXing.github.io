var credentials = {
    clientId: "41f851c4a3766b1d8982",
    clientSecret: "7bd149482049c745370709ec32daed6375afa9d9"
};

var popular_repo = function () {

    var handleGithub = function () {
        var name = "";
        var repo = "";
        var url = "http://api.github.com/repos" + name + "/" + repo;
        if (credentials) {
            url += ("?client_id=" + credentials.clientId + "&client_secret=" + credentials.clientSecret);
        }
        $.get(url, function (result) {
            console.log(result);
        })
    };

    return {
        init: function () {
            handleGithub();
        }
    }
};

//$(popular_repo().init);