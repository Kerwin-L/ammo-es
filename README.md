# ammojs-es

ES module version of [Ammo.js](https://github.com/kripken/ammo.js), a direct port of the [Bullet Physics](https://github.com/bulletphysics/bullet3) engine to JavaScript using Emscripten.

## Description

This package provides Ammo.js as both a regular JavaScript module (via CommonJS) and as an ES module, making it easier to integrate with modern JavaScript applications and frameworks that use ES modules.

## Installation

```bash
npm install ammojs-es
```

## Usage

### ES Modules

```javascript
// ES Modules
import Ammo from "ammojs-es";

// Initialize Ammo.js
Ammo().then(function (Ammo) {
  // Create a physics world
  const collisionConfiguration = new Ammo.btDefaultCollisionConfiguration();
  const dispatcher = new Ammo.btCollisionDispatcher(collisionConfiguration);
  const overlappingPairCache = new Ammo.btDbvtBroadphase();
  const solver = new Ammo.btSequentialImpulseConstraintSolver();
  const dynamicsWorld = new Ammo.btDiscreteDynamicsWorld(
    dispatcher,
    overlappingPairCache,
    solver,
    collisionConfiguration
  );

  // Set gravity
  dynamicsWorld.setGravity(new Ammo.btVector3(0, -9.8, 0));

  // Use the physics world...

  // Clean up
  Ammo.destroy(dynamicsWorld);
  Ammo.destroy(solver);
  Ammo.destroy(overlappingPairCache);
  Ammo.destroy(dispatcher);
  Ammo.destroy(collisionConfiguration);
});
```

### CommonJS

```javascript
const Ammo = require("ammojs-es");

// Same usage as above
Ammo().then(function (Ammo) {
  // Your physics code here
});
```

## API

This library provides the same API as the original Ammo.js. For detailed information, refer to:

- [Bullet Physics Manual](https://github.com/bulletphysics/bullet3/tree/master/docs)
- [Ammo.js Wiki](https://github.com/kripken/ammo.js/wiki)

## License

This project is licensed under the zlib license - see below for details:

```
Bullet Continuous Collision Detection and Physics Library
http://bulletphysics.org

This software is provided 'as-is', without any express or implied warranty.
In no event will the authors be held liable for any damages arising from the use of this software.
Permission is granted to anyone to use this software for any purpose,
including commercial applications, and to alter it and redistribute it freely,
subject to the following restrictions:

1. The origin of this software must not be misrepresented; you must not claim that you wrote the original software. If you use this software in a product, an acknowledgment in the product documentation would be appreciated but is not required.
2. Altered source versions must be plainly marked as such, and must not be misrepresented as being the original software.
3. This notice may not be removed or altered from any source distribution.
```

## Credits

- Original Bullet Physics library by Erwin Coumans and contributors
- Ammo.js port by Alon Zakai and contributors
- ES module packaging by RonL
