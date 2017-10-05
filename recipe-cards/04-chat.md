# Chat

Minecraft Pi Edition has many hidden features that you can only access using Python code. One of those hidden features is the chat feature.

In this guide you’ll learn how to use strings in Python to create a chat program. If you’re playing with other players on multi-player, this program will be very useful for communicating.

This program works best if you’re playing over a network with other people. Can you work out how to add a user-name to the chat?

## Code

### Import the API

As usual we import the API and create a connection to the game.

```
import mcpi.minecraft as minecraft
mc = minecraft.Minecraft.create()
```

### Get the user input

The `raw_input()` method takes user input from the command line. The string (text) inside the brackets is printed to the command line and whatever the user inputs is returned and stored in the `chatMsg` variable. When programming, a “string” is the correct term for text.

```
chatMsg = raw_input(”Enter a message: ”)
```

### While loop with a condition

Once again we’re using a while loop to repeat some code. The difference here is that the loop will only repeat if the value of the `chatMsg` variable is not equal to `”/exit”`. If the value of `chatMsg` is equal to `”/exit”`, the loop will no longer repeat and the program will finish.

```
while chatMsg != ”/exit”:
```

### Post the message

The `postToChat()` function displays a string (text) on the Minecraft Pi in-game chat. In this case we’re displaying the value of `chatMsg`.

```
    mc.postToChat(chatMsg)
```

### Get another user message

At the end of the loop we get the next chat message from the user and store it in the `chatMsg` variable. The code on line 3 is outside the loop therefore we need to write it again within the loop in order for our program to work properly.

```
    chatMsg = raw_input(”Enter a message: ”)
```

## What you’ve learned

### `raw_input()`

The `raw_input()` function in Python allows the user to input strings (text). The string is then stored in a variable and can be reused in the rest of the program. For example in our program we created a variable called `chatMsg`.

### Strings

Strings are a data type in Python. To you they’re the same thing as text. You can identify a string by the speech marks that surround it. For example we have used a string, `”Enter a message: ”` on lines 3 and 6 and `”/exit”` on line 4. The user input of `chatMsg` is also stored as a string.

### Not equal to (`!=`)

The not equal to comparator checks that two values are not the same. As long as the `chatMsg` variable is not equal to `”/exit”`, the `while` loop on line 4 will repeat. If the `chatMsg` variable is equal to `”/exit”`, the loop will stop.

### `postToChat()`

The `postToChat()` function takes a string as an argument and displays it on Minecraft’s chat.

## Extensions

Here are some suggestions to extend your code and make it do different things. Even better if you come up with your own ideas.

* Add a user name to the chat. Add an extra line before line 3 that uses `raw_input()` to ask the user’s name and store it in a `userName` variable. Then change `postToChat()` to `mc.postToChat(userName + ”: ” + chatMsg)`

----

![Raspberry Pi and the Raspberry Pi logo are trademarks of the Raspberry Pi Foundation](../images/RPi-Logo-Reg-SCREEN-199x250.png)

For further exercises check out Python Programming with Minecraft Pi, the book available as a free pdf from [www.arghbox.wordpress.com](https://arghbox.wordpress.com/)

Raspberry Pi and the Raspberry Pi logo are trademarks of the Raspberry Pi Foundation [http://www.raspberrypi.org](http://www.raspberrypi.org).

Minecraft is a registered trademark of Mojang.

These resources are copyright Craig Richardson and licensed under a [Creative Commons BY-NC-SA License](https://creativecommons.org/licenses/by-nc-sa/4.0/).
