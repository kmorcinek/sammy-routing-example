(function ($) {
    var app = $.sammy(function () {

        this.get('#welcome', function () {
            $('#welcome').removeClass('hidden');
            $('#picture').addClass('hidden');
            $('#message').addClass('hidden');
        });

        this.get('#picture', function () {
            $('#welcome').addClass('hidden');
            $('#picture').removeClass('hidden');
            $('#message').addClass('hidden');
        });

        this.get('#info', function () {
            $('#welcome').addClass('hidden');
            $('#picture').addClass('hidden');
            $('#message').removeClass('hidden');
        });

        this.get('#message/:messageId', function () {
            $('#message').text("You are viewing message number: " + this.params.messageId);

            $('#welcome').addClass('hidden');
            $('#picture').addClass('hidden');
            $('#message').removeClass('hidden');
        });

        this.get('#:unknown', function () {
            alert("Unknown routing path: " + this.params.unknown);

            this.redirect('#welcome');
        });
    });

    $(function () {
        app.run('#welcome');
    });
})(jQuery);
