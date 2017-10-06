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