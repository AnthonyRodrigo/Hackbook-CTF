# OSINT and social network weaknesses

You suspect that your girlfriend Alexia is cheating on you. You would like to know if it is true. You find a strange social network called Hackbook. You decide to create an account and to try to find some information about Alexia...

For the 4 main challenges, you need to find the email and password of each account to access the flag. You should do the challenges in the following order : 1, 2, 3 then 4. They are **all independent except 3rd one** (you need to do at least one of the others).
**_We advise you to respect the order._**
Throughout the challenge, a help bubble will give you clues.

For the 2 bonus challenges, there is no order. You can do them whenever you want, from any account.

---

### :triangular_flag_on_post: Challenge Informations

| **Title**                                | Hackbook-1 : Unsecure API (Léa's account)                                                                               |
| ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **Category**                             | Web, OSINT                                                                                                              |
| **Description**                          | `Léa is an influencer for cats. You have to log in to Léa's account. Doing OSINT on Lea's account could save you time.` |
| **Author**                               | Anthony, Justin, Tom                                                                                                    |
| **Difficulty (/10)**                     | 3/10                                                                                                                    |
| **Is Remote**                            | Yes                                                                                                                     |
| **Has attachments**                      | No                                                                                                                      |
| **Estimated solve time**                 | 30min +/- 15 min                                                                                                        |
| **Solve instructions**                   | OSINT + Hashcat. Details in `solution/chal1.md`                                                                         |
| **Flag**                                 | **`THCon23{H$shedP$ssLe$k&Cr$cked###gribouille31}`**                                                                    |
| **Dependencies with other challenges ?** | No                                                                                                                      |

| **Title**                                | Hackbook-2 : A common web vulnerability (Kevin's account)                                                                            |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| **Category**                             | Web, OSINT                                                                                                                           |
| **Description**                          | `Kevin is a geek not so smart. Challenge illustrating a well-known vulnerability on the web. You have to log in to Kevin's account.` |
| **Author**                               | Anthony, Justin, Tom                                                                                                                 |
| **Difficulty (/10)**                     | 2/10                                                                                                                                 |
| **Is Remote**                            | Yes                                                                                                                                  |
| **Has attachments**                      | No                                                                                                                                   |
| **Estimated solve time**                 | 25 minutes +/-10 min                                                                                                                 |
| **Solve instructions**                   | Find vulnerable website + classic SQL injection. Details in `solution/chal2.md`                                                      |
| **Flag**                                 | **`THCon23{UnsecureBIog+E$syInjectI0n###lock_and_key}`**                                                                             |
| **Dependencies with other challenges ?** | No                                                                                                                                   |

| **Title**                                | Hackbook-3 : OSINT Only (Alexia's account)                                                                                                                  |
| ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Category**                             | OSINT                                                                                                                                                       |
| **Description**                          | `You are approaching the truth. Now it's time to spy on your girlfriend. Challenges to become familiar with OSINT. You have to log in to Alexia's account.` |
| **Author**                               | Anthony, Justin, Tom                                                                                                                                        |
| **Difficulty (/10)**                     | 3/10                                                                                                                                                        |
| **Is Remote**                            | Yes                                                                                                                                                         |
| **Has attachments**                      | No                                                                                                                                                          |
| **Estimated solve time**                 | 25 minutes +/-10 min                                                                                                                                        |
| **Solve instructions**                   | Reading and deduction. Details in `solution/chal3.md`                                                                                                       |
| **Flag**                                 | **`THCon23{^NeverUseTheS$meP$ssw0rd!###j@dOreN3tfl1x}`**                                                                                                    |
| **Dependencies with other challenges ?** | You must do challenge 1 or 2 before                                                                                                                         |

| **Title**                                | Hackbook-4 : Very sensitive application secret (Another account)                                                                 |
| ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| **Category**                             | Web, OSINT                                                                                                                       |
| **Description**                          | `You'll to bypass the authentication system.`                                                                                    |
| **Author**                               | Anthony, Justin, Tom                                                                                                             |
| **Difficulty (/10)**                     | 6/10                                                                                                                             |
| **Is Remote**                            | Yes                                                                                                                              |
| **Has attachments**                      | No                                                                                                                               |
| **Estimated solve time**                 | 1h-1h30                                                                                                                          |
| **Solve instructions**                   | OSINT + JWT/JWE. Details in `solution/chal4.md` and `solution/chal4.py`                                                          |
| **Flag**                                 | **`THCon23{T$ke-C$re(0f/Your^Secret}`**                                                                                          |
| **Dependencies with other challenges ?** | No, but doing 1,2 and 3 before 4 could help you.<br> **At the end of the third challenge, you'll get a hint to begin this one.** |

_The following challenges are bonus challenges. They are not mandatory to solve the main challenges._

| **Title**                                | Hackbook-bonus 1 : Not a good place to store a secret...                     |
| ---------------------------------------- | ---------------------------------------------------------------------------- |
| **Category**                             | Web                                                                          |
| **Description**                          | `You'll have to read a secret which is supposed to stay hidden.`             |
| **Author**                               | Anthony, Justin, Tom                                                         |
| **Difficulty (/10)**                     | 1/10                                                                         |
| **Is Remote**                            | Yes                                                                          |
| **Has attachments**                      | No                                                                           |
| **Estimated solve time**                 | 10 minutes +/- your luck                                                     |
| **Solve instructions**                   | Use Web Inspector and have some good luck. Details in solution/chalBonus1.md |
| **Flag**                                 | **`THCon23{^NeverHide1nform4tionInCl13ntSide!}`**                            |
| **Dependencies with other challenges ?** | No                                                                           |

| **Title**                                | Hackbook-bonus 2 : A good place to store a secret !                                                                      |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| **Category**                             | Steganography                                                                                                            |
| **Description**                          | `Don't trust the images on the social network... a few could hide some secret. Maybe not the ones you are suspecting...` |
| **Author**                               | Anthony, Justin, Tom                                                                                                     |
| **Difficulty (/10)**                     | 5/10                                                                                                                     |
| **Is Remote**                            | Yes                                                                                                                      |
| **Has attachments**                      | No                                                                                                                       |
| **Estimated solve time**                 | 1h +/30min                                                                                                               |
| **Solve instructions**                   | Tricks to download an image + tool zsteg . Details in solution/chalBonus2.md                                             |
| **Flag**                                 | **`THCON23{^R4ND0MST3GANOGRAPHY}`**                                                                                      |
| **Dependencies with other challenges ?** | No                                                                                                                       |
