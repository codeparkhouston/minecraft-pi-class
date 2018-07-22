![title cover](/images/covers/3.png)

# Warehouse

When you’re building in Minecraft you can spend ages on a relatively simple structure, such as the walls of your house.  Wouldn’t it be nice if you could save time? Well, you can do that with only a few lines of Python.

In this guide you’ll learn how to use maths operators in Python to create the basic structure for a house. You’ll create a hollow box of block, which you can build upon to create your own ideas with more speed.

You can have loads of fun adapting this code. Come up with your own ideas and try changing the block types or combining it with other bits of code from other exercises.

## Code

```
from mcpi.minecraft import Minecraft
mc = Minecraft.create()
block = 4
air = 0
x = 10
y = 11
z = 12

x2 = x + 10
y2 = y + 5
z2 = z + 8
mc.setBlocks(x, y, z, x2, y2, z2, block)
mc.setBlocks(x + 1, y + 1, z + 1, x2 - 1, y2 - 1, z2 - 1, air)
```

### Import the API and set variables

As usual we import the API and connect to the game. The `block` and `air` variables store block types, which we will use later. Block type 4 is cobblestone.

### Set variables

The `x`, `y` and `z` variables represent the bottom left hand corner of a 3D rectangle, known as a cuboid. The variables `x2`, `y2` and `z2` add to the `x`, `y` and `z` variables and store the new values. The `+` operator is used for addition. Likewise `-` can be used for subtraction.

### Create blocks

Similar to `setBlock()`, the `setBlocks()` function creates blocks in a Minecraft game. It creates a cuboid (3D rectangle) between two points. These points have been set using the variables that we created on lines 5–11. We also provide the block variable to say what type of blocks should be created in the cuboid.

### Create air blocks

We once again call the `setBlocks` function. This time we use addition and subtraction to create a cuboid made of air within the cuboid we created on line 12. The `air` variable sets the cuboid to air, which effectively hollows the original cuboid, leaving a ceiling, floor and walls that are one block thick.

## What you’ve learned

### Maths operators

Addition, subtraction, multiplication and division are all possible in Python. Using them in Python allows you to change the values of variables or arguments. For example we used addition on lines 9–11 to add to the values of `x`, `y` and `z` and store the result in new variables. We also used addition and subtraction to modify the values of arguments on line 13.

### `setBlocks()`

The `setBlocks()` function of the Minecraft Pi API creates a cuboid of blocks between two sets of co-ordinates. These co-ordinates are provided as arguments. In the example we used six variables for these arguments. The seventh argument is the type of block that will be created.

## Extensions

Here are some suggestions to extend your code and make it do different things. Even better if you come up with your own ideas.

* Change the block types of the blocks being placed. A popular block type for the inside is lava (value 11) with an surrounding of glass (value 20).

* Make a swimming pool. Change the values on the maths operators used in the `setBlocks()` function on line 13 so that there is no top roof created.
