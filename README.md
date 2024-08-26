# Enigma?
The Enigma machine was a machine used by Germany, especially during WWII, to encode and decode messages quickly and securely. As encoding methods tend to be, it was considered uncrackable up until the point that it was cracked. In this case, the cracking was done by Alan Turing and a truly gargantuan team of codebreakers, who did their work at Bletchley Park in the UK. The cracking of Enigma was vital to the war, granting the Allies access to information on things such as planned attacks.

The crux of the machine is the three rotating wheels. Each wheel contains 26 unique paths that it can send an inputted signal (representing a letter) through, changing it into a different symbol. The output is random in that it has no logic behind it, as each path could make any letter any other letter, but not random in that it can be replicated (and therefore decoded by a recipient). To make it even less predictable, the wheels would rotate after each input, meaning the cipher itself was constantly shifting through multiple different points of entropy. The result is seemingly chaotic, where no two inputs of "a" will take the same path, making it one of the most difficult ciphers to crack at the point it was created.

There are also a number of other parts of the Enigma machine, including some which changed over time. If you want to know more about those, look it up or something.

# enigma.js
enigma.js has a smattering of code that effectively lays out the encoding/decoding process of an Enigma machine. It doesn't *work*, per se, as there's no way to provide inputs or display outputs; it's just a framework that can be used in other projects.

# esprigma.js
esprigma.js is enigma.js applied, specifically within the [Sprig]([url](https://sprig.hackclub.com/)) game creator. It includes a sort of tutorial where the user encodes and decodes a few messages, gradually introducing the mechanics of the Enigma machine. A link to the game on the Sprig website will be made available once it has been processed and accepted.
