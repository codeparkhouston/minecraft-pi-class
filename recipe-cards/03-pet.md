# Create Your Own Pet!
You leveled up your python powers by creating a trail of flowers! Now we will learn how to make your own pet sidekick in all your adventures in Minecraft!
## Code
### Import the API

This is the code that you always use to connect your code to a Minecraft Pi game.

```
import mcpi.minecraft as minecraft
mc = minecraft.Minecraft.create()
```

### Import time

This statement allows us to use time commands in our programs. For example we will use `time.sleep()` in our program which makes our program wait a number of seconds before continuing to the next line.

```
import time
```
### `while` Loop

A `while` loop repeats a section of Python code. The `True` part of the `while` loop means that it will repeat forever or until the user terminates the program.

### Set Block Type
Every block in minecraft is associatd with a number. Number 41 is associated with a gold block.
### Get Player position
The `getPos()` function gives us the current position of the player in `x` `y` and `z` values.
### Change value of x
Now that we know the value of x, we are able going to change its value to set the position of your pet. `x=x+3` places the pet 3 block spaces beside the player.
### Set the block pet
With the changed x value, we are setting a block with the function `mc.setBlock(x, y, z, block)` in the position `x` `y` and `z` to the `block` number.
### Slow the Loop
The `sleep(0.01)` function makes our while loop wait 0.01 seconds before looping again
### Reset the block
The funciton `mc.setBlcok(x,y,z,0)` resets the block that was just placed beside your player to the block value `0` which corresponds to air.

```
import mcpi.minecraft as minecraft
mc = minecraft.Minecraft.create()

import time

while True:
    block = 41
    x, y, z = mc.player.getPos()
    x = x + 3

    mc.setBlock(x, y, z, block)
    time.sleep(0.01)
    mc.setBlock(x, y, z, 0)
```
## Your turn!

- Can you change your pet from the gold block to lava?
- Can you make your pet follow behind you?
- Can you make your pet bigger or smaller by making it 3 blocks tall?
