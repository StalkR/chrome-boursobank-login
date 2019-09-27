# Boursorama Login Chrome Extension

Boursorama Login automatically logs you in on Boursorama banking website,
their annoying virtual keyboard.

Configure your login/password in the options. You can click on the extension
icon to disable automatic login, and enable it back with another click.

Like a lot of banks, [Boursorama][4] decided to ignore actual security and
deploy fake security: it gives its customers a weak 8 digit password (with a
digit-only username too) then asks you to enter that password on a random
virtual keyboard, breaking password managers. This extension brings automatic
login back, by analyzing the random-but-comparable virtual keyboard images
using [Resemble.js][3] and sending the expected input.

Get it on [Chrome Web Store][1], or use the source to upload your own.

Bugs, comments, questions: create a [new issue][2].

[1]: https://chrome.google.com/webstore/detail/boursorama-login/iillejedpnppkgadalbechijhnppfhpg
[2]: https://github.com/StalkR/chrome-boursorama-login/issues/new
[3]: https://github.com/rsmbl/Resemble.js
[4]: https://www.boursorama-banque.com/
