# Boursorama Login Chrome Extension

Boursorama Login brings back login autofill on [Boursorama][4] banking website,
avoiding the inconvenient virtual keyboard.

Configure your login/password in the options.
A click on the extension icon will open Boursorama banking website.
If not logged in, it will autofill the login/password, and you can connect
with a click on the login button.

Get it on [Chrome Web Store][1], or use the source to upload your own.

Bugs, comments, questions: create a [new issue][2].

## How it works

Like a lot of banks, [Boursorama][4] decided to ignore actual security and
deploy fake security: it gives its customers a weak 8 digit password (with a
digit-only username too) then asks you to enter that password on a random
virtual keyboard, breaking standard login autofill by password managers.
This extension brings login autofill back, by analyzing the
random-but-comparable virtual keyboard images using [Resemble.js][3] and
pressing the virtual keyboard on your behalf.

[1]: https://chrome.google.com/webstore/detail/boursorama-login/cfpllbjjlimhggjihfpiipbgmjgnemfm
[2]: https://github.com/StalkR/chrome-boursorama-login/issues/new
[3]: https://github.com/rsmbl/Resemble.js
[4]: https://www.boursorama-banque.com/

## Legal issues with Boursorama

Previous version of the Chrome extension included the Boursorama logo, only so
that users have a familiar experience, not with any desire to cause harm.

Unfortunately, Boursorama, instead of improving the security and usability
of their online banking, or attempting to contact the extension author directly
at the e-mail address publicly visible on the Google Chrome Web Store,
preferred to send their lawyers to complain to Google Chrome Web Store on
2019-10-03 for allegedly infringing the Boursorama logo.

This is the original text from their complaint:

> This content reproduces without authorization the logo BOURSORAMA, French
> mark n ° 3676765 registered on 19.12.2010.

Subsequently on 2019-10-23, without attempting to contact the extension author
to give them a chance to respond and issue a modified extension, Google removed
the extension from the Google Chrome Web Store, and notified the extension
author.
Importantly, this did not uninstall the extension from the existing 37 users,
according to the Google Chrome Web Store statistics, who still have an
allegedly infringing extension installed.
To remediate this, the author tried to push a self-uninstalling dummy
extension, which would have uninstalled the extension from all 37 users next
time the extension updades, but as of 2019-10-28 the new version was left by
Google Chrome Web Store in a TAKEN DOWN Pending Review state, and never pushed
to users.
The responsibility for not uninstalling an allegedly infringing extension then
falls back on Google.

Finally, in their complaint, Boursorama alleged the extension is a phishing
attempt:

> In addition, there is a risk regarding the personal data of users who must
> indicate the bank details. This is clearly a phishing attempt.

This is false, as shown by the extension source code, visible in clear,
unobfuscated and unoptimized, in the extension ZIP, as well as on the github
source code repository.
Users should indeed remain careful with their bank details, which is why this
README invited and still invite users either to install from the Chrome Web
Store or to use the source to upload their own version of the extension,
therefore avoiding the risk of sharing their bank details.

The new version of the extension no longer includes the Boursorama logo, but a
simple pink-colored B in the Tahoma font.
It is less convenient for users, who find it useful to see their bank logo,
but hopefully satisfies Boursorama and its lawyers.
The intention of this extension is just to provide better usability to their
customers, there is no ill intention of any kind.

Boursorama, if you still have questions or concerns with this extension, please
attempt to contact the author directly, e.g. by creating a [new issue][2],
rather than issuing yet another takedown request, time consuming for both
parties.
