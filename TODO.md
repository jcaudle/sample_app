# Tasks to be accomplished in future revisions.

* Use `session` instead of `cookies` so that users are automatically signed out
when they close their browsers. *Hint:* Do a Google search on "Rails session".
* **(advanced)** Some sites use secure HTTP (HTTPS) for their signin pages.
Search online to learn how to use HTTPS in Rails, and then secure the Sessions
controller `new` and `create` actions. *Extra challenge:* Write tests for the
HTTPS functionality. (*Note:* I suggest doing this exercise only in development,
which does not require obtaining an SSL certificate or setting up the SSL
encryption machinery. Actually deploying an SSL-enabled site is *much* more
difficult.)
* Arrange for the Gravatar "change" link in `app/views/users/edit.html.erb` to
open in a new window (or tab). Hint: Search the web; you should find one
particularly robust method involving something called `_blank`.
* Signed-in users have no reason to access the `new` and `create` actions in the
Users controller. Arrange for such users to be redirected to the root url if
they do try to hit those pages.
* Add tests to check that the delete links in `app/views/users/_user.html.erb`
appear for admins but not for normal users.
* Modify the `destroy` action to prevent admin users from destroying themselves.
(Write a test first.)
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
* Add @replies.
* Add DM's.
* Add follower notifications.
* Add password reset capabilities.
* Add signup confirmation.
* Add RSS feed.
* Add a REST API.
* Add search.
