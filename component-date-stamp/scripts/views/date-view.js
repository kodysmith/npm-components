    // The templates are already registered, so we are ready to render!

require(["node_modules/dust/lib/dust"], function(dust) {
    dust.render('', { world: "Jupiter" }, function(err, out) {
        // dust will call `require(['tmpl/hello'])` since that template isn't loaded yet
    });
});