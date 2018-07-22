<div class="intro">

![title cover](/images/covers/2.png)

# Pet

You leveled up your Python powers by creating a trail of flowers! Now we will learn how to make your own pet sidekick in all your adventures in Minecraft!

</div>

<div class="recipe-code">

# Code

<div class="recipe-code-section">

### Import the API

As usual we import the API and connect to the game.  We also import `time`.

```py
from mcpi.minecraft import Minecraft
mc = Minecraft.create()
import time
```

</div>
<div class="recipe-code-section">

### Start the loop and get the player’s position

As we need to repeat the code constantly we use an infinite `while` loop. On lines 6–9 we find out the player’s position and store it in the `x`, `y` and `z` variables.

```py
while True:
    pos = mc.player.getPos()
    x = pos.x
    y = pos.y
    z = pos.z
```

</div>
<div class="recipe-code-section">

### Set the block type

Here, we set our block type for our pet.

```py
    block = 41
```

</div>
<div class="recipe-code-section">

### Place the pet block closeby

To see our pet beside us, we set it close to our current position.  Before, the flower block was being placed in our `x`, `y` and `z`.  Now, we are placing the block to our side.  The `+` operator is used for addition. Likewise `-` can be used for subtraction.

```py
    mc.setBlock(x + 3, y, z, block)
```

</div>
<div class="recipe-code-section">

### Sleep

Just like in the flower path code, we `sleep`.

```py
    time.sleep(0.01)
```

</div>
<div class="recipe-code-section">

### Remove the trail

To make it look like our pet moves with us, we need to somehow remove the pet block from where it has been.  We can use an air block to cover up our pet's trail.

```py
    mc.setBlock(x + 3, y, z, 0)
```

</div>

</div>

<div class="summary">
<div class="what-youve-learned">

## What you’ve learned

### Math operators

Addition, subtraction, multiplication and division are all possible in Python. Using them in Python allows you to change the values of variables or arguments. For example we used addition on lines 10 and 12 to add to the values of `x`.

</div>

<div class="extension">

## Your Turn!

Here are some suggestions to extend your code and make it do different things. Try anything you think of too!

- Can you change your pet from the gold block to lava?
- Can you make your pet follow behind you?
- Can you make your pet bigger or smaller by making it 3 blocks tall?

</div>
</div>