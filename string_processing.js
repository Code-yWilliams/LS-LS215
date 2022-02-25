// Implement a function that takes a string as an argument and returns
// a new string that contains the original string in reverse.

// function reverse(string) {
//   let result = '';
//   for (let i = string.length - 1; i >= 0; i--) {
//     result += string[i];
//   }
//   return result;
// }

// console.log(reverse('hello'));                  // returns "olleh"
// console.log(reverse('The quick brown fox'));    // returns "xof nworb kciuq ehT"



// Write a function that generates and returns an acronym from a string of words.
// For example, the function should return "PNG" for the string
// "Portable Network Graphics". Count compound words (words connected with a dash)
// as separate words.

// function acronym(string) {
//   string = string.replaceAll('-', ' ');
//   let result = '';
//   let words = string.split(" ");
//   words.forEach(word => result += word[0]);
//   return result.toUpperCase();
// }

// console.log(acronym('Portable Network Graphics'));                  // "PNG"
// console.log(acronym('First In, First Out'));                        // "FIFO"
// console.log(acronym('PHP: HyperText Preprocessor'));                // "PHP"
// console.log(acronym('Complementary metal-oxide semiconductor'));    // "CMOS"
// console.log(acronym('Hyper-text Markup Language'));                 // "HTML"



// Implement a function that checks whether an email address is valid.
// An email address has two parts: A "local part" and a "domain part."
// An @ sign separates the two parts: local-part@domain-part. The local
// part is the name of the mailbox; this is usually a username.
// The domain part is the domain name (e.g., gmail.com, yahoo.com.ph, or
//   myCompanyName.com). The domain name contains a server name
//   (sometimes called the mail server name) and a top-level domain (.com, .ph, etc.).

// For this practice problem, use the following criteria to determine whether
// an email address is valid:

// There must be one @ sign.
// The local part must contain one or more letters (A-Z, a-z) and/or digits (0-9).
// It may not contain any other characters.
// The domain part must contain two or more components with a single dot (.)
// between each component. Each component must contain one or more letters (A-Z, a-z) only.
// To keep things simple, you don't need to check whether the domain part or top-level
// domain is "real" or "official".

// Note: don't use this criteria for real email validation logic in your programs.
// We are using greatly simplified criteria to let you concentrate on the fundamentals
// of JavaScript, and not on the specifics of email addresses.


// function hasAtSign(string) {
//   return /@/.test(string);
// }

// function hasOnlyAlphanumerics(string) {
//   return !/[^a-zA-Z0-9]/.test(string);
// }

// function hasOnlyLetters(string) {
//   return !/[^a-zA-Z]/.test(string);
// }

// function isValidLocalPart(localPartString) {
//   return hasOnlyAlphanumerics(localPartString);
// }

// function isValidDomainPart(domainPartArray) {
//   return (domainPartArray.length >= 2 &&
//   domainPartArray.every(part => part.length > 0) &&
//   domainPartArray.every(part => hasOnlyLetters(part)));
// }

// function isValidEmail(email) {
//   let localPart = email.split('@')[0];
//   let domainPart = email.split('@')[1].split('.');
//   return isValidLocalPart(localPart) && isValidDomainPart(domainPart);
// }

// // OR...

// function isValidEmail(email) {
//   return /^[a-z0-9]+@([a-z]+\.)+[a-z]+$/i.test(email);
// }

// console.log(isValidEmail('Foo@baz.com.ph'));          // returns true
// console.log(isValidEmail('Foo@mx.baz.com.ph'));       // returns true
// console.log(isValidEmail('foo@baz.com'));             // returns true
// console.log(isValidEmail('foo@baz.ph'));              // returns true
// console.log(isValidEmail('HELLO123@baz'));            // returns false
// console.log(isValidEmail('foo.bar@baz.to'));          // returns false
// console.log(isValidEmail('foo@baz.'));                // returns false
// console.log(isValidEmail('foo_bat@baz'));             // returns false
// console.log(isValidEmail('foo@bar.a12'));             // returns false
// console.log(isValidEmail('foo_bar@baz.com'));         // returns false
// console.log(isValidEmail('foo@bar.....com'));         // returns false



// Write a function that takes a string as an argument and returns true if the
// string contains properly balanced parentheses, false otherwise. Parentheses
// are properly balanced only when '(' and ')' occur in matching pairs, with
// each pair starting with '('.

// function isBalanced(string) {
//   let parentheses = string.split("").filter(char => {
//     return (char === ')' || char === '(');
//   });

//   let counter = 0;
//   for (let i = 0; i < parentheses.length; i++) {
//     if (parentheses[i] === '(') {
//       counter += 1;
//     } else if (parentheses[i] === ')') {
//       counter -= 1;
//     }

//     if (counter < 0) {
//       return false;
//     }
//   }

//   return counter === 0;
// }

// console.log(isBalanced('What (is) this?'));        // true
// console.log(isBalanced('What is) this?'));         // false
// console.log(isBalanced('What (is this?'));         // false
// console.log(isBalanced('((What) (is this))?'));    // true
// console.log(isBalanced('((What)) (is this))?'));   // false
// console.log(isBalanced('Hey!'));                   // true
// console.log(isBalanced(')Hey!('));                 // false
// console.log(isBalanced('What ((is))) up('));       // false



// Implement a function that takes some text as an argument and logs
// some information about whether the text has a positive, negative,
// or neutral sentiment.

// let positiveWords = ['fortune', 'dream', 'love', 'respect', 'patience', 'devout', 'noble', 'resolution'];
// let negativeWords = ['die', 'heartache', 'death', 'despise', 'scorn', 'weary', 'trouble', 'oppress'];

// function sentiment(text) {
//   let words = text.toLowerCase().match(/[a-z']+/g);
//   let negatives = words.filter(word => negativeWords.includes(word));
//   let positives = words.filter(word => positiveWords.includes(word));
//   let negativeCount  = negatives.length;
//   let positiveCount = positives.length;
//   let sentimentValue = positiveCount - negativeCount;
//   let sentiment;

//   if (sentimentValue > 1) {
//     sentiment = 'Positive';
//   } else if (sentimentValue < 1) {
//     sentiment = 'Negative';
//   } else {
//     sentient = 'Neutral';
//   }

//   console.log(`There are ${positiveCount} positive words in the text.`);
//   console.log(`Positive sentiments: ${positives.join(', ')}`);
//   console.log()
//   console.log(`There are ${negativeCount} negative words in the text.`);
//   console.log(`Negative sentiments: ${negatives.join(', ')}`);
//   console.log();
//   console.log(`The sentiment of the text is ${sentiment}.`);
// }

// let textExcerpt = 'To be or not to be-that is the question:\n' +
//   'Whether \'tis nobler in the mind to suffer\n' +
//   'The slings and arrows of outrageous fortune,\n' +
//   'Or to take arms against a sea of troubles,\n' +
//   'And, by opposing, end them. To die, to sleep-\n' +
//   'No more-and by a sleep to say we end\n' +
//   'The heartache and the thousand natural shocks\n' +
//   'That flesh is heir to-\'tis a consummation\n' +
//   'Devoutly to be wished. To die, to sleep-\n' +
//   'To sleep, perchance to dream. Aye, there\'s the rub,\n' +
//   'For in that sleep of death what dreams may come,\n' +
//   'When we have shuffled off this mortal coil,\n' +
//   'Must give us pause. There\'s the respect\n' +
//   'That makes calamity of so long life.\n' +
//   'For who would bear the whips and scorns of time,\n' +
//   'Th\' oppressor\'s wrong, the proud man\'s contumely, [F: poor]\n' +
//   'The pangs of despised love, the law’s delay, [F: disprized]\n' +
//   'The insolence of office, and the spurns\n' +
//   'That patient merit of the unworthy takes,\n' +
//   'When he himself might his quietus make\n' +
//   'With a bare bodkin? Who would fardels bear, [F: these Fardels]\n' +
//   'To grunt and sweat under a weary life,\n' +
//   'But that the dread of something after death,\n' +
//   'The undiscovered country from whose bourn\n' +
//   'No traveler returns, puzzles the will\n' +
//   'And makes us rather bear those ills we have\n' +
//   'Than fly to others that we know not of?\n' +
//   'Thus conscience does make cowards of us all,\n' +
//   'And thus the native hue of resolution\n' +
//   'Is sicklied o\'er with the pale cast of thought,\n' +
//   'And enterprises of great pitch and moment, [F: pith]\n' +
//   'With this regard their currents turn awry, [F: away]\n' +
//   'And lose the name of action.-Soft you now,\n' +
//   'The fair Ophelia.-Nymph, in thy orisons\n' +
//   'Be all my sins remembered';

// sentiment(textExcerpt);



// Re-implement the sentiment analysis with regex-based positive and
// negative word lists. The use of regex to process text-based data is
// extremely powerful. In the previous practice problem, we did not
// count words that were just different forms of the words in the positive
// and negative word lists. For instance, we didn't count "scorns" since
// it isn't an exact match for "scorn".

// let positiveRegex = /\bfortunes?\b|\bdream(s|t|ed)?\b|love(s|d)?\b|respect(s|ed)?\b|\bpatien(ce|t)?\b|\bdevout(ly)?\b|\bnobler?\b|\bresolut(e|ion)?\b/gi;
// let negativeRegex = /\bdie(s|d)?\b|\bheartached?\b|death|despise(s|d)?\b|\bscorn(s|ed)?\b|\bweary\b|\btroubles?\b|\boppress(es|ed|or('s)?)?\b/gi;

// function sentiment(text) {
//   let negatives = text.toLowerCase().match(negativeRegex)
//   let positives = text.toLowerCase().match(positiveRegex)
//   let negativeCount  = negatives.length;
//   let positiveCount = positives.length;
//   let sentimentValue = positiveCount - negativeCount;
//   let sentiment;

//   if (sentimentValue > 1) {
//     sentiment = 'Positive';
//   } else if (sentimentValue < 1) {
//     sentiment = 'Negative';
//   } else {
//     sentient = 'Neutral';
//   }

//   console.log(`There are ${positiveCount} positive words in the text.`);
//   console.log(`Positive sentiments: ${positives.join(', ')}`);
//   console.log()
//   console.log(`There are ${negativeCount} negative words in the text.`);
//   console.log(`Negative sentiments: ${negatives.join(', ')}`);
//   console.log();
//   console.log(`The sentiment of the text is ${sentiment}.`);
// }

// let textExcerpt = 'To be or not to be-that is the question:\n' +
//   'Whether \'tis nobler in the mind to suffer\n' +
//   'The slings and arrows of outrageous fortune,\n' +
//   'Or to take arms against a sea of troubles,\n' +
//   'And, by opposing, end them. To die, to sleep-\n' +
//   'No more-and by a sleep to say we end\n' +
//   'The heartache and the thousand natural shocks\n' +
//   'That flesh is heir to-\'tis a consummation\n' +
//   'Devoutly to be wished. To die, to sleep-\n' +
//   'To sleep, perchance to dream. Aye, there\'s the rub,\n' +
//   'For in that sleep of death what dreams may come,\n' +
//   'When we have shuffled off this mortal coil,\n' +
//   'Must give us pause. There\'s the respect\n' +
//   'That makes calamity of so long life.\n' +
//   'For who would bear the whips and scorns of time,\n' +
//   'Th\' oppressor\'s wrong, the proud man\'s contumely, [F: poor]\n' +
//   'The pangs of despised love, the law’s delay, [F: disprized]\n' +
//   'The insolence of office, and the spurns\n' +
//   'That patient merit of the unworthy takes,\n' +
//   'When he himself might his quietus make\n' +
//   'With a bare bodkin? Who would fardels bear, [F: these Fardels]\n' +
//   'To grunt and sweat under a weary life,\n' +
//   'But that the dread of something after death,\n' +
//   'The undiscovered country from whose bourn\n' +
//   'No traveler returns, puzzles the will\n' +
//   'And makes us rather bear those ills we have\n' +
//   'Than fly to others that we know not of?\n' +
//   'Thus conscience does make cowards of us all,\n' +
//   'And thus the native hue of resolution\n' +
//   'Is sicklied o\'er with the pale cast of thought,\n' +
//   'And enterprises of great pitch and moment, [F: pith]\n' +
//   'With this regard their currents turn awry, [F: away]\n' +
//   'And lose the name of action.-Soft you now,\n' +
//   'The fair Ophelia.-Nymph, in thy orisons\n' +
//   'Be all my sins remembered';

// sentiment(textExcerpt);



// The objective of this practice problem is to build a function that
// parses a string of email data. The function takes an argument that
// contains the data, parses it, then produces two basic statistics about the email:

// The number of email messages found in the string
// The date range of the email messages
// The email messages string has the following characteristics:

// The string contains multiple email messages separated by the delimiter string ##||##.

// Each email message has five parts. The delimiter string #/# separates the parts.

// The five parts are:

// Sender
// Subject
// Date
// Recipient
// Body
// All five parts occur in the sequence shown above.

// function mailCount(emailData) {
//   let emails = emailData.split('##||##');
//   emails = emails.map(email => email.split('#/#'));
//   let dates = emails.map(email => {
//     return new Date(email[2].match(/[0-9]{2}-[0-9]{2}-[0-9]{4}/g)[0])
//   });
//   dates.sort((date1, date2) => date1 - date2);

//   let emailCount = emails.length;
//   let lowerDateString = dates[0].toDateString();
//   let upperDateString = dates[dates.length - 1].toDateString();
//   console.log(`Count of Email: ${emailCount}`);
//   console.log(`Date Range: ${lowerDateString} - ${upperDateString}`);
// }

// var emailData = "From: foo@bar.com#/#\nSubject: Nunc in justo eros. Aliquam.#/#\nDate: 07-27-2016#/#\nTo: foo@bar.com#/#\nEtiam convallis commodo tortor, dapibus auctor dolor semper consequat. Sed lobortis eros nec ante porta, eu placerat sapien interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi consectetur et odio vitae volutpat. Curabitur imperdiet orci metus, et dignissim nisl lacinia non. Aenean volutpat diam in lorem iaculis, sit amet volutpat nibh dictum. Quisque vel vulputate nisi. Nam a vestibulum turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum leo id velit aliquet, at vestibulum ipsum molestie. Cras eu lobortis libero. In rutrum non leo id ultricies. Aliquam in ex ut nibh placerat sollicitudin vitae id magna.##||##\n\nFrom: baz@foo.com#/#\nSubject: Aenean cursus velit non arcu.#/#\nDate: 08-11-2016#/#\nTo: baz@foo.com#/#\nCras ex leo, faucibus id mollis a, dignissim sit amet metus. Sed dui massa, mollis in tristique ut, auctor quis tortor. Donec egestas velit purus, eget laoreet urna venenatis id. Etiam eget ultrices tortor. Duis venenatis leo mi, non porta est molestie at. Nulla lacus nisl, dapibus convallis massa ut, dignissim euismod lacus. Ut vel magna lectus. Morbi sit amet vulputate arcu. Cras non ante arcu. Nam tempor iaculis ipsum eget tincidunt. Praesent imperdiet varius dui, vel egestas ipsum porta in. Sed suscipit massa in neque lobortis congue.##||##\n\nFrom: qux@bar.com#/#\nSubject: Sed hendrerit felis in ex.#/#\nDate: 06-25-2016#/#\nTo: qux@bar.com#/#\nNulla quis est vitae orci tincidunt convallis sit amet ut libero. Sed eu facilisis justo. Maecenas sed ultrices urna. Sed malesuada justo sed magna sodales, eget congue dolor convallis. Vestibulum vel consectetur nunc. Morbi at tincidunt turpis, eget imperdiet orci. Curabitur laoreet ipsum a quam facilisis, eu aliquet lectus viverra. Maecenas ullamcorper rutrum dui, ac aliquet mi pulvinar sit amet.##||##\n\nFrom: quux@foo.com#/#\nSubject: Curabitur tincidunt elit nec risus.#/#\nDate: 07-24-2016#/#\nTo: quux@foo.com#/#\nCurabitur interdum dictum consectetur. Nulla facilisi. Quisque sed tellus consectetur, vestibulum quam sed, lacinia mauris. Nunc risus dolor, feugiat nec erat at, elementum tempor urna. Vivamus facilisis elementum congue. Cras dui libero, vehicula eget porttitor sed, sagittis quis dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam lacinia nulla nisi, vel finibus ligula sodales quis. Maecenas vulputate, leo auctor venenatis pretium, lectus elit eleifend odio, nec molestie ligula ex eget tellus. Nullam a nibh ut enim efficitur elementum. Nunc non elit vitae tortor iaculis ornare in id risus. Integer finibus lobortis lorem, id rutrum elit congue id. In hac habitasse platea dictumst.##||##\n\nFrom: garply@foo.com#/#\nSubject: Integer nec nunc facilisis, ultricies.#/#\nDate: 07-03-2016#/#\nTo: garply@foo.com#/#\nFusce rhoncus purus nisi, vel blandit felis fermentum sed. Vestibulum ultricies rutrum dui nec vehicula. Proin quis semper nulla. Maecenas congue, leo nec feugiat dapibus, dui metus facilisis elit, non finibus leo nisl at est. Donec varius, turpis non pulvinar sodales, nulla nulla posuere ligula, nec eleifend quam metus ut tortor. Sed semper vestibulum mattis. Nullam et ornare eros. Aliquam sed pellentesque dui, ut consequat neque. Integer luctus turpis ultrices, congue erat mattis, vehicula tellus. Pellentesque tincidunt posuere nibh pretium tincidunt. In hac habitasse platea dictumst.";

// mailCount(emailData);