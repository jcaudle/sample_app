# Tasks to be accomplished in future revisions.

* Add tests for the sidebar micropost counts (including proper pluralization).
* __(mainly for designers)__ Modify the microposts listing to use an ordered
list instead of a table. (Note: this is how Twitter displays its status
updates.) Then add the appropriate CSS to make the resulting feed not look
like crap.
* Add tests for micropost pagination.
* Refactor the Home page to use separate partials for the two branches of the
`if-else` statement.
* Write a test to make sure delete links do not appear for microposts not
created by the current user.
* Add a nested route so that `/users/1/microposts` shows all the microposts for
user 1. (You will also have to add a Microposts controller `index` action and
corresponding view.)
* Very long words currently break our layout. Fix this problem using the `wrap`
helper defined in `app/helpers/microposts_helper.rb`. (Note the use of
the `raw` method to prevent Rails from escaping the resulting HTML, together
with the `sanitize` method needed to prevent cross-site scripting.)